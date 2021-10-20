/*CMD
  command: /blocklist
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Blocklist
  answer: 
  keyboard: 
  aliases: 
CMD*/

var words = Bot.getProperty("BlockList" + chat.chatid)
if (params) {
  if (params == "ON" || params == "OF") {
    Bot.setProperty("BlockListStatus" + chat.chatid, params, "string")
    Bot.sendMessage("BlockList Has Been Set To " + params + " !!", {
      is_replay: true
    })
    return
  }
}

var i = 1
var text = "*✘ List Of BlackList Words ✘*\n\n"
for (; words[i]; ) {
  text += "" + i + ". " + words[i] + "\n"
  i++
}
Bot.sendMessage(text)

