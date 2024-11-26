/* Hehe Sory!.
Kalo Mau Beli Yang No Enc 100%
Langsung Ke Ore Digital!
https://wa.me/6283170801193
*/
process.on("uncaughtException", console.error);
require("./setting");
const {
  WA_DEFAULT_EPHEMERAL,
  getAggregateVotesInPollMessage,
  generateWAMessageContent,
  generateWAMessage,
  downloadContentFromMessage,
  areJidsSameUser,
  getContentType
} = global.baileys;
const {
  generateWAMessageFromContent,
  proto,
  prepareWAMessageMedia
} = require("@adiwajshing/baileys");
const fs2 = require("fs");
const util2 = require("util");
const chalk2 = require("chalk");
const os2 = require("os");
const performanceNow = require("performance-now");
const nodeCron = require("node-cron");
const axios2 = require("axios");
const dns2 = require("dns");
const formData = require("form-data");
const cheerio2 = require("cheerio");
const ms2 = require("ms");
const crypto2 = require("crypto");
const https2 = require("https");
const {
  URL_REGEX
} = require("@adiwajshing/baileys");
const {
  fileTypeFromBuffer
} = require("file-type");
const awesomePhonenumber = require("awesome-phonenumber");
const path2 = require("path");
const {
  pipeline
} = require("stream");
const {
  promisify
} = require("util");
const jimp2 = require("jimp");
const fluentFfmpeg = require("fluent-ffmpeg");
const momentTimezone = require("moment-timezone");
const {
  exec,
  spawn,
  execSync
} = require("child_process");
const {
  addExif
} = require("./database/lib/exif");
const {
  smsg,
  tanggal,
  getTime,
  isUrl,
  sleep,
  clockString,
  runtime,
  fetchJson,
  getBuffer,
  jsonformat,
  format,
  formatp,
  parseMention,
  getRandom,
  getGroupAdmins,
  generateProfilePicture,
  toRupiah,
  shorturl,
  enumGetKey,
  sort,
  pickRandom,
  toNumber,
  randomNumber
} = require("./database/lib/myfunc");
const v = JSON.parse(fs2.readFileSync("./database/lib/ntilink.json"));
const {
  remini,
  findSongs
} = require("./database/lib/scraper");
const {
  color,
  bgcolor
} = require("./database/lib/color");
const ytSearch = require("yt-search");
const {
  getRegisteredRandomId,
  addRegisteredUser,
  createSerial,
  checkRegisteredUser
} = require("./database/lib/register.js");
const {
  ChatAi
} = require("./database/lib/akane-ai.js");
const {
  hariini,
  time,
  tanggal2,
  wita,
  ucapanWaktu
} = require("./database/lib/moment.js");
module.exports = OjiOffc = async (p, p2, p3, p4) => {
  try {
    var v2 = p2.mtype === "conversation" ? p2.message.conversation : p2.mtype == "imageMessage" ? p2.message.imageMessage.caption : p2.mtype == "videoMessage" ? p2.message.videoMessage.caption : p2.mtype == "extendedTextMessage" ? p2.message.extendedTextMessage.text : p2.mtype == "buttonsResponseMessage" ? p2.message.buttonsResponseMessage.selectedButtonId : p2.mtype == "listResponseMessage" ? p2.message.listResponseMessage.singleSelectReply.selectedRowId : p2.mtype == "templateButtonReplyMessage" ? p2.message.templateButtonReplyMessage.selectedId : p2.mtype == "interactiveResponseMessage" ? f(JSON.parse(p2.msg.nativeFlowResponseMessage.paramsJson).id, p3) : p2.mtype == "templateButtonReplyMessage" ? f(p2.msg.selectedId, p3) : p2.mtype === "messageContextInfo" ? p2.message.buttonsResponseMessage?.selectedButtonId || p2.message.listResponseMessage?.singleSelectReply.selectedRowId || p2.text : "";
    async function f(p5, p6) {
      let v3 = await generateWAMessage(p2.chat, {
        text: p5,
        mentions: p2.mentionedJid
      }, {
        userJid: p.user.id,
        quoted: p2.quoted && p2.quoted.fakeObj
      });
      v3.key.fromMe = areJidsSameUser(p2.sender, p.user.id);
      v3.key.id = p2.key.id;
      v3.pushName = p2.pushName;
      if (p2.isGroup) {
        v3.participant = p2.sender;
      }
      let v4 = {
        ...p6,
        messages: [proto.WebMessageInfo.fromObject(v3)],
        type: "append"
      };
      p.ev.emit("messages.upsert", v4);
    }
    var v5 = typeof p2.text == "string" ? p2.text : "";
    const v6 = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(v2) ? v2.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : ".";
    const vF = (p7, p8 = 1) => {
      var v7 = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
      var v8 = {
        "1": "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890"
      };
      var v9 = [];
      v7.map((p9, p10) => v9.push({
        original: p9,
        convert: v8[p8].split("")[p10]
      }));
      var v10 = p7.toLowerCase().split("");
      var v11 = [];
      v10.map(p11 => {
        const v12 = v9.find(p12 => p12.original == p11);
        if (v12) {
          v11.push(v12.convert);
        } else {
          v11.push(p11);
        }
      });
      return v11.join("");
    };
    const v13 = p2.pushName || "YT CPM_JHON OFFICIAL";
    const v14 = v2.startsWith(v6);
    const v15 = v2.replace(v6, "").trim().split(/ +/).shift().toLowerCase();
    const v16 = v2.trim().split(/ +/).slice(1);
    const v17 = await p.decodeJid(p.user.id);
    const vCheckRegisteredUser = checkRegisteredUser(p2.sender);
    const v18 = [v17, ...global.owner].map(p13 => p13.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(p2.sender);
    const v19 = q = v16.join(" ");
    const {
      type: _0x8882ef,
      quotedMsg: _0x456c0f,
      mentioned: _0x499d37,
      now: _0x3e64ac,
      fromMe: _0xcf2c1a
    } = p2;
    const v20 = p2.quoted ? p2.quoted : p2;
    const v21 = (v20.msg || v20).mimetype || "";
    const v22 = /image|video|sticker|audio/.test(v21);
    const v23 = mek.key.remoteJid;
    const v24 = p2.isGroup ? await p.groupMetadata(v23).catch(p14 => {}) : "";
    const v25 = p2.isGroup ? p2.key.participant ? p2.key.participant : p2.participant : p2.key.remoteJid;
    const v26 = p2.isGroup ? v24.subject : "";
    const v27 = p2.isGroup ? await v24.participants : "";
    const v28 = p2.isGroup ? await getGroupAdmins(v27) : "";
    const v29 = p2.isGroup ? v28.includes(v17) : false;
    const v30 = p2.isGroup ? v28.includes(p2.sender) : false;
    const v31 = p2.isGroup ? v.includes(p2.chat) : false;
    const v32 = p2.isGroup ? wlcm.includes(v23) : false;
    const v33 = p2.isGroup ? [p2.chat] : false;
    const v34 = v20.msg || v20;
    const v35 = JSON.stringify(p2.message);
    const v36 = v19.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";
    const v37 = p2.mtype == "extendedTextMessage" && p2.message.extendedTextMessage.contextInfo != null ? p2.message.extendedTextMessage.contextInfo.mentionedJid : [];
    const v38 = _0x8882ef == "extendedTextMessage" && p2.message.extendedTextMessage.contextInfo != null ? p2.message.extendedTextMessage.contextInfo.participant || "" : "";
    const v39 = p2.quoted ? p2.quoted.sender : v19 ? v19.replace(/[^0-9]/g, "") ? v19.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false : false;
    const v40 = p2.quoted ? "true" : "false";
    var v41 = _0x8882ef === "listResponseMessage" ? p2.message.listResponseMessage.singleSelectReply.selectedRowId : "";
    const v42 = {
      participant: "0@s.whatsapp.net",
      ...(p2.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const v43 = {
      name: "" + botname,
      jpegThumbnail: ""
    };
    const v44 = {
      locationMessage: v43
    };
    const v45 = {
      key: v42,
      message: v44
    };
    const vV45 = v45;
    async function f2(p15) {
      const v46 = {
        showAdAttribution: true,
        title: "" + botname,
        body: foter1,
        previewType: "VIDEO",
        thumbnailUrl: thumbnail,
        sourceUrl: hariini
      };
      const v47 = {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: v46
      };
      const v48 = {
        contextInfo: v47,
        text: p15
      };
      const vV48 = v48;
      const v49 = {
        quoted: vV45
      };
      return p.sendMessage(p2.chat, vV48, v49);
    }
    async function f3(p16) {
      const v50 = {
        title: botname,
        body: foter1,
        thumbnailUrl: thumbnail,
        sourceUrl: "https://cpmjhon.github.io/CpmJhon/",
        mediaType: 1,
        renderLargerThumbnail: true
      };
      const v51 = {
        externalAdReply: v50
      };
      const v52 = {
        quoted: vV45
      };
      p.sendMessage(p2.chat, {
        video: fs2.readFileSync("./database/thumb.mp4"),
        gifPlayback: true,
        caption: p16,
        contextInfo: v51
      }, v52);
    }
    p.autoshalat = p.autoshalat ? p.autoshalat : {};
    let v53 = p2.mentionedJid && p2.mentionedJid[0] ? p2.mentionedJid[0] : p2.fromMe ? p.user.id : p2.sender;
    let v54 = p2.chat;
    if (v54 in p.autoshalat) {
      return false;
    }
    let v55 = {
      shubuh: "04:29",
      terbit: "05:44",
      dhuha: "06:02",
      dzuhur: "12:02",
      ashar: "14:49",
      magrib: "17:52",
      isya: "19:01"
    };
    const v56 = new Date(new Date().toLocaleString("en-US", {
      timeZone: "Asia/Jakarta"
    }));
    const v57 = v56.getHours();
    const v58 = v56.getMinutes();
    const v59 = v57.toString().padStart(2, "0") + ":" + v58.toString().padStart(2, "0");
    for (let [v60, v61] of Object.entries(v55)) {
      if (v59 === v61) {
        let v62 = "Hai kak " + v13 + ",\nWaktu *" + v60 + "* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*" + v61 + "*\n_untuk wilayah Yogyakarta dan sekitarnya._";
        p.autoshalat[v54] = [f2(v62), setTimeout(async () => {
          delete p.autoshalat[p2.chat];
        }, 57000)];
      }
    }
    jarakkota = (p17, p18) => {
      return new Promise(async (p19, p20) => {
        var v63 = (await axios2("https://www.google.com/search?q=" + encodeURIComponent("jarak " + p17 + " ke " + p18) + "&hl=id")).data;
        var v64 = cheerio2.load(v63);
        var v65 = {};
        var v66 = v63.split("var s='")?.[1]?.split("'")?.[0];
        v65.img = /^data:.*?\/.*?;base64,/i.test(v66) ? Buffer.from(v66.split`,`[1], "base64") : "";
        v65.desc = v64("div.BNeawe.deIvCb.AP7Wnd").text()?.trim();
        p19(v65);
      });
    };
    if (v) {
      if (v2.match(/(chat.whatsapp.com\/)/gi)) {
        if (!v29) {
          return f2(mess.botAdmin + ", _Untuk menendang orang yang mengirim link group_");
        }
        let v67 = "https://chat.whatsapp.com/" + (await p.groupInviteCode(p2.chat));
        let v68 = new RegExp(v67, "i");
        let v69 = v68.test(p2.text);
        if (v69) {
          return p.sendMessage(p2.chat, {
            text: "```「 Group Link Terdeteksi 」```\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini"
          });
        }
        if (v30) {
          return p.sendMessage(p2.chat, {
            text: "```「 Group Link Terdeteksi 」```\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun"
          });
        }
        if (v18) {
          return p.sendMessage(p2.chat, {
            text: "```「 Group Link Terdeteksi 」```\nOwner telah mengirim link, owner bebas memposting link apa pun"
          });
        }
        await p.sendMessage(p2.chat, {
          delete: {
            remoteJid: p2.chat,
            fromMe: false,
            id: mek.key.id,
            participant: mek.key.participant
          }
        });
        p.groupParticipantsUpdate(p2.chat, [p2.sender], "remove");
        const v70 = {
          mentionedJid: [v25]
        };
        p.sendMessage(v23, {
          text: "```「 Group Link Terdeteksi 」```\n\n@" + p2.sender.split("@")[0] + " Jangan kirim group link di group ini",
          contextInfo: v70
        }, {
          quoted: p2
        });
      }
    }
    if (v22 && p2.msg.fileSha256 && p2.msg.fileSha256.toString("base64") in global.db.data.sticker) {
      let v71 = global.db.data.sticker[p2.msg.fileSha256.toString("base64")];
      let {
        text: _0x495caf,
        mentionedJid: _0x42c198
      } = v71;
      const v72 = {
        text: _0x495caf,
        mentions: _0x42c198
      };
      const v73 = {
        userJid: p.user.id,
        quoted: p2.quoted && p2.quoted.fakeObj
      };
      let v74 = await generateWAMessage(v23, v72, v73);
      v74.key.fromMe = areJidsSameUser(p2.sender, p.user.id);
      v74.key.id = p2.key.id;
      v74.pushName = p2.pushName;
      if (p2.isGroup) {
        v74.participant = p2.sender;
      }
      let v75 = {
        ...p3,
        messages: [proto.WebMessageInfo.fromObject(v74)],
        type: "append"
      };
      p.ev.emit("messages.upsert", v75);
    }
    if (v5.startsWith("!")) {
      try {
        return f2(JSON.stringify(eval("" + v16.join(" ")), null, "\t"));
      } catch (_0x26da43) {
        f2(_0x26da43);
      }
    }
    try {
      ppuser = await p.profilePictureUrl(p2.sender, "image");
    } catch (_0x46ce88) {
      ppuser = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
    }
    ppnyauser = await getBuffer(ppuser);
    try {
      let vF2 = p21 => typeof p21 === "number" && !isNaN(p21);
      let v76 = v18 ? 1000 : limitawal;
      let v77 = v18 ? 10000 : balanceawal;
      let v78 = global.db.data.users[p2.sender];
      if (typeof v78 !== "object") {
        global.db.data.users[p2.sender] = {};
      }
      if (v78) {
        if (!vF2(v78.balance)) {
          v78.balance = v77;
        }
        if (!vF2(v78.limit)) {
          v78.limit = v76;
        }
        if (!("premium" in v78)) {
          v78.premium = false;
        }
        if (!vF2(v78.afkTime)) {
          v78.afkTime = -1;
        }
        if (!("afkReason" in v78)) {
          v78.afkReason = "";
        }
        if (!("claim" in v78)) {
          v78.premium = 1;
        }
      } else {
        global.db.data.users[p2.sender] = {
          name: v13,
          limit: v76,
          balance: v77,
          premium: false,
          afkTime: -1,
          afkReason: "",
          limit: v76,
          claim: 1
        };
      }
    } catch (_0x526e25) {
      console.log(_0x526e25);
    }
    let vF3 = p22 => typeof p22 === "number" && !isNaN(p22);
    let v79 = global.db.data.settings[v17];
    if (typeof v79 !== "object") {
      global.db.data.settings[v17] = {};
    }
    if (v79) {
      if (!vF3(v79.status)) {
        v79.status = 0;
      }
      if (autobio) {
        let v80 = process.uptime() * 1000;
        let vClockString = clockString(v80);
        await p.updateProfileStatus(botname + " | Aktif Selama " + vClockString + " ⏳ | Mode : " + (p.public ? "Public-Mode" : "Self-Mode")).catch(p23 => p23);
      }
      if (autoread) {
        p.readMessages([p2.key]);
      }
    } else {
      global.db.data.settings[v17] = {
        status: 0,
        autobio: false,
        autoread: false
      };
    }
    if (p2?.isGroup && v33) {
      if (!("welcome" in v33)) {
        v33.welcome = true;
      }
      if (!("sWelcome" in v33)) {
        v33.sWelcome = "";
      }
      if (!vF3(v33.cleartime)) {
        v33.clearTime = 0;
      }
    } else if (p2?.isGroup) {
      global.db.data.chats[p2.chat] = {
        sWelcome: "",
        welcome: true,
        clearTime: 0
      };
    }
    let v81 = global.db.data.chats[p2.chat];
    if (typeof v81 !== "object") {
      global.db.data.chats[p2.chat] = {};
    }
    if (v81) {
      if (!("mute" in v81)) {
        v81.mute = false;
      }
      if (!("Cpm_JhonOffc" in v81)) {
        v81.OjiOffc = false;
      }
    } else {
      global.db.data.chats[p2.chat] = {
        mute: false,
        OjiOffc: false
      };
    }
    let v82 = db.data.users[p2?.sender].limit;
    let v83 = db.data.users[p2?.sender].balance;
    const v84 = db.data.users[p2?.sender].premium == true ? true : p2?.sender == owner ? true : false;
    async function f4() {
      if (v18) {
        return;
      }
      db.data.users[p2?.sender].limit -= 1;
    }
    nodeCron.schedule("00 00 * * *", () => {
      let v85 = Object.keys(global.db.data.users);
      for (let v86 of v85) {
        global.db.data.users[v86].claim = 1;
        if (global.db.data.users[v86].balance < 10000 && global.db.data.users[v86].limit < 1) {
          global.db.data.users[v86].limit = limitawal;
          global.db.data.users[v86].balance = balanceawal;
        }
      }
    }, {
      scheduled: true,
      timezone: "Asia/Makassar"
    });
    const vF4 = () => {
      var v87 = fs2.readFileSync("./OjiOffc.js").toString();
      var v88 = (v87.match(/case '/g) || []).length;
      return v88;
    };
    const vF5 = p24 => {
      let v89 = [];
      const v90 = fs2.readdirSync(p24);
      v90.forEach(p25 => {
        const v91 = path2.join(p24, p25);
        const v92 = fs2.statSync(v91);
        if (v92 && v92.isDirectory()) {
          v89 = v89.concat(vF5(v91));
        } else if (p25.endsWith(".js")) {
          v89.push(v91);
        }
      });
      return v89;
    };
    const vF6 = () => {
      const vVF5 = vF5("./plugin");
      let v93 = 0;
      vVF5.forEach(p26 => {
        const vRequire = require(path2.resolve(p26));
        if (vRequire.command && Array.isArray(vRequire.command)) {
          v93 += vRequire.command.length;
        }
      });
      return v93;
    };
    let v94 = [...new Set([...(p2.mentionedJid || []), ...(p2.quoted ? [p2.quoted.sender] : [])])];
    for (let v95 of v94) {
      let v96 = global.db.data.users[v95];
      if (!v96) {
        continue;
      }
      let v97 = v96.afkTime;
      if (!v97 || v97 < 0) {
        continue;
      }
      let v98 = v96.afkReason || "";
      f2(("Jangan tag dia!\nDia sedang AFK " + (v98 ? "dengan alasan " + v98 : "tanpa alasan") + "\nSelama " + clockString(new Date() - v97) + "\n").trim());
    }
    if (global.db.data.users[p2.sender].afkTime > -1) {
      let v99 = global.db.data.users[p2.sender];
      f2(("\nTelah Kembali Dari Afk " + (v99.afkReason ? " Selama " + v99.afkReason : "") + "\nSelama " + clockString(new Date() - v99.afkTime) + "\n").trim());
      v99.afkTime = -1;
      v99.afkReason = "";
    }
    async function f5(p27, p28) {
      fs2.readFile(p27, "utf8", (p29, p30) => {
        if (p29) {
          console.error("Terjadi kesalahan:", p29);
          return;
        }
        const v100 = new RegExp("case\\s+'" + p28 + "':[\\s\\S]*?break", "g");
        const v101 = p30.replace(v100, "");
        fs2.writeFile(p27, v101, "utf8", p31 => {
          if (p31) {
            console.error("Terjadi kesalahan saat menulis file:", p31);
            return;
          }
          console.log("Teks dari case '" + p28 + "' telah dihapus dari file.");
        });
      });
    }
    const vF7 = p32 => {
      let v102 = [];
      const v103 = fs2.readdirSync(p32);
      v103.forEach(p33 => {
        const v104 = path2.join(p32, p33);
        if (fs2.lstatSync(v104).isDirectory()) {
          const v105 = fs2.readdirSync(v104);
          v105.forEach(p34 => {
            const v106 = path2.join(v104, p34);
            if (v106.endsWith(".js")) {
              try {
                delete require.cache[require.resolve(v106)];
                const vRequire2 = require(v106);
                vRequire2.filePath = v106;
                v102.push(vRequire2);
              } catch (_0x10d1ca) {
                console.error("Error loading plugin at " + v106 + ":", _0x10d1ca);
              }
            }
          });
        }
      });
      return v102;
    };
    const vVF7 = vF7(path2.resolve(__dirname, "./plugin"));
    const v107 = {
      OjiOffc: p,
      m: p2,
      chatUpdate: p3,
      store: p4,
      body: v2,
      require: require,
      smsg: smsg,
      tanggal: tanggal,
      getTime: getTime,
      from: v23,
      isUrl: isUrl,
      sleep: sleep,
      clockString: clockString,
      toNumber: toNumber,
      limitnya: v82,
      fetchJson: fetchJson,
      getBuffer: getBuffer,
      jsonformat: jsonformat,
      format: format,
      generateProfilePicture: generateProfilePicture,
      parseMention: parseMention,
      getRandom: getRandom,
      pickRandom: pickRandom,
      moment: momentTimezone,
      budy: v5,
      prefix: v6,
      isCmd: v14,
      command: v15,
      args: v16,
      pushname: v13,
      text: v19,
      q: q,
      quoted: v20,
      mime: v21,
      isMedia: v22,
      botNumber: v17,
      isCreator: v18,
      isPremium: v84,
      uselimit: f4,
      groupMetadata: v24,
      groupName: v26,
      participants: v27,
      groupAdmins: v28,
      sleep: sleep,
      isBotAdmins: v29,
      totalFitur: vF4,
      totalFiturPlugin: vF6,
      isAdmins: v30,
      welcm: v32,
      wlcm: wlcm,
      isAdmins: v30,
      time: time,
      reply: f2,
      command: v15
    };
    const vV107 = v107;
    let v108 = false;
    for (const v109 of vVF7) {
      if (v109.command.includes(v15)) {
        try {
          await v109.operate(vV107);
          v108 = true;
        } catch (_0x2a1e4f) {
          console.error("Error executing plugin " + v109.filePath + ":", _0x2a1e4f);
        }
        break;
      }
    }
    const v110 = String.fromCharCode(8206);
    const v111 = v110.repeat(4001);
    switch (v15) {
      case "menu":
        {
          if (!vCheckRegisteredUser) {
            return f2(mess.regis);
          }
          if (v16.length < 1) {
            return f3("Haii *" + v13 + " 👋*, *" + ucapanWaktu + "*, Sebelumnya perkenalkan aku adalah " + global.botname + ", disini aku hanyalah Assistent virtual jadi tolong yang sopan dalam mengetik ya\n" + v111 + "\n⩩ *Informasi Bot*\n🤖 *Nama Bot* : " + global.botname + "\n👤 *Nama Owner* : " + global.ownername + "\n💻 *Runtime* : " + runtime(process.uptime()) + "\n📒 *Total User* : " + Object.keys(db.data.users).length + " Users\n\n⩩ *Informasi Pengguna*\n🔢 *Nomor* : @" + p2.sender.split("@")[0] + "\n🔛 *Status* : " + (v18 ? "Owner" : "User") + "\n📋 *User* : " + (v84 ? "Premium" : "Free") + "\n🌀 *Limit :* " + v82 + "\n💴 *Balance :* $" + toRupiah(v83) + "\n\n⩩ *Daftar Menu Yang Tersedia*\n┆≫ Menu All\n┆≫ Menu Owner\n┆≫ Menu Group\n┆≫ Menu Main\n┆≫ Menu Search\n┆≫ Menu Ai\n┆≫ Menu Quotes\n┆≫ Menu Downloader\n┆≫ Menu Cpanel\n*<───── A黒川茜࿐ ─────>*\n");
          }
          if (v16[0] === "All") {
            return f3("Haii *" + v13 + " 👋*, *" + ucapanWaktu + "*, Sebelumnya perkenalkan aku adalah " + global.botname + ", disini aku hanyalah Assistent virtual jadi tolong yang sopan dalam mengetik ya\n" + v111 + "\n⩩ *Informasi Bot*\n🤖 *Nama Bot* : " + global.botname + "\n👤 *Nama Owner* : " + global.ownername + "\n💻 *Runtime* : " + runtime(process.uptime()) + "\n📒 *Total User* : " + Object.keys(db.data.users).length + " Users\n⩩ *Informasi Pengguna*\n🔢 *Nomor* : @" + p2.sender.split("@")[0] + "\n🔛 *Status* : " + (v18 ? "Owner" : "User") + "\n📋 *User* : " + (v84 ? "Premium" : "Free") + "\n🌀 *Limit :* " + v82 + "\n💴 *Balance :* $" + toRupiah(v83) + "\n\n⩩ *MENU OWNER*\n┆≫ add\n┆≫ addcase\n┆≫ addlimit\n┆≫ addmoney\n┆≫ addplugin\n┆≫ addpremium\n┆≫ backupdatabase\n┆≫ minlimit\n┆≫ dellpremium\n┆≫ del\n┆≫ getbio\n┆≫ listpremium\n┆≫ minmoney\n┆≫ addcase\n┆≫ public\n┆≫ self\n┆≫ restart\n┆≫ autobio\n┆≫ antilink\n\n⩩ *MENU GROUP*\n┆≫ apakah\n┆≫ bisakah\n┆≫ artinama\n┆≫ cekcantil\n┆≫ cekkhodam\n┆≫ cekperawan\n┆≫ ceksifat\n┆≫ demote\n┆≫ cekganteng\n┆≫ kick\n┆≫ linkgroup\n┆≫ ramalanjodoh\n┆≫ promote\n┆≫ ramalannasib\n┆≫ sangecek\n┆≫ cekgay\n┆≫ ceklesbi\n┆≫ tagall\n┆≫ ttp\n┆≫ welcome\n\n⩩ *MENU MAIN*\n┆≫ listregis\n┆≫ confes\n┆≫ menfes\n┆≫ qc\n┆≫ totalfitur\n┆≫ afk\n┆≫ topglobal\n┆≫ sticker\n┆≫ tourl\n┆≫ toimg\n┆≫ remini\n┆≫ profile\n┆≫ dnslookup\n\n⩩ *MENU SEARCH*\n┆≫ animesearch\n┆≫ chord\n┆≫ lirik\n┆≫ cuaca\n┆≫ harilibur\n┆≫ infogempa\n┆≫ lacakip\n┆≫ dnslookup\n┆≫ whois\n┆≫ animeindo-search\n┆≫ animeindo-detail\n┆≫ subdomain\n┆≫ ttstalk\n┆≫ wastalk\n┆≫ cariresep\n┆≫ bacaresep\n┆≫ kodepos\n\n⩩ *MENU AI*\n┆≫ akane-ai\n┆≫ miku\n┆≫ nahida\n┆≫ nami\n┆≫ taylorswift\n┆≫ txt2img\n\n⩩ *MENU QUOTES*\n┆≫ quotes-bucin\n┆≫ quotes-hacker\n┆≫ quotes-islami\n┆≫ quotes-pantun\n┆≫ quotes-sindiran\n┆≫ quotes-bacot\n┆≫ quotes-gombal\n\n⩩ *MENU DOWNLOADER*\n┆≫ tiktoks\n┆≫ mediafire\n┆≫ ytsearch / yts\n┆≫ instagram\n┆≫ tiktok\n┆≫ spotify\n┆≫ play\n\n⩩ *MENU CPANEL*\n┆≫ 1GB SAMPAI 25GB + UNLI\n┆≫ createadmin\n┆≫ listuser\n┆≫ listserver\n┆≫ listadminpanel\n┆≫ detailuser\n┆≫ hapusserver\n┆≫ hapususer\n\n*<───── A黒川茜࿐ ─────>*\n ");
          } else if (v16[0] === "Owner") {
            return f3("Haii *" + v13 + " 👋*, *" + ucapanWaktu + "*, Sebelumnya perkenalkan aku adalah " + global.botname + ", disini aku hanyalah Assistent virtual jadi tolong yang sopan dalam mengetik ya\n" + v111 + "\n⩩ *Informasi Bot*\n🤖 *Nama Bot* : " + global.botname + "\n👤 *Nama Owner* : " + global.ownername + "\n💻 *Runtime* : " + runtime(process.uptime()) + "\n📒 *Total User* : " + Object.keys(db.data.users).length + " Users\n⩩ *Informasi Pengguna*\n🔢 *Nomor* : @" + p2.sender.split("@")[0] + "\n🔛 *Status* : " + (v18 ? "Owner" : "User") + "\n📋 *User* : " + (v84 ? "Premium" : "Free") + "\n🌀 *Limit :* " + v82 + "\n💴 *Balance :* $" + toRupiah(v83) + "\n\n⩩ *MENU OWNER*\n┆≫ add\n┆≫ addcase\n┆≫ addlimit\n┆≫ addmoney\n┆≫ addplugin\n┆≫ addpremium\n┆≫ backupdatabase\n┆≫ minlimit\n┆≫ dellpremium\n┆≫ del\n┆≫ getbio\n┆≫ listpremium\n┆≫ minmoney\n┆≫ addcase\n┆≫ public\n┆≫ self\n┆≫ restart\n┆≫ autobio\n┆≫ antilink\n");
          } else if (v16[0] === "Group") {
            return f3("Haii *" + v13 + " 👋*, *" + ucapanWaktu + "*, Sebelumnya perkenalkan aku adalah " + global.botname + ", disini aku hanyalah Assistent virtual jadi tolong yang sopan dalam mengetik ya\n" + v111 + "\n⩩ *Informasi Bot*\n🤖 *Nama Bot* : " + global.botname + "\n👤 *Nama Owner* : " + global.ownername + "\n💻 *Runtime* : " + runtime(process.uptime()) + "\n📒 *Total User* : " + Object.keys(db.data.users).length + " Users\n⩩ *Informasi Pengguna*\n🔢 *Nomor* : @" + p2.sender.split("@")[0] + "\n🔛 *Status* : " + (v18 ? "Owner" : "User") + "\n📋 *User* : " + (v84 ? "Premium" : "Free") + "\n🌀 *Limit :* " + v82 + "\n💴 *Balance :* $" + toRupiah(v83) + "\n\n⩩ *MENU GROUP*\n┆≫ apakah\n┆≫ bisakah\n┆≫ artinama\n┆≫ cekcantil\n┆≫ cekkhodam\n┆≫ cekperawan\n┆≫ ceksifat\n┆≫ demote\n┆≫ cekganteng\n┆≫ kick\n┆≫ linkgroup\n┆≫ ramalanjodoh\n┆≫ promote\n┆≫ ramalannasib\n┆≫ sangecek\n┆≫ cekgay\n┆≫ ceklesbi\n┆≫ tagall\n┆≫ ttp\n┆≫ welcome\n");
          } else if (v16[0] === "Main") {
            return f3("Haii *" + v13 + " 👋*, *" + ucapanWaktu + "*, Sebelumnya perkenalkan aku adalah " + global.botname + ", disini aku hanyalah Assistent virtual jadi tolong yang sopan dalam mengetik ya\n" + v111 + "\n⩩ *Informasi Bot*\n🤖 *Nama Bot* : " + global.botname + "\n👤 *Nama Owner* : " + global.ownername + "\n💻 *Runtime* : " + runtime(process.uptime()) + "\n📒 *Total User* : " + Object.keys(db.data.users).length + " Users\n⩩ *Informasi Pengguna*\n🔢 *Nomor* : @" + p2.sender.split("@")[0] + "\n🔛 *Status* : " + (v18 ? "Owner" : "User") + "\n📋 *User* : " + (v84 ? "Premium" : "Free") + "\n🌀 *Limit :* " + v82 + "\n💴 *Balance :* $" + toRupiah(v83) + "\n\n⩩ *MENU MAIN*\n┆≫ listregis\n┆≫ confes\n┆≫ menfes\n┆≫ qc\n┆≫ totalfitur\n┆≫ afk\n┆≫ topglobal\n┆≫ sticker\n┆≫ tourl\n┆≫ toimg\n┆≫ remini\n┆≫ profile\n┆≫ dnslookup\n");
          } else if (v16[0] === "Search") {
            return f3(" \nHaii *" + v13 + " 👋*, *" + ucapanWaktu + "*, Sebelumnya perkenalkan aku adalah " + global.botname + ", disini aku hanyalah Assistent virtual jadi tolong yang sopan dalam mengetik ya\n" + v111 + "\n⩩ *Informasi Bot*\n🤖 *Nama Bot* : " + global.botname + "\n👤 *Nama Owner* : " + global.ownername + "\n💻 *Runtime* : " + runtime(process.uptime()) + "\n📒 *Total User* : " + Object.keys(db.data.users).length + " Users\n⩩ *Informasi Pengguna*\n🔢 *Nomor* : @" + p2.sender.split("@")[0] + "\n🔛 *Status* : " + (v18 ? "Owner" : "User") + "\n📋 *User* : " + (v84 ? "Premium" : "Free") + "\n🌀 *Limit :* " + v82 + "\n💴 *Balance :* $" + toRupiah(v83) + "\n\n⩩ *MENU SEARCH*\n┆≫ animesearch\n┆≫ chord\n┆≫ lirik\n┆≫ cuaca\n┆≫ harilibur\n┆≫ infogempa\n┆≫ lacakip\n┆≫ dnslookup\n┆≫ whois\n┆≫ animeindo-search\n┆≫ animeindo-detail\n┆≫ subdomain\n┆≫ ttstalk\n┆≫ wastalk\n┆≫ cariresep\n┆≫ bacaresep\n┆≫ kodepos\n");
          } else if (v16[0] === "Ai") {
            return f3(" Haii *" + v13 + " 👋*, *" + ucapanWaktu + "*, Sebelumnya perkenalkan aku adalah " + global.botname + ", disini aku hanyalah Assistent virtual jadi tolong yang sopan dalam mengetik ya\n" + v111 + "\n⩩ *Informasi Bot*\n🤖 *Nama Bot* : " + global.botname + "\n👤 *Nama Owner* : " + global.ownername + "\n💻 *Runtime* : " + runtime(process.uptime()) + "\n📒 *Total User* : " + Object.keys(db.data.users).length + " Users\n⩩ *Informasi Pengguna*\n🔢 *Nomor* : @" + p2.sender.split("@")[0] + "\n🔛 *Status* : " + (v18 ? "Owner" : "User") + "\n📋 *User* : " + (v84 ? "Premium" : "Free") + "\n🌀 *Limit :* " + v82 + "\n💴 *Balance :* $" + toRupiah(v83) + "\n\n⩩ *MENU AI*\n┆≫ akane-ai\n┆≫ miku\n┆≫ nahida\n┆≫ nami\n┆≫ taylorswift\n┆≫ txt2img\n");
          } else if (v16[0] === "Quotes") {
            return f3(" Haii *" + v13 + " 👋*, *" + ucapanWaktu + "*, Sebelumnya perkenalkan aku adalah " + global.botname + ", disini aku hanyalah Assistent virtual jadi tolong yang sopan dalam mengetik ya\n" + v111 + "\n⩩ *Informasi Bot*\n🤖 *Nama Bot* : " + global.botname + "\n👤 *Nama Owner* : " + global.ownername + "\n💻 *Runtime* : " + runtime(process.uptime()) + "\n📒 *Total User* : " + Object.keys(db.data.users).length + " Users\n⩩ *Informasi Pengguna*\n🔢 *Nomor* : @" + p2.sender.split("@")[0] + "\n🔛 *Status* : " + (v18 ? "Owner" : "User") + "\n📋 *User* : " + (v84 ? "Premium" : "Free") + "\n🌀 *Limit :* " + v82 + "\n💴 *Balance :* $" + toRupiah(v83) + "\n\n⩩ *MENU QUOTES*\n┆≫ quotes-bucin\n┆≫ quotes-hacker\n┆≫ quotes-islami\n┆≫ quotes-pantun\n┆≫ quotes-sindiran\n┆≫ quotes-bacot\n┆≫ quotes-gombal\n");
          } else if (v16[0] === "Downloader") {
            return f3("Haii *" + v13 + " 👋*, *" + ucapanWaktu + "*, Sebelumnya perkenalkan aku adalah " + global.botname + ", disini aku hanyalah Assistent virtual jadi tolong yang sopan dalam mengetik ya\n" + v111 + "\n⩩ *Informasi Bot*\n🤖 *Nama Bot* : " + global.botname + "\n👤 *Nama Owner* : " + global.ownername + "\n💻 *Runtime* : " + runtime(process.uptime()) + "\n📒 *Total User* : " + Object.keys(db.data.users).length + " Users\n⩩ *Informasi Pengguna*\n🔢 *Nomor* : @" + p2.sender.split("@")[0] + "\n🔛 *Status* : " + (v18 ? "Owner" : "User") + "\n📋 *User* : " + (v84 ? "Premium" : "Free") + "\n🌀 *Limit :* " + v82 + "\n💴 *Balance :* $" + toRupiah(v83) + "\n\n⩩ *MENU DOWNLOADER*\n┆≫ tiktoks\n┆≫ mediafire\n┆≫ ytsearch / yts\n┆≫ instagram\n┆≫ tiktok\n┆≫ spotify\n┆≫ play\n");
          } else if (v16[0] === "Cpanel") {
            return f3("Haii *" + v13 + " 👋*, *" + ucapanWaktu + "*, Sebelumnya perkenalkan aku adalah " + global.botname + ", disini aku hanyalah Assistent virtual jadi tolong yang sopan dalam mengetik ya\n" + v111 + "\n⩩ *Informasi Bot*\n🤖 *Nama Bot* : " + global.botname + "\n👤 *Nama Owner* : " + global.ownername + "\n💻 *Runtime* : " + runtime(process.uptime()) + "\n📒 *Total User* : " + Object.keys(db.data.users).length + " Users\n⩩ *Informasi Pengguna*\n🔢 *Nomor* : @" + p2.sender.split("@")[0] + "\n🔛 *Status* : " + (v18 ? "Owner" : "User") + "\n📋 *User* : " + (v84 ? "Premium" : "Free") + "\n🌀 *Limit :* " + v82 + "\n💴 *Balance :* $" + toRupiah(v83) + "\n\n⩩ *MENU CPANEL*\n┆≫ 1GB SAMPAI 25GB + UNLI\n┆≫ createadmin\n┆≫ listuser\n┆≫ listserver\n┆≫ listadminpanel\n┆≫ detailuser\n┆≫ hapusserver\n┆≫ hapususer\n\n");
          }
        }
        break;
      case "public":
        {
          if (!v18) {
            return f2(mess.owner);
          }
          p.public = true;
          f2(mess.done);
        }
        break;
      case "self":
        {
          if (!v18) {
            return f2(mess.owner);
          }
          p.public = false;
          f2(mess.done);
        }
        break;
      case "restart":
        if (!v18) {
          return f2("⚠️ *Peringatan :* Ada Yang Mencoba Merestart Bot, Pengguna Tidak Di Kenal!.");
        }
        f2("Mulai Merestart.....");
        await sleep(3000);
        process.exit();
        break;
      case "autobio":
        if (!v18) {
          return f2(mess.owner);
        }
        if (v16.length < 1) {
          return f2("Example " + (v6 + v15) + " on/off");
        }
        if (q == "on") {
          autobio = true;
          f2("Berhasil Mengubah AutoBio Ke " + q);
        } else if (q == "off") {
          autobio = false;
          f2("Berhasil Mengubah AutoBio Ke " + q);
        }
        break;
      case "antilink":
        {
          if (!p2.isGroup) {
            return p2.reply(mess.group);
          }
          if (!v29) {
            return p2.reply(mess.botAdmin);
          }
          if (!v30 && !v18) {
            return p2.reply(mess.admin);
          }
          if (v16[0] === "on") {
            if (v) {
              return p2.reply("_Sudah Diaktifkan_");
            }
            v.push(v23);
            fs2.writeFileSync("./database/lib/ntilink.json", JSON.stringify(v));
            p2.reply("_Sukses aktifkan " + v15 + " di group ini_");
            var v112 = await message.groupMetadata(v23);
            var v113 = v112.participants;
            var v114 = [];
            v113.map(async p35 => {
              v114.push(p35.id.replace("c.us", "s.whatsapp.net"));
            });
            const v115 = {
              mentionedJid: v114
            };
            const v116 = {
              text: "```「 ⚠️Warning⚠️ 」```\n\nJika Anda bukan admin, jangan kirim link apapun di grup ini atau kamu akan langsung ditendang!",
              contextInfo: v115
            };
            const v117 = {
              quoted: p2
            };
            message.sendMessage(v23, v116, v117);
          } else if (v16[0] === "off") {
            if (!v) {
              return p2.reply("_Sudah Dimatikan_");
            }
            let v118 = v.indexOf(v23);
            v.splice(v118, 1);
            fs2.writeFileSync("./database/lib/ntilink.json", JSON.stringify(v));
            p2.reply("_Sukses matikan " + v15 + " di group ini_");
          }
        }
        break;
      case "resetlinkgc":
        if (!v18) {
          return f2(mess.owner);
        }
        if (!p2.isGroup) {
          return f2(mess.group);
        }
        if (!v29) {
          return f2(mess.badm);
        }
        p.groupRevokeInvite(v23);
        break;
      case "editdesk":
        {
          if (!v18) {
            return f2(mess.owner);
          }
          if (!p2.isGroup) {
            return f2(mess.group);
          }
          if (!v29) {
            return f2(mess.badm);
          }
          if (!v30) {
            return f2(mess.admin);
          }
          if (!v19) {
            return f2("Text Nya ?");
          }
          await p.groupUpdateDescription(v23, v19).then(res).catch(p36 => f2(jsonformat(p36)));
        }
        break;
      case "closetime":
        if (!p2.isGroup) {
          return f2(mess.group);
        }
        if (!v29) {
          return f2(mess.Badmin);
        }
        if (v16[1] == "detik") {
          var v127 = v16[0] * "1000";
        } else if (v16[1] == "menit") {
          var v127 = v16[0] * "60000";
        } else if (v16[1] == "jam") {
          var v127 = v16[0] * "3600000";
        } else if (v16[1] == "hari") {
          var v127 = v16[0] * "86400000";
        } else {
          return f2("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
        }
        f2("Close time " + q + " dimulai dari sekarang");
        setTimeout(() => {
          const v123 = "*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan";
          p.groupSettingUpdate(v23, "announcement");
          f2(v123);
        }, v127);
        break;
      case "opentime":
        {
          if (!p2?.isGroup) {
            return f2("Khusus Dalam Group");
          }
          if (!v30 && !v18) {
            return f2("Khusus Admin Group");
          }
          if (!v29) {
            return f2("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini");
          }
          if (v16[1] == "detik") {
            var v127 = v16[0] * "1000";
          } else if (v16[1] == "menit") {
            var v127 = v16[0] * "60000";
          } else if (v16[1] == "jam") {
            var v127 = v16[0] * "3600000";
          } else if (v16[1] == "hari") {
            var v127 = v16[0] * "86400000";
          } else {
            return f2("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
          }
          f2("Open Time " + q + " Dimulai Dari Sekarang");
          setTimeout(() => {
            const v128 = p2.participant;
            const v129 = "*Tepat Waktu* Grup Dibuka Oleh Admin\nSekarang Member Dapat Mengirim Pesan";
            p.groupSettingUpdate(p2.chat, "not_announcement");
            f2(v129);
          }, v127);
        }
        break;
      case "afk":
        {
          if (!p2.isGroup) {
            return p2.reply(mess.group);
          }
          let v130 = global.db.data.users[p2.sender];
          v130.afkTime = +new Date();
          v130.afkReason = v19;
          f2("💤 *" + p2.pushName + "* Telah Afk" + (v19 ? ": " + v19 : ""));
        }
        break;
      case "panduan":
        {
          f2("⚠️ *Mohon Di Baca Dengan Baik*\n\n*1. Pembukaan*\n\nSebelumnya Terimakasih Sudah Mau Menggunakan *" + global.botname + "*, Support Saya Terus Untuk Mengembangkan Script Bot Ini Dengan Cara Subscribe YT *@galeri_car_cpm8048* Selaku Dev Dari Bot Tersebut\n\n*2. Cara Pakai*\n\nUntuk Memulai Bot Anda Bisa Langsung Memberi Pertanyaan Apapun, Atau Untuk Melihat Menu Menu Yang Tersedia Ketikan Saja Command *.Menu*\n\n*3. Privasi Dan Ke Amanan*\n\nData Yang Kami Simpan Bukanlah Data Pribadi Dari Seseorang Jadi Jangan Khawatir, 1x24 Jam Bot Akan Mengalami Restart, Chat Antara Pengguna & Bot Bersifat Encripty Jadi Owner Tidak Boleh Membacanya Terkecuali Ada Pelanggaran Yang Dilakukan Pengguna\n\n\n*5. Apa Saja Pelanggaran Yang Dimaksud ?*\n\n01. Spam Terhadap Bot Secara Berlebihan\n02. Bersifat Toxic & Arogan\n03. Jika Tidak Subscribe Channel galeri_car_cpm8048 Termasuk Pelanggaran 😁\n04. Bersifat Rasisme Dalam Menggunakn Bot\n\n\n*6. Penutupan*\n\nTerimakasih Sudah Menggunakan Cpm_JhonBOTZz Semoga Harimu Menyenakngkan\n\n*Copyright © *" + global.botname + "* All Rights Reserved*\n");
        }
        break;
      case "dadu":
        {
          if (!vCheckRegisteredUser) {
            return f2("Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!");
          }
          let v131 = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
          let v132 = v131[Math.floor(Math.random() * v131.length)];
          f2(v132);
        }
        break;
      case "tanyakerang":
      case "kerangajaib":
      case "kerang":
        {
          if (!vCheckRegisteredUser) {
            return p2.reply("Kamu belum daftar! Silahkan daftar dengan cara .daftar");
          }
          if (!v19) {
            throw "*Example : " + (v6 + v15) + " saya menang?*";
          }
          let v133 = ["Mungkin suatu hari", "Tidak juga", "Tidak keduanya", "Kurasa tidak", "Ya", "Tidak", "Coba tanya lagi", "Tidak ada"];
          let v134 = v133[Math.floor(Math.random() * v133.length)];
          let v135 = "*" + v15 + " " + v19 + "*\n*Jawab : " + v134 + "*";
          const v136 = {
            text: v135
          };
          p.sendMessage(p2.chat, v136, {
            quoted: p2
          });
        }
        break;
      case "susunkata":
        {
          if (!p2.isGroup) {
            return f2(mess.group);
          }
          let v137 = global.db.data.users[p2.sender];
          if (v137.registered === false) {
            return f2(mess.notregist);
          }
          if (susunkata[p2.chat]) {
            return p.sendMessage(p2.chat, {
              text: "Soal ini belum selesai"
            }, {
              quoted: susunkata[p2.chat][0]
            });
          }
          var v138 = await bochil.susunkata();
          console.log("Jawaban : " + v138.jawaban);
          susunkata[p2.chat] = [await f2("*── 「 SUSUN KATA 」 ──*\n\n≡ Soal : " + v138.soal + "\n≡ Tipe : " + v138.tipe + "\n≡ Reward : +1000 Xp\n≡ Timeout : " + 180 .toFixed(2) + " Detik\n\n*Balas pesan ini untuk Menjawab atau Menyerah!*"), v138, 4, setTimeout(() => {
            if (susunkata[p2.chat]) {
              f2("*Waktu habis!*\n\nJawabannya adalah *" + v138.jawaban + "*");
              delete susunkata[p2.chat];
            }
          }, 180000)];
        }
        break;
      case "topglobal":
        {
          f2(mess.wait);
          let v139 = Object.entries(global.db.data.users).map(([v140, v141]) => {
            const v142 = {
              ...v141
            };
            v142.jid = v140;
            return v142;
          });
          let v143 = v139.map(toNumber("balance")).sort(sort("balance"));
          let v144 = v143.map(enumGetKey);
          f2("\n*🏆 LIST TOP GLOBAL BALANCE*\n\nKamu Top *" + (v144.indexOf(p2?.sender) + 1) + "* Balance dari *" + v144.length + "* Users\n" + v143.slice(0, 10).map(({
            jid: _0x532c8e,
            balance: _0x39d313
          }, p37) => p37 + 1 + ". *Nama :* @" + db.data.users[_0x532c8e].name + "\n*Nomor :* " + _0x532c8e.split("@")[0] + "\n*Balance :* $" + toRupiah(_0x39d313) + "\n").join("\n") + "\n");
        }
        break;
      case "buylimit":
      case "belilimit":
        {
          if (!v16[0]) {
            return f2("100\n\nHarga 1 *limit* = $1000 *balance*");
          }
          if (isNaN(v16[0])) {
            return f2("20");
          }
          if (v16[0].includes(".")) {
            return f2("20");
          }
          let v145 = 1000;
          let vNumber = Number(parseInt(v16[0]) * v145);
          if (v83 < vNumber) {
            return f2("*Balance* kamu tidak cukup untuk membeli " + v16[0] + " *Limit!*\n\nDapatkan *Balance* dengan cara memainkan game");
          }
          db.data.users[p2?.sender].limit += Number(v16[0]);
          db.data.users[p2?.sender].balance -= vNumber;
          f2("Berhasil membeli *" + v16[0] + "* limit, dengan *$" + toRupiah(vNumber) + "* balance");
        }
        break;
      case "claim":
        {
          if (db.data.users[p2.sender].claim == 0) {
            return f2("Kamu sudah *Claim* hadiah hari ini, hadiah *Claim* akan direset saat jam 12 malam!");
          }
          const vRandomNumber = randomNumber(50000, 70000);
          const vRandomNumber2 = randomNumber(100, 200);
          db.data.users[p2.sender].balance += vRandomNumber;
          db.data.users[p2.sender].limit += vRandomNumber2;
          db.data.users[p2.sender].claim = 0;
          f2("Berhasil *Claim* hadiah harian\n\n+ $" + toRupiah(vRandomNumber) + " *Balance*\n+ " + vRandomNumber2 + " *Limit*");
        }
        break;
      case "ceklimit":
      case "limit":
      case "profile":
      case "balance":
      case "cekbalance":
      case "my":
        {
          if (p2.quoted) {
            try {
              ppuser = await p.profilePictureUrl(pengirim, "image");
            } catch (_0x23948c) {
              ppuser = "https://telegra.ph/file/a059a6a734ed202c879d3.jpg";
            }
            let v146 = "\n👤 Name : *" + v13 + "*\n🌐 Nomor : *@" + p2.sender.split("@")[0] + "*\n📖 Limit : *" + v82 + "*\n💰 Balance : *$" + toRupiah(v83) + "*";
            const v147 = {
              quoted: vV45
            };
            p.sendMessage(p2.chat, {
              text: v146,
              contextInfo: {
                externalAdReply: {
                  thumbnailUrl: thumbnail,
                  title: "PROFILE & LIMIT & BALANCE",
                  renderLargerThumbnail: true,
                  sourceUrl: "https://wa.me/" + p2.sender.split("@")[0],
                  mediaType: 1
                }
              }
            }, v147);
          } else {
            let v148 = "\n👤 Name : *" + v13 + "*\n🌐 Nomor : *@" + p2.sender.split("@")[0] + "*\n🗓️ Limit : *" + v82 + "*\n💰 Balance : *$" + toRupiah(v83) + "*";
            const v149 = {
              quoted: vV45
            };
            p.sendMessage(p2.chat, {
              text: v148,
              contextInfo: {
                externalAdReply: {
                  thumbnailUrl: thumbnail,
                  title: "PROFILE & LIMIT & USER",
                  renderLargerThumbnail: true,
                  sourceUrl: "https://wa.me/" + p2.sender.split("@")[0],
                  mediaType: 1
                }
              }
            }, v149);
          }
        }
        break;
      case "sticker":
      case "s":
      case "stickergif":
      case "sgif":
        {
          if (v82 < 1) {
            return f2(mess.limit);
          }
          if (!v20) {
            throw "Balas Video/Image Dengan Caption " + (v6 + v15);
          }
          if (/image/.test(v21)) {
            let v150 = await v20.download();
            const v151 = {
              packname: global.packname,
              author: global.author
            };
            let v152 = await p.sendImageAsStickerAV(v23, v150, vV45, v151);
            await fs2.unlinkSync(v152);
          } else if (/video/.test(v21)) {
            if ((v20.msg || v20).seconds > 11) {
              return f2("Maksimal 10 detik!");
            }
            let v153 = await v20.download();
            const v154 = {
              packname: global.packname,
              author: global.author
            };
            let v155 = await p.sendVideoAsSticker(v23, v153, fcall, v154);
            await fs2.unlinkSync(v155);
          } else {
            throw "Kirim Gambar/Video Dengan Caption " + (v6 + v15) + "\nDurasi Video 1-9 Detik";
          }
          f4();
        }
        break;
      case "toimage":
      case "toimg":
        {
          if (v82 < 1) {
            return f2(mess.limit);
          }
          if (!v20) {
            throw "Reply Image";
          }
          if (!/webp/.test(v21)) {
            throw "Balas sticker dengan caption *" + (v6 + v15) + "*";
          }
          let v156 = await p.downloadAndSaveMediaMessage(v20);
          let v157 = await getRandom(".png");
          exec("ffmpeg -i " + v156 + " " + v157, p38 => {
            fs2.unlinkSync(v156);
            if (p38) {
              throw p38;
            }
            let v158 = fs2.readFileSync(v157);
            const v159 = {
              image: v158
            };
            const v160 = {
              quoted: vV45
            };
            p.sendMessage(v23, v159, v160);
            fs2.unlinkSync(v157);
          });
          f4();
        }
        break;
      case "remini":
        {
          if (!v20) {
            return f2("Where is the picture?");
          }
          if (!/image/.test(v21)) {
            return f2("Send/Reply Photos With Captions " + (v6 + v15));
          }
          const {
            remini: _0x30e189
          } = require("./lib/remini");
          let v161 = await v20.download();
          let v162 = await _0x30e189(v161, "enhance");
          const v163 = {
            image: v162,
            caption: mess.success
          };
          const v164 = {
            quoted: vV45
          };
          p.sendMessage(p2.chat, v163, v164);
        }
        break;
      case "tourl":
        {
          if (!v20 || !v20.mimetype || !/image/.test(v20.mimetype)) {
            return f2("*⚪ Example :* tourl (reply/tag gambarnya)");
          }
          try {
            let v165 = await p.downloadAndSaveMediaMessage(v20);
            let v166 = fs2.readFileSync(v165);
            const {
              pomf: _0x5d7d25
            } = require("./database/lib/uploud");
            let v167 = await _0x5d7d25(v166);
            f2("*Berikut Gambar Yang Berhasil Di Jadikan Link, Bilang Apa Sama " + global.botname + "?😊*\n" + v167);
            await fs2.unlinkSync(v165);
          } catch (_0x4cb6ba) {
            f2("Terjadi kesalahan saat mengupload file.");
          }
        }
        break;
      case "jarak":
      case "jarakkota":
      case "jarakdari":
        {
          if (v82 < 1) {
            return f2(mess.limit);
          }
          var [v168, v169] = v19.split`|`;
          if (!v23 || !v169) {
            return f2("example " + (v6 + v15) + " Yogyakarta|Jakarta");
          }
          f2(mess.search);
          var v170 = await jarakkota(v168, v169);
          const v171 = {
            quoted: vV45
          };
          if (v170.img) {
            return p.sendMessage(p2.chat, {
              image: v170.img,
              caption: v170.desc
            }, v171);
          }
          f4();
        }
        break;
      case "brat":
        {
          if (!v19) {
            return f2("*⚪ Example:* " + (v6 + v15) + " Aku " + global.botname);
          }
          if (v19.length > 250) {
            return f2("*⚠️ Text Tidak Boleh Terlalu Panjang*");
          }
          f2(mess.wait);
          const v172 = {
            url: "https://mxmxk-helper.hf.space/brat?text=" + v19
          };
          p.sendMessage(p2.chat, {
            image: v172,
            caption: "*Berhasil Menjadikan Image, Sekarang Silahkan ketik dan reply gambar ini dengan caption .sticker*",
            mentions: [p2.sender]
          }, {
            quoted: p2
          });
        }
        break;
      case "daftar":
      case "regis":
      case "register":
        {
          if (vCheckRegisteredUser) {
            return f2("Kamu sudah terdaftar");
          }
          const vCreateSerial = createSerial(20);
          mzd = "⩩ *Kamu Berhasil Terdaftar* ⩩\n\n🌐 Nomor : @" + p2?.sender.split("@")[0] + "\n🤴 Nama : " + v13 + "\n🎀 Status : Sukses✅ \n🔖 Sn : " + vCreateSerial + "\n\nHaii " + v13 + " Kamu Kini Berhasil Terdaftar,Kini kamu sudah bisa mengakses menu,Gunakan bot sebaik baiknya dan jangan spam yaa";
          veri = p2?.sender;
          if (!p2.isGroup) {
            addRegisteredUser(p2?.sender, v13, vCreateSerial);
            const v173 = {
              showAdAttribution: true,
              title: "TERDAFTAR KEDALAM DATABASE",
              body: "",
              thumbnailUrl: ppuser,
              sourceUrl: hariini,
              mediaType: 1,
              renderLargerThumbnail: true
            };
            p.sendMessage(p2?.chat, {
              text: mzd,
              contextInfo: {
                mentionedJid: [p2?.chat],
                externalAdReply: v173
              }
            });
          } else {
            addRegisteredUser(p2?.sender, v13, vCreateSerial);
            const v174 = {
              showAdAttribution: true,
              title: "TERDAFTAF KEDALAM DATABASE",
              body: "",
              thumbnailUrl: ppuser,
              sourceUrl: hariini,
              mediaType: 1,
              renderLargerThumbnail: true
            };
            p.sendMessage(p2?.chat, {
              text: mzd,
              contextInfo: {
                mentionedJid: [p2?.chat],
                externalAdReply: v174
              }
            });
          }
        }
        break;
      case "tebakbomb":
      case "bomb":
        {
          if (!p2.isGroup) {
            return f2(mess.group);
          }
          if (p2.chat in p.bomb) {
            return p.sendText(p2.chat, "Masih ada game yang belum terselsaikan!", p.bomb[p2.chat][0]);
          }
          p.bomb = p.bomb ? p.bomb : {};
          let v175 = p2.chat;
          let v176 = 180000;
          const v177 = ["💥", "✅", "✅", "✅", "✅", "✅", "✅", "✅", "✅"].sort(() => Math.random() - 0.5);
          const v178 = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
          const v179 = v177.map((p39, p40) => ({
            emot: p39,
            number: v178[p40],
            position: p40 + 1,
            state: false
          }));
          let v180 = "*🎮 GAME TEBAK BOM 🎮*\n\nKirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n";
          for (let v181 = 0; v181 < v179.length; v181 += 3) {
            v180 += v179.slice(v181, v181 + 3).map(p41 => p41.state ? p41.emot : p41.number).join("") + "\n";
          }
          v180 += "\nWaktu : *" + v176 / 1000 / 60 + " menit*\nHadiah : *Random Balance*\n\nApabila mendapat kotak yang berisi bom maka *Hadiah* tidak di berikan";
          let v182 = await p.sendText(p2.chat, v180, p.bomb[v175] ? p.bomb[v175][0] : p2);
          let {
            key: _0x479706
          } = v182;
          let v183;
          p.bomb[v175] = [v182, v179, setTimeout(() => {
            v183 = v179.find(p42 => p42.emot == "💥");
            if (p.bomb[v175]) {
              p.sendText(p2.chat, "*Waktu habis*\n\nKotak yang berisi bom " + v183.number + " tidak terbuka\nGame dihentikan!", p.bomb[v175][0]);
            }
            delete p.bomb[v175];
          }, v176), _0x479706];
        }
        break;
      case "casino":
        {
          if (!p2.isGroup) {
            return f2(mess.group);
          }
          let v184 = 1;
          p.casino = p.casino ? p.casino : {};
          if (p2.chat in p.casino) {
            return f2("Masih Ada Yang Melakukan Casino Disini, Tunggu Sampai Selesai!!");
          } else {
            p.casino[p2.chat] = true;
          }
          try {
            let v185 = ("" + Math.floor(Math.random() * 101)).trim();
            let v186 = ("" + Math.floor(Math.random() * 81)).trim();
            let v187 = v185 * 1;
            let v188 = v186 * 1;
            let v189 = v16[0];
            v189 = v189 ? /all/i.test(v189) ? Math.floor(db.data.users[p2.sender].balance / v184) : parseInt(v189) : v16[0] ? parseInt(v16[0]) : 1;
            v189 = Math.max(1, v189);
            if (v16.length < 1) {
              return f2(v6 + "casino <jumlah>\n" + v6 + "casino 1000");
            }
            if (db.data.users[p2.sender].balance >= v189 * 1) {
              db.data.users[p2.sender].balance -= v189 * 1;
              if (v187 > v188) {
                f2("💰 Casino 💰\n*" + v13 + ":* " + v188 + " Point\n*" + botname + ":* " + v187 + " Point\n\n*Kamu Kalah*\nKamu Kehilangan " + v189 + " Balance");
              } else if (v187 < v188) {
                db.data.users[p2.sender].balance += v189 * 2;
                f2("💰 Casino 💰\n*" + v13 + ":* " + v188 + " Point\n*" + botname + ":* " + v187 + " Point\n\n*Kamu Kalah*\nKamu Mendapatkan " + v189 * 2 + " Balance");
              } else {
                ldb.data.users[p2.sender].balance += v189 * 1;
                f2("💰 Casino 💰\n*" + v13 + ":* " + v188 + " Point\n*" + botname + ":* " + v187 + " Point\n\n*Seri*\nKamu Mendapatkan " + v189 * 1 + " Balance");
              }
            } else {
              f2("Balance Kamu Tidak Mencukupi Untuk Casino Silahkan *bermain game* Terlebih Dahulu!");
            }
          } catch (_0x42254a) {
            console.log(_0x42254a);
            f2(mess.error);
          } finally {
            delete p.casino[p2.chat];
          }
        }
        break;
      case "suit":
        {
          if (!p2.isGroup) {
            return f2(mess.group);
          }
          if (Object.values(suit).find(p43 => p43.id.startsWith("suit") && [p43.penantang, p43.ditantang].includes(p2.sender))) {
            return f2("Selesaikan dulu suit mu yang sebelumnya");
          }
          if (p2.quoted || v19) {
            if (v39 === v17) {
              return f2("Tidak bisa bermain suit dengan bot!");
            }
            if (v39 === p2.sender) {
              return f2("Tidak bisa bermain dengan diri sendiri!");
            }
            if (Object.values(suit).find(p44 => p44.id.startsWith("suit") && [p44.penantang, p44.ditantang].includes(v39))) {
              return p2.reply("Orang yang kamu tantang sedang bermain suit bersama orang lain");
            }
            let vRandomNumber3 = randomNumber(2000, 3000);
            let v190 = 60000;
            let v191 = "suit_" + Date.now();
            const v192 = {
              quoted: vV45
            };
            suit[v191] = {
              id: v191,
              penantang: p2.sender,
              ditantang: v39,
              status: "WAIT",
              hadiah: vRandomNumber3,
              chat: await p.sendMessage(p2.chat, {
                text: "*🎮 GAME SUIT 🎮*\n\n@" + p2.sender.split("@")[0] + " menantang @" + v39.split("@")[0] + " untuk bermain suit\n\nKetik *Y atau N* untuk bermain\nY = menerima suit\nN = menolak suit\n\nHadiah : *$" + vRandomNumber3 + "* balance",
                contextInfo: {
                  mentionedJid: [v39, p2.sender]
                }
              }, v192),
              timeout: v190,
              waktu: setTimeout(() => {
                if (suit[v191]) {
                  p.sendMessage(p2.chat, {
                    text: "Waktu habis! @" + v39.split("@")[0] + " tidak merespon suit\nGame dibatalkan!",
                    contextInfo: {
                      mentionedJid: [v39]
                    }
                  }, {
                    quoted: suit[v191].chat
                  });
                }
                delete suit[v191];
              }, v190)
            };
          } else {
            f2("@tagtarget");
          }
        }
        break;
      case "judi":
        {
          if (!p2.isGroup) {
            return f2(mess.group);
          }
          let vRandomNumber4 = randomNumber(2000, 3000);
          let v193 = ["😹", "🧢", "🗿"];
          let v194 = Math.floor(Math.random() * v193.length);
          let v195 = Math.floor(Math.random() * v193.length);
          let v196 = Math.floor(Math.random() * v193.length);
          let v197 = [];
          let v198 = [];
          let v199 = [];
          for (let v200 = 0; v200 < 3; v200++) {
            v197[v200] = v193[v194];
            v194++;
            if (v194 == v193.length) {
              v194 = 0;
            }
          }
          for (let v201 = 0; v201 < 3; v201++) {
            v198[v201] = v193[v195];
            v195++;
            if (v195 == v193.length) {
              v195 = 0;
            }
          }
          for (let v202 = 0; v202 < 3; v202++) {
            v199[v202] = v193[v196];
            v196++;
            if (v196 == v193.length) {
              v196 = 0;
            }
          }
          let v203;
          if (v194 == v195 && v195 == v196) {
            v203 = "JACKPOT! *$" + vRandomNumber4 + " point*";
            db.data.users[p2.sender].balance += vRandomNumber4;
          } else if (v194 == v195 || v194 == v196 || v195 == v196) {
            v203 = "Hampir Beruntung! *+1 Limits*";
            db.data.users[p2.sender].limit += 1;
          } else {
            v203 = "LOSE! *-$" + vRandomNumber4 + "*";
            if (vRandomNumber4 > db.data.users[p2.sender].balance) {
              ldb.data.users[p2.sender].balance = 0;
            } else {
              db.data.users[p2.sender].balance -= vRandomNumber4;
            }
          }
          let v204 = "乂  *S L O T S*\n\n";
          v204 += "\t[ " + v197[0] + " " + v198[0] + " " + v199[0] + " ]\n";
          v204 += "\t[ " + v197[1] + " " + v198[1] + " " + v199[1] + " ]\n";
          v204 += "\t[ " + v197[2] + " " + v198[2] + " " + v199[2] + " ]\n";
          v204 += "\n" + v203;
          f2(v204);
        }
        break;
      case "tictactoe":
      case "ttt":
      case "ttc":
      case "xox":
        if (!p2.isGroup) {
          return f2(mess.group);
        }
        if (v23 in tictactoe) {
          return f2("Masih ada game yang blum selesai");
        }
        if (!v39) {
          return f2("Kirim perintah *" + v15 + "* @tag atau reply pesan orangnya!");
        }
        if (v39 === v17) {
          return f2("Tidak bisa bermain dengan bot!");
        }
        if (v39 === v25) {
          return f2("Sad amat main ama diri sendiri");
        }
        var vRandomNumber5 = randomNumber(10, 20);
        await f2("@" + v25.split("@")[0] + " menantang @" + v39.split("@")[0] + " untuk bermain TicTacToe\n\n*Kirim (Y/N)* untuk bermain\n\nHadiah : " + vRandomNumber5 + " balance");
        tictactoe[v23] = {
          id: v23,
          status: null,
          hadiah: vRandomNumber5,
          penantang: v25,
          ditantang: v39,
          TicTacToe: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
        };
        break;
      case "delttt":
      case "delttc":
        if (!p2.isGroup) {
          return f2(mess.group);
        }
        if (!(v23 in tictactoe)) {
          return f2("Tidak ada sesi game tictactoe di grup ini");
        }
        if (v30 || isOwner) {
          delete tictactoe[v23];
          f2("Berhasil menghapus sesi tictactoe di grup ini\n\n-$500");
        } else if (tictactoe[v23].penantang.includes(v25)) {
          delete tictactoe[v23];
          f2("Berhasil menghapus sesi tictactoe di grup ini\n\n-$500");
        } else if (tictactoe[v23].ditantang.includes(v25)) {
          delete tictactoe[v23];
          f2("Berhasil menghapus sesi tictactoe di grup ini\n\n-$500");
        } else {
          f2("Anda tidak bisa menghapus sesi tictactoe karena bukan pemain!");
        }
        break;
      case "ping":
        {
          let os3 = require("os");
          const v205 = os3.cpus().map(p45 => {
            p45.total = Object.keys(p45.times).reduce((p46, p47) => p46 + p45.times[p47], 0);
            return p45;
          });
          const v206 = v205.reduce((p48, p49, p50, {
            length: _0x3a0425
          }) => {
            p48.total += p49.total;
            p48.speed += p49.speed / _0x3a0425;
            p48.times.user += p49.times.user;
            p48.times.nice += p49.times.nice;
            p48.times.sys += p49.times.sys;
            p48.times.idle += p49.times.idle;
            p48.times.irq += p49.times.irq;
            return p48;
          }, {
            speed: 0,
            total: 0,
            times: {
              user: 0,
              nice: 0,
              sys: 0,
              idle: 0,
              irq: 0
            }
          });
          let vRuntime = runtime(process.uptime());
          var v207 = os3.cpus();
          f3("*" + ucapanWaktu + ", " + v13 + "*\n\n🗓️ *Hari Ini* : " + hariini + "\n⚪ *Jam*      : " + time + "\n\n🌟 *INFORMATION BOT* 🌟\n\n━━━━━━━━━━━━━━━━━━━━\n💡 *Creator*      : " + global.author + "\n🔴 *Youtube*      : @oredigital\n🌐 *Website*      : oredigital.shop\n🤖 *Bot Name*    :  " + global.botname + "\n🔧 *Type*         : Case + Plugin\n📒 *Version Bot*  : " + global.versionbot + "\n👥 *Users*        : " + Object.keys(db.data.users).length + "\n📶 *Prefix*       : Tanpa Prefix\n📮 *Versi Nodejs* : " + process.version + "\n💾 *RAM Usage*    : " + formatp(os3.totalmem() - os3.freemem()) + " / " + formatp(os3.totalmem()) + "\n🧊 Cpu Model      : " + v207[0].model + "\n⏳ *Runtime*      : " + vRuntime + "\n━━━━━━━━━━━━━━━━━━━━\n\n✨ *Additional Stats* ✨\n- *Total Cases*: " + vF4() + "\n- *Total Plugins*: " + vF6() + "\n\n*⚪ Untuk Mendapatkan Info Script Silahkan Bergabung Ke Youtube Chanel Oredigital maupun ke WhatsApp Chenel Oredigital.\n\nCopyright © Akane AI.\n\n");
        }
        break;
      default:
        if (v5.startsWith("=>")) {
          if (!v18) {
            return false;
          }
          function f6(p51) {
            sat = JSON.stringify(p51, null, 2);
            bang = util2.format(sat);
            if (sat == undefined) {
              bang = util2.format(p51);
            }
            return f2(bang);
          }
          try {
            f2(util2.format(eval("(async () => { return " + v5.slice(3) + " })()")));
          } catch (_0x3e3964) {
            f2(String(_0x3e3964));
          }
        }
        if (v5.startsWith(">")) {
          if (!v18) {
            return false;
          }
          try {
            let v208 = await eval(v5.slice(2));
            if (typeof v208 !== "string") {
              v208 = require("util").inspect(v208);
            }
            await f2(v208);
          } catch (_0x99db68) {
            await f2(String(_0x99db68));
          }
        }
        if (v5.startsWith("$")) {
          if (!v18) {
            return false;
          }
          exec(v5.slice(2), (p52, p53) => {
            if (p52) {
              return f2(p52);
            }
            if (p53) {
              return f2(p53);
            }
          });
        }
        if (v23.endsWith("broadcast")) {
          return;
        }
        if (p2.isBaileys) {
          return;
        }
        if (p2.key.fromMe) {
          return;
        }
        let v209 = false;
        for (const v210 of vVF7) {
          if (v210.command.includes(v15)) {
            try {
              v209 = true;
              break;
            } catch (_0x404c14) {
              console.error("Error executing plugin " + v210.filePath + ":", _0x404c14);
              v209 = false;
            }
          }
        }
        if (!v209) {
          const v211 = await ChatAi(v5);
          await f2(v211);
        }
        if (v14 && v5.toLowerCase() != undefined) {
          if (v23.endsWith("broadcast")) {
            return;
          }
          if (p2.isBaileys) {
            return;
          }
          let v212 = global.db.data.database;
          if (!(v5.toLowerCase() in v212)) {
            return;
          }
          p.copyNForward(v23, v212[v5.toLowerCase()], true);
        }
    }
  } catch (_0x1684f5) {
    console.log(util2.format(_0x1684f5));
  }
};
let v213 = require.resolve(__filename);
fs2.watchFile(v213, () => {
  fs2.unwatchFile(v213);
  console.log(chalk2.redBright("Update " + __filename));
  delete require.cache[v213];
  require(v213);
});