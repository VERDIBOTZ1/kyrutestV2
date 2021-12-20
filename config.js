// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot

gc1 = ''
gc2 = ''
gc3 = ''
global.linkGC = ['https://chat.whatsapp.com/BTwX27VABko0eBRLmFnAL9'] // ganti jadi group lu
global.owner = ['62895335400834'] // Put your number here //owner eval
global.kontak = ['62895335400834'] //Ketika ada yang ngetik #owner
global.mods = ['62895335400834'] // Want some help?
global.prems = ['6289527393988'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  bg: 'http://bochil.ddns.net',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://api.xteam.xyz': '057f32b5931c3bce',
  'https://api.lolhuman.xyz': 'RFK-Rey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'RFK-Rey'
zekskey = 'apivinz'
xteamkey = '057f32b5931c3bce'
//xteam     KYURABOT
namaig = 'bit.ly/instagramasepp'
namagithub = 'bit.ly/githupasep21'
kasihcaption = `Nihh Bwank...`
namakontak1 = 'Gamtenk'
namakontak2 = 'Cantik'

//kasihcaption = `Nih Kak`

// Sticker WM
global.packname = '𝙏 𝙍𝙚𝙭 𝘽𝙤𝙩' // ganti aja
global.author = '𝙏 𝙍𝙚𝙭 𝘽𝙤𝙩' // ganti aja

//yyy
bc = '𝙏 𝙍𝙚𝙭 𝘽𝙤𝙩' //RFK Broadcast
footer = '\n©𝙏 𝙍𝙚𝙭'
namabot = '𝙏 𝙍𝙚𝙭 𝘽𝙤𝙩'
namalu = 'Udin'


// 
wait = 'Sambil Kamu...Nungguinn\nNonton..Bokep Dulu yaa\n Xnxx.com'
global.wait = 'Tungguu.........lgi diproses'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = 'Waduh error Asuuu.......'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 100 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
