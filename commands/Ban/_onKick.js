/*CMD
  command: /onKick
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Ban
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
    on_result: "/onSuccess KICK "+params,
    on_error: "/onError kick"
  })
} else {
  Bot.sendMessage("You Need To Be Admin !!")
}
