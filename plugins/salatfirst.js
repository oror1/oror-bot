export async function before(m) {
    this.autosholat = this.autosholat ? this.autosholat : {};
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender;
    let name = await this.getName(who);
    let id = m.chat;
    if (id in this.autosholat) {
        return false;
    }
    let jadwalSholat = {
        الفجر: "04:52",
        الضحى: "06:25",
        الظهر: "12:58",
        العصر: "16:34",
        المغرب: "19:31",
        العشاء: "20:53"
    };
    const date = new Date(new Date().toLocaleString("en-US", {
      timeZone:"Africa/Egypt"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
        if (timeNow === waktu) {
            let caption = `السلام  عليكم   *${name}*,\nحان موعد صلاة *${sholat}* اذهب و توضأ بسرعة و قم لصلاتك ♥ ولا تنسانا من الدعاء.\n\n*${waktu}*\n_هذا توقيت الصلاة في مصر وما جاورها_`;
            this.autosholat[id] = [
                this.reply(m.chat, caption, null),
                setTimeout(() => {
                    delete this.autosholat[id];
                }, 57000)
            ];
        }
    }
}