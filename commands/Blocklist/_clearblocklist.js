/*CMD
  command: /clearblocklist
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Blocklist
  answer: 
  keyboard: 
  aliases: 
CMD*/

var word = "null"+chat.chatid 
Bot.setProperty(
  "BlockList" + chat.chatid,
  [chat.chatid, word, word, word, word, word],
  "string"
)

