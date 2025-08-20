import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن مطور البوت 」*

*Number :*\nwa.me/201021520331
*tiktok:*\nwww.tiktok.com/@oror_official

*youtube:*\nyoutube.com/@ororelmagal

*facebook page:*\nwww.facebook.com/ahmed.mustafa.oror

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
