function checkMessage(msg){
  var words = Bot.getProperty("BlockList" + chat.chatid)
  var blocklist = Bot.getProperty("BlockListStatus" + chat.chatid)
  
  if (blocklist == "ON") {
    if (msg.includes(words[1]) || msg.includes(words[2]) || msg.includes(words[3]) || msg.includes(words[4]) || msg.includes(words[5])) {
      Api.deleteMessage({
        chat_id: chat.chatid,
        message_id: request.message_id
      })
    }
  } 
}
