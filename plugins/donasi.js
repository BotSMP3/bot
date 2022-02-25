let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Indosat [6282171240131]
│ • Gopay [6282171240131]
│ • Saweria [https://saweria.co/botstyle]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6282171240131
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
