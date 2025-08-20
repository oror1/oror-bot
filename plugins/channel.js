let handler = async (m, { conn }) => {

m.reply(`*جروبي على الواتساب:*\n
https://chat.whatsapp.com/EFJkTr4lE6LJBF6ZPwQTO6?mode=ac_t
*انضم هناك♥*`)
}
handler.help = ['channel']
handler.tags = ['infobot']
handler.command = /^(channel)$/i

export default handler;
