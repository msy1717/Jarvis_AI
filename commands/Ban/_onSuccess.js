/*CMD
  command: /onSuccess
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Ban
  answer: 
  keyboard: 
  aliases: 
CMD*/

var prms = params.split(" ")[0]
var done_user = params.split(" ")[1]
if (prms == "BAN") {
  Bot.sendMessage("*Another Bites And Dust Banned !!*")
  logs(chat.chatid, user.telegramid, done_user, "banned")
} else if (prms == "MUTE") {
  Bot.sendMessage(" *Shhh !!! Be Quit Now !!*")
  logs(chat.chatid, user.telegramid, done_user, "muted")
} else if (prms == "KICK") {
  Api.unbanChatMember({
    chat_id: request.chat.id,
    user_id: done_user
  })
  Bot.sendMessage(" *Another Dust Removed !!*")
  logs(chat.chatid, user.telegramid, done_user, "kicked out")
} else if (prms == "UNBAN") {
  Bot.sendMessage(" *User Has Been Unmuted And Can Rejoin !!*")
  logs(chat.chatid, user.telegramid, done_user, "unbanned")
}

