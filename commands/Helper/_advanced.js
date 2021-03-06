/*CMD
  command: /advanced
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Helper
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
  [{ text: "ā¢ BACK š ā¢", callback_data: "/help" }]
]

var msg = "šØāšØ *Advanced Commands*\n\nš®š» Available to Admins & Moderators \n\n*WARN MANAGEMENT*\nš®š»  `/warn` adds a warn to the user\nš®š»  `/unwarn` removes a warn to the user\nš®š»  `/warns` lets you see and manage user warns\nšµš»  `/delwarn` deletes the message and add a warn to the user\n\nš `/del` deletes the selected message\n\nā½ļø `/me` sends in private chat a message with his own infos, group infos, warns received, rules of the group, banned words list...\n\nšµš» `/send` permits to send a post using *HTML / MARKDOWN* in the group, through the Bot\n  ā”ļø Example: `/send Hello World!`\n\nš®š»  `/intervention` lets you request the intervention of a member of Official Bot Support, who will join the group as soon as possible"

Api.editMessageText({
  message_id: request.message.message_id,
  text: msg,
  parse_mode: "Markdown",
  disable_web_page_preview: true, //if needed
  reply_markup: { inline_keyboard: buttons }
})
