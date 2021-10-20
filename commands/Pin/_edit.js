/*CMD
  command: /edit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Pin
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (chat.chat_type == "private") {
  Bot.sendMessage("Heya ! Use Me In A Chat")
  return
}
if (request.reply_to_message) {
  var id = request.reply_to_message.message_id

  Api.getChatMember({
    chat_id: chat.chatid,
    user_id: user.telegramid,
    on_result: "/onEdit "+id
  })
} else Bot.sendMessage("Invalid Format !, You Must Define Message")
