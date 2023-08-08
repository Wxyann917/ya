
"use strict";
const { downloadContentFromMessage } = require("baileys-md");
const Baileys = require("baileys-md");
const { color, bgcolor } = require("../lib/color");
const {
  serialize,
  getBuffer,
  fetchJson,
  fetchText,
  getRandom,
  getGroupAdmins,
  runtime,
  sleep,
  generateProfilePicture,
  makeid,
  removeEmojis,
  calculate_age,
  bytesToSize,
  checkBandwidth,
  reSize,
  cekNumber,
} = require("../lib/myfunc");
const { webp2mp4File } = require("../lib/convert");
const { pinterest } = require("../lib/pinterest");
const {
  isLimit,
  limitAdd,
  getLimit,
  giveLimit,
  addBalance,
  kurangBalance,
  getBalance,
  isGame,
  gameAdd,
  givegame,
  cekGLimit,
} = require("../lib/limit");
const { isTicTacToe, getPosTic } = require("../lib/tictactoe");
const blnc = require("../db/balance");
const { telesticker } = require("../lib/telestick");
const { fbdl } = require("../lib/facebook");
const { mediafire } = require("../lib/mediafire");
const { Musikmatch } = require("../lib/lirik");
const { stalkff, stalkml } = require("../lib/stalker");
const {
  addPlayGame,
  getJawabanGame,
  isPlayGame,
  cekWaktuGame,
  getGamePosi,
} = require("../lib/game");
const tictac = require("../lib/tictac");
const tictacsolo = require("../lib/tictactoe-solo");
const _prem = require("../lib/premium");
const msgFilter = require("../lib/antispam");
const TextPro = require("../lib/textpro");
const { writeExif } = require("../lib/exif2");
const { yta, ytv } = require("../lib/ytdl");
const { ytMp4, ytMp3, ytPlay, ytPlayVid } = require("../lib/ytdl-core");
const { TelegraPh, UploadFileUgu, AnonFiles } = require("../lib/uploader");
const { goLens } = require("../lib/googlens");
const { igProfile, insta, igstory } = require("../lib/instagram");
const afk = require("../lib/afk");
const { allsurah, getSurat } = require("../lib/alquran");
const { spotifydl } = require("../lib/spotify");

const fs = require("fs");
const cheerio = require("cheerio");
const moment = require("moment-timezone");
const Dym = require("didyoumean");
const util = require("util");
const qs = require("querystring");
const base64 = require("base64-img");
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const acrcloud = require("acrcloud");
const axios = require("axios");
const yts = require("yt-search");
const PhoneNumber = require("awesome-phonenumber");
const speed = require("performance-now");
const { SoundCloud } = require("scdl-core");
const translate = require("@vitalets/google-translate-api");
const request = require("request");
const ms = require("parse-ms");
const toMs = require("ms");

// Exif
const Exif = require("../lib/exif");
const exif = new Exif();

// DB Game
let tictactoe = [];
let ttcsolo = [];
let tebakgambar = [];
let kuis = [];
let tebaklagu = [];
let akinator = {};
let casino = [];
let bet = []

// Akses Eval
const uss = "Irfan";
const pass = "Slebew";

// Database
let pendaftar = JSON.parse(fs.readFileSync("./database/user.json"));
let mess = JSON.parse(fs.readFileSync("./message/response.json"));
let premium = JSON.parse(fs.readFileSync("./database/premium.json"));
let balance = JSON.parse(fs.readFileSync("./database/balance.json"));
let limit = JSON.parse(fs.readFileSync("./database/limit.json"));
let glimit = JSON.parse(fs.readFileSync("./database/glimit.json"));
let antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
let listCmd = JSON.parse(fs.readFileSync("./database/listcmd.json"));
let _cmd = JSON.parse(fs.readFileSync("./database/command.json"));
let _cmdUser = JSON.parse(fs.readFileSync("./database/commandUser.json"));
let modsNumber = JSON.parse(fs.readFileSync("./database/modsNumber.json"));
let anonymous = JSON.parse(fs.readFileSync("./database/anonymous.json"));
let balanceDB = JSON.parse(fs.readFileSync("./db/balance.json"));
let data_kuis = JSON.parse(fs.readFileSync("./database/kuis.json"));
let data_tgambar = JSON.parse(fs.readFileSync("./database/tebakgambar.json"));
let secreto = JSON.parse(fs.readFileSync("./database/secreto_balas.json"));
let chat_with = JSON.parse(fs.readFileSync("./database/chatwith.json"));
let ngl = JSON.parse(fs.readFileSync("./database/ngl.json"));
let galery_menfess = JSON.parse(
  fs.readFileSync("./database/galery_menfess.json")
);
let menfess_limit = JSON.parse(
  fs.readFileSync("./database/limit_menfess.json")
);
let tag_menfess = [
  "#boy",
  "#girl",
  "#ask",
  "#story",
  "#random",
  "#jokes",
  "#curhat",
  "#kutipan",
];
let anonteks = {
  stop: `/stop - _untuk menghentikan sesi chat_`,
  skip: `/skip - _untuk mengganti sesi chat_`,
  start: `/start - _untuk memulai sesi chat_`,
  sendprofile: `/sendprofile - _untuk mengirim informasi kontak anda_`
}

moment.tz.setDefault("Asia/Jakarta").locale("id");

// Auto Reset Limit
setInterval(function () {
  var jamna = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Jakarta",
  });
  var hasilnes = jamna.split(":")[0] < 10 ? "0" + jamna : jamna;
  // hasilnes Kalo mau Jam 00 jadi 12:00:00 AM
  if (hasilnes === "12:00:00 AM") {
    limit.splice("reset");
    fs.writeFileSync("./database/limit.json", JSON.stringify(limit));
    glimit.splice("reset");
    fs.writeFileSync("./database/glimit.json", JSON.stringify(glimit));
    console.log("Limit Sudah Di Reset!");
    galery_menfess.splice("reset");
    fs.writeFileSync(
      "./database/galery_menfess.json",
      JSON.stringify(galery_menfess, null, 2)
    );
    console.log("Limit menfess sudahh di reset!");
    var new_array = [];
    for (let i of menfess_limit) {
      var obj = {
        id: i.id,
        menfess: 5,
        chat_with: 5,
        buyMenfess: i.buyMenfess,
        buyWith: i.buyWith,
      };
      new_array.push(obj);
    }
    menfess_limit = new_array;
    fs.writeFileSync(
      "./database/limit_menfess.json",
      JSON.stringify(menfess_limit, null, 2)
    );
  }
}, 1000);

module.exports = async (conn, msg, m, setting, store, welcome, _afk) => {
  try {
    let { ownerNumber, botName, lolkey, xteamkey, gamewaktu, limitCount, packname, author, id_group } = setting;
    let { allmenu } = require("./help");
    if (msg.mentioned && msg.mentioned.includes("")) {
      Object.keys(msg.mentioned).forEach((i) => {
        if (msg.mentioned[i] == "") {
          msg.mentioned.splice(i, 1);
        }
      });
    }
    const { type, isQuotedMsg, quotedMsg, now, fromMe, mentioned, isBaileys } = msg;
    if (msg.isBaileys) return;
    const jam = moment.tz("asia/jakarta").format("HH:mm:ss");
    let dt = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a");
    const ucapanWaktu = "Selamat " + dt.charAt(0).toUpperCase() + dt.slice(1);
    const content = JSON.stringify(msg.message);
    const from = msg.key.remoteJid;
    var chats = type === "conversation" && msg.message.conversation ? msg.message.conversation : type === "imageMessage" && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : type === "videoMessage" && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : type === "extendedTextMessage" && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : type === "buttonsResponseMessage" && quotedMsg.fromMe && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : type === "templateButtonReplyMessage" && quotedMsg.fromMe && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : type === "messageContextInfo" ? msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId : type == "listResponseMessage" && quotedMsg.fromMe && msg.message.listResponseMessage.singleSelectReply.selectedRowId ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : "";
    if (chats == undefined) {
      chats = "";
    }
    var dataGroup = type === "buttonsResponseMessage" ? msg.message.buttonsResponseMessage.selectedButtonId : "";
    var dataPrivate = type === "messageContextInfo" ? msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId : "";
    const isButton = dataGroup.length !== 0 ? dataGroup : dataPrivate;
    var dataListG = type === "listResponseMessage" ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : "";
    var dataList = type === "messageContextInfo" ? msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId : "";
    const isListMessage = dataListG.length !== 0 ? dataListG : dataList;
    const toJSON = (j) => JSON.stringify(j, null, "\t");

    if (conn.multi) {
      var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats)
        ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi)
        : "#";
    } else {
      if (conn.nopref) {
        prefix = "";
      } else {
        prefix = conn.prefa;
      }
    }

    const args = chats.split(" ");
    const command = chats.toLowerCase().split(" ")[0] || "";
    const q = chats.slice(command.length + 1, chats.length);
    const isCmd = command.startsWith(prefix);
    const isGroup = msg.key.remoteJid.endsWith("@g.us");
    let sender = isGroup ? msg.key.participant ? msg.key.participant : msg.participant : msg.key.remoteJid;
    const isOwner = ownerNumber.includes(sender);
    const isMods = isOwner ? true : modsNumber.includes(sender) ? true : false;
    const pushname = msg.pushName;
    const body = chats.startsWith(prefix) ? chats : "";
    const botNumber = conn.user.id.split(":")[0] + "@s.whatsapp.net";
    const groupMetadata = isGroup ? await conn.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.id : "";
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const groupOwner = isGroup ? groupMetadata.owner ? groupMetadata.owner : "" : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender);
    const isUser = pendaftar.includes(sender);
    const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium);
    const isAntiLink = antilink.includes(from) ? true : false;
    const isAfkOn = afk.checkAfkUser(sender, _afk);

    const gcounti = setting.gcount;
    const gcount = isPremium ? gcounti.prem : gcounti.user;

    const mentionByTag = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : [];
    const mentionByReply = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : "";
    const mention = typeof mentionByTag == "string" ? [mentionByTag] : mentionByTag;
    mention != undefined ? mention.push(mentionByReply) : [];
    const mentionUser = mention != undefined ? mention.filter((n) => n) : [];

    // Various Function
    function isUrl(url) {
      return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
    }
    function isEmoji(emo) {
      let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
      let regexEmoji = new RegExp(emoji_ranges, 'gi');
      return emo.match(regexEmoji)
    }
    function jsonformat(string) {
      return JSON.stringify(string, null, 2)
    }
    function monospace(string) {
      return '```' + string + '```'
    }
    function bold(string) {
      return '*' + string + '*'
    }
    function italic(string) {
      return '_' + string + '_'
    }
    function randomNomor(min, max = null) {
      if (max !== null) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      } else {
        return Math.floor(Math.random() * min) + 1
      }
    }
    function pickRandom(arr) {
      return arr[Math.floor(Math.random() * arr.length)]
    }
    function mentions(teks, mems = [], id) {
      if (id == null || id == undefined || id == false) {
        return conn.sendMessage(from, { text: teks, mentions: mems })
      } else {
        return conn.sendMessage(from, { text: teks, mentions: mems }, { quoted: msg })
      }
    }
    function nebal(angka) {
      return Math.floor(angka)
    }
    function parseMention(text = '') {
      return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
    }
    const reply = (teks) => {
      return conn.sendMessage(from, { text: teks, mentions: parseMention(teks) }, { quoted: msg })
    }
    const sendMess = (id, teks) => {
      return conn.sendMessage(id, { text: teks })
    }
    const getCase = (cases) => {
      return "case prefix + "+`'${cases}'`+fs.readFileSync(__filename).toString().split('case prefix+\''+cases+'\'')[1].split("break")[0]+"break"
    }
    function formatDate(n, locale = 'id') {
      let d = new Date(n)
      return d.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'})
    }
    function toRupiah(angka) {
      var balancenyeini = '';
      var angkarev = angka.toString().split('').reverse().join('');
      for (var i = 0; i < angkarev.length; i++)
      if (i % 3 == 0) balancenyeini += angkarev.substr(i, 3) + '.';
      return '' + balancenyeini.split('', balancenyeini.length - 1).reverse().join('');
    }
    async function getMembers(id) {
      var metadata = await conn.groupMetadata(id)
      var data = []
      metadata.participants.map(i => data.push(i.id))
      return data
    }
    function getCountry(options) {
      const dataCountry = JSON.parse(fs.readFileSync("./database/country.json"));
      let countryResult = null;
      if (options.code) {
        Object.keys(dataCountry).forEach((i) => {
          if (dataCountry[i].code === options.code) {
            countryResult = dataCountry[i];
          }
        });
      } else if (options.unicode) {
        Object.keys(dataCountry).forEach((i) => {
          if (dataCountry[i].unicode === options.unicode) {
            countryResult = dataCountry[i];
          }
        });
      } else if (options.name) {
        Object.keys(dataCountry).forEach((i) => {
          if (dataCountry[i].name === options.name) {
            countryResult = dataCountry[i];
          }
        });
      } else if (options.emoji) {
        Object.keys(dataCountry).forEach((i) => {
          if (dataCountry[i].emoji === options.emoji) {
            countryResult = dataCountry[i];
          }
        });
      } else if (options.dialcode) {
        Object.keys(dataCountry).forEach((i) => {
          if (dataCountry[i].dialcode === options.dialcode) {
            countryResult = dataCountry[i];
          }
        });
      } else {
        countryResult = { status: 403, msg: "Paramater salah, masukkan paramater code, unicode, name, emoji, dialcode" };
      }
      return countryResult;
    }

    // Function About Galery Menfess
    function limitGaMenfess(sender) {
      var sudah = null
      Object.keys(galery_menfess).forEach((i) => {
        if (galery_menfess[i].id === sender) {
          sudah = i
        }
      })
      if (sudah === null) {
        var obj = {
          id: sender,
          count: 1
        }
        galery_menfess.push(obj)
        fs.writeFileSync('./database/galery_menfess.json', JSON.stringify(galery_menfess, null, 2))
        return 1
      } else {
        if (galery_menfess[sudah].count >= 5) return 'limit'
        galery_menfess[sudah].count +=  1
        fs.writeFileSync('./database/galery_menfess.json', JSON.stringify(galery_menfess, null, 2))
        return galery_menfess[sudah].count
      }
    }
    function cekMenfess(teks) {
      var hasil = false
      var tipe = null
      for (let i of tag_menfess) {
        if (teks.includes(i)) {
          hasil = true
          tipe = i
        }
      }
      return { tipe, hasil }
    }

    // Function About Akinator
    async function akiStart() {
      var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=${lolkey}`)
      return data
    }
    async function akiAnswer(server, frontaddr, session, signature, step, answer) {
      var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/answer?apikey=${lolkey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&step=${step}&answer=${answer}`)
      return data
    }
    async function akiBack(server, frontaddr, session, signature, step, answer) {
      var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/back?apikey=${lolkey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&step=${step}&answer=${answer}`)
      return data
    }
    async function akiEnd(server, session, signature, step) {
      var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/end?apikey=${lolkey}&server=${server}&session=${session}&signature=${signature}&step=${step}`)
      return data
    }

    // Function About Casino
    const isPlayCasino = (from, casino) => {
      var status = false
      Object.keys(casino).forEach((i) => {
        if (casino[i].session == from) {
          status = true
        }
      })
      return status
    }
    const getCasino = (from, casino) => {
      var posi = null
      Object.keys(casino).forEach((i) => {
        if (casino[i].session == from) {
          posi = i
        }
      })
      return posi
    }
    const setCasino = (chatId, player1, player2, nominal, _db) => {
      if (!isPlayCasino(chatId, _db)) {
        var obj = {
          status: true,
          session: chatId,
          turn: 'Z',
          Z: player1,
          Y: player2,
          nominal: nominal,
          expired: setTimeout(() => {
            var teksc = `Waktu casino habis, tidak ada jawaban dari @${player2.split("@")[0]}`
            conn.sendMessage(chatId, { text: teksc, mentions: [player2+'@s.whatsapp.net'] })
            _db.splice(getCasino(chatId, _db), 1)
          }, 30000)
        }
        _db.push(obj)
      }
    }
    const deleteCasino = (from, _db) => {
      if (isPlayCasino(from, _db)) {
        _db.splice(getCasino(from, _db), 1)
        return true
      } else {
        return false
      }
    }
    const sesiCasino = (from, casino) => {
      return casino[getCasino(from, casino)]
    }

    // Function About Hit Command
    async function addCountCmdUser(nama, sender, u) {
      var posi = null
      var pos = null
      Object.keys(u).forEach((i) => {
        if (u[i].jid === sender) {
          posi = i
        }
      })
      if (posi === null) {
        u.push({jid: sender, db: [{nama: nama, count: 0}]})
        fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
        Object.keys(u).forEach((i) => {
          if (u[i].jid === sender) {
            posi = i
          }
        })
      }
      if (posi !== null) {
        Object.keys(u[posi].db).forEach((i) => {
          if (u[posi].db[i].nama === nama) {
            pos = i
          }
        })
        if (pos === null) {
          u[posi].db.push({nama: nama, count: 1})
          fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
        } else {
          u[posi].db[pos].count += 1
          fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
        }
      }
    }
    async function getPosiCmdUser(sender, _db) {
      var posi = null
      Object.keys(_db).forEach((i) => {
        if (_db[i].jid === sender) {
          posi = i
        }
      })
      return posi
    }
    async function addCountCmd(nama, sender, _db) {
      addCountCmdUser(nama, sender, _cmdUser)
      var posi = null
      Object.keys(_db).forEach((i) => {
        if (_db[i].nama === nama) {
          posi = i
        }
      })
      if (posi === null) {
        _db.push({nama: nama, count: 1})
        fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
      } else {
        _db[posi].count += 1
        fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
      }
    }

    // Function For Welcome & Leave
    const getPosiSaying = (from, _db) => {
      let posi = null
      Object.keys(_db).forEach((i) => {
        if (_db[i].jid === from) {
          posi = i
        }
      })
      if (posi !== null) {
        return posi
      }
    }
    const isWelcome = isGroup ? getPosiSaying(from, welcome) ? true : false : false

    // Function About Anonymous Chat & Chat With
    // Function for Anonymous Chat
    function anonyCheck(who = '', _db) {
      return [_db.a, _db.b].includes(who)
    }
    function anonyOther(who = '', _db) {
      return who == _db.a ? _db.b : who == _db.b ? _db.a : ''
    }
    function isChat(who = '', _db) {
      var posi = _db.find(i => [i.a, i.b].includes(who))
      return posi
    }

    // Variable For Check Message
    const isImage = (type == 'imageMessage')
    const isVideo = (type == 'videoMessage')
    const isSticker = (type == 'stickerMessage')
    const isQuotedImage = isQuotedMsg ? (quotedMsg.type === 'imageMessage') ? true : false : false
    const isQuotedAudio = isQuotedMsg ? (quotedMsg.type === 'audioMessage') ? true : false : false
    const isQuotedDocument = isQuotedMsg ? (quotedMsg.type === 'documentMessage') ? true : false : false
    const isQuotedVideo = isQuotedMsg ? (quotedMsg.type === 'videoMessage') ? true : false : false
    const isQuotedSticker = isQuotedMsg ? (quotedMsg.type === 'stickerMessage') ? true : false : false

    // Auto Read & Presence Online
    conn.readMessages([msg.key])
    conn.sendPresenceUpdate('available', from)

    // Check Mode
    if (conn.mode === 'self') {
      if (!isOwner && !fromMe) return
      if (fromMe && isBaileys) return
    }

    // For check mute group & Galery Menfess
    if (from === id_group) {
      if (isCmd && !msg.key.fromMe) {
        reply(`Mohon maaf, semua fitur dimatikan di grup ini`)
      } else {
        if (isQuotedMsg) {
          if (quotedMsg.id.includes('_')) {
            var nums = quotedMsg.id.split('_')[0]+'@s.whatsapp.net'
            if (nums === sender) return
            conn.sendMessage(nums, { text: `*Notifikasi 🔔*\nSeseorang mengomentari menfessmu, check komen?` }, { quoted: msg })
          }
        }
      }
    }

    // For Antilink Group
    if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins) {
      if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
        if (!isBotGroupAdmins) return reply(`Untung bot bukan admin`)
        reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
        .then( done => conn.groupParticipantsUpdate(from, [sender], "remove") )
      }
    }

    // Auto Registrasi
    if (isCmd && !isUser) {
      pendaftar.push(sender)
      fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
    }

    // For check premium expired
    _prem.expiredCheck(conn, premium)

    // For tictactoe game
    if (isTicTacToe(from, tictactoe)) tictac(chats, prefix, tictactoe, from, sender, reply, mentions, addBalance, balance)
    if (isTicTacToe(from, ttcsolo)) tictacsolo(conn, chats, prefix, ttcsolo, msg)

    // For suit PvP
    require('../lib/suitpvp')(conn, sender, chats, from, msg, isGroup)

    // For read game answer
    cekWaktuGame(conn, tebakgambar) // Tebak Gambar
    if (isPlayGame(from, tebakgambar) && isUser) {
      if (chats.toLowerCase() == getJawabanGame(from, tebakgambar)) {
        var htgm = randomNomor(100, 150)
        addBalance(sender, htgm, balance)
        reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}tebakgambar*`)
        tebakgambar.splice(getGamePosi(from, tebakgambar), 1)
      }
    }
    cekWaktuGame(conn, kuis) // Kuis Game
    if (isPlayGame(from, kuis) && isUser) {
      if (chats.toLowerCase() == getJawabanGame(from, kuis)) {
        var htgm = randomNomor(100, 150)
        addBalance(sender, htgm, balance)
        reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, kuis)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}kuis*`)
        kuis.splice(getGamePosi(from, kuis), 1)
      }
    }
    cekWaktuGame(conn, tebaklagu) // Tebak Lagu
    if (isPlayGame(from, tebaklagu) && isUser) {
      if (chats.toLowerCase() == getJawabanGame(from, tebaklagu)) {
        var htl = randomNomor(150, 200)
        addBalance(sender, htl, balance)
        reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebaklagu)}\nHadiah : ${htl} balance\n\nIngin bermain lagi? ketik *${prefix}tebaklagu*`)
        tebaklagu.splice(getGamePosi(from, tebaklagu), 1)
        }
    }

    // For galery menfess
    var isi_menfess = cekMenfess(chats)
    if (!isGroup && !isCmd && isi_menfess.hasil === true) {
      if (chats.split(' ').length < 3) return reply(`🙅🏻‍♀️  post gagal terkirim, *mengirim pesan wajib lebih dari 3 kata.*`)
      var mem = await getMembers(id_group)
      var limit_menfess = limitGaMenfess(sender)
      var teks_gagal = `🙅🏻‍♀️ post gagal terkirim. kamu hari ini telah mengirim ke menfess sebanyak 5/5 kali. kamu dapat mengirim menfess kembali pada hari esok.\n\nwaktu reset jam 00:00 WIB`
      if (limit_menfess === 'limit') return reply(teks_gagal)
      var teks_sukses = `pesan telah berhasil terkirim. hari ini kamu telah mengirim menfess sebanyak ${limit_menfess}/5 . kamu dapat mengirim menfess sebanyak 5 kali dalam sehari\n\nwaktu reset setiap jam 00:00 WIB`
      if (isi_menfess.tipe === '#boy') {
        conn.sendMessage(id_group, { image: fs.readFileSync('./media/boy.jpg'), caption: chats }, { messageId: `${sender.split('@')[0]}_`+makeid(10).toUpperCase() })
        reply(teks_sukses)
      } else if (isi_menfess.tipe === '#girl') {
        conn.sendMessage(id_group, { image: fs.readFileSync('./media/girl.jpg'), caption: chats }, { messageId: `${sender.split('@')[0]}_`+makeid(10).toUpperCase() })
        reply(teks_sukses)
      } else {
        conn.sendMessage(id_group, { forward: msg }, { messageId: `${sender.split('@')[0]}_`+makeid(10).toUpperCase() })
        reply(teks_sukses)
      }
    }

    // For Menfess
    if (!isGroup && !isCmd && isQuotedMsg) {
      if (quotedMsg.id.endsWith("MNFS")) {
        var num = quotedMsg.id.split('_')[1]+'@s.whatsapp.net'
        var msgId = quotedMsg.id.split('_')[2]
        var msgQuoted = secreto.find(i => i.id == msgId)
        if (['conversation', 'extendedTextMessage'].includes(msg.type)) {
          conn.sendMessage(num, { text: `Hai kak, kamu menerima pesan balasan nih\n\n${chats}` }, { quoted: msgQuoted == undefined ? '' : msgQuoted.msg })
          reply(`Sukses mengirimkan balasan`)
        } else {
          var msgMsg = await conn.sendMessage(num, { text: `Hai kak, kamu menerima pesan balasan nih` }, { quoted: msgQuoted == undefined ? '' : msgQuoted.msg })
          conn.sendMessage(num, { forward: msg }, { quoted: msgMsg })
          reply(`Sukses mengirimkan balasan`)
        }
      }
    }

    // Auto Write Database Anonymous Every 30 Second's
    setInterval(async () => {
      fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonymous, null, 2))
    }, 30 * 1000)

    // Function For Anonymous Chat
    var cekForAnon = false
    if (isCmd) {
      var anw = command.split(prefix)[1]
      var filter_anon = ["anonymous", "start", "search", "stop", "next", "skip", "sendprofile", "sendprofil"]
      if (filter_anon.includes(anw)) cekForAnon = true
    }
    if (!isGroup && !msg.key.fromMe && !cekForAnon) {
      let rums = Object.values(anonymous).find(room => [room.a, room.b].includes(sender) && room.state == "CHATTING")
      if (rums) {
        var partnerJID = [rums.a, rums.b].find(user => user !== sender)
        if (msg.type == "conversation") {
          conn.sendMessage(partnerJID, { text: chats })
        } else {
          var contextInfo = msg.message[msg.type].contextInfo
          conn.sendMessageFromContent(partnerJID, msg.message, { contextInfo })
        }
      }
    }

    // Function for Chat With
    var cekForChat = false
    if (isCmd) {
      var anw = command.split(prefix)[1]
      var filter_chat = ["chatw", "chatwith", "batalchat", "acc_chat", "dn_acc"]
      if (filter_chat.includes(anw)) cekForChat = true
    }
    if (!isGroup && !msg.key.fromMe && !cekForChat) {
      let rumcet = isChat(sender, chat_with)
      if (rumcet !== undefined && rumcet.status === 'CHAT') {
        var chat_jid = [rumcet.a, rumcet.b].find(user => user !== sender)
        if (msg.type == "conversation") {
          conn.sendMessage(chat_jid, { text: chats })
        } else {
          var contextInfo = msg.message[msg.type].contextInfo
          conn.sendMessageFromContent(chat_jid, msg.message, { contextInfo })
        }
      }
    }

    // Response If someone calls Bot
    conn.answers = conn.answers ? conn.answers : {}
    var pesanx = chats.toLowerCase()
    if (pesanx === 'Ghosky' || pesanx === 'bot' || pesanx === 'ghosky' || pesanx === 'p') {
      conn.answers[sender] = conn.answers[sender] ? conn.answers[sender] : { count: 0, isMute: false }
      conn.answers[sender].count += 1
      if (conn.answers[sender].count >= 3 && conn.answers[sender].count < 6) {
        reply(`Aku jangan di spam kak!`)
      } else if (conn.answers[sender].count >= 4 && !conn.answers[sender].isMute) {
        conn.answers[sender].isMute = true
        return reply(`Ga tau ${botName} capek!`)
      } else if (conn.answers[sender].count <= 2) {
        return reply(`Ya ada apa kak? ${botName} siap melayani permintaan kakak, silahkan ketik ${prefix}menu`)
      }
      if (conn.answers[sender].isMute) {
        setTimeout(function() {
          delete conn.answers[sender]
        }, 60000);
      }
    }

    // To determine the winner of the Casino
    if (isPlayCasino(from, casino)) {
      var casinoo = sesiCasino(from, casino)
      if (sender == `${casinoo.Y}@s.whatsapp.net` && chats.toLowerCase() == 'n') {
        conn.sendMessage(from, { text: `「 Game Casino Rejected 」\n\n• @${casinoo.Y} Membatalkan Game`, mentions: [casinoo.Y+"@s.whatsapp.net"] }, {quoted: msg })
        clearTimeout(casinoo.expired)
        deleteCasino(from, casino)
      } else if (sender == `${casinoo.Y}@s.whatsapp.net` && chats.toLowerCase() == 'y') {
        clearTimeout(casinoo.expired)
        var angka1 = await randomNomor(10, 20)
        var angka2 = await randomNomor(10, 20)
        if (angka1 > angka2) {
          starGame =  `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 👑
• @${casinoo.Y} --> ${angka2} 🥈

Pemenangnya adalah [ @${casinoo.Z} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
          conn.sendMessage(from, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y + "@s.whatsapp.net"]}, {quoted: msg })
          await addBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
          await kurangBalance(`${casinoo.Y}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
          deleteCasino(from, casino)
        } else if (angka1 < angka2) {
          starGame =  `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 🥈
• @${casinoo.Y} --> ${angka2} 👑

Pemenangnya adalah [ @${casinoo.Y} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
          conn.sendMessage(from, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y + "@s.whatsapp.net"] }, {quoted: msg })
          await addBalance(`${casinoo.Y}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
          await kurangBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
          deleteCasino(from, casino)
        } else if (angka1 = angka2) {
          starGame =  `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 📍
• @${casinoo.Y} --> ${angka2} 📍

Games Draw, Tidak Ada Pemenang`
          conn.sendMessage(from, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y + "@s.whatsapp.net" ]}, { quoted: msg })
          deleteCasino(from, casino)
        }
      }
    }

    // Auto Write Database Akinator Every 1 Minutes
    setInterval(() => {
      fs.writeFileSync('./database/akinator.json', JSON.stringify(akinator, null, 2))
    }, 30 * 1000)

    // Auto Delete Unplayable Akinator Sessions
    function autoDelAki() {
      for (let i in akinator) {
        if (akinator[i].step == undefined) {
          var data = {
            jid: i+'@s.whatsapp.net',
            teks: `Sesi Akinator Anda sudah selesai karena tidak ada lagi jawaban dari Anda, jika ingin bermain lagi ketik ${prefix}akinator`
          }
          return conn.sendMessage(data.jid, { text: data.teks })
          .then( res => delete akinator[i] )
        }
      }
    }
    autoDelAki()

    // Function to process answers Akinator
    if (!isGroup && akinator.hasOwnProperty(sender.split('@')[0]) && !isCmd && ["0", "1", "2", "3", "4"].includes(chats)) {
      var { server, frontaddr, session, signature, question, step } = akinator[sender.split('@')[0]]
      var jwb = (await akiAnswer(server, frontaddr, session, signature, step, chats)).result
      if (jwb.hasOwnProperty('name')) {
        var img = await getBuffer(jwb.image)
        var cpt = `Saya pikir itu...\n\n${jwb.name} ${jwb.description}, benar?`
        conn.sendMessage(from, { caption: cpt, image: img }, { quoted: msg, messageId: 'BAE5'+makeid(9)+'AKI'.toUpperCase() })
        var okeh = akinator[sender.split("@")[0]]
        okeh.answer = chats
        akinator[sender.split("@")[0]] = okeh
        return
      }
      var jques = jwb.question
      var jstep = jwb.step
      var jteks = `${jques}\n\n`
      jteks += `0 - Ya\n`
      jteks += `1 - Tidak\n`
      jteks += `2 - Tidak Tahu\n`
      jteks += `3 - Mungkin\n`
      jteks += `4 - Mungkin Tidak\n\n`
      jteks += `Pertanyaan №: ${jstep+1}\n${jwb.progression} %`
      conn.sendMessage(from, { text: jteks }, { quoted: msg, messageId: 'BAE5'+makeid(9)+'AKI'.toUpperCase() }).then( res => {
        var jaki = akinator[sender.split("@")[0]]
        jaki.question = jques
        jaki.step = jstep
        akinator[sender.split("@")[0]] = jaki
      })
    }

    // Function for AFK
    if (isGroup && !isBaileys && !fromMe) {
      if (mentioned.length !== 0) {
        for (let ment of mentioned) {
          if (afk.checkAfkUser(ment, _afk)) {
            const getId = afk.getAfkId(ment, _afk)
            const getReason = afk.getAfkReason(getId, _afk)
            const getTime = Date.now() - afk.getAfkTime(getId, _afk)
            const heheh = ms(getTime)
            await reply(`@${ment.split('@')[0]} sedang afk\n\n*Alasan :* ${getReason}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu`)
          }
        }
      }
      if (afk.checkAfkUser(sender, _afk)) {
        _afk.splice(afk.getAfkPosition(sender, _afk), 1)
        fs.writeFileSync('./database/afk.json', JSON.stringify(_afk, null, 2))
        await mentions(`@${sender.split('@')[0]} telah kembali`, [sender], true)
      }
    }

    // Function for Anti Spam
    msgFilter.ResetSpam(conn.spam)
    const spampm = () => {
      console.log(color('~>[SPAM]', 'red'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
      msgFilter.addSpam(sender, conn.spam)
      reply(`Kamu terdeteksi spam bot tanpa jeda, lakukan perintah setelah 5 detik`)
    }
    const spamgr = () => {
      console.log(color('~>[SPAM]', 'red'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
      msgFilter.addSpam(sender, conn.spam)
      reply(`Kamu terdeteksi spam bot tanpa jeda, lakukan perintah setelah 5 detik`)
    }
    if (isCmd && msgFilter.isFiltered(sender) && !isGroup) return spampm()
    if (isCmd && msgFilter.isFiltered(sender) && isGroup) return spamgr()
    if (isCmd && args[0].length > 1 && !isOwner && !isPremium) msgFilter.addFilter(sender)

    // Logs;
    if (!isGroup && isCmd && !fromMe) {
      addBalance(sender, randomNomor(20), balance)
      console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
    }
    if (isGroup && isCmd && !fromMe) {
      addBalance(sender, randomNomor(20), balance)
      console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
    }

    /*if (isCmd) {
      if (!isGroup && tag_menfess.includes(command)) {
        if (chats.split(" ").length < 3)
        return reply(`🙅🏻‍♀️  post gagal terkirim, *mengirim pesan wajib lebih dari 3 kata.*`);
        var limit_menfess = limitGaMenfess(sender);
        var teks_gagal = `🙅🏻‍♀️ post gagal terkirim. kamu hari ini telah mengirim ke menfess sebanyak 5/5 kali. kamu dapat mengirim menfess kembali pada hari esok.\n\nwaktu reset jam 00:00 WIB`;
        if (limit_menfess === "limit") return reply(teks_gagal);
        var teks_sukses = `pesan telah berhasil terkirim. hari ini kamu telah mengirim menfess sebanyak ${limit_menfess}/5 . kamu dapat mengirim menfess sebanyak 5 kali dalam sehari\n\nwaktu reset setiap jam 00:00 WIB`;
        if (command === "#boy") {
          conn.sendMessage(id_group, { image: fs.readFileSync("./media/boy.jpg"), caption: chats }, { messageId: `${sender.split("@")[0]}_` + makeid(10).toUpperCase(), });
          reply(teks_sukses);
        } else if (command === "#girl") {
          conn.sendMessage(id_group, { image: fs.readFileSync("./media/girl.jpg"), caption: chats, }, { messageId: `${sender.split("@")[0]}_` + makeid(10).toUpperCase(), });
          reply(teks_sukses);
        } else {
          conn.sendMessage(id_group, { forward: msg }, { messageId: `${sender.split("@")[0]}_` + makeid(10).toUpperCase(), });
          reply(teks_sukses);
        }
      }
    }*/

    // Eval and Exec
    if (isMods) {
      if (chats.startsWith("> ")) {
        console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
        const ev = (code) => {
          var string = JSON.stringify(code, null, 2)
          var format = util.format(string)
          if (string == undefined) {
            format = util.format(code)
          }
          reply(format)
        }
        try {
          reply(util.format(eval(`;(async () => { ${chats.slice(2)} })()`)))
        } catch (e) {
          reply(util.format(e))
        }
      } else if (chats.startsWith("x ")) {
        console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkaokwoak`))
        try {
          let evaled = await eval(chats.slice(2))
          if (typeof evaled !== 'string') evaled = require("util").inspect(evaled)
          reply(`${evaled}`)
        } catch (e) {
          reply(`${e}`)
        }
      } else if (chats.startsWith("$ ")) {
        console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
        exec(chats.slice(2), (err, stdout) => {
          if (err) return reply(`${err}`)
          if (stdout) reply(`${stdout}`)
        })
      }
    }

    switch (command) {
      // MAIN MENU
      case prefix + 'menu': case prefix + 'help':
        addCountCmd('#help', sender, _cmd)
        var teks = allmenu(sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount, ucapanWaktu)
        conn.sendMessage(from, { text: teks }, { quoted: msg })
        break
      case prefix + 'infobot': case prefix + 'info':
      case prefix + 'botinfo':
        addCountCmd('#infobot', sender, _cmd)
        var capt = `_*Ghosky Eru Bot Information*_

*• Name :* ${conn.user.name}
*• Number :* ${botNumber.split("@")[0]}
*• Owner :* -
*• Total Pengguna :* ${pendaftar.length}
*• Prefix :* Multi Prefix
*• Instagram :* @irfann._x
*• Github :* github.com/rtwone
*• Bot Created On 19 June 2021*

_*Special Thanks To :*_
*• Allah SWT*
*• Adiwajshing/Baileys*
*• Febb*
*• Lindow*
*• Null Team*
*• Penyedia Dari :*
   *- Rest Api*
   *- Module*`
        conn.sendMessage(from, { text: capt }, { quoted: msg })
        break
      case prefix + 'stat': case prefix + 'stats':
      case prefix + 'statistik':
        addCountCmd('#statistik', sender, _cmd)
        var nodeos = require('node-os-utils')
        var { totalGb, usedGb, freeGb } = await nodeos.drive.info()
        var { download, upload } = await checkBandwidth()
        var totalhit = 0; for (let i of _cmd) { totalhit = totalhit + i.count }
        var allgrup = await conn.groupFetchAllParticipating().then(res => Object.values(res))
        var allchat = await store.chats.all()
        var chatpc = []
        allchat.map(i => {
          if (i.id.endsWith('net')) {
            chatpc.push(i.id)
          }
        })
        var tmp = speed(); var tmps = speed() - tmp
        var stat = `*STATISTIK BOT*

*Speed :* ${tmps.toFixed(4)} s
*Runtime :* ${runtime(process.uptime())}
*Total Chat :* ${allchat.length}
*Private Chat :* ${chatpc.length}
*Group Chat :* ${allgrup.length}
*Total Hit :* ${totalhit}

*Download :* ${download}
*Upload :* ${upload}
*Total Storage :* ${totalGb} GB
*Used :* ${usedGb} GB
*Free :* ${freeGb} GB`
        reply(stat)
        break
      case prefix + 'groupGhosky': case prefix + 'grupGhosky':
      case prefix + 'grupghosky': case prefix + 'grupbot':
        addCountCmd('#groupGhosky', sender, _cmd)
        var link1 = 'https://chat.whatsapp.com/'+await conn.groupInviteCode("6285791458996-1628076093@g.us")
        var teks = `Jangan lupa join grup Ghosky Eru untuk mengetahui informasi lebih lanjut tentang bot\n\nGroup 1 : ${link1}\n\nJangan lupa juga untuk Donasi supaya admin semakin semangat dalam mengembangkan bot ini, terimakasih.`
        reply(teks)
        break
      case prefix + 'owner':
        addCountCmd('#owner', sender, _cmd)
        var number = ownerNumber.replace(/[^0-9]/g, '')
        var vcard = 'BEGIN:VCARD\n'
        + 'VERSION:3.0\n'
        + 'FN:Owner of '+ botName.split(' ')[0] + '\n'
        + 'ORG:;\n'
        + 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
        + 'END:VCARD'
        conn.sendMessage(from, { contacts: { displayName: 'Owner of '+botName.split(' ')[0], contacts: [{ vcard }] }},{ quoted: msg })
        break
      case prefix + 'sc': case prefix + 'script':
      case prefix + 'sourcecode': case prefix + 'scriptbot':
        addCountCmd('#sourcecode', sender, _cmd)
        var teks = `Bot ini menggunakan Script Original Buatan Sendiri :\nhttps://github.com/rtwone/Ghoskybot\n\nJika kamu ingin membeli Script bot ini, silahkan ketik #owner`
        reply(teks)
        break
      case prefix + 'speed':
        addCountCmd('#speed', sender, _cmd)
        let timestamp = speed();
        let latensi = speed() - timestamp
        reply(`${latensi.toFixed(4)} Second`)
        break
      case prefix + 'runtime':
        addCountCmd('#runtime', sender, _cmd)
        reply(runtime(process.uptime()))
        break
      case prefix + 'cekprem': case prefix + 'cekpremium':
        if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}daftarprem* untuk membeli premium`)
        addCountCmd('#cekpremium', sender, _cmd)
        if (isOwner) return reply(`Lu owner bego!`)
        if (_prem.getPremiumExpired(sender, premium) == "PERMANENT") return reply(`PERMANENT`)
        let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
        let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
        reply(premiumnya)
        break
      case prefix + 'myprofile': case prefix + 'profile':
      case prefix + 'myprofil': case prefix + 'profil':
        addCountCmd('#myprofile', sender, _cmd)
        var jidnya;
        if (isGroup) {
          if (mentioned.length !== 0) {
            jidnya = mentioned[0]
          } else {
            jidnya = sender
          }
        } else {
          jidnya = sender
        }
        var isAngmins = groupAdmins.includes(jidnya)
        var isOngner = ownerNumber.includes(jidnya)
        var isPrem = isOngner ? true : _prem.checkPremiumUser(jidnya, premium)
        var gcunt = isPrem ? setting.gcount.prem : setting.gcount.user
        var nme1 = await conn.getName(jidnya)
        var pungname = nme1 !== undefined ? nme1 : 'Not detected'
        var pp_user = await conn.profilePictureUrl(jidnya, 'image').catch((e) => 'https://telegra.ph/file/147b449559f73dc248d0b.jpg')
        var db_cmd = _cmdUser[await getPosiCmdUser(jidnya, _cmdUser)]
        var hit_user = 0
        if (db_cmd !== undefined) { for (let i of db_cmd.db) {; hit_user = hit_user + i.count; } }
        var limit_user = getLimit(jidnya, limitCount, limit)
        var glimit_user = cekGLimit(jidnya, gcunt, glimit)
        var prof = jidnya.startsWith('62') ? (cekNumber(jidnya.split("@")[0])).nama : null
        try {
          var data_bio = await conn.fetchStatus(jidnya)
        } catch {
          var data_bio = null
        }
        var bio_date = data_bio !== null ? `\n*📆Bio Date :* ${moment(data_bio.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}` : ''
        var info_jabatan = isGroup ? `\n*🏅Position :* ${groupOwner === jidnya ? 'Owner Group' : isAngmins ? 'Admin' : 'Member Biasa'}` : ''
        var data_c_id = await PhoneNumber('+'+jidnya.split("@")[0])
        var data_c_c = await getCountry({ dialcode: data_c_id.h.h['1'].toString() })
        var country = `${data_c_c.name} [${data_c_c.emoji}]`
        var teks = `*YOUR PROFILE*\n\n*👤Name :* ${pungname}\n*☎️Number :* ${data_c_id.g.number.international}\n*🌐Country :* ${country}\n*📞Provider :* ${prof}\n*📚Bio :* ${data_bio !== null ? data_bio.status : null}${bio_date}\n*💳Daily Limit :* ${isPrem ? 'Unlimited' : limit_user}\n*🎮Game Limit :* ${isOngner ? 'Unlimited' : glimit_user}${info_jabatan}\n*💎Status :* ${isOngner ? 'Owner' : isPrem ? 'Premium' : 'Free'}\n*🎯Hit :* ${hit_user}`
        conn.sendMessage(from, { image: await getBuffer(pp_user), caption: teks }, { quoted: msg })
        break
      case prefix + 'listprem':
        addCountCmd('#listprem', sender, _cmd)
        let txt = `List Prem\nJumlah : ${premium.length}\n\n`
        let men = [];
        for (let i of premium) {
          men.push(i.id)
          txt += `*ID :* @${i.id.split("@")[0]}\n`
          if (i.expired === 'PERMANENT') {
            let cekvip = 'PERMANENT'
            txt += `*Expire :* PERMANENT\n\n`
          } else {
            let cekvip = ms(i.expired - Date.now())
            txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
          }
        }
        mentions(txt, men, true)
        break
      case prefix + 'daftarprem': case prefix + 'daftarpremium':
        addCountCmd('#daftarprem', sender, _cmd)
        var teks = `Jika kamu ingin menjadi Member Premium, kamu cukup membayar Rp5.000 untuk 1 Minggu, Rp20.000 untuk 1 Bulan dan jika ingin menjadi Member Premium Permanen kamu hanya membayar Rp50.000. Jika berminat silahkan chat Owner Bot, ketik ${prefix}owner\n\nPembayaran bisa melalui Pulsa/Dana`
        reply(teks)
        break
      case prefix + 'sewa': case prefix + 'sewabot':
        addCountCmd('#sewabot', sender, _cmd)
        var teks = `Jika kamu ingin memasukkan Bot ke dalam Grup, kamu cukup membayar Rp10.000 untuk 1 Minggu, Rp35.000 untuk 1 Bulan. Untuk Sewa tidak ada yang Permanent. Jika berminat silahkan chat Owner Bot, ketik ${prefix}owner\n\nPembayaran bisa melalui Pulsa/Dana`
        reply(teks)
        break
      case prefix + 'dashboard':
        addCountCmd('#dashboard', sender, _cmd)
        var posi = await getPosiCmdUser(sender, _cmdUser)
        _cmdUser[posi].db.sort((a, b) => (a.count < b.count) ? 1 : -1)
        _cmd.sort((a, b) => (a.count  < b.count) ? 1 : -1)
        var posi = await getPosiCmdUser(sender, _cmdUser)
        var jumlahCmd = _cmd.length
        if (jumlahCmd > 10) jumlahCmd = 10
        var jumlah = _cmdUser[posi].db.length
        if (jumlah > 5) jumlah = 5
        var totalUser = 0
        for (let x of _cmdUser[posi].db) {
          totalUser = totalUser + x.count
        }
        var total = 0
        for (let o of _cmd) {
          total = total + o.count
        }
        var teks = `*Ghosky BOT DASHBOARD*\n\n*HIT*\n• GLOBAL : ${total}\n• USER : ${totalUser}\n\n`
        teks += `*Most Command Global*\n`
        for (let u = 0; u < jumlahCmd; u++) {
          teks += `• ${_cmd[u].nama} : ${_cmd[u].count}\n`
        }
        teks += `\n*Most Command User*\n`
        for (let i = 0; i < jumlah; i ++) {
          teks += `• ${_cmdUser[posi].db[i].nama} : ${_cmdUser[posi].db[i].count}\n`
        }
        reply(teks)
        break
      
      // CONVERTER & TOOLS MENU
      case prefix + 'sticker': case prefix + 'stiker': case prefix + 's':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (isImage || isQuotedImage) {
          addCountCmd('#sticker', sender, _cmd)
          var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
          var buffer = Buffer.from([])
          for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
          }
          var rand1 = 'sticker/'+getRandom('.jpg')
          var rand2 = 'sticker/'+getRandom('.webp')
          fs.writeFileSync(`./${rand1}`, buffer)
          ffmpeg(`./${rand1}`)
          .on("error", console.error)
          .on("end", () => {
            exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
              conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
              limitAdd(sender, limit)
              fs.unlinkSync(`./${rand1}`)
              fs.unlinkSync(`./${rand2}`)
            })
          })
          .addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
          .toFormat('webp')
          .save(`${rand2}`)
        } else if (isVideo && msg.message.videoMessage.seconds < 10 || isQuotedVideo && quotedMsg.videoMessage.seconds < 10) {
          addCountCmd('#sticker', sender, _cmd)
          reply(mess.wait)
          var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
          var buffer = Buffer.from([])
          for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
          }
          var rand1 = 'sticker/'+getRandom('.mp4')
          var rand2 = 'sticker/'+getRandom('.webp')
          fs.writeFileSync(`./${rand1}`, buffer)
          ffmpeg(`./${rand1}`)
          .on("error", console.error)
          .on("end", () => {
            exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
              conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
              limitAdd(sender, limit)
              fs.unlinkSync(`./${rand1}`)
              fs.unlinkSync(`./${rand2}`)
            })
          })
          .addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
          .toFormat('webp')
          .save(`${rand2}`)
        } else {
          reply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
        }
        break
      case prefix + 'swm': case prefix + 'stikerwm': case prefix + 'stickerwm':
        if (!isPremium) return reply(mess.OnlyPrem)
        var pname = q.split('|')[0] ? q.split('|')[0] : q
        var athor = q.split('|')[1] ? q.split('|')[1] : ''
        if (isImage || isQuotedImage) {
          if (args.length < 2) return reply(`Penggunaan ${command} nama|author`)
          addCountCmd('#stickerwm', sender, _cmd)
          var media = await conn.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender}.jpeg`)
          var opt = { packname: pname, author: athor }
          conn.sendImageAsSticker(from, media, msg, opt)
          .then( res => {
            fs.unlinkSync(media)
          }).catch((e) => { reply(mess.error.api); fs.unlinkSync(media) })
        } else if (isVideo || isQuotedVideo) {
          if (args.length < 2) return reply(`Penggunaan ${command} nama|author`)
          reply(mess.wait)
          addCountCmd('#stickerwm', sender, _cmd)
          var media = await conn.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${sender}.jpeg`)
          var opt = { packname: pname, author: athor }
          conn.sendImageAsSticker(from, media, msg, opt)
          .then( res => {
            fs.unlinkSync(media)
          }).catch((e) => { reply(mess.error.api); fs.unlinkSync(media) })
        } else {
          reply(`Kirim/Balas gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
        }
        break
      case prefix + 'take': case prefix + 'takesticker': case prefix + 'takestiker':
        if (!isPremium) return reply(mess.OnlyPrem)
        if (!isQuotedSticker) return reply(`Reply/balas sticker nya`)
        if (args.length < 2) return reply(`Penggunaan ${command} nama|author`)
        var pname = q.split('|')[0] ? q.split('|')[0] : q
        var athor = q.split('|')[1] ? q.split('|')[1] : ''
        reply(mess.wait)
        exif.create(pname, athor, `sendstc_${sender}`)
        var media = await conn.downloadAndSaveMediaMessage(msg, 'sticker', './sticker/'+sender.split("@")[0]+'.webp')
        exif.modStick(conn, from, media, msg, `./sticker/sendstc_${sender}.exif`)
        break
      case prefix + 'toimg': case prefix + 'toimage':
      case prefix + 'tovid': case prefix +'tovideo':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (!isQuotedSticker) return reply(`Reply stikernya!`)
        if (isQuotedSticker && msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) {
          var pathe = './sticker/'+getRandom('.png')
          var media = await conn.downloadAndSaveMediaMessage(msg, 'sticker', pathe)
          reply(mess.wait)
          conn.sendMessage(from, { image: fs.readFileSync(media) }, { quoted: msg })
          limitAdd(sender, limit)
          fs.unlinkSync(pathe)
        } else {
          var patha = './sticker/'+getRandom('.webp')
          var media = await conn.downloadAndSaveMediaMessage(msg, 'sticker', patha)
          reply(mess.wait)
          addCountCmd('#tovid', sender, _cmd)
          webp2mp4File(`${media}`).then(async (data) => {
            fs.unlinkSync(`${media}`)
            conn.sendMessage(from, { video: await getBuffer(data.data) }, { quoted: msg })
            limitAdd(sender, limit)
          }).catch((e) => { reply(mess.error.api); fs.unlinkSync(patha) })
        }
        break
      case prefix + 'tomp3': case prefix + 'toaudio':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (isVideo || isQuotedVideo) {
          let media = await conn.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${Date.now()}.mp4`)
          reply(mess.wait)
          addCountCmd('#tomp3', sender, _cmd)
          let ran = './sticker/'+getRandom('.mp3')
          exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
            fs.unlinkSync(media)
            if (err) { fs.unlinkSync(ran); return reply('Gagal :V') }
            conn.sendMessage(from, { audio: fs.readFileSync(ran),  mimetype: 'audio/mp4', fileName: `${sender.split("@")[0]}ToMp3`, ptt: args[1] == '--ptt' ? true : false }, { quoted: msg })
            limitAdd(sender, limit)
            fs.unlinkSync(ran)
          })
        } else {
          reply(`Kirim/reply video dengan caption ${command} atau ${command} --ptt`)
        }
        break
      case prefix + 'ttp':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
        reply(mess.wait)
        addCountCmd('#ttp', sender, _cmd)
        conn.sendImageAsSticker(from, `https://api.lolhuman.xyz/api/ttp5?apikey=${lolkey}&text=${q}`, msg, { packname, author })
        .then((res) => limitAdd(sender, limit))
        .catch((e) => reply(mess.error.api))
        break
      case prefix + 'attp':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
        reply(mess.wait)
        addCountCmd('#attp', sender, _cmd)
        conn.sendMessage(from, { sticker: { url: `https://api.lolhuman.xyz/api/attp?apikey=${lolkey}&text=${q}` }}, { quoted: msg })
        .then((res) => limitAdd(sender, limit))
        .catch((e) => reply(mess.error.api))
        break
      case prefix + 'emojimix': case prefix + 'mixemoji':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Kirim perintah ${command} emoji1+emoji2\ncontoh : ${command} 😜+😅`)
        if (!q.includes('+')) return reply(`Format salah, contoh pemakaian ${command} 😅+😭`)
        var emo1 = q.split("+")[0]
        var emo2 = q.split("+")[1]
        if (!isEmoji(emo1) || !isEmoji(emo2)) return reply(`Itu bukan emoji!`)
        addCountCmd('#emojimix', sender, _cmd)
        fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emo1)}_${encodeURIComponent(emo2)}`)
        .then(data => {
          conn.sendImageAsSticker(from, data.results[0].url, msg, { packname, author })
          limitAdd(sender, limit)
        }).catch((e) => reply(mess.error.api))
        break
      case prefix + 'smeme': case prefix + 'stikermeme':
      case prefix + 'stickermeme': case prefix + 'memestiker':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        var atas = q.includes('|') ? q.split('|')[0] ? q.split('|')[0] : q : '-'
        var bawah = q.includes('|') ? q.split('|')[1] ? q.split('|')[1] : '' : q
        var opt = { packname, author }
        if (isImage || isQuotedImage) {
          try {
            if (args.length < 2) return reply(`Kirim perintah ${command} teks atas|teks bawah`)
            addCountCmd('#smeme', sender, _cmd)
            reply(mess.wait)
            var media = await conn.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender+Date.now()}.jpg`)
            var media_url = await TelegraPh(media)
            var meme_url = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${media_url}`
            conn.sendImageAsSticker(from, meme_url, msg, opt)
            limitAdd(sender, limit)
            fs.unlinkSync(media)
          } catch (e) {
            reply(mess.error.api)
          }
        } else if (isQuotedSticker) {
          try {
            if (args.length < 2) return reply(`Kirim perintah ${command} teks atas|teks bawah`)
            addCountCmd('#smeme', sender, _cmd)
            reply(mess.wait)
            var media = await conn.downloadAndSaveMediaMessage(msg, 'sticker', `./sticker/${sender+Date.now()}.jpg`)
            var media_url = await UploadFileUgu(media)
            var meme_url = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${media_url.url}`
            conn.sendImageAsSticker(from, meme_url, msg, opt)
            limitAdd(sender, limit)
            fs.unlinkSync(media)
          } catch (err) {
            reply(mess.error.api)
          }
        } else {
          reply(`Kirim Gambar atau balas Sticker dengan caption ${command} teks atas|teks bawah`)
        }
        break
      case prefix + 'translate': case prefix + 'tr':{
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Penggunaan :\n*${prefix}translate* kodebahasa teks\n*${prefix}translate* kodebahasa <reply message>`)
        if (isQuotedMsg) {
          addCountCmd('#translate', sender, _cmd)
          let bahasanya = args[1].toString()
          const trans = await translate(quotedMsg.chats, {
            to: bahasanya
          })
          .then((res) => reply(res.text))
          .catch((err) => {
            reply(`Kode bahasa salah, ketik ${prefix}listbahasa untuk melihat bahasa yang tersedia!`)
          })
          trans
          limitAdd(sender, limit)
        } else {
          if (args.length < 3) return reply(`Penggunaan :\n*${prefix}translate* kodebahasa teks\n*${prefix}translate* kodebahasa <reply message>`)
          addCountCmd('#translate', sender, _cmd)
          let bahasanya = args[1].toString()
          let textnya = q.slice(args[1].length + 1, q.length)
          const trans = await translate(textnya, {
            to: bahasanya
          })
          .then((res) => reply(res.text))
          .catch((err) => {
            reply(`Kode bahasa salah, ketik ${prefix}listbahasa untuk melihat bahasa yang tersedia!`)
          })
          trans
          limitAdd(sender, limit)
        }
      }
        break
      case prefix + 'upload': case prefix + 'tourl': case prefix + 'tolink':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        var media = null
        if (isQuotedSticker) {
          var fileName = 'sticker'+makeid(10)+'.webp'
          var media = await conn.downloadAndSaveMediaMessage(msg, 'sticker', `./sticker/${fileName}`)
        } else if (isImage || isQuotedImage) {
          var fileName = 'image'+makeid(10)+'.jpg'
          var media = await conn.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${fileName}`)
        } else if (isVideo || isQuotedVideo) {
          var fileName = 'video' + makeid(10) + '.mp4'
          var media = await conn.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${fileName}`)
        } else if (isQuotedAudio) {
          var fileName = 'audio'+makeid(10)+'.mp3'
          var media = await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${fileName}`)
        } else {
          return reply(`Kirim atau balas Sticker/Foto/Video/Audio yang ingin dijadikan url dengan caption ${command}`)
        }
        if (media !== null) {
          reply(mess.wait)
          addCountCmd('#upload', sender, _cmd)
          var { name, url, size } = await AnonFiles(media)
          var teks = `*UPLOAD SUCCES*\n\n*Url :* ${url}\n*Name :* ${name}\n*Size :* ${size}`
          reply(teks)
          limitAdd(sender, limit)
          fs.unlinkSync(media)
        } else {
          reply(mess.error.api)
          fs.unlinkSync(media)
        }
        break
      
      // ISLAM MENU
      case prefix + 'listsurah': case prefix + 'allsurah':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        addCountCmd('#listsurah', sender, _cmd)
        allsurah().then( data => {
          var teks = `List Surah Al-Qur\'an\n\n`
          for (let i of data.result) {
            teks += `*Nomor :* ${i.index}\n*Surah :* ${i.surah} (${i.latin})\n*Jumlah Ayat :* ${i.jumlah_ayat}\n\n`
          }
          teks += `Jika ingin mengambil salah satu Surah ketik ${prefix}alquran nomor atau ${prefix}alquran nomor/ayat`
          reply(teks)
          limitAdd(sender, limit)
        })
        break
      case prefix + 'alquran':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Kirim perintah ${command} surah atau ${command} surah/ayat`)
        if (isNaN(args[1].includes('/') ? `${args[1].split('/')[0]}${args[1].split('/')[1]}` : args[1])) return reply(`Harus berupa angka, ketik ${prefix}listsurah untuk melihat surah dan ayat, jika sudah contoh perintahnya adalah ${command} 1 untuk mengambil surah Al-Fatihah atau ${command} 1/2 untuk mengambil surah Al-Fatihah ayat 2`)
        if (args[1].includes('/')) {
          reply(mess.wait)
          addCountCmd('#alquran', sender, _cmd)
          var dta = args[1].split('/')
          getSurat(dta[0], dta[1]).then( data => {
            if (data.status == 404) return reply(data.msg)
            var teks = `*Surah ${data.result.surah_id} Ayat ${data.result.ayat}*\n\n${data.result.arab}\n_${data.result.latin}_\n${data.result.id}\n\nAudio Nya⬇️`
            conn.sendMessage(from, { text: teks }, { quoted: msg })
            .then( res => conn.sendMessage(from, { audio: { url: data.result.audio }, mimetype: 'audio/mp4', ptt: true }, { quoted: res }))
            limitAdd(sender, limit)
          })
        } else {
          reply(mess.wait)
          addCountCmd('#alquran', sender, _cmd)
          getSurat(args[1]).then( data => {
            if (data.status == 404) return reply(data.msg)
            var teks = `*Surah ${data.result.surah} (${data.result.surah_id})*\n\n*Surah Ke :* ${data.result.index_surah}\n*Wahyu :* ${data.result.wahyu}\n*Total Ayat :* ${data.result.total_ayat}\n\n\n`
            for (let i of data.result.data) {
              teks += `*Ayat ${i.index_ayat}*\n${i.ayat}\n_${i.latin}_\n${i.id}\n\t\t\t\t\t--------------------\n\n`
            }
            conn.sendMessage(from, { text: teks }, { quoted: msg })
            limitAdd(sender, limit)
          })
        }
        break
      case prefix + 'alquranaudio': case prefix + 'audioalquran':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Kirim perintah ${command} surah atau ${command} surah/ayat`)
        if (isNaN(args[1].includes('/') ? `${args[1].split('/')[0]}${args[1].split('/')[1]}` : args[1])) return reply(`Harus berupa angka, ketik ${prefix}listsurah untuk melihat surah dan ayat, jika sudah contoh perintahnya adalah ${command} 1 untuk mengambil surah Al-Fatihah atau ${command} 1/2 untuk mengambil surah Al-Fatihah ayat 2`)
        if (args[1].includes('/')) {
          reply(mess.wait)
          addCountCmd('#alquranaudio', sender, _cmd)
          var dta = args[1].split('/')
          getSurat(dta[0], dta[1]).then( data => {
            if (data.status == 404) return reply(data.msg)
            conn.sendMessage(from, { audio: { url: data.result.audio }, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
            limitAdd(sender, limit)
          })
        } else {
          reply(mess.wait)
          addCountCmd('#alquranaudio', sender, _cmd)
          allsurah().then( data => {
            data = data.result
            if (args[1] > data.length) return reply(`Surah ${args[1]} is not found, only up to 114`)
            if (data.status == 404) return reply(data.msg)
            var meta = data.find( i => i.index == args[1] )
            conn.sendMessage(from, { audio: { url: meta.audio }, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
            limitAdd(sender, limit)
          })
        }
        break
      
      // BAILEYS
      case prefix + 'fitnah':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (args.length < 2) return reply(`Kirim perintah *${command}* @tag|pesantarget|pesanbot`)
        var org = q.split("|")[0]
        var target = q.split("|")[1];
        var bot = q.split("|")[2];
        if (!org.startsWith('@')) return reply('Tag orangnya')
        if (!target) return reply(`Masukkan pesan target!`)
        if (!bot) return reply(`Masukkan pesan bot!`)
        var mens = parseMention(target)
        addCountCmd('#fitnah', sender, _cmd)
        var msg1 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: from ? from : '' }, message: { extemdedTextMessage: { text: `${target}`, contextInfo: { mentionedJid: mens }}}}
        var msg2 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: from ? from : '' }, message: { conversation: `${target}` }}
        conn.sendMessage(from, { text: bot, mentions: mentioned }, { quoted: mens.length > 2 ? msg1 : msg2 })
        break
      case prefix + 'nowa':
        if (!isPremium) return reply(mess.OnlyPrem)
        if (args.length < 2) return reply(`Kirim perintah ${command} nomer`)
        var teks = args[1]
        if (!teks.includes('x')) return reply('lah?')
        reply(mess.wait)
        addCountCmd('#nowa', sender, _cmd)
        function countInstances(string, word) {
          return string.split(word).length - 1;
        }

        var nomer0 = teks.split('x')[0]
        var nomer1 = teks.split('x')[countInstances(teks, 'x')] ? teks.split('x')[countInstances(teks, 'x')] : ''
        var random_length = countInstances(teks, 'x')

        var random;
        if (random_length == 1) {
          random = 10
        } else if (random_length == 2) {
          random = 100
        } else if (random_length == 3) {
          random = 1000
        }

        var nomerny = `List Nomer\n\nPunya Bio/status/info\n`
        var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
        var no_watsap = `\nTidak Terdaftar\n`

        for (let i = 0; i < random; i++) {
          var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
          var dom1 = nu[Math.floor(Math.random() * nu.length)]
          var dom2 = nu[Math.floor(Math.random() * nu.length)]
          var dom3 = nu[Math.floor(Math.random() * nu.length)]
          var dom4 = nu[Math.floor(Math.random() * nu.length)]

          var rndm;
          if (random_length == 1) {
            rndm = `${dom1}`
          } else if (random_length == 2) {
            rndm = `${dom1}${dom2}`
          } else if (random_length == 3) {
             rndm = `${dom1}${dom2}${dom3}`
          } else if (random_length == 4) {
            rndm = `${dom1}${dom2}${dom3}${dom4}`
          }

          var anu = await conn.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
          var anuu = anu.length !== 0 ? anu : false

          try {
            try {
              var anu1 = await conn.fetchStatus(anu[0].jid)
            } catch {
              var anu1 = '401'
            }
            if (anu1 == '401' || anu1.status.length == 0) {
              no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
              console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
            } else {
              nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBio Name : ${anu1.status}\nTahun : ${moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}\n\n`
              console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
            }
          } catch {
            no_watsap += `${nomer0}${i}${nomer1}\n`
            console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
          }
        }
        reply(`${nomerny}${no_bio}${no_watsap}`)
        break
      case prefix + 'towame':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (isQuotedMsg) {
          if (quotedMsg.chats.length > 1) {
            var all = quotedMsg.chats.split('\n')
            var teks = ''
            for (let i of all) {
              var a = i.replace(/[+| |(|)|.|-]/gi, "")
              var b = parseInt(a)
              if (!b) teks += `${i} fail`
              teks += `wa.me/`+b+'\n'
            }
            reply(teks.trim())
            limitAdd(sender, limit)
          } else {
            addCountCmd('#towame', sender, _cmd)
            var a = quotedMsg.chats.replace(/[+| |(|)|.|-]/gi, "")
            var b = parseInt(a)
            if (!b) return reply("Pastikan hanya reply angka")
            reply("wa.me/"+b)
            limitAdd(sender, limit)
          }
        } else if (args.length > 1) {
          addCountCmd('#towame', sender, _cmd)
          if (q.split('\n').length > 1) {
            var all = q.split('\n')
            var teks = ''
            for (let i of all) {
              var a = i.replace(/[+| |(|)|.|-]/gi, "")
              var b = parseInt(a)
              if (!b) teks += `${i} fail`
              teks += `wa.me/`+b+'\n'
            }
            reply(teks.trim())
            limitAdd(sender, limit)
          } else {
            var a = q.replace(/[+| |(|)|.|-]/gi, "")
            var b = parseInt(a)
            if (!b) return reply("Pastikan hanya angka")
            reply("wa.me/"+b)
            limitAdd(sender, limit)
          }
        } else {
          reply(`Kirim perintah ${command} nomer atau balas pesan nomernya dengan caption ${command}`)
        }
        break
      case prefix + 'q': case prefix + 'getquotedmsg':
      case prefix + 'getquoted': case prefix + 'quoted':
        if (!isPremium) return reply(mess.OnlyPrem)
        if (!isQuotedMsg) return reply(`Balas Pesannya!`)
        var data = await store.loadMessage(from, quotedMsg.id)
        data = serialize(conn, data)
        if (data.isQuotedMsg !== true) return reply(`The message you replied to contained no reply`)
        var typ = Object.keys(data.message)[0]
        addCountCmd('#getquotedmsg', sender, _cmd)
        if (data.message[typ].contextInfo.quotedMessage.conversation) {
          reply(`${data.message[typ].contextInfo.quotedMessage.conversation}`)
        } else {
          var anu = data.message[typ].contextInfo.quotedMessage
          conn.sendMessageFromContent(from, anu)
        }
        break
      case prefix + 'hidetag':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isPremium && !isOwner) return reply(mess.OnlyPrem)
        addCountCmd('#hidetag', sender, _cmd)
        var memh = [];
        groupMembers.map( i => memh.push(i.id) )
        conn.sendMessage(from, { text: q ? q : '', mentions: memh })
        break
      case prefix + 'fakehidetag':
        if (!isPremium) return reply(mess.OnlyPrem)
        if (!isGroup) return reply(mess.OnlyGrup)
        if (args.length < 2) return reply(`Kirim perintah *${command}* @tag|teks`)
        var org = q.split("|")[0]
        var teks = q.split("|")[1];
        if (!org.startsWith('@')) return reply('Tag orangnya')
        var mem2 = []
        groupMembers.map( i => mem2.push(i.id) )
        var mens = parseMention(target)
        addCountCmd('#fakehidetag', sender, _cmd)
        var msg1 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: from ? from : '' }, message: { extemdedTextMessage: { text: `${prefix}hidetag ${teks}`, contextInfo: { mentionedJid: mens }}}}
        var msg2 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: from ? from : '' }, message: { conversation: `${prefix}hidetag ${teks}` }}
        conn.sendMessage(from, { text: teks ? teks : '', mentions: mem2 }, { quoted: mens.length > 2 ? msg1 : msg2 })
        break
      case prefix + 'react':
        if (!isMods) return reply(mess.OnlyOwner)
        if (!isQuotedMsg) return reply(`Balas pesannya`)
        if (args.length < 2) return reply(`Masukkan 1 emoji`)
        if (!isEmoji(args[1])) return reply(`Itu bukan emoji!`)
        if (isEmoji(args[1]).length > 1) return reply(`Satu aja emojinya`)
        var reactMsg = { reactionMessage: {
            key: {
              remoteJid: from,
              fromMe: quotedMsg.fromMe,
              id: quotedMsg.id,
              participant: quotedMsg.sender
            },
            text: args[1]
          }
        }
        conn.sendMessageFromContent(from, reactMsg)
        break
      case prefix + 'afk':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (isAfkOn) return reply('afk sudah diaktifkan sebelumnya')
        if (body.slice(100)) return reply('Alasanlu kepanjangan')
        addCountCmd('#afk', sender, _cmd)
        let reason = body.slice(5) ? body.slice(5) : 'Nothing.'
        afk.addAfkUser(sender, Date.now(), reason, _afk)
        reply(`@${sender.split('@')[0]} sedang afk\nAlasan : ${reason}`)
        break
      case prefix + 'inspect':
        if (!isPremium) return reply(mess.OnlyPrem)
        if (args.length < 2) return reply(`Kirim perintah ${command} linkgrup`)
        var regx = /chat.whatsapp.com\/([\w\d]*)/g;
        var cek = args[1].match(regx)
        if (cek == null) return reply(`No invite url detected `)
        cek = cek[0].replace('chat.whatsapp.com/', '')
        conn.groupInspectCode(cek).then( data => {
          if (data.msg) return reply(`Maaf terjadi kesalahan, silahkan coba link lain!`)
          addCountCmd('#inspect', sender, _cmd)
          var { id, subject, creator, creation, size, desc, participants } = data
          var teks = `*GROUP INSPECT LINK*\n
*Id Group :* ${id}
*Subjek :* ${subject}
*Owner :* ${creator !== undefined ? '@'+creator.split("@")[0] : id.includes('-') ? '@'+id.split('-')[0] : 'Not detected'}
*Di Buat Pada :* ${formatDate(creation * 1000)}
*Total Member :* ${size}\n
*Teman yang diketahui join :* ${participants ? '\n' + participants.map((user, i) => ++i + '. @' + user.id.split(`@`)[0]).join('\n').trim() : 'Tidak ada'}\n
*Deskripsi :* ${desc !== undefined ? desc : ""}`
          reply(teks)
        })
        break
      
      // ANONYMOUS CHAT
      case prefix + 'anonymous':
        if (isGroup) return reply(mess.OnlyPM)
        addCountCmd('#anonymous', sender, _cmd)
        var teks = `Hai ${pushname !== undefined ? pushname : 'Kak'} Selamat Datang di Anonymous Chat\n\nKetik ${prefix}search untuk mencari Teman Chat anda.`
        reply(teks)
        break
      case prefix + 'start': case prefix + 'search':
        if (isGroup) return reply(mess.OnlyPM)
        addCountCmd('#start', sender, _cmd)
        var rumss = Object.values(anonymous).find(room => anonyCheck(sender, room))
        var rooms = Object.values(anonymous).find(room => anonyCheck(sender, room) && room.state == 'CHATTING')
        if (rooms) {
          var teks = `[⚠️] Kamu masih dalam sesi chat dengan partner! ❌\n\n${anonteks.stop}\n${anonteks.skip}`
          return conn.sendMessage(from, { text: teks })
        } else if (rumss) {
          var teks = `[🔎] Mohon tunggu sedang mencari teman chat\n\n${anonteks.stop}`
          return conn.sendMessage(from, { text: teks })
        }
        var roomm = Object.values(anonymous).find(room => room.state == "WAITING" && !anonyCheck(sender, room))
        if (roomm) {
          roomm.b = sender
          roomm.state = "CHATTING"
          var teks = `_Pasangan Ditemukan 🐼_\n${anonteks.stop}\n${anonteks.skip}\n${anonteks.sendprofile}`
          await conn.sendMessage(roomm.a, { text: teks })
          await conn.sendMessage(roomm.b, { text: teks })
        } else if (!rooms) {
          let id = + new Date
          anonymous[id] = {
            id,
            a: sender,
            b: '',
            state: "WAITING"
          }
          var teks = `[🔎] Mohon tunggu sedang mencari teman chat\n\n${anonteks.stop}`
          await conn.sendMessage(from, { text: teks })
        }
        break
      case prefix + 'stop':
        if (isGroup) return reply(mess.OnlyPM)
        addCountCmd('#stop', sender, _cmd)
        var roomo = Object.values(anonymous).find(room => anonyCheck(sender, room))
        if (!roomo) {
          var teks = `[⚠️] Kamu belum pernah mulai chat! ❌\n\n${anonteks.start}`
          await conn.sendMessage(from, { text: teks })
        } else {
          var teks = `[✅] Berhasil memberhentikan chat\n\n${anonteks.start}`
          var teks2 = `[⚠️] Sesi chat ini telah diberhentikan oleh teman chat kamu\n\n${anonteks.start}`
          await conn.sendMessage(from, { text: teks })
          let other = anonyOther(sender, roomo)
          if (other) await conn.sendMessage(other, { text: teks2 })
          delete anonymous[roomo.id]
        }
        break
      case prefix + 'next': case prefix + 'skip':
        if (isGroup) return reply(mess.OnlyPM)
        addCountCmd('#next', sender, _cmd)
        let romeo = Object.values(anonymous).find(room => anonyCheck(sender, room))
        if (!romeo) {
          var teks = `[⚠️] Kamu belum pernah memulai chat! ❌\n\n${anonteks.start}`
          return await conn.sendMessage(from, { text: teks })
        } else {
          let other = anonyOther(sender, romeo)
          var teks1 = `[⚠️] Sesi chat ini telah diberhentikan oleh teman chat kamu! ❌\n\n${anonteks.start}`
          if (other) await conn.sendMessage(other, { text: teks1 })
          delete anonymous[romeo.id]
        }
        let room = Object.values(anonymous).find(room => room.state == "WAITING" && !anonyCheck(sender, room))
        if (room) {
          room.b = sender
          room.state = "CHATTING"
          var teks = `_Pasangan Ditemukan 🐼_\n${anonteks.skip}\n${anonteks.stop}\n${anonteks.sendprofile}`
          await conn.sendMessage(room.a, { text: teks })
          await conn.sendMessage(room.b, { text: teks })
        } else {
          let id = + new Date
          anonymous[id] = {
            id,
            a: sender,
            b: '',
            state: "WAITING"
          }
          var teks = `[🔎] Mohon tunggu sedang mencari teman chat\n\n${anonteks.stop}`
          await conn.sendMessage(from, { text: teks })
        }
        break
      case prefix + 'sendprofile': case prefix + 'sendprofil':
        if (isGroup) return reply(mess.OnlyPM)
        let romoe = Object.values(anonymous).find(room => anonyCheck(sender, room) && room.state == 'CHATTING')
        addCountCmd('#sendprofile', sender, _cmd)
        if (!romoe) {
          var teks = `[⚠️] Kamu belum pernah memulai chat! ❌\n\n${anonteks.start}`
          await conn.sendMessage(from, { text: teks })
        } else {
          let rms = Object.values(anonymous).find(room => [room.a, room.b].includes(sender) && room.state == "CHATTING")
          var partnerJID = anonyOther(sender, rms)
          var res = await conn.sendContact(partnerJID, [sender.split("@")[0]])
          conn.sendMessage(from, { text: '[✅] Berhasil mengirim profil ke teman chat anda!' }, { quoted: msg })
          conn.sendMessage(partnerJID, { text: '[👨👩] Teman chat kamu memberikan kontak profil nya!' }, { quoted: res })
        }
        break
      case prefix + 'secreto': case prefix + 'confes': case prefix + 'confess':
      case prefix + 'menfess': case prefix + 'menfes':
        if (isGroup) return reply(mess.OnlyPM)
        if (args.length < 2) return reply(`*Cara penggunaan :*\n${command} nomer|nama pengirim|pesannya\n\n*Note :* nomer harus format internasional dan nama pengirim boleh nama samaran atau rahasia\n\n*Contoh :* ${command} ${botNumber.split("@")[0]}|Seseorang|Hai Kak`)
        var num = q.split('|')[0]; var name = q.split('|')[1]; var pesan = q.split('|')[2];
        if (isNaN(num)) return reply(`Tujuan Harus Berupa Nomor!\n\nContoh :\n${command} `+botNumber.split("@")[0]+'|Anonim|Hai Kak')
        if (!num) return reply(`Format salah, contoh pemakaian : ${command} ${botNumber.split("@")[0]}|Anonim|Hai Kak`)
        if (!name) return reply(`Format salah, contoh pemakaian : ${command} ${botNumber.split("@")[0]}|Anonim|Hai Kak`)
        if (!pesan) return reply(`Format salah, contoh pemakaian : ${command} ${botNumber.split("@")[0]}|Anonim|Hai Kak`)
        num = num.replace(/[^0-9]/gi, '')+'@s.whatsapp.net'
        var cek = await conn.onWhatsApp(num)
        if (cek.length === 0) return reply(`Nomer yang anda masukkan tidak terdaftar di WhatsApp!`)
        num = cek[0].jid
        if (sender === num) return reply(`Jangan kirim ke diri sendiri dong🥲`)
        if (botNumber === num) return reply(`Jangan kirim ke nomer bot kak🥲`)
        addCountCmd('#menfess', sender, _cmd)
        secreto.push({
          id: msg.key.id,
          msg
        })
        fs.writeFileSync('./database/secreto_balas.json', JSON.stringify(secreto, null, 2))
        var msgMen = await conn.sendMessage(num, { text: `Hai kamu menerima pesan Rahasia nih\n\nDari : *${name}*\nIsi Pesannya :\n${pesan}` }, { messageId: 'BAE5_' + sender.split("@")[0] + '_' + msg.key.id + '_' + makeid(5) + '_MNFS' })
        await sleep(1000)
        conn.sendMessage(num, { text: `Jika ingin membalas pesan rahasia ini, silahkan balas buble/balon pesan rahasia atau pesan ini dengan pesan balasanmu.`}, { messageId: 'BAE5_' + sender.split("@")[0] + '_' + msg.key.id + '_' + makeid(5) + '_MNFS', quoted: msgMen })
        reply(`Sukses mengirim pesan Rahasia kepada ${num.split("@")[0]}`)
        break
      case prefix + 'chatw': case prefix + 'chat':
      case prefix + 'chatwith':
        if (isGroup) return reply(mess.OnlyPM)
        var button_with = [
          { buttonId: prefix + 'ex_buy chat_with', buttonText: { displayText: `Contoh Format` }, type: 1 }
        ]
        var cek_chat = isChat(sender, chat_with)
        if (cek_chat !== undefined) {
          if (cek_chat.status === 'WAIT') {
            if (cek_chat.a === sender) return reply(`Kamu sedang menunggu konfirmasi dari nomer yang tadi, ketik ${prefix}batalchat untuk membatalkan chat sebelumnya`)
            if (cek_chat.b === sender) return reply(`Sebelumnya ada yang mengajak kamu untuk chatan, silahkan cek pesan diatas lalu pencet tombol Terima atau Tolak\nJika sudah tidak ada pesannya, silahkan ketik ${prefix}batalchat`)
          }
          if (cek_chat.status === 'CHAT') return reply(`Kamu sedang berada dalam sesi chat, ketik ${prefix}batalchat untuk memberhentikan sesi chat sebelumnya`)
        }
        if (args.length < 2) return reply(`Kirim perintah ${command} nomer|pesan`)
        var nom = q.split('|')[0]; var pess = q.split('|')[1]
        if (isNaN(nom)) return reply(`Format salah, nomer harus berupa angka\n\nCara penggunaan :\n${command} nomer|pesan\n\nContoh :\n${command} ${botNumber.split("@")[0]}|Terima dong`)
        if (!pess) return reply(`Format salah, masukkan paramater pesan\n\nCara penggunaan :\n${command} nomer|pesan\n\nContoh :\n${command} ${botNumber.split("@")[0]}|Terima dong`)
        nom = nom.replace(/[^0-9]/gi, '')+'@s.whatsapp.net'
        var cekNum = await conn.onWhatsApp(nom)
        if (cekNum.length === 0) return reply(`Nomer yang anda masukkan tidak terdaftar di WhatsApp`)
        nom = cekNum[0].jid
        var cek2 = isChat(nom, chat_with)
        if (cek2 !== undefined) return reply(`Nomer tersebut sedang berada di sesi chat dengan orang lain!`)
        if (sender === nom) return reply(`Masa mau chatan sama diri sendiri🥲`)
        if (botNumber === nom) return reply(`Bot gabisa chatan sama kakak🥲`)
        addCountCmd('#chatwith', sender, _cmd)
        var id_chat = makeid(15)
        var obj = {
          id: id_chat,
          a: sender,
          b: nom,
          status: 'WAIT'
        }
        chat_with.push(obj)
        fs.writeFileSync('./database/chatwith.json', JSON.stringify(chat_with, null, 2))
        var btnMsg = {
          text: `Haii, ada yang ingin chatan sama kamu nih\n\nPesannya :\n${pess}`,
          footer: 'Kamu bisa Terima atau Tolak permintaan chat tersebut dengan cara menekan salah satu tombol dibawah!',
          buttons: [
            { buttonId: '.acc_chat '+id_chat, buttonText: { displayText: 'Terima' }, type: 1 },
            { buttonId: '.dn_acc '+id_chat, buttonText: { displayText: 'Tolak' }, type: 1 }
          ]
        }
        conn.sendMessage(nom, btnMsg)
        reply(`Sukses mengirim permintaan chat dengan nomer tersebut, tunggu konfirmasi dari dia...`)
        break
      case prefix + 'acc_chat':
        if (!isQuotedMsg) return
        if (quotedMsg.type !== 'buttonsMessage') return
        if (msg.type !== 'buttonsResponseMessage') return
        if (isChat(sender, chat_with) === undefined) return reply(`Kamu sedang tidak berada didalam sesi chat manapun!`)
        var data1 = isChat(sender, chat_with)
        if (data1.id !== args[1]) return reply(`Tombol yang kamu pencet sudah tidak berlaku lagi`)
        var posi1 = chat_with.indexOf(data1)
        chat_with[posi1].status = 'CHAT'
        fs.writeFileSync('./database/chatwith.json', JSON.stringify(chat_with, null, 2))
        reply(`Sukses Konfirmasi Chat dengan orang yang ingin Chatan denganmu, silahkan kirim pesan atau tunggu pesan darinya`)
        sendMess(data1.a, `Seseorang yang ingin kamu Chat sudah menerima permintaan Chat kamu, silahkan kirim pesan kepadanya!`)
        break
      case prefix + 'dn_acc':
        if (!isQuotedMsg) return
        if (quotedMsg.type !== 'buttonsMessage') return
        if (msg.type !== 'buttonsResponseMessage') return
        if (isChat(sender, chat_with) === undefined) return reply(`Kamu sedang tidak berada didalam sesi chat manapun!`)
        var data2 = isChat(sender, chat_with)
        if (data2.id !== args[1]) return reply(`Tombol yang kamu pencet sudah tidak berlaku lagi`)
        if (data2.status === 'CHAT') return reply(`Tombol yang kamu pencet sudah tidak berlaku lagi, silahkan ketik ${prefix}batalchat untuk menghentikan sesi chat ini`)
        var posi2 = chat_with.indexOf(data2)
        chat_with.splice(posi2, 1)
        fs.writeFileSync('./database/chatwith.json', JSON.stringify(chat_with, null, 2))
        reply(`Sukses menolak permintaan Chat tersebut`)
        sendMess(data2.a, `Yahh permintaan chat kamu ditolak, NT cuy:(`)
        break
      case prefix + 'batalchat':
        if (isGroup) return reply(mess.OnlyPM)
        if (isChat(sender, chat_with) === undefined) return reply(`Kamu sedang tidak berada didalam sesi chat manapun!`)
        var cek_data = isChat(sender, chat_with)
        if (cek_data.status === 'WAIT') {
          var posi_x = chat_with.indexOf(cek_data)
          if (cek_data.a === sender) {
            addCountCmd('#batalchat', sender, _cmd)
            sendMess(cek_data.b, `Seseorang telah membatalkan permintaan chatnya denganmu`)
            chat_with.splice(posi_x, 1)
            fs.writeFileSync('./database/chatwith.json', JSON.stringify(chat_with, null, 2))
            reply(`Sukses membatalkan chat`)
            return
          } else if (cek_data.b === sender) {
            addCountCmd('#batalchat', sender, _cmd)
            sendMess(cek_data.a, `Seseorang telah menolak permintaan chat kamu`)
            chat_with.splice(posi_x, 1)
            fs.writeFileSync('./database/chatwith.json', JSON.stringify(chat_with, null, 2))
            reply(`Sukses menolak chat tersebut`)
            return
          }
        } else if (cek_data.status === 'CHAT') {
          var posi_y = chat_with.indexOf(cek_data)
          if (cek_data.a === sender) {
            addCountCmd('#batalchat', sender, _cmd)
            sendMess(cek_data.b, `Yahh, lawan chat kamu sudah memberhentikan sesi chat ini🥲`)
            chat_with.splice(posi_y, 1)
            fs.writeFileSync('./database/chatwith.json', JSON.stringify(chat_with, null, 2))
            reply(`Sukses memberhentikan sesi chat ini`)
            return
          } else if (cek_data.b === sender) {
            addCountCmd('#batalchat', sender, _cmd)
            sendMess(cek_data.a, `Yahh, lawan chat kamu sudah memberhentikan sesi chat ini🥲`)
            chat_with.splice(posi_y, 1)
            fs.writeFileSync('./database/chatwith.json', JSON.stringify(chat_with, null, 2))
            reply(`Sukses memberhentikan sesi chat ini`)
            return
          }
        }
        break
      case prefix + 'galery_menfess':
        if (isGroup) {
          if (from === id_group) return reply(`Kirim pesan kamu di chat pribadi bot`)
          return reply(mess.OnlyPM)
        }
        var cek_mem = await getMembers(id_group)
        var cekJoin = cek_mem.includes(sender) ? true : false
        addCountCmd('#galery_menfess', sender, _cmd)
        if (!cekJoin) {
          var url_grup = await conn.groupInviteCode(id_group)
          var teks = `Haiiiii 🥰\n\nSilahkan join ke Grup WA dibawah terlebih dahulu ya sayang biar bisa melihat apa yang kamu kirim\n\nhttps://chat.whatsapp.com/${url_grup}`
          conn.sendMessage(from, { text: teks }, { quoted: msg })
        } else {
          var teks_exp = `Silahkan gunakan format berikut untuk mengirim pesan

#boy / #girl untuk mencari Pasangan, Teman, partner FWB
#ask utuk Bertanya
#story untuk Berbagi cerita
#random untuk Acak
#jokes untuk Candaan
#curhat untuk Curhat
#kutipan untuk Kata-kata/Quotes`
          reply(teks_exp).then(res => {
            conn.sendMessage(from, { text: `Contoh Penggunaan:\n"Haii semuanya, selamat pagi #random"\n\nbegitu pula pada tag yang lain, jangan pakai tanda " itu hanya contoh!`})
          })
        }
        break
      
      // DOWNLOADER MENU
      case prefix + 'nhentai': case prefix + 'nhentaidl':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length > 6) return reply(`Kirim perintah ${command} code`)
addCountCmd('#nhentaidl', sender, _cmd)
var pedeef = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${q}?apikey=${lolkey}`)
var detil = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${q}/apikey=${lolkey}`)

reply(monospace(mess.wait))
conn.sendMessage(from, { document: await getBuffer(pedeef.result), fileName: detil.result.title_native+'.pdf', mimetype: 'application/pdf' }, { quoted: msg })

   limitAdd(sender, limit)
   break
      case prefix + 'tiktoknowm': case prefix + 'tiktok':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Kirim perintah ${command} link`)
        if (!isUrl(args[1])) return reply(mess.error.Iv)
        if (!args[1].includes('tiktok')) return reply(mess.error.Iv)
        reply(mess.wait)
        addCountCmd('#tiktok', sender, _cmd)
        require('../lib/tiktok2').Tiktok(args[1]).then( data => {
          conn.sendMessage(from, { video: { url: data.nowm }}, { quoted: msg })
          limitAdd(sender, limit)
        }).catch(() => reply(mess.error.api))
        break
      case prefix + 'play':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Kirim perintah ${command} query`)
        reply(mess.wait)
        addCountCmd('#play', sender, _cmd)
        yts(q).then(res => {
          var datas = res.videos[0]
          yta(datas.url).then(async(data) => {
            var teks = `*Youtube Play Music*\n\n*≻ Title :* ${data.title}\n*≻ Quality :* 128p\n*≻ Size :* ${data.filesizeF}\n*≻ Url Source :* ${datas.url}\n\n_wait a minute sending media..._`
            if (Number(data.filesize) >= 30000) {
              var res = await axios.get(`https://tinyurl.com/api-create.php?url=${data.dl_link}`)
              teks = `*Youtube Play Music*\n\n*≻ Title :* ${data.title}\n*≻ Quality :* 128p\n*≻ Size :* ${data.filesizeF}\n*≻ Url Source :* ${datas.url}\n*≻ Download :* ${res.data}\n\n_for larger sizes, presented in the form of a link_`
              conn.sendMessage(from, { image: { url: data.thumb }, caption: teks }, { quoted: msg })
              limitAdd(sender, limit)
            } else {
              conn.sendMessage(from, { image: { url: data.thumb }, caption: teks }, { quoted: msg })
              conn.sendMessage(from, { document: await getBuffer(data.dl_link), fileName: `${data.title}.mp3`, mimetype: 'audio/mp3'}, { quoted: msg })
              limitAdd(sender, limit)
            }
          }).catch(() => reply(mess.error.api))
        })
        break
      case prefix + 'ytmp4': case prefix + 'mp4':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Kirim perintah ${command} link`)
        if (!isUrl(args[1])) return reply(mess.error.Iv)
        if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
        reply(mess.wait)
        addCountCmd('#ytmp4', sender, _cmd)
        args[1] = args[1].includes('shorts') ? args[1].replace('https://youtube.com/shorts/', 'https://youtu.be/') : args[1]
        ytv(args[1]).then(async(data) => {
          var teks = `*Youtube Video Downloader*\n\n*≻ Title :* ${data.title}\n*≻ Quality :* 360p\n*≻ Size :* ${data.filesizeF}\n*≻ Url Source :* ${args[1]}`
          if (Number(data.filesize) >= 30000) {
            var res = await axios.get(`https://tinyurl.com/api-create.php?url=${data.dl_link}`)
            teks += `\n*≻ Download :* ${res.data}\n\n_for larger sizes, presented in the form of a link_`
            conn.sendMessage(from, { image: { url: data.thumb }, caption: teks }, { quoted: msg })
            limitAdd(sender, limit)
          } else {
            conn.sendMessage(from, { video: await getBuffer(data.dl_link), caption: teks }, { quoted: msg })
            limitAdd(sender, limit)
          }
        }).catch(() => reply(mess.error.api))
        break
      case prefix + 'ghosky': case prefix + 'mp3':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Kirim perintah ${command} link`)
        if (!isUrl(args[1])) return reply(mess.error.Iv)
        if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
        reply(mess.wait)
        addCountCmd('#ytmp3', sender, _cmd)
        args[1] = args[1].includes('shorts') ? args[1].replace('https://youtube.com/shorts/', 'https://youtu.be/') : args[1]
        yta(args[1]).then(async(data) => {
          var teks = `*Youtube Audio Downloader*\n\n*≻ Title :* ${data.title}\n*≻ Quality :* 128p\n*≻ Size :* ${data.filesizeF}\n*≻ Url Source :* ${args[1]}\n\n_wait a minute sending media..._`
          if (Number(data.filesize) >= 30000) {
            var res = await axios.get(`https://tinyurl.com/api-create.php?url=${data.dl_link}`)
            teks = `*Youtube Audio Downloader*\n\n*≻ Title :* ${data.title}\n*≻ Quality :* 128p\n*≻ Size :* ${data.filesizeF}\n*≻ Url Source :* ${args[1]}\n*≻ Download :* ${res.data}\n\n_for larger sizes, presented in the form of a link_`
            conn.sendMessage(from, { image: { url: data.thumb }, caption: teks }, { quoted: msg })
            limitAdd(sender, limit)
          } else {
            conn.sendMessage(from, { image: { url: data.thumb }, caption: teks }, { quoted: msg })
            conn.sendMessage(from, { document: await getBuffer(data.dl_link), fileName: `${data.title}.mp3`, mimetype: 'audio/mp3'}, { quoted: msg })
            limitAdd(sender, limit)
          }
        }).catch(() => reply(mess.error.api))
        break
      case prefix + 'getvideo': case prefix + 'getvidio':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (!isQuotedImage) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
        if (!quotedMsg.fromMe) return reply(`Hanya bisa mengambil hasil dari pesan bot`)
        if (args.length < 2) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
        var kuoted = await quotedMsg.chats
        var ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/gi
        var arrey = [...kuoted.matchAll(ytIdRegex)].map(x => x[1])
        if (arrey.length == 0) return reply(`Reply hasil dari *${prefix}ytsearch* dengan perintah *${command}* urutan`)
        if (isNaN(args[1])) return reply(`Hanya support angka! pilih angka 1 sampai 10\nContoh : ${command} 2`)
        if (args[1] > arrey.length) return reply(`Urutan Hasil *${prefix}ytsearch* Hanya Sampai *${arrey.length}*`)
        reply(mess.wait)
        addCountCmd('#getvideo', sender, _cmd)
        ytv(`https://youtube.com/watch?v=${arrey[args[1] -1]}`).then(async(data) => {
          data.url = `https://youtube.com/watch?v=${arrey[args[1] -1]}`
          var teks = `*Youtube Video Downloader*\n\n*≻ Title :* ${data.title}\n*≻ Quality :* 360p\n*≻ Size :* ${data.filesizeF}\n*≻ Url Source :* ${data.url}`
          if (Number(data.filesize) >= 30000) {
            var res = await axios.get(`https://tinyurl.com/api-create.php?url=${data.dl_link}`)
            teks += `\n*≻ Download :* ${res.data}\n\n_for larger sizes, presented in the form of a link_`
            conn.sendMessage(from, { image: { url: data.thumb }, caption: teks }, { quoted: msg })
            limitAdd(sender, limit)
          } else {
            conn.sendMessage(from, { video: await getBuffer(data.dl_link), caption: teks }, { quoted: msg })
            limitAdd(sender, limit)
          }
        }).catch(() => reply(mess.error.api))
        break
      case prefix + 'getmusik': case prefix + 'getmusic':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (!isQuotedImage) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
        if (!quotedMsg.fromMe) return reply(`Hanya bisa mengambil hasil dari pesan bot`)
        if (args.length < 2) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
        var kuoted = await quotedMsg.chats
        var ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/gi
        var arrey = [...kuoted.matchAll(ytIdRegex)].map(x => x[1])
        if (arrey.length == 0) return reply(`Reply hasil dari *${prefix}ytsearch* dengan perintah *${command}* urutan`)
        if (isNaN(args[1])) return reply(`Hanya support angka! pilih angka 1 sampai 10\nContoh : ${command} 2`)
        if (args[1] > arrey.length) return reply(`Urutan Hasil *${prefix}ytsearch* Hanya Sampai *${arrey.length}*`)
        reply(mess.wait)
        addCountCmd('#getmusic', sender, _cmd)
        yta(`https://youtube.com/watch?v=${arrey[args[1] -1]}`).then(async(data) => {
          data.url = `https://youtube.com/watch?v=${arrey[args[1] -1]}`
          var teks = `*Youtube Audio Downloader*\n\n*≻ Title :* ${data.title}\n*≻ Quality :* 128p\n*≻ Size :* ${data.filesizeF}\n*≻ Url Source :* ${data.url}\n\n_wait a minute sending media..._`
          if (Number(data.filesize) >= 30000) {
            var res = await axios.get(`https://tinyurl.com/api-create.php?url=${data.dl_link}`)
            teks = `*Youtube Audio Downloader*\n\n*≻ Title :* ${data.title}\n*≻ Quality :* 128p\n*≻ Size :* ${data.filesizeF}\n*≻ Url Source :* ${data.url}\n*≻ Download :* ${res.data}\n\n_for larger sizes, presented in the form of a link_`
            conn.sendMessage(from, { image: { url: data.thumb }, caption: teks }, { quoted: msg })
            limitAdd(sender, limit)
          } else {
            conn.sendMessage(from, { image: { url: data.thumb }, caption: teks }, { quoted: msg })
            conn.sendMessage(from, { document: await getBuffer(data.dl_link), fileName: `${data.title}.mp3`, mimetype: 'audio/mp3'}, { quoted: msg })
            limitAdd(sender, limit)
          }
        }).catch(() => reply(mess.error.api))
        break
      case prefix + 'telestick': case prefix + 'telesticker':
        if (!isPremium) return reply(mess.OnlyPrem)
        if (isGroup) return reply(`Untuk menghindari Spam, fitur ${command} hanya bisa digunakan di Chat Pribadi`)
        if (args.length < 2) return reply(`Kirim perintah ${command} link`)
        if (!isUrl(args[1])) return reply(mess.error.Iv)
        if (!args[1].includes('t.me')) return reply(mess.error.Iv)
        reply(mess.wait)
        addCountCmd('#telestick', sender, _cmd)
        telesticker(args[1]).then(async(data) => {
          for (let i of data) {
            if (i.status == 200) {
              conn.sendImageAsSticker(from, i.url, '', { packname, author })
              await sleep(1000)
            } else {
              conn.sendMessage(from, { text: 'Salah satu sticker error!' })
            }
          }
        }).catch((e) => reply(mess.error.api))
        break
      case prefix + 'mediafire': case prefix + 'mfdl':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix} limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Kirim perintah ${command} link`)
        if (!isUrl(args[1])) return reply(mess.error.Iv)
        if (!args[1].includes('mediafire.com')) return reply(mess.error.Iv)
        reply(mess.wait)
        addCountCmd('#mediafire', sender, _cmd)
        mediafire(args[1]).then(async(data) => {
          data.nama = decodeURIComponent(data.nama)
          var media = await getBuffer(data.link)
          if (data.mime.includes('mp4')) {
            conn.sendMessage(from, { document: media, fileName: data.nama, mimetype: 'video/mp4' }, { quoted: msg })
          } else if (data.mime.includes('mp3')) {
            conn.sendMessage(from, { document: media, fileName: data.nama, mimetype: 'audio/mp3' }, { quoted: msg })
          } else {
            conn.sendMessage(from, { document: media, fileName: data.nama, mimetype: 'application/'+data.mime }, { quoted: msg })
          }
        }).catch(() => reply(mess.error.api))
        break
      
      // RANDOM MENU
      case prefix + 'loli':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.Lmt)
        var lolii = await getBuffer(`https://api.lolhuman.xyz/api/random/loli?apikey=${lolkey}`)
        var kkk = '_'+'nih kak loli nya'+'_'
        reply(mess.wait)
        conn.sendMessage(from, { image: lolii, caption: kkk}, { quoted: msg })
        break
        case prefix + 'ttstalk': case prefix + 'stalktiktok':
          if (isLimit(sendeer, isPremium, isOnwer, limitCount, limit)) return reply(mess.Lmt)
          var ttstalk = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${q}?apikey=${lolkey}`)
          conn.sendMessage(from, { image: await getBuffer(ttstalk.result.user_picture), caption: 'Username : '+ttstalk.result.username+'\n'+'Nickname : '+ttstalk.result.nickname+'\n'+'Bio : '+ttstalk.result.bio+'\n'+'Followers : '+ttstalk.result.followers+'\n'+'Following : '+ttstalk.result.followings+'\n'+'Likes : '+ttstalk.result.likes+'\n'+'Video : '+ttstalk.result.video}, { quoted: msg })
          break
      case prefix + 'quote': case prefix + 'quotes':
      case prefix + 'randomquote': case prefix + 'randomquotes':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
          addCountCmd('#quotes', sender, _cmd)
          var data = JSON.parse(fs.readFileSync('./database/quotes.json'))
          data = pickRandom(data)
          reply(data.quotes+'\n\n-- '+data.author)
          limitAdd(sender, limit)
          break
      case prefix + 'fakta': case prefix + 'randomfakta':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
          addCountCmd('#fakta', sender, _cmd)
          var data = fs.readFileSync('./database/fakta.txt', 'utf-8').split('\n')
          reply(pickRandom(data))
          limitAdd(sender, limit)
          break
      case prefix + 'quoteanime': case prefix + 'quotesanime':
      case prefix + 'animequotes': case prefix + 'animequote':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        addCountCmd('#quoteanime', sender, _cmd)
        require('../lib/quoteanime').quoteAnime().then( res => {
          var data = pickRandom(res)
          var teks = `${data.quote}\n\n- ${data.char_name}\nin *${data.anime_title}* eps *${data.at_ep}*`
          reply(teks)
          limitAdd(sender, limit)
        }).catch((e) => reply(mess.error.api))
        break
      case prefix + 'cecan': case prefix + 'cewek':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        reply(mess.wait)
        addCountCmd('#cecan', sender, _cmd)
        var query = ["cecan hd","cecan indo","cewe cantik", "cewe aesthetic", "cecan aesthetic"]
        var data = await pinterest(pickRandom(query))
        conn.sendMessage(from, { caption: "Random Cewe Cantik", image: { url: pickRandom(data.result) } }, { quoted: msg })
        limitAdd(sender, limit)
        break
      case prefix + 'cogan': case prefix + 'cowok':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        reply(mess.wait)
        addCountCmd('#cogan', sender, _cmd)
        var query = ["cogan hd","cogan indo","cowo ganteng","handsome boy","hot boy","oppa","cowo aesthetic","cogan aesthetic"]
        var data = await pinterest(pickRandom(query))
        conn.sendMessage(from, { caption: "Random Cowo Ganteng", image: { url: pickRandom(data.result) } }, { quoted: msg })
        limitAdd(sender, limit)
        break
      case prefix + 'waifu':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        reply(mess.wait)
        addCountCmd('#waifu', sender, _cmd)
        var data = (await axios.get('https://waifu.pics/api/sfw/waifu')).data.url
        conn.sendMessage(from, { caption: "Random Waifu", image: { url: data } }, { quoted: msg })
        limitAdd(sender, limit)
        break
      case prefix + 'meme': case prefix + 'memeindo':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        reply(mess.wait)
        addCountCmd('#meme', sender, _cmd)
        var meme = await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=${lolkey}`)
        conn.sendMessage(from, { caption: "Random Meme", image: meme }, { quoted: msg })
        limitAdd(sender, limit)
        break
      case prefix + 'dark': case prefix + 'darkjoke': case prefix + 'darkjokes':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        reply(mess.wait)
        addCountCmd('#darkjoke', sender, _cmd)
        var dark = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lolkey}`)
        conn.sendMessage(from, { caption: "Random Dark Joke", image: dark }, { quoted: msg })
        limitAdd(sender, limit)
        break
      
      // SEARCH MENU
      case prefix + 'lirik': case 'liriklagu':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Kirim perintah ${command} judul lagu`)
        reply(mess.wait)
        addCountCmd('#lirik', sender, _cmd)
        Musikmatch(q).then(async(data) => {
          var teks = `*${data.result.judul} - ${data.result.penyanyi}*\n\n${data.result.lirik.replace('No translations availableAdd Translation', '').trim()}`
          conn.sendMessage(from, { image: { url: data.result.thumb }, caption: teks }, { quoted: msg })
          limitAdd(sender, limit)
          }).catch(() => reply(`Judul lagu tidak ditemukan`))
        break
      case prefix + 'grupwa': case prefix + 'searchgrup':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Kirim perintah ${command} nama grup`)
        reply(mess.wait)
        addCountCmd('#grupwa', sender, _cmd)
        require('../lib/grupwa').grupwa(q).then(async(data) => {
          if (data.length == 0) return reply(`Grup ${q} tidak ditemukan`)
          var teks = `*Hasil Pencarian Dari ${q}*\n\n`
          for (let x of data.result) {
            teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
          }
          reply(teks)
          limitAdd(sender, limit)
        }).catch(() => reply(mess.error.api))
        break
      case prefix + 'pinterest':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Kirim perintah ${command} query atau ${command} query --jumlah\nContoh :\n${command} cecan atau ${command} cecan --10`)
        var jumlah;
        if (q.includes('--')) jumlah = q.split('--')[1]
        if (jumlah > 20) return reply(`Maksimal 20`)
        if (q.includes('--') && isGroup) return reply(`Untuk opsi lebih dari 1 foto, hanya bisa digunakan di private message`)
        reply(mess.wait)
        addCountCmd('#pinterest', sender, _cmd)
        pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
          if (q.includes('--')) {
            if (data.result.length < jumlah) {
              jumlah = data.result.length
              reply(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
            }
            for (let i = 0; i < jumlah; i++) {
              conn.sendMessage(from, { image: { url: data.result[i] }})
            }
            limitAdd(sender, limit)
          } else {
            conn.sendMessage(from, { caption: `Hasil pencarian dari ${q}`, image: { url: pickRandom(data.result) } }, { quoted: msg })
            limitAdd(sender, limit)
          }
        })
        break
      case prefix + 'yts': case prefix + 'ytsearch':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Kirim perintah ${command} query`)
        reply(mess.wait)
        addCountCmd('#ytsearch', sender, _cmd)
        yts(q).then( data => {
          let yt = data.videos
          var jumlah = 15
          if (yt.length < jumlah) jumlah = yt.length
          var no = 0
          let txt = `*YOUTUBE SEARCH*

*Data berhasil didapatkan*
*Hasil pencarian dari ${q}*

*${prefix}getmusic <no urutan>*
*${prefix}getvideo <no urutan>*
Untuk mengambil Audio/Video dari hasil pencarian`
          for (let i = 0; i < jumlah; i++) {
            no += 1
            txt += `\n─────────────────\n\n*No Urutan : ${no.toString()}*\n*▢ Judul :* ${yt[i].title}\n*▢ ID :* ${yt[i].videoId}\n*▢ Channel :* ${yt[i].author.name}\n*▢ Upload :* ${yt[i].ago}\n*▢ Ditonton :* ${yt[i].views}\n*▢ Duration :* ${yt[i].timestamp}\n*▢ URL :* ${yt[i].url}\n`
          }
          conn.sendMessage(from, { image: { url: yt[0].image }, caption: txt }, { quoted: msg })
          limitAdd(sender, limit)
        }).catch(() => reply(mess.error.api))
        break
      case prefix + 'whatmusic': case prefix + 'whatmusik':
        if (!isPremium) return reply(mess.OnlyPrem)
        if (isVideo || isQuotedVideo || isQuotedAudio) {
          if (isQuotedAudio && quotedMsg.id.endsWith('TL')) return reply(`Gaboleh curang cuy!`)
          reply(mess.wait)
          addCountCmd('#whatmusic', sender, _cmd)
          try {
            var media;
            if (isVideo || isQuotedVideo) {
              media = await conn.downloadAndSaveMediaMessage(msg, 'video', './sticker/a'+sender+'.mp3')
            } else if (isQuotedAudio) {
              media = await conn.downloadAndSaveMediaMessage(msg, 'audio', './sticker/a'+sender+'.mp3')
            }
            const acr = new acrcloud({
              host: "identify-eu-west-1.acrcloud.com",
              access_key: "1598f147ee841b02dc18821a1be79fae",
              access_secret: "FLMLqyIMv19PHb8L4Xgy86YeD1K2qrHQFnL3muYO"
            });
            var sampleq = fs.readFileSync('./sticker/a'+sender+'.mp3')
            var metadata = await acr.identify(sampleq)
            console.log(metadata)
            conn.reply(from, `*「 Berhasil Ditemukan 」*\n\n➸ Judul Lagu : ${metadata.metadata.music[0].title}\n➸ Artis : ${metadata.metadata.music[0].artists[0].name}\n➸ Album : ${metadata.metadata.music[0].album.name}\n➸ Rilis : ${metadata.metadata.music[0].release_date}`, msg)
            fs.unlinkSync('./sticker/a'+sender+'.mp3')
          } catch (e) {
            fs.unlinkSync('./sticker/a'+sender+'.mp3')
            reply(`Lagu tidak dapat ditemukan, atau ukuran lagu yang terlalu besar!`)
          }
        } else {
          reply(`Reply video/audio dan sertakan caption ${prefix}whatmusic`)
        }
        break
      
      // GAME MENU
      case prefix + 'tictactoe': case prefix + 'ttt': case prefix + 'ttc':
        if (!isGroup)return reply(mess.OnlyGrup)
        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
        if (isTicTacToe(from, tictactoe)) return reply(`Masih ada game yg blum selesai`)
        if (args.length < 2) return reply(`Kirim perintah *${prefix}tictactoe* @tag`)
        if (mentioned.length !== 1) {
          if (mentioned[0] === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
          if (mentioned[0] === sender) return reply(`Sad amat main ama diri sendiri`)
          var hadiah = randomNomor(100, 150)
          addCountCmd('#tictactoe', sender, _cmd)
          mentions(monospace(`@${sender.split('@')[0]} menantang @${mentioned[0].split('@')[0]} untuk bermain TicTacToe\n\nKirim (Y/N) untuk bermain\n\nHadiah : ${hadiah} balance`), [sender, mentioned[0]], false)
          tictactoe.push({
            id: from,
            status: null,
            hadiah: hadiah,
            penantang: sender,
            ditantang: mentioned[0],
            waktu: setTimeout(() => {
              if (isTicTacToe(from, tictactoe)) conn.sendMessage(from, { text: `Waktu TicTacToe Habis, Tidak ada balasan dari @${mentioned[0].split("@")[0]}`, mentions: [mentioned[0]] })
              var posi = getPosTic(from, tictactoe)
              tictactoe.splice(posi, 1)
            }, 30000),
            timeout: 60000,
            TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
          })
          gameAdd(sender, glimit)
        } else {
          reply(`Kirim perintah *${prefix}tictactoe* @tag`)
        }
        break
      case prefix + 'delttt': case prefix + 'delttc':
        if (!isGroup)return reply(mess.OnlyGrup)
        if (!isTicTacToe(from, tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
        var posi = getPosTic(from, tictactoe)
        if (tictactoe[posi].penantang.includes(sender)) {
          addCountCmd('#delttc', sender, _cmd)
          tictactoe.splice(posi, 1)
          reply(`Berhasil menghapus sesi tictactoe di grup ini`)
        } else if (tictactoe[posi].ditantang.includes(sender)) {
          addCountCmd('#delttc', sender, _cmd)
          tictactoe.splice(posi, 1)
          reply(`Berhasil menghapus sesi tictactoe di grup ini`)
        } else if (isGroupAdmins) {
          addCountCmd('#delttc', sender, _cmd)
          tictactoe.splice(posi, 1)
          reply(`Berhasil menghapus sesi tictactoe di grup ini`)
        } else if (isOwner) {
          addCountCmd('#delttc', sender, _cmd)
          tictactoe.splice(posi, 1)
          reply(`Berhasil menghapus sesi tictactoe di grup ini`)
        } else {
          reply(`Anda tidak bisa menghapus sesi tictactoe, karena bukan pemain!`)
        }
        break
      case prefix + 'ttc-solo': case prefix + 'tictactoe-solo': case prefix + 'ttcsolo':
        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
        if (isTicTacToe(from, ttcsolo)) return reply(`Masih ada game yg blum selesai\nketik ${prefix}endttc untuk menghapus sesi`)
        addCountCmd('#tictactoe-solo', sender, _cmd)
        reply(monospace(`TICTACTOE GAME\n\n@${sender.split("@")[0]} melawan ${setting.botName}\n\nKirim (Y/N) untuk melanjutkan permainan`))
        ttcsolo.push({
          id: from,
          status: null,
          giliran: 'penantang',
          penantang: sender,
          ditantang: botName,
          TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
        })
        gameAdd(sender, glimit)
        break
      case prefix + 'endttc': case prefix + 'endtictactoe':
        if (!isTicTacToe(from, ttcsolo)) return reply(`Tidak ada sesi game TicTacToe di Grup ini!`)
        var posi = getPosTic(from, ttcsolo)
        if (ttcsolo[posi].penantang == sender) {
          reply(`Berhasil menghapus sesi TicTacToe Solo`)
          ttcsolo.splice(posi, 1)
        } else {
          reply(`Anda bukan pemain, suruh @${ttcsolo[posi].penantang.split("@")[0]} untuk mengetik ${prefix}endttc`)
        }
        break
      case prefix + 'tebakgambar': case prefix + 'tg':
        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
        if (isPlayGame(from, tebakgambar)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, tebakgambar[getGamePosi(from, tebakgambar)].msg)
        addCountCmd('#tebakgambar', sender, _cmd)
        var data = await pickRandom(data_tgambar)
        var teks = `*TEBAK GAMBAR*\n\n`+monospace(`Petunjuk : ${data.deskripsi}\nWaktu : ${gamewaktu}s`)
        conn.sendMessage(from, { image: { url: data.img }, caption: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'TG' })
        .then( res => {
          var jawab = data.jawaban.toLowerCase()
          addPlayGame(from, 'Tebak Gambar', jawab, gamewaktu, res, tebakgambar)
          gameAdd(sender, glimit)
        })
        break
      case prefix + 'kuis':
        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
        if (isPlayGame(from, kuis)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, kuis[getGamePosi(from, kuis)].msg)
        addCountCmd('#kuis', sender, _cmd)
        var data = await pickRandom(data_kuis)
        var { soal, jawaban } = data
        var teks = `*KUIS GAME*\n\n`+monospace(`Soal : ${soal}\nPetunjuk : ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
        conn.sendMessage(from, { text: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'KS' })
        .then( res => {
          var jawab = jawaban.toLowerCase()
          addPlayGame(from, 'Kuis Game', jawab, gamewaktu, res, kuis)
          gameAdd(sender, glimit)
        })
        break
      case prefix + 'tebaklagu': case prefix + 'tl':
        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
        if (isPlayGame(from, tebaklagu)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, tebaklagu[getGamePosi(from, tebaklagu)].msg)
        addCountCmd('#tebaklagu', sender, _cmd)
        require('../lib/tebaklagu').tebaklagu().then( data => {
          conn.sendPresenceUpdate('recording', from)
          var { preview, title} = data.result
          var teks = `*TEBAK LAGU*\n\n`+monospace(`Petunjuk : ${title.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
          conn.sendMessage(from, { audio: { url: preview }, mimetype: 'audio/mp4', ptt: true }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'TL' })
          .then( res => {
            conn.sendMessage(from, { text: teks }, { quoted: res })
            var jawab = title.toLowerCase()
            addPlayGame(from, 'Tebak Lagu', jawab, gamewaktu, res, tebaklagu)
            gameAdd(sender, glimit)
          })
        }).catch(() => reply(mess.error.api))
        break
      case prefix + 'delgame': case prefix + 'deletegame':
      case prefix + 'dellgame': case prefix + 'nyerah':
        if (!isQuotedMsg) return reply(`Balas pesan soal game yang ingin dihapus`)
        if (quotedMsg.id.endsWith('TG')) {
          var tg = getGamePosi(from, tebakgambar)
          if (tg == undefined) return reply(`Game tersebut sudah selesai`)
          if (tebakgambar[tg].msg.key.id !== quotedMsg.id) return reply(`Game tersebut sudah selesai`)
          addCountCmd('#nyerah', sender, _cmd)
          reply(`*Tebak Gambar*\nJawaban : ${tebakgambar[tg].jawaban}`)
          tebakgambar.splice(tg, 1)
        } else if (quotedMsg.id.endsWith('KS')) {
          var ks = getGamePosi(from, kuis)
          if (ks == undefined) return reply(`Game tersebut sudah selesai`)
          if (kuis[ks].msg.key.id !== quotedMsg.id) return reply(`Game tersebut sudah selesai`)
          addCountCmd('#nyerah', sender, _cmd)
          reply(`*Kuis Game*\nJawaban : ${kuis[ks].jawaban}`)
          kuis.splice(ks, 1)
        } else if (quotedMsg.id.endsWith('TL')) {
          var tl = getGamePosi(from, tebaklagu)
          if (tl == undefined) return reply(`Game tersebut sudah selesai`)
          if (tebaklagu[tl].msg.key.id !== quotedMsg.id) return reply(`Game tersebut sudah selesai`)
          addCountCmd('#nyerah', sender, _cmd)
          reply(`*Tebak Lagu*\nJawaban : ${tebaklagu[tl].jawaban}`)
          tebaklagu.splice(tl, 1)
        } else {
          reply(`Balas soal game!`)
        }
        break
      case prefix + 'casino':
        if (!isGroup)return reply(mess.OnlyGrup)
        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
        if (args.length < 2) return reply(`Kirim perintah *${command}* @tag nominal`)
        if (mentionUser.length == 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
        if (mentionUser.length > 2) return reply('Hanya bisa dengan 1 orang')
        if (mentionUser[0] === sender) return reply(`Sad amat main sama diri sendiri`)
        if (mentionUser[0] === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
        if (getCasino(from, casino) !== null) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delcasino*, untuk menghapus sesi`)
        if (args.length == 2) return reply('Masukan Nominal Nya')
        if (args[2].includes('-')) return reply(`Jangan menggunakan -`)
        if (isNaN(parseInt(args[2]))) return reply('Nominal Harus Berupa Angka!')
        var anu = getBalance(sender, balance)
        var ani = getBalance(mentionUser[0], balance)
        if (anu < args[2] || anu == 'undefined') return reply(`Balance Tidak Mencukupi, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
        if (ani < args[2] || ani == 'undefined') return reply(`Balance Lawan Tidak Mencukupi Untuk Bermain Denganmu\nKetik ${prefix}balance @tag untuk mengecek Balance lawanmu`)
        setCasino(from, sender.split("@")[0], mentioned[0].split("@")[0], parseInt(args[2]), casino)
        gameAdd(sender, glimit)
        var starGame = `🎰 Memulai Game Casino 💰\n\n• @${sender.replace("@s.whatsapp.net", "")} Menantang ${args[1]}, dengan Nominal: *$ ${parseInt(args[2])}*\n• Ketik Y/N untuk menerima atau menolak Permainan!\n• Jika 30 detik tidak ada Jawaban dari lawan, maka pertandingan otomatis dihapus`
        conn.sendMessage(from, { text: starGame, mentions: [sender, args[1].replace("@", "") + "@s.whatsapp.net"] }, { quoted: msg })
        break
      case prefix + 'delcasino':
        if (isPlayCasino(from, casino)) {
          var csn = sesiCasino(from, casino)
          if (csn.Z.includes(sender)) {
            addCountCmd('#delcasino', sender, _cmd)
            clearTimeout(csn.expired)
            deleteCasino(from, casino)
            reply('Berhasil Menghapus Sesi Casino')
          } else if (csn.Y.includes(sender)) {
            addCountCmd('#delcasino', sender, _cmd)
            clearTimeout(csn.expired)
            deleteCasino(from, casino)
            reply('Berhasil Menghapus Sesi Casino')
          } else if (isGroupAdmins) {
            addCountCmd('#delcasino', sender, _cmd)
            clearTimeout(csn.expired)
            deleteCasino(from, casino)
            reply('Berhasil Menghapus Sesi Casino')
          } else if (isOwner) {
            addCountCmd('#delcasino', sender, _cmd)
            clearTimeout(csn.expired)
            deleteCasino(from, casino)
            reply('Berhasil Menghapu Sesi Casino')
          } else {
            reply('Anda tidak bisa menghapus sesi casino, karena bukan pemain!')
          }
        } else {
          reply('Tidak ada sesi yang berlangsung')
        }
        break
      case prefix + 'akinatorstart': case prefix + 'akinator':
        if (isGroup) return reply(mess.OnlyPM)
        if (akinator.hasOwnProperty(sender.split('@')[0])) return reply("Selesain yg sebelumnya dulu atuh")
        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
        addCountCmd('#akinatorstart', sender, _cmd)
        var get_result = await akiStart()
        if (get_result.status == 200) {
          var { server, frontaddr, session, signature, question, progression, step } = get_result.result
          const data = {}
          data["server"] = server
          data["frontaddr"] = frontaddr
          data["session"] = session
          data["signature"] = signature
          data["question"] = question
          data["step"] = step
          var ini_txt = `${question}\n\n`
          ini_txt += "0 - Ya\n"
          ini_txt += "1 - Tidak\n"
          ini_txt += "2 - Saya Tidak Tau\n"
          ini_txt += "3 - Mungkin\n"
          ini_txt += "4 - Mungkin Tidak\n\n"
          ini_txt += "Pertanyaan №: 1\n"+progression+" %"
          conn.sendMessage(from, { text: ini_txt }, { quoted: msg, messageId: 'BAE5'+makeid(9)+'AKI'.toUpperCase()}).then(() => {
            akinator[sender.split('@')[0]] = data
            gameAdd(sender, glimit)
          })
        } else {
          reply(mess.error.api)
        }
        break
      case prefix + 'cancelakinator':
        if (isGroup) return reply(mess.OnlyPM)
        if (!akinator.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki akinator sebelumnya")
        addCountCmd('#cancelakinator', sender, _cmd)
        delete akinator[sender.split("@")[0]]
        reply(`Sukses`)
        break
      case prefix + 'suitpvp': case prefix + 'suit':
        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
        conn.suit = conn.suit ? conn.suit : {}
        if (!isGroup) return reply("Command ini khusus group.");
        if (args.length < 2) return reply("Tag lawanmu.\n\nex : #suitpvp @tag");
        if (Object.values(conn.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) return reply("Selesaikan game mu yang sebelumnya terlebih dahulu.");
        if (!msg.mentioned[0]) return reply("Tag lawanmu.\n\nex : #suitpvp @tag");
        if (mentioned[0] === sender) return reply("Tidak bisa bermain dengan dirimu sendiri.");
        if (mentioned[0] === botNumber) return reply("Tidak bisa bermain dengan bot.");
        if (Object.values(conn.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(mentioned[0]))) reply("Orang yang kamu tag/tantang sedang bermain dengan yang lain.")
        addCountCmd('#suitpvp', sender, _cmd)
        let timeout = 60000
        let id = 'suit_' + new Date() * 1
        let caption = `\`\`\`@${sender.split`@`[0]} menantang @${msg.mentioned[0].split`@`[0]} untuk bermain suit.

Silahkan @${msg.mentioned[0].split`@`[0]} untuk ketik terima/tolak.\`\`\``
        conn.sendMessage(from, {text: caption, mentions: [sender, msg.mentioned[0]] })
        conn.suit[id] = {
          id: id,
          p: sender,
          p2: msg.mentioned[0],
          status: 'wait',
          waktu: setTimeout(() => {
            if (conn.suit[id]) conn.sendMessage(from, {text: `waktu suit habis, game berakhir.`})
              delete conn.suit[id]
            }, 30000), 
          timeout: timeout
        }
        gameAdd(sender, glimit)
        break
      case prefix + 'bet':
        if (args.length < 2) return reply(`Masukkan jumlah bet balance, contoh: ${command} 1000`)
        if (args[1] == '*') {
          var balanceTot = getBalance(sender, balance)
          if (balanceTot == 0) return reply(`Sisa balance kamu adalah *$0* tidak bisa All in`)
          args[1] = balanceTot
        }
        if (isNaN(args[1])) return reply(`Masukkan hanya angka`)
        if (args[1] < 1) return reply(`Minimal taruhan *$1* balance`)
        var totalBalance = getBalance(sender, balance)
        if (args[1] > totalBalance) return reply(`*Kamu tidak bisa bertaruh* dengan balance *yang tidak kamu miliki!*\nBalance tersedia: $${totalBalance}`)
        function getPosiuser(sender) {
          var posi = null
          Object.keys(bet).forEach((i) => {
            if (bet[i].id == sender) {
              posi = i
            }
          })
          return posi
        }
        var pickStatus = pickRandom(['win', 'lose'])
        if (pickStatus == 'win') {
          if (getPosiuser(sender) == null) {
            bet.push({
              id: sender,
              winTotal: 1
            })
          } else {
            var posi = getPosiuser(sender)
            bet[posi].winTotal += 1
          }
          var position = getPosiuser(sender)
          var winTotal = bet[position].winTotal
          var teksWin = `🎰 Kamu telah bertaruh *${toRupiah(args[1])}* balance
Horree! Kamu pulang membawa *${toRupiah(args[1] * 2)}* balance (✅)

🎯 _Kemenangan berturut-turut._ *${winTotal}.*`
          reply(teksWin)
          addBalance(sender, nebal(args[1]), balance)
        } else if (pickStatus == 'lose') {
          var teksLose = `🎰 Kamu telah bertaruh *${toRupiah(args[1])}* balance
Oh tidak! Kamu pulang tanpa *${toRupiah(args[1])}* balance (❌)`
          reply(teksLose)
          kurangBalance(sender, nebal(args[1]), balance)
          bet.splice(getPosiuser(sender), 1)
        }
        break
      
      // PAYMENT & BANK
      case prefix + 'topbalance':{
        addCountCmd('#topbalance', sender, _cmd)
        balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
        let top = '*── 「 TOP BALANCE 」 ──*\n\n'
        let arrTop = []
        var total = 10
        if (balance.length < 10) total = balance.length
        for (let i = 0; i < total; i ++){
          top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${toRupiah(balance[i].balance)}\n\n`
          arrTop.push(balance[i].id)
        }
        mentions(top.trim(), arrTop, true)
      }
        break
      case prefix + 'buylimit':{
        if (args.length < 2) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)
        if (args[1] == '') return reply(`Jangan di spasi 2×`)
        if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
        if (isNaN(args[1])) return reply(`Harus berupa angka`)
        if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
        let ane = Number(parseInt(args[1]) * 150)
        if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
        addCountCmd('#buylimit', sender, _cmd)
        kurangBalance(sender, ane, balance)
        giveLimit(sender, parseInt(args[1]), limit)
        reply(monospace(`Pembeliaan limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
      }
        break
      case prefix + 'transfer': case prefix + 'tf':{
        if (args.length < 2) return reply(`Kirim perintah *${command}* @tag nominal\nContoh : ${command} @0 2000`)
        if (mentionUser.length == 0) return reply(`Tag orang yang ingin di transfer balance`)
        if (args[2] == '') return reply(`Jangan di spasi 2× setelah tag penerima`)
        if (!args[2]) return reply(`Masukkan nominal nya!`)
        if (isNaN(args[2])) return reply(`Nominal harus berupa angka!`)
        if (args[2].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
        if (args[2].includes("-")) return reply(`Jangan menggunakan -`)
        var anu = getBalance(sender, balance)
        if (anu < args[2] || anu == 'undefined') return reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args[2]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
        addCountCmd('#transfer', sender, _cmd)
        kurangBalance(sender, parseInt(args[2]), balance)
        addBalance(mentionUser[0], parseInt(args[2]), balance)
        mentions(`Sukses transfer balance sebesar $${args[2]} kepada @${mentionUser[0].split("@")[0]}`, [mentionUser[0]], true)
      }
        break
      case prefix + 'buygamelimit': case prefix + 'buyglimit':{
        if (args.length < 2) return reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $150 balance\nPajak $1 / $10`)
        if (args[1] == '') return reply(`Jangan di spasi 2×`)
        if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
        if (isNaN(args[1])) return reply(`Harus berupa angka`)
        if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
        let ane = Number(parseInt(args[1]) * 150)
        if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
        addCountCmd('#buygamelimit', sender, _cmd)
        kurangBalance(sender, ane, balance)
        givegame(sender, parseInt(args[1]), glimit)
        reply(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
      }
        break
      case prefix + 'limit': case prefix + 'balance':
      case prefix + 'ceklimit': case prefix + 'cekbalance':
        if (mentionUser.length !== 0){
          if (command.includes('limit')) {
            addCountCmd('#limit', sender, _cmd)
          } else {
            addCountCmd('#balance', sender, _cmd)
          }
          var Ystatus = ownerNumber.includes(mentionUser[0])
          var isPrim = Ystatus ? true : _prem.checkPremiumUser(mentionUser[0], premium)
          var ggcount = isPrim ? gcounti.prem : gcounti.user
          var limitMen = `${getLimit(mentionUser[0], limitCount, limit)}`
          reply(`Limit : ${isPrim ? 'Unlimited' : limitMen+'/'+limitCount}\nLimit Game : ${cekGLimit(mentionUser[0], ggcount, glimit)}/${ggcount}\nBalance : $${getBalance(mentionUser[0], balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
        } else {
          if (command.includes('limit')) {
            addCountCmd('#limit', sender, _cmd)
          } else {
            addCountCmd('#balance', sender, _cmd)
          }
          var limitPrib = `${getLimit(sender, limitCount, limit)}`
          reply(`Limit : ${isPremium ? 'Unlimited' : limitPrib+'/'+limitCount}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
        }
        break
      
      // GROUP MENU
      case prefix + 'linkgrup': case prefix + 'link': case prefix + 'linkgc':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isBotGroupAdmins) return reply(mess.BotAdmin)
        addCountCmd('#linkgc', sender, _cmd)
        var url = await conn.groupInviteCode(from).catch(() => reply(mess.error.api))
        url = 'https://chat.whatsapp.com/'+url
        reply(url)
        break
      case prefix + 'setppgrup': case prefix + 'setppgc':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins) return reply(mess.GrupAdmin)
        if (!isBotGroupAdmins) return reply(mess.BotAdmin)
        if (isImage || isQuotedImage) {
          addCountCmd('#setppgrup', sender, _cmd)
          var media = await conn.downloadAndSaveMediaMessage(msg, 'image', `ppgc${from}.jpeg`)
          if (args[1] == '\'panjang\'') {
            var { img } = await generateProfilePicture(media)
            await conn.query({
              tag: 'iq',
              attrs: {
                to: from,
                type:'set',
                xmlns: 'w:profile:picture'
              },
              content: [
                {
                  tag: 'picture',
                  attrs: { type: 'image' },
                  content: img
                }
              ]
            })
            fs.unlinkSync(media)
            reply(`Sukses`)
          } else {
            await conn.updateProfilePicture(from, { url: media })
            .then( res => {
              reply(`Sukses`)
              fs.unlinkSync(media)
            }).catch(() => reply(mess.error.api))
          }
        } else {
          reply(`Kirim/balas gambar dengan caption ${command}`)
        }
        break
      case prefix + 'setnamegrup': case prefix + 'setnamegc':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins) return reply(mess.GrupAdmin)
        if (!isBotGroupAdmins) return reply(mess.BotAdmin)
        if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
        addCountCmd('#setnamegc', sender, _cmd)
        await conn.groupUpdateSubject(from, q)
        .then( res => { reply(`Sukses`) }).catch(() => reply(mess.error.api))
        break
      case prefix + 'setdesc': case prefix + 'setdescription':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins) return reply(mess.GrupAdmin)
        if (!isBotGroupAdmins) return reply(mess.BotAdmin)
        if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
        addCountCmd('#setdesc', sender, _cmd)
        await conn.groupUpdateDescription(from, q)
        .then( res => { reply(`Sukses`) }).catch(() => reply(mess.error.api))
        break
      case prefix + 'group': case prefix + 'grup':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins) return reply(mess.GrupAdmin)
        if (!isBotGroupAdmins) return reply(mess.BotAdmin)
        if (args.length < 2) return reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
        if (args[1] == "close") {
          addCountCmd('#group', sender, _cmd)
          conn.groupSettingUpdate(from, 'announcement')
          reply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
        } else if (args[1] == "open") {
          addCountCmd('#group', sender, _cmd)
          conn.groupSettingUpdate(from, 'not_announcement')
          reply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
        } else {
          reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
        }
        break
      case prefix + 'revoke':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins) return reply(mess.GrupAdmin)
        if (!isBotGroupAdmins) return reply(mess.BotAdmin)
        addCountCmd('#revoke', sender, _cmd)
        await conn.groupRevokeInvite(from)
        .then( res => { reply(`Sukses menyetel tautan undangan grup ini`) }).catch(() => reply(mess.error.api))
        break
      case prefix + 'delete': case prefix + 'del': case prefix + 'd':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
        if (!isQuotedMsg) return reply(`Balas chat dari bot yang ingin dihapus`)
        if (!quotedMsg.fromMe) return reply(`Hanya bisa menghapus chat dari bot`)
        addCountCmd('#delete', sender, _cmd)
        conn.sendMessage(from, { delete: { fromMe: true, id: quotedMsg.id, remoteJid: from }})
        break
      case prefix + 'promote': case prefix + 'pm':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins) return reply(mess.GrupAdmin)
        if (!isBotGroupAdmins) return reply(mess.BotAdmin)
        if (mentionUser.length !== 0) {
          addCountCmd('#promote', sender, _cmd)
          conn.groupParticipantsUpdate(from, [mentionUser[0]], "promote")
          .then( res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai admin`, [mentionUser[0]], true) })
          .catch(() => reply(mess.error.api))
        } else if (isQuotedMsg) {
          addCountCmd('#promote', sender, _cmd)
          conn.groupParticipantsUpdate(from, [quotedMsg.sender], "promote")
          .then( res => { mentions(`Sukses menjadikan @${quotedMsg.sender.split("@")[0]} sebagai admin`, [quotedMsg.sender], true) })
          .catch(() => reply(mess.error.api))
        } else {
          reply(`Tag atau balas pesan member yang ingin dijadikan admin`)
        }
        break
      case prefix + 'demote':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins) return reply(mess.GrupAdmin)
        if (!isBotGroupAdmins) return reply(mess.BotAdmin)
        if (mentionUser.length !== 0) {
          addCountCmd('#demote', sender, _cmd)
          conn.groupParticipantsUpdate(from, [mentionUser[0]], "demote")
          .then( res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai member biasa`, [mentionUser[0]], true) })
          .catch(() => reply(mess.error.api))
        } else if (isQuotedMsg) {
          addCountCmd('#demote', sender, _cmd)
          conn.groupParticipantsUpdate(from, [quotedMsg.sender], "demote")
          .then( res => { mentions(`Sukses menjadikan @${quotedMsg.sender.split("@")[0]} sebagai member biasa`, [quotedMsg.sender], true) })
          .catch(() => reply(mess.error.api))
        } else {
          reply(`Tag atau balas pesan admin yang ingin dijadikan member biasa`)
        }
        break
      case prefix + 'add':
        return reply(`Fitur di non-aktifkan`)
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins) return reply(mess.GrupAdmin)
        if (!isBotGroupAdmins) return reply(mess.BotAdmin)
        if (groupMembers.length == 513) return reply(`Anda tidak dapat menambah peserta, karena Grup sudah penuh!`)
        var mems = []
        groupMembers.map( i => mems.push(i.id) )
        var number;
        if (args.length > 1) {
          number = q.replace(/[^0-9]/gi, '')+"@s.whatsapp.net"
          var cek = await conn.onWhatsApp(number)
          if (cek.length == 0) return reply(`Masukkan nomer yang valid dan terdaftar di WhatsApp`)
          if (mems.includes(number)) return reply(`Nomer tersebut sudah berada didalam grup!`)
          addCountCmd('#add', sender, _cmd)
          conn.groupParticipantsUpdate(from, [number], "add")
          .then( res => reply(jsonformat(res)))
          .catch((err) => reply(jsonformat(err)))
        } else if (isQuotedMsg) {
          number = quotedMsg.sender
          var cek = await conn.onWhatsApp(number)
          if (cek.length == 0) return reply(`Peserta tersebut sudah tidak terdaftar di WhatsApp`)
          if (mems.includes(number)) return reply(`Nomer tersebut sudah berada didalam grup!`)
          addCountCmd('#add', sender, _cmd)
          conn.groupParticipantsUpdate(from, [number], "add")
          .then(res => reply(jsonformat(res)))
          .catch((err) => reply(jsonformat(err)))
        } else {
          reply(`Kirim perintah ${command} nomer atau balas pesan orang yang ingin dimasukkan`)
        }
        break
      case prefix + 'kick':
        return reply(`Fitur di non-aktifkan`)
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins) return reply(mess.GrupAdmin)
        if (!isBotGroupAdmins) return reply(mess.BotAdmin)
        var number;
        if (mentionUser.length !== 0) {
          number = mentionUser[0]
          addCountCmd('#kick', sender, _cmd)
          conn.groupParticipantsUpdate(from, [number], "remove")
          .then( res => reply(jsonformat(res)))
          .catch((err) => reply(jsonformat(err)))
        } else if (isQuotedMsg) {
          number = quotedMsg.sender
          addCountCmd('#kick', sender, _cmd)
          conn.groupParticipantsUpdate(from, [number], "remove")
          .then( res => reply(jsonformat(res)))
          .catch((err) => reply(jsonformat(err)))
        } else {
          reply(`Tag atau balas pesan orang yang ingin dikeluarkan dari grup`)
        }
        break
      case prefix + 'antilink':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
        if (!isBotGroupAdmins) return reply(mess.BotAdmin)
        if (args.length === 1) return reply(`Pilih enable atau disable`)
        if (args[1].toLowerCase() === 'enable') {
          addCountCmd('#antilink', sender, _cmd)
          if (isAntiLink) return reply(`Udah aktif`)
          antilink.push(from)
          fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
          reply('Antilink grup aktif')
        } else if (args[1].toLowerCase() === 'disable') {
          addCountCmd('#antilink', sender, _cmd)
          if (!isAntiLink) return reply(`Udah nonaktif`)
          let anu = antilink.indexOf(from)
          antilink.splice(anu, 1)
          fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
          reply('Antilink grup nonaktif')
        } else {
          reply(`Pilih enable atau disable`)
        }
        break
      case prefix + 'welcome':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (args.length < 2) return reply(`Pilih enable atau disable`)
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
        addCountCmd('#welcome', sender, _cmd)
        if (args[1].toLowerCase() === 'enable') {
          if (isWelcome) return reply(`Udah aktif`)
          welcome.push({jid: from, welcome: `Welcome @user`, left: 'Sayonara @user'})
          fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
          reply('Welcome aktif')
        } else if (args[1].toLowerCase() === 'disable') {
          let anu = getPosiSaying(from, welcome)
          welcome.splice(anu, 1)
          fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
          reply('Welcome nonaktif')
        } else {
          reply(`Pilih enable atau disable`)
        }
        break
      case prefix + 'setwelcome': case prefix + 'setwelkom':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
        if (!isWelcome) return reply(`Welcome di group ini belum di aktifkan, kirim perintah ${prefix + 'welcome'} enable untuk mengaktifkan!`)
        if (args.length < 2) return reply(`Kirim perintah *${command}* teks\nUntuk penjelasan pemakaian yang lebih detail, ketik *${command} --help*`)
        if (args[1] === '--help') {
          addCountCmd('#setwelcome', sender, _cmd)
          var teksw = `Command Ini Berfungsi Untuk Mengganti Teks Welcome\n\n*Penggunaan :*\n- ${command} teks baru\n\n*List Option :*\n- @user _untuk mentions new member_\n- @pushname _untuk nama new mem_\n- @subject _untuk nama group_\n- @desc _untuk deskripsi group_\n\nContoh :\n*${command}* Hai @user selamat datang di group @subject`
          reply(teksw)
        } else {
          addCountCmd('#setwelcome', sender, _cmd)
          var posiw = getPosiSaying(from, welcome)
          welcome[posiw].welcome = q
          fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
          reply(`Sukses merubah teks welcome menjadi :\n\n${q}`)
        }
        break
      case prefix + 'setleft': case prefix + 'setout':
        if (!isGroup) return reply(mess.OnlyGrup)
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
        if (!isWelcome) return reply(`Welcome di group ini belum di aktifkan, kirim perintah ${prefix + 'left'} enable untuk mengaktifkan!`)
        if (args.length < 2) return reply(`Kirim perintah *${command}* teks\nUntuk penjelasan pemakaian yang lebih detail, ketik *${command} --help*`)
        if (args[1] === '--help') {
          addCountCmd('#setleft', sender, _cmd)
          var teksl = `Command Ini Berfungsi Untuk Mengganti Teks Left\n\n*Penggunaan :*\n- ${command} teks baru\n\n*List Option :*\n- @user _untuk mentions new member_\n- @pushname _untuk nama new mem_\n- @subject _untuk nama group_\n- @desc _untuk deskripsi group_\n\nContoh :\n*${command}* Yah @user keluar dari group @subject`
          reply(teksl)
        } else {
          addCountCmd('#setleft', sender, _cmd)
          var posil = getPosiSaying(from, welcome)
          welcome[posil].left = q
          fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
          reply(`Sukses merubah teks left menjadi :\n\n${q}`)
        }
        break
      
      // OWNER MENU
      case prefix + 'exif':
        if (!isOwner) return reply(mess.OnlyOwner)
        addCountCmd('#exif', sender, _cmd)
        var namaPack = q.split('|')[0] ? q.split('|')[0] : q
        var authorPack = q.split('|')[1] ? q.split('|')[1] : ''
        exif.create(namaPack, authorPack)
        setting.packname = namaPack; setting.author = authorPack
        fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
        reply(`Sukses membuat exif`)
        break
      case prefix + 'self':
        if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
        addCountCmd('#self', sender, _cmd)
        conn.mode = 'self'
        replyDeface(`Berhasil berubah ke mode Self!`)
        break
      case prefix + 'public': case prefix + 'publik':
        if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
        addCountCmd('#public', sender, _cmd)
        conn.mode = 'public'
        replyDeface(`Berhasil berubah ke mode Public!`)
        break
      case prefix + 'bcall':
        if (!isOwner) return
        if (!isQuotedMsg) return reply(`Reply teks om`)
        var userr = JSON.parse(fs.readFileSync('./newuser.json'))
        for (let num of pendaftar) {
          if (!userr.includes(num)) {
            var cek_act = await conn.onWhatsApp(num)
            if (cek_act.length !== 0) {
              conn.sendMessage(num, { text: quotedMsg.chats })
              userr.push(num)
              fs.writeFileSync('./newuser.json', JSON.stringify(userr, null, 2))
              await sleep(5000)
            }
          }
        }
        reply(`Sukses`)
        break 
      case prefix + 'leave':
        if (!isOwner) return reply(mess.OnlyOwner)
        if (!isGroup) return reply(mess.OnlyGrup)
        addCountCmd('#leave', sender, _cmd)
        conn.groupLeave(from)
        break
      case prefix + 'join':
        if (!isOwner) return reply(mess.OnlyOwner)
        if (args.length < 2) return reply(`Kirim perintah ${command} _linkgrup_`)
        if (!isUrl(args[1])) return reply(mess.error.Iv)
        var url = args[1]
        addCountCmd('#join', sender, _cmd)
        url = url.split('https://chat.whatsapp.com/')[1]
        var data = await conn.groupAcceptInvite(url)
        reply(jsonformat(data))
        break
      case prefix + 'setpp': case prefix + 'setppbot':
        if (!isOwner) return reply(mess.OnlyOwner)
        if (isImage || isQuotedImage) {
        addCountCmd('#setppbot', sender, _cmd)
        var media = await conn.downloadAndSaveMediaMessage(msg, 'image', 'ppbot.jpeg')
          if (args[1] == '\'panjang\'') {
            var { img } = await generateProfilePicture(media)
            await conn.query({
              tag: 'iq',
              attrs: {
                to: botNumber,
                type: 'set',
                xmlns: 'w:profile:picture'
              },
              content: [
                {
                  tag: 'picture',
                  attrs: { type: 'image' },
                  content: img
                }
              ]
            })
            fs.unlinkSync(media)
            reply(`Sukses`)
          } else {
            var data = await conn.updateProfilePicture(botNumber, { url: media })
            fs.unlinkSync(media)
            reply(`Sukses`)
          }
        } else {
          reply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
        }
        break
      case prefix + 'getcase': case prefix + 'getfitur':
        if (!isOwner) return reply(mess.OnlyOwner)
        if (args.length < 2) return reply(`Kirim perintah ${command} case_name`)
        try {
          var data = getCase(q)
          reply(data)
        } catch {
          reply(`${q} tidak terdaftar di msg.js`)
        }
        break
      case prefix + 'addprem':
        if (!isOwner) return reply(mess.OnlyOwner)
        if (args.length < 2) return reply(`Penggunaan :\n*${prefix}addprem* @tag waktu\n*${prefix}addprem* nomor waktu\n\nContoh : ${command} @tag 30d`)
        if (!args[2]) return reply(`Mau yang berapa hari?`)
        if (mentionUser.length !== 0) {
          addCountCmd('#addprem', sender, _cmd)
          _prem.addPremiumUser(mentionUser[0], args[2], premium)
          reply('Sukses')
        } else {
          var cekap = await conn.onWhatsApp(args[1]+"@s.whatsapp.net")
          if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
          addCountCmd('#addprem', sender, _cmd)
          _prem.addPremiumUser(args[1]+'@s.whatsapp.net', args[2], premium)
          reply('Sukses')
        }
        break
      case prefix + 'delprem':
        if (!isOwner) return reply(mess.OnlyOwner)
        if (args.length < 2) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
        if (mentionUser.length !== 0){
          addCountCmd('#delprem', sender, _cmd)
          premium.splice(_prem.getPremiumPosition(mentionUser[0], premium), 1)
          fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
          reply('Sukses!')
        } else {
          addCountCmd('#delprem', sender, _cmd)
          premium.splice(_prem.getPremiumPosition(args[1] + '@s.whatsapp.net', premium), 1)
          fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
          reply('Sukses!')
        }
        break
      case prefix + 'resetlimit':
        if (!isOwner) return reply(mess.OnlyOwner)
        addCountCmd('#resetlimit', sender, _cmd)
        limit.splice('reset')
        fs.writeFileSync('./database/limit.json', JSON.stringify(limit, null, 2))
        glimit.splice('reset')
        fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit, null, 2))
        reply(`Sukses reset limit pengguna`)
        break
      case prefix + 'broadcast': case prefix + 'bc':
        if (!isOwner) return reply(mess.OnlyOwner)
        if (args.length < 2) return reply(`Kirim perintah ${command} teks\nKamu bisa juga broadcast menggunakan tipe Video/Image, caranya kirim video/image atau bisa juga balas imagenya, lalu beri caption ${command} teks`)
        addCountCmd('#broadcast', sender, _cmd)
        var data = await store.chats.all()
        var teks = `*[ Ghosky BROADCAST ]*\n\n${q}`
        for (let i of data) {
          if (isImage || isQuotedImage) {
            var msg_img;
            if (isQuotedMsg) {
              msg_img = quotedMsg
              msg_img['imageMessage'].caption = teks
            } else {
              msg_img = msg
              msg_img.message['imageMessage'].caption = teks
            }
            conn.sendMessageFromContent(i.id, isQuotedMsg ? msg_img : msg_img.message)
            await sleep(1200)
          } else if (isVideo || isQuotedVideo) {
            var msg_vid;
            if (isQuotedMsg) {
              msg_vid = quotedMsg
              msg_vid['videoMessage'].caption = teks
            } else {
              msg_vid = msg
              msg_vid.message['videoMessage'].caption = teks
            }
            conn.sendMessageFromContent(i.id, isQuotedMsg ? msg_vid : msg_vid.message)
            await sleep(1200)
          } else {
            conn.sendMessage(i.id, { text: teks })
             await sleep(1200)
          }
        }
        reply(`Sukses mengirim pesan siaran kepada ${data.length} chat`)
        break
      case prefix + 'dym':
        if (!isOwner) return
        if (args.length < 2) return reply(`Nama cmd nya?`)
        addCountCmd('#dym', sender, _cmd)
        args.splice(0, 1)
        for (let i of args) {
          if (!listCmd.includes(i)) {
            listCmd.push(i)
            fs.writeFileSync('./database/listcmd.json', JSON.stringify(listCmd, null, 2))
          }
        }
        reply('Sukses')
        break
      case prefix + 'akseseval':
        if (isOwner) return reply(`Lu owner vangke!`)
        if (isMods) return reply(`Kamu sudah terdaftar dalam database mods`)
        if (isGroup) return reply(mess.OnlyPM)
        if (args.length < 2) return reply(`Masukkan parameter Username dan Password\nContoh: ${command} username|password`)
        var user = q.split("|")[0]
        var pw = q.split("|")[1]
        if (!user) return reply(`Masukkan parameter Username dan Password\nContoh: .akseseval username|password`)
        if (!pw) return reply(`Masukkan parameter Username dan Password\nContoh: .akseseval username|password`)
        if (user !== uss) return reply(`Login failed. Invalid username or password`)
        if (pw !== pass) return reply(`Login failed. Invalid username or password`)
        addCountCmd('#akseseval', sender, _cmd)
        modsNumber.push(sender)
        fs.writeFileSync('./database/modsNumber.json', JSON.stringify(modsNumber, null, 2))
        reply(`Login accepted!`)
        conn.sendMessage(ownerNumber, { text: `wa.me/${sender.split("@")[0]} Join access eval on ${jam} WIB` })
        break
      case prefix + 'delakses':
        if (!isOwner) return
        if (args.length < 2) return reply(`Kirim perintah ${command} @tag atau nomor yang ingin di hapus dari list mods`)
        var number = null
        if (mentionUser[0]) {
          number = mentionUser[0]
        } else if (args[1].length === 1 && !isNaN(args[1])) {
          if (args[1] > modsNumber.length) return reply(`Hanya terdaftar sebanyak ${modsNumber.length}, ketik ${prefix}listmods`)
          number = modsNumber[args[1] - 1]
        } else if (args[1].length > 1 && !isNaN(args[1])) {
          var data = await conn.OnWhatsApp(args[1] + '@s.whatsapp.net')
          if (data === undefined) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
          number = args[1] + '@s.whatsapp.net'
        } else {
          reply(`Kirim perintah ${command} @tag atau nomor yang ingin di hapus dari list mods`)
        }
        var posi = modsNumber.indexOf(number)
        if (posi == '-1') {
          reply(`Nomer tersebut tidak terdaftar di dalam database!`)
        } else {
          addCountCmd('#delakses', sender, _cmd)
          modsNumber.splice(posi, 1)
          fs.writeFileSync('./database/modsNumber.json', JSON.stringify(modsNumber, null, 2))
          reply(`Sukses`)
        }
        break
      case prefix + 'listmods':
        if (!isOwner) return
        var no = 1
        var teks = `List Mods Ghosky Eru Bot\n\n`
        for (let i of modsNumber) {
          teks += `*${no++}.* @${i.split("@")[0]}\n`
        }
        teks += `\nKetik ${prefix}delakses num/@tag untuk menghapus <Only Owner>`
        reply(teks)
        break
      default:
        if (isCmd) {
          if (args[0].length > 1) {
            if (!isGroup) {
              var detect = await Dym(command.split(prefix)[1], listCmd)
              if (detect !== null) {
                if (!msg.key.fromMe) {
                  reply(`Mungkin yang anda maksud adalah ${prefix + detect} abaikan jika salah!`)
                }
              } else {
                reply(`Maaf kak fitur ${command} tidak terdaftar di list ${prefix + 'menu'}`)
              }
            } else {
              var detect = await Dym(args[1], listCmd)
              if (!isGroup && detect !== null) {
                reply(`Pastikan antara simbol/prefix jangan dipisah, contoh ${prefix+args[1]}`)
              }
            }
          }
        }
    }
  } catch (err) {
    console.log(color("[ERROR]", "red"), err);
  }
};
