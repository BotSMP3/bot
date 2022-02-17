let handler = async m => m.reply(`
╭─「 Donasi 」
│ • TELKOMSEL [0821-2413-7452]
│ • Gopay [0821-2413-7452]
│ • Saweria [https://saweria.co/botstyle]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/62821-2413-7452
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
