let libPrefix = "jarvis"

function onMasterCommand() {
  var anti_forward = Bot.getProperty("ANTI-FORWARD" + chat.chatid)
  var anti_via = Bot.getProperty ("ANTI-VIABOT"+chat.chatid)
  if (request) {
    if (request.new_chat_members[0].username == bot.name) {
      Bot.sendInlineKeyboard(
        [[{ title: "🎥 Tutorial", command: "/tutorial" }]],
        "Thanks For Adding Me To Your Group .Don't Forget To Make Me As Admin Of The Group Or I Will Not Be Able To Manage This Group \n\n   *Thank You 😇*"
      )
      return
    } else if (request.forward_from || request.forward_from_chat) {
      if (anti_forward == "ON") {
        Api.deleteMessage({
          chat_id: chat.chatid,
          message_id: request.message_id
        })
      } 
    } else if (request.via_bot){
    if (anti_via == "ON") {
        Api.deleteMessage({
          chat_id: chat.chatid,
          message_id: request.message_id
        })
      } 
    }
  }
}

on("*", onMasterCommand)
