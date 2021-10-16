/*CMD
  command: /onBan
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
  Api.kickChatMember({
    chat_id: request.chat.id,
    user_id: params,
    on_result: "/test",
    on_error: "/onError BAN"
  })
  //Bot.sendMessage("Another Bite And Dust Banned !!")
} else {
  Bot.sendMessage("You Need To Be Admin !!")
}

