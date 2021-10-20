/*CMD
  command: /onError
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Ban
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (options.includes("user is an administrator of the chat")) {
  Bot.sendMessage("I really wish I could "+params+" admins....")
} else if (options.includes("can't remove chat owner")) {
  Bot.sendMessage(
    "Why would I "+params+" the Chat Owner ? That sounds like a pretty dumb idea."
  )
} else if (options.includes("Not enough rights to ")) {
  Bot.sendMessage("Seems I Don't Have Enough Rights To Perform This Action ..")
} else if (options.includes("Chat_admin_required")) {
  Bot.sendMessage("I Am Not The Admin Of This Chat To Perform This Action")
} else Bot.sendMessage(inspect(options))

//{ "error": "Telegram API has returned the error. (ok: \"false\", error_code: \"400\", description: \"Bad Request: user is an administrator of the chat\")"}))

