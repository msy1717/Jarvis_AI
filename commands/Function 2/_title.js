/*CMD
  command: /title
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Function 2
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (chat.chat_type == "private") {
  Bot.sendMessage("Heya ! Use Me In A Chat")
  return
}
if (params) {
  var id = params 
  Api.getChatMember({
    chat_id: chat.chatid,
    user_id: user.telegramid,
    on_result: "/onTitle "+id
  })
} else Bot.sendMessage("Need Parameters !!")

