

let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "https://cdn.jsdelivr.net/gh/Husnainch773/GURU-BOT@main/Assets/mp3/husnain.mp3"
    let url = "https://github.com/Guru322/GURU-BOT"
    let murl = "https://youtu.be/DibiLc17dh0?si=xp9bQ-_frEyDB1-i"
    let img = "https://telegra.ph/file/9f4b849b7cc2b61161b35.mp4"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "Guru",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "I AM ALIVE",
          body: "ᴹᴿ°᭄HUSNAIN❖࿐",
          thumbnailUrl: img,
          sourceUrl: 'https://chat.whatsapp.com/Kpgyp8rkmcg1tR48OmVu0F',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
    
      await conn.sendMessage(m.chat, doc, { quoted: con });
    
    }
    
    handler.help = ['alive']
    handler.tags = ['main']
    handler.command = /^(alive)$/i 

    export default handler;
