/*CMD
  command: /onTranslate
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var data = JSON.parse(content)
var co = data.translated.text
Bot.sendMessage("" + co + "", { is_reply: true })
