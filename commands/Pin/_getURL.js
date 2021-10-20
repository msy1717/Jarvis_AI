/*CMD
  command: /getURL
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Pin
  answer: 
  keyboard: 
  aliases: /geturl
CMD*/

var id = request.reply_to_message.message_id

Bot. sendMessage ( "http://t.me/"+request.chat.username+"/"+id , {reply_to_message_id: id } )
