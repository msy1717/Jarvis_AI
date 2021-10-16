/*CMD
  command: /advanced
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
  [{ text: "• BACK 🔙 •", callback_data: "/help" }]
]

var msg = "👨‍🎨 *Advanced Commands*\n\n👮🏻 Available to Admins & Moderators \n\n*WARN MANAGEMENT*\n👮🏻  `/warn` adds a warn to the user\n👮🏻  `/unwarn` removes a warn to the user\n👮🏻  `/warns` lets you see and manage user warns\n🕵🏻  `/delwarn` deletes the message and add a warn to the user\n\n🛃 `/del` deletes the selected message\n\n◽️ `/me` sends in private chat a message with his own infos, group infos, warns received, rules of the group, banned words list...\n\n🕵🏻 `/send` permits to send a post using *HTML / MARKDOWN* in the group, through the Bot\n  ➡️ Example: `/send Hello World!`\n\n👮🏻  `/intervention` lets you request the intervention of a member of Official Bot Support, who will join the group as soon as possible"

Api.editMessageText({
  message_id: request.message.message_id,
  text: msg,
  parse_mode: "Markdown",
  disable_web_page_preview: true, //if needed
  reply_markup: { inline_keyboard: buttons }
})
