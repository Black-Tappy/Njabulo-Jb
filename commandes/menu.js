const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

zokou({ nomCom: "menu", categorie: "Menu" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage, mybotpic } = commandeOptions;
    let { cm } = require(__dirname + "/../framework/zokou");
    let coms = {};
    let mode = "public";

    if ((s.MODE).toLowerCase() !== "yes") {
        mode = "private";
    }

    cm.map((com) => {
        if (!coms[com.categorie]) {
            coms[com.categorie] = [];
        }
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    let infoMsg = `
   *Hello👋* : ${s.OWNER_NAME}
    
╭┈┈┈✧ɴᴊᴀʙᴜʟᴏ ᴊʙ✧┈┈┈┈⊷
┣◆ ╭┈┈┈┈┈┈┈┈┈┈┈⊷
┣◆◎ 𝙾𝚠𝚗𝚎𝚛 : ${s.OWNER_NAME}
┣◆◎ 𝙿𝚛𝚎𝚏𝚒𝚡 : *[ ${s.PREFIXE} ]*
┣◆◎ 𝙼𝚘𝚍𝚎 : ${mode}
┣◆◎ 𝚝𝚒𝚖𝚎  : ${temps}
┣◆◎ 𝙳𝚊𝚝𝚎  : ${date}
┣◆◎ 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${os.platform()}
┣◆◎ 𝙲𝚛𝚎𝚊𝚝𝚘𝚛 :𝙽𝚓𝚊𝚋𝚞𝚕𝚘 𝙹𝙱 
┣◆◎ 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜 : ${cm.length}
┣◆◎ 𝙼𝚎𝚖𝚘𝚛𝚢 : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
┣◆ ╰┈┈┈┈┈┈┈┈┈┈┈⊷
╰┈┈┈✧ɴᴊᴀʙᴜʟᴏ ᴊʙ✧┈┈┈┈⊷ \n`;

    let menuMsg = `𝘀𝗶𝗿⚔️`;
    
    for (const cat in coms) {
        menuMsg += `
⊷ ${cat} ⊷••
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊷
┣◆╭┈┈┈┈┈┈┈┈┈┈┈⊷ `;
        for (const cmd of coms[cat]) {
            menuMsg += `          
┣◆  ${cmd}. ${toFancyLowercaseFont(command)}`;    
        }
        menuMsg += `
┣◆╰┈┈┈┈┈┈┈┈┈┈┈⊷
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊷`;
    }
    
    menuMsg += `
> @𝘀𝗶𝗿 𝗡𝗷𝗮𝗯𝘂𝗹𝗼 𝗝𝗯\n`;

    try {
        const senderName = nomAuteurMessage || message.from;  // Use correct variable for sender name
        await zk.sendMessage(dest, {
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [senderName],
                externalAdReply: {
                    title: "@𝘀𝗶𝗿 𝗡𝗷𝗮𝗯𝘂𝗹𝗼 𝗝𝗯",
                    body: "𝚊𝚕𝚠𝚊𝚢𝚜•••𝚘𝚗𝚕𝚒𝚗𝚎!",
                    thumbnailUrl: "https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T",
                    sourceUrl: "https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
    } catch (error) {
        console.error("Menu error: ", error);
        repondre("🥵🥵 Menu error: " + error);
    }
});
