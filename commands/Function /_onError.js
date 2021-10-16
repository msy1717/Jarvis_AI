/*CMD
  command: /onError
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Function 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (options.includes("user is an administrator of the chat")) {
  Bot.sendMessage(
    "I really wish I could ban admins...."
  )
} else if (options.includes("can't remove chat owner")) {
  Bot.sendMessage(
    "Why would I ban the Chat Owner ? That sounds like a pretty dumb idea."
  )
}else
Bot.sendMessage(inspect(options))
//{ "error": "Telegram API has returned the error. (ok: \"false\", error_code: \"400\", description: \"Bad Request: user is an administrator of the chat\")"}))

