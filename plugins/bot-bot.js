var handler = m => m
handler.all = async function (m) {

let chat = global.db.data.chats[m.chat]

if (/^bot$/i.test(m.text) && !chat.isBanned) {

conn.sendPresenceUpdate('composing', m.chat)    
conn.reply(m.chat, '👋 *Hola estoy aquí para ayudarte dime en que puedo ayudarte, si deceas ver más de mi coloca el siguiente comando .menu*', m, fake, )}

return !0

}
export default handler
