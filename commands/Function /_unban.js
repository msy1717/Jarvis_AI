/*CMD
  command: /unban
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Function 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (chat.chat_type == "private") {
  Bot.sendMessage("Heya ! Use Me In A Chat")
  return
}
if (request.reply_to_message) {
  var Id = request.reply_to_message.from.id
  Api.getChatMember({
    chat_id: chat.chatid,
    user_id: user.telegramid,
    on_result: "/onUnban "+Id
  })
} else if (params) {
  if (params.includes("@")) {
    var ID = Bot.getProperty(params)
    if (ID == "undefined") {
      Bot.sendMessage("User Not Found !!")
      return
    } else
      Api.getChatMember({
    chat_id: chat.chatid,
    user_id: user.telegramid,
    on_result: "/onUnban "+ID
  })
  } else if (params) {
    Api.getChatMember({
    chat_id: chat.chatid,
    user_id: user.telegramid,
    on_result: "/onUnban "+params 
  })
  }
} else Bot.sendMessage("I Don't  Know Who I Should UnBan")

