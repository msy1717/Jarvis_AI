/*CMD
  command: /onKick
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Function 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let status = options.result.status

var isAdmin = status == "administrator" || status == "creator"

if (isAdmin) {
  var id = params
  Api.kickChatMember({
    chat_id: request.chat.id,
    user_id: params,
    on_result: "/onSuccess KICK",
    on_error: "/onError KICK"
  })
} else {
  Bot.sendMessage("You Need To Be Admin !!")
}

