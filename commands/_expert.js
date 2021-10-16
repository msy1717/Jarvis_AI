/*CMD
  command: /expert
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
  [{ text: "• BACK 🔙 •", callback_data: "/help" }]
]

var msg = "*Expert commands*\n\n👮🏻 Available to Admins&Moderators\n👮🏻 Available to All\n\n*ANTI SPAM*\n👨‍🎓  `/afk` Delete All The Incoming Message If This Mode Is On\n👨‍🎓  `/del` Delete The Replayed Message \n\n*PIN MESSAGE*\n👨‍🎓  `/pin` Pin The Replayed Message\n👨‍🎓  `/unpin` Unpin The Replayed Message\n🧑‍🎓  `/edit <message>` Edit The Replayed Message To Given Message ,Works With Bot Message Only.\n👨‍🎓  `/delpin` Remove All The Pinned Message \n\n*OTHER COMMANDS*\n👨‍🎓  `/getUrl` Get The Direct Url Of The Replayed Message \n👨‍🎓  `/chat` Get The Channel Statistics Available To Admin Only\n👨‍🎓  `/del_photo` Delete The Chat Profile Photo.\n👨‍🎓 `/title <title>` Change The Chat Name To The Given New Name ."

Api.editMessageText({
  message_id: request.message.message_id,
  //callback_query_id: request.id, //if needed
  //chat_id: request.message.chat.id, //if needed
  text: msg,
  parse_mode: "Markdown",
  disable_web_page_preview: true, //if needed
  reply_markup: { inline_keyboard: buttons }
})
