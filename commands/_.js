/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

function anti_forward() {
  var antistatus = Bot.getProperty("ANTI-FORWARD" + chat.chatid)
  if (antistatus == "ON") {
    Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })
  }
}
function anti_via_bot() {
  var antiviabot = Bot.getProperty("VIA-BOT" + chat.chatid)
  if (antiviabot == "ON") {
    Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })
  }
}
function anti_bot() {
  var antibot = Bot.getProperty("ANTI-BOT" + chat.chatid)
  if (antibot == "ON") {
    Api.kickChatMember({
      chat_id: chat.chatid,
      user_id: request.message.from.id
    })
    Bot.sendMessage(
      "[ℹ " +
        request.message.from.first_name +
        " Was Kicked Out !!](t.me/Jarvis_Help_RoBot?start=anti-bot)"
    )
  }
}

if (chat.chat_type == "private") {
  return
}
var id = Bot.getProperty("MODE" + chat.chatid)

if (id == "NO") {
  Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })
} else if (request) {
  if (request.new_chat_members.length > 0 || request.left_chat_member) {
    // on New User Joining A Group
   // Bot.runCommand("/onNewUser")
  } else if (request.forward_from || request.forward_from_chat) {
    // on getting a forwarded message
    anti_forward()
  } else if (request.via_bot) {
    // on Getting A  Via Bot Query
    anti_via_bot()
  } else if (
    request.message.from.is_bot == "True" ||
    request.message.from.is_bot == true
  ) {
    anti_bot()
  }
}

Bot.setProperty("@" + user.username, user.telegramid, "string") // adding username to database

