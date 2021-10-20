/*CMD
  command: /ban
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Ban
  answer: 
  keyboard: 
  aliases: 
CMD*/

/*if (chat.chat_type == "private") {
  Bot.sendMessage("This Command Is Made To Be Used In Chat Not In PM !!.")
  return
}*/
if (request.reply_to_message) {
  var Id = request.reply_to_message.from.id
  if (check_user(Id)) {
    Api.getChatMember({
      chat_id: chat.chatid,
      user_id: user.telegramid,
      on_result: "/onBan " + Id
    })
  }
} else if (params) {
  if (check_user(params)) {
    Api.getChatMember({
      chat_id: chat.chatid,
      user_id: user.telegramid,
      on_result: "/onBan " + params
    })
  }
} else
  Bot.sendMessage(
    "I don't know who you're talking about, you're going to need to specify a user...!"
  )

