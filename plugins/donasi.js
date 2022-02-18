let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Indosat [082124137452]
│ • Gopay [082124137452]
│ • Saweria [https://saweria.co/botstyle]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6282124137452
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
