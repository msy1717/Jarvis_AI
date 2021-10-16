/*CMD
  command: /getChat
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Function 3
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (options){
Bot.sendMessage (inspect(options))

return 
}

Api.getChatAdministrators({
chat_id: chat.chatid,
on_result: "/getChat OK"
})
