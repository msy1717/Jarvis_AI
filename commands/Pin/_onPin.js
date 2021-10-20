/*CMD
  command: /onPin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Pin
  answer: 
  keyboard: 
  aliases: 
CMD*/

let status = options.result.status

var isAdmin = status == "administrator" || status == "creator"

if (isAdmin) {
  var id = params
  Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })
  Api.pinChatMessage({
    chat_id: chat.chatid,
    message_id: id
  })
} else {
  Bot.sendMessage("You Need To Be Admin !!")
}
