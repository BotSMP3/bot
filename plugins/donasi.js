let handler = async m => m.reply(`

╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285846050774
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
