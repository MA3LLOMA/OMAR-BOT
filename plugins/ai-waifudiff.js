import fetch from "node-fetch"

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let wm = global.wm

    if (!text) throw `هاذا الأمر يقوم بتوليد صور أنمي بالكتابة فقط \n\n example: .animediff girl with cat`
    await m.reply(wait)

    await conn.relayMessage(m.chat, { reactionMessage: { key: m.key, text: '👌' } }, { messageId: m.key.id })
    try {
        let url = `https://aemt.me/v5/text2img?text=${text}`

        await conn.sendFile(m.chat, await (await fetch(url)).buffer(), 'fubuki.jpg', '*تابع صاحب البوت في الإنستجرام ❤️* \n https://www.instagram.com/ovmar_1', m)
        m.react(done)

    } catch (e) {
        console.log(e)
        conn.reply(eror)
    }
}

handler.help = ['animediff <prompt>']
handler.tags = ['قائمة توليد الصور']
handler.command = /^(animediff)$/i

handler.premium = false
handler.limit = 2
handler.register = false

export default handler