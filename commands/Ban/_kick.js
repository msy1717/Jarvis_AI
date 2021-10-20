/*CMD
  command: /kick
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Ban
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
    on_result: "/onKick " + Id
  })
} else if (params) {
    Api.getChatMember({
      chat_id: chat.chatid,
      user_id: user.telegramid,
      on_result: "/onKick " + params
    })
 
} else {
  Bot.sendMessage(
    "I don't know who you're talking about, you're going to need to specify a user...!"
  )
  return
}
