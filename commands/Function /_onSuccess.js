/*CMD
  command: /onSuccess
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Function 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

if (params == "BAN") {
  Bot.sendMessage"( *Another Bites And Dust Banned !!*")
} else if (params == "MUTE") {
  Bot.sendMessage(" *Shhh !!! Be Quit Now !!*")
} else if (params == "KICK") {
   Api.unbanChatMember({
    chat_id: request.chat.id,
    user_id: params
  })
  Bot.sendMessage(" *Another Dust Removed !!*")
} 
