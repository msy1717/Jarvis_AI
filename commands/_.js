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

if (request.new_chat_members.length > 0) {
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
    Bot.sendMessage("Nice Knowing You ,")
  }
