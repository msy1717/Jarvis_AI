if (chat.chat_type !== "private") {
  var words = Bot.getProperty("BlockList" + chat.chatid)
  var blocklist = Bot.getProperty("BlockListStatus" + chat.chatid)
  var newUser = Bot.getProperty("WelcomeText" + chat.chatid)
  var leftUser = Bot.getProperty("LeftText" + chat.chatid)

  if (blocklist == "ON") {
    if (message.includes(words[1]) || message.includes(words[2]) || message.includes(words[3]) || message.includes(words[4]) || message.includes(words[5])) {
      Api.deleteMessage({
        chat_id: chat.chatid,
        message_id: request.message_id
      })
    }
  } else if (request.new_chat_members.length > 0) {
    if (request.new_chat_members[0].username == bot.name) {
      Bot.sendInlineKeyboard([[{ title: "🎥 Tutorial", command: "/tutorial" }]],"Thanks For Adding Me To Your Group .Don't Forget To Make Me As Admin Of The Group Or I Will Not Be Able To Manage This Group \n\n   *Thank You 😇*" )
      return
    } else if (request.new_chat_members.length > 0) {
      var WelcomeMsg = newUser.replace("{name}",request.new_chat_members[0].first_name )
      WelcomeMsg = WelcomeMsg.replace("{id}", request.new_chat_members[0].id)
      WelcomeMsg = WelcomeMsg.replace("{username}", request.new_chat_members[0].username )
      Bot.sendMessage(WelcomeMsg)
    }
  } else if (request.left_chat_member) {
    Bot.sendMessage(leftUser)
  }
}
