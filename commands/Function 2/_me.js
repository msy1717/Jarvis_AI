/*CMD
  command: /me
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Function 2
  answer: 
  keyboard: 
  aliases: 
CMD*/

var warns = Libs.ResourcesLib.userRes("Warns")
var tmsg = Libs.ResourcesLib.userRes("Messages")
var msg =
  "*👤 Your details 👤*\n🆔 " +
  user.telegramid +
  "\n👱 Name: " +
  user.firstname +
  "\n❕ Warns: " +
  warns. value() +
  "/3\n 💬 Messages: " +
  tmsg. value() +
  "\n\n*👥 Group Info 👥*\n🆔 " +
  chat.id +
  "\n🏷 Title: " +
  chat.title +
  "\n🔗 Link: http://t.me/" +
  request.chat.username

Api.sendMessage({
  chat_id: user.telegramid,

  text: msg,
  parse_mode: "Markdown"
})
//Bot.sendMessage( inspect(request) )

