let libPrefix = "jarvis"

function onMasterCommand() {
  if (request) {
    if (request.new_chat_members[0].username == bot.name) {
      Bot.sendInlineKeyboard(
        [[{ title: "🎥 Tutorial", command: "/tutorial" }]],
        "Thanks For Adding Me To Your Group .Don't Forget To Make Me As Admin Of The Group Or I Will Not Be Able To Manage This Group \n\n   *Thank You 😇*"
      )
      return
    }
  }
}

on("*", onMasterCommand)
