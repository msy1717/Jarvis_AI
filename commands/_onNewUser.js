/*CMD
  command: /onNewUser
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
    Api.sendMessage({
      chat_id: chat.chatid,
      text: "😊 Thanks For Adding Me "
    })
  } else
    Api.sendMessage({
      chat_id: chat.chatid,
      text:
        "Hello " +
        request.new_chat_members[0].first_name +
        " And Welcome To " +
        chat.title +
        " , How Are You !"
    })
} else if (request.left_chat_member) {
  Api.sendMessage({
    chat_id: chat.chatid,
    text: "Nice  Knowing You ,"
  })
}

