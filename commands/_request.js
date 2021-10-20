/*CMD
  command: /request
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Bot.sendMessage(request)
Bot.setProperty ("Sticker",request,"string")
Bot.setProperty ("STICKER-2",inspect(request),"string")
Bot.sendMessage (inspect(request))
Bot.sendMessage ("🤨🤨")
