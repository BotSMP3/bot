const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `contoh:\n${usedPrefix + command} beni_230`

  let res = await fetch(global.API('zekais', '/igs', { username: args[0] }))
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (json.status != 200) throw json
  conn.sendFile(m.chat, json.data.profilehd, 'eror.jpg', `*Nama:* ${json.data.fullname}\n*Bio:* ${json.data.bio}\n*Followers:* ${json.data.follower}\n*Following:* ${json.data.following}\n*Posts:* ${json.data.timeline}\n*Private:* ${json.data.private ? 'Ya' : 'Tidak'}\n\nhttp://instagram.com/stikerinbot`, m, false, { thumbnail: await (await fetch(json.data.profilehd)).buffer() })
}
handler.help = ['igstalk <username>']
handler.tags = ['downloader']
handler.command = /^(igstalk)$/i
handler.limit = true
module.exports = handler
