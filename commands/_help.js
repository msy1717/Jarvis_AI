/*CMD
  command: /help
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
  [
    { text: "• 💁‍♂️ Basic •", callback_data: "/basic" },
    { text: "• Advanced 👨‍🎨 •", callback_data: "/advanced" }
  ],

  [
    { text: "• 🧑‍🎓 Expert •", callback_data: "/expert" },
    { text: "• Plugins 🔌 •", callback_data: "/plugins" }
  ],
  [{ text: "• BACK 🔙 •", callback_data: "/start" }]
]
var button = [
  [
    { title: "• 💁‍♂️ Basic •", command: "/basic" },
    { title: "• Advanced 👨‍🎨 •", command: "/advanced" }
  ],

  [
    { title: "• 🧑‍🎓 Expert •", command: "/expert" },
    { title: "• Plugins 🔌 •", command: "/plugins" }
  ],
  [{ title: "• BACK 🔙 •", command: "/start" }]
]

var msg = "❓ *Welcome To The Help Menu*"
if (chat.chat_type == "private") {
  if (request.data) {
    Api.editMessageText({
      message_id: request.message.message_id,
      text: msg,
      parse_mode: "Markdown",
      disable_web_page_preview: true, //if needed
      reply_markup: { inline_keyboard: buttons }
    })
  } else Bot.sendInlineKeyboard(button, msg)
} else Bot.sendMessage("Heya ! Use Me Private !!")

