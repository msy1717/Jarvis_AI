/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

function logs(chatid, by_user, user, action) {
  var log_ch = Bot.getProperty("Log_Channel" + chatid)
  if (log_ch == "undefined" || log_ch == "null") {
    return
  } else
    Api.sendMessage({
      chat_id: log_ch,
      text: "• " + user + " was " + action + " by " + by_user + " •",
      parse_mode: "Markdown"
    })
} // action : kicked out , banned , muted , unbaned , unmuted

function check_user(usersss) {
  var OWNER_ID = 1139243859
  var DRAGON_ID = 657176088
  var DEVS_ID = 111
  var GOD_ID = 11
  var OWNER_USERNAME = "@JasnaP"
  var DRAGON_USERNAME = "@Godmrunal"
  var DEVS_USERNAME = 111
  var GOD_USERNAME = 11111
  if (usersss && usersss.includes("@")) {
    if (usersss == OWNER_USERNAME) {
      Bot.sendMessage("Trying to put me against a God level disaster huh?")
      return
    } else if (usersss == DRAGON_USERNAME) {
      Bot.sendMessage(
        "Fighting this Dragon here will put civilian lives at risk"
      )
      return
    } else if (usersss == DEVS_USERNAME) {
      Bot.sendMessage("I Can't Act On Our Own !!")
      return
    } else if (usersss == GOD_USERNAME) {
      Bot.sendMessage("Do U Really Think  I Am Going To Fight Against God ?")
      return
    } else return true
  } else if (usersss == OWNER_ID) {
    Bot.sendMessage("Trying to put me against a God level disaster huh?")
    return
  } else if (usersss == DEVS_ID) {
    Bot.sendMessage("I Can't Act On Our Own !!")
    return
  } else if (usersss == DRAGON_ID) {
    Bot.sendMessage("Fighting this Dragon here will put civilian lives at risk")
    return
  } else if (usersss == GOD_ID) {
    Bot.sendMessage("Do U Really Think  I Am Going To Fight Against God ?")
    return
  } else return true
}

