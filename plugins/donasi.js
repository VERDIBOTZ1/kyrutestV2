let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
╭─˗ˏˋ*Donasi • Emoney - Pulsa*
│ 𒆜 Pulsa : 082262278762
│ 𒆜 Bila Perlu hubungi owner 
╰‿‿‿‿‿‿‿‿‿‿‿‿‿‿
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
