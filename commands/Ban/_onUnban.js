/*CMD
  command: /onUnban
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
  Api.unbanChatMember({
    chat_id: request.chat.id,
    user_id: params,
on_result: "/onSuccess UNBAN "+params 
    on_error: "/onError unban"
  })
  Bot.sendMessage("Now User Can Join Again !!")
} else {
  Bot.sendMessage("You Need To Be Admin !!")
}
