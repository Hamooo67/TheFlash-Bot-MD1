//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text
    m.reply('*تـــم تـحديــث رســالــة الـوداع !*')
  } else throw `*بره يعار هترجعلي😎*\n*أكــتب @user اذا اردت ان يــكون بــها مـنشـن !*`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['المغادره'] 
handler.admin = true
handler.owner = false

export default handler
