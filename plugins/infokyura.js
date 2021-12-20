let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *Informasi Owner* ´ˎ˗
│ ✎ Nama : Udin 
│    Kelas : 12
│    Umur : 10
│    Asal : Indonesia 
│    Status : gatau mw isi apa anj
│    Suka : Jepang, Tante-Tante, Kamu<3
│ ✎ _Official Grup_ :
│    https://chat.whatsapp.com/BTwX27VABko0eBRLmFnAL9
│ ✎ _WhatsApp_ :
│    http://wa.me/62895335400834
╰‿‿‿‿‿‿‿‿
`.trim(), m)
}

handler.help = ['infoowner']
handler.tags = ['main']
handler.command = /^(infoowner)$/i

handler.exp = 150

module.exports = handler
