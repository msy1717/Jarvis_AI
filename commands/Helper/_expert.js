/*CMD
  command: /expert
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Helper
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
  [{ text: "ā¢ BACK š ā¢", callback_data: "/help" }]
]

var msg = "*Expert commands*\n\nš®š» Available to Admins&Moderators\nš®š» Available to All\n\n*ANTI SPAM*\nšØāš  `/afk` Delete All The Incoming Message If This Mode Is On\nšØāš  `/del` Delete The Replayed Message \n\n*PIN MESSAGE*\nšØāš  `/pin` Pin The Replayed Message\nšØāš  `/unpin` Unpin The Replayed Message\nš§āš  `/edit <message>` Edit The Replayed Message To Given Message ,Works With Bot Message Only.\nšØāš  `/delpin` Remove All The Pinned Message \n\n*OTHER COMMANDS*\nšØāš  `/getUrl` Get The Direct Url Of The Replayed Message \nšØāš  `/chat` Get The Channel Statistics Available To Admin Only\nšØāš  `/del_photo` Delete The Chat Profile Photo.\nšØāš `/title <title>` Change The Chat Name To The Given New Name ."

Api.editMessageText({
  message_id: request.message.message_id,
  //callback_query_id: request.id, //if needed
  //chat_id: request.message.chat.id, //if needed
  text: msg,
  parse_mode: "Markdown",
  disable_web_page_preview: true, //if needed
  reply_markup: { inline_keyboard: buttons }
})
