/*CMD
  command: /translate
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Function 2
  answer: 
  keyboard: 
  aliases: 
CMD*/

 if (!request.reply_to_message) {
  return
}
var ty = request.reply_to_message.text
var ty = ty.replace(" ", "%20")
var ty = ty.replace(" ", "%20")
var ty = ty.replace(" ", "%20")
var ty = ty.replace(" ", "%20")
var ty = ty.replace(" ", "%20")
var ty = ty.replace(" ", "%20")
var ty = ty.replace(" ", "%20")
var ty = ty.replace(" ", "%20")
var ty = ty.replace(" ", "%20")
var ty = ty.replace(" ", "%20")


HTTP.get({
  url: "https://translate-api.ml/translate?text=" + ty + "&lang=" + params + "",
  success: "/onTranslate"
})
