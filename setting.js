const fs = require('fs')
const chalk = require('chalk')

global.baileys = require('@adiwajshing/baileys')
global.usePairingCode = true

global.ownername = 'Cpm_Jhon'
global.owner = ['6285894955362'] 
global.versionbot = "V1.0.1"
global.creator = "6285894955362"
global.nomorbot = "6285894955362"
global.botname = 'Cpm_Jhon AI'
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'JhonSession'
global.linkgc = 'https://chat.whatsapp.com/GK1QX9s1YK8EmzHC4wEUBJ'
global.thumbnail = 'https://pomf2.lain.la/f/0wgnpckz.jpg'
global.foter1 = 'SIMPLE WHATSAPP BOT Cpm_JhonBOTZz'
global.urlwa = "https://wa.me/6285894955362"
global.foter2 = 'SIMPLE WHATSAPP BOT Cpm_JhonBOTZz'
global.autobio = true // AutoBio
global.autoread = false // ReadChat
global.Ghost = '`'
global.packname = 'Sticker By'
global.author = 'galeri_car_cpm8048'

global.domain = ''
global.apiPlta = ''
global.apiPltc = ''
global.eggs = '15' 
global.location = '1' 



//=================================================//
global.onlypc = false
global.onlygc = false


//limit & balance
global.limitawal = 10
global.balanceawal = 10000

global.wlcm = []
global.wlcmm = []

global.delaypushkontak = 5500
global.delayjpm = 5500

// DATABASE GAME
global.family100 = {};
global.suit = {};
global.tictactoe = {};

//mess
global.mess = {
    premium: ('🌊 Kayanya Kamu Harus Beli Premium Dulu Atau Minta Premium langsung Ke Owner'),
    done: ('🐣 Done kak'),
    owner: ('🎀 *Loh Kamu Siapa? Khusus Owner* 🤴'),
    wait: ('🐣 *Tunggu Sebentar*'),
    group: '🔖 *Fitur Ini Khusus Grup*',
    admin: '🔖 *Fitur Ini Khusus Admin*',
    botAdmin: '🐥 *Jadiin Bot Admin Terlebih Dahulu Donggg,Buat Mengakses Fiturnya*',
    linkvalid: '🌐 *Kayanya Link Kamu Dalah Deh*', 
    error: '😿 *Kayanya Ada Yang Erorr Nih*',
    limit: `Yah Limit kamuu habis nih,Cek limit mu sekarang Dengan Cara Ketik .limit`,
    regis: (`🐣Hayoloooo\nKamu Belum Terdaftar Kedalam Database Bot,Silahkan Daftar Telebih Dahulu Dengan Cara\n\n.Daftar`),
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})