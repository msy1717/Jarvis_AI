/*CMD
  command: /sticker
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Sticker
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.reply_to_message) {
  if (request.reply_to_message.sticker) {

Bot.sendMessage ("Sticker Emoji : "+request.reply_to_message.sticker.emoji+"\nFile Id *:* ` "+reply_to_message.sticker.file_id+"`")
  } else Bot.sendMessage("You Must Specify A Sticker")
} else Bot.sendMessage("You Must Specify A Sticker")








