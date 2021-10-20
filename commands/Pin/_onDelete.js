/*CMD
  command: /onDelete
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
Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })
Api.deleteMessage({chat_id:chat.chatid,message_id:params })
} else {
  Bot.sendMessage("You Need To Be Admin !!")
}
