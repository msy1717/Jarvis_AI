/*CMD
  command: /autounmute
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Function 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var chtid = params.split(" ")[0]
var id = params.split(" ")[1]



Api.restrictChatMember({
chat_id: chtid ,
user_id: id ,
can_send_messages : true
})

