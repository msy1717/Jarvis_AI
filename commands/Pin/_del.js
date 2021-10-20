/*CMD
  command: /del
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
    on_result: "/onDelete "+id
  })

} else Bot.sendMessage("I Don't  Know Who I Should Mute")
