/*CMD
  command: @hshxbxb
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var warns = Libs.ResourcesLib.userRes("Warns")
var date = Libs.DateTimeFormat.format(new Date(), "dd / mm / yy")
var time = Libs.DateTimeFormat.format(new Date(), "ss : MM : hh")

function encode(text) {
  var result = text
  result = result.replace(" ", "%20")
  result = result.replace("%", "%25")
  result = result.replace("/", "%2F")
  result = result.replace("?", "%3F")
  result = result.replace("&", "%26")
  result = result.replace("www.","https://")
  return result
}

function formattext(text) {
  var result = text
  result = result.replace("{first_name}", user.first_name)
  result = result.replace("{last_name}", user.last_name)
  result = result.replace("{username}", user.username)
  result = result.replace("{date}", date)
  result = result.replace("{warns}", warns.value())
  result = result.replace("{chat_name}", chat.title)
  result = result.replace("{chat_id}", chat.chatid)
  result = result.replace("{chat_type}", chat.chat_type)
  result = result.replace("{time}", time)

  return result
}
