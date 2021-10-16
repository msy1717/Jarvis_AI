/*CMD
  command: /start
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
    { title: "• ⚙️ Settings •", command: "/settings" },
    { title: "• 🤘 Buy Me •", url: "https://t.me/MrBotSeller_robot" }
  ],
  [
    { title: "• 🔭 Support •", command: "/support" },
    { title: "• 👨‍💻 Developer •", url: "https://t.me/JasnaP" }
  ],
  [
    {
      title: "• ➕ Add To Group •",
      url: "https://telegram.me/" + bot.name + "?startgroup=true"
    },
    { title: "• ⁉️ Help •", command: "/help" }
  ]
]
var msg =
  "[👋](https://telegra.ph/file/06cbca0b12ee32c47600b.jpg) Hello *" +
  user.first_name +
  "*\nI am Jarvis , A Powerful Group Management Bot\n\n👉Just Add Me In Your Group And Promote Me As Admin ;  Let Me Come In Action"

var buttons2 = [
  [
    { text: "• ⚙️ Settings •", callback_data: "/settings" },
    { text: "• 🤘 Buy Me •", url: "https://t.me/MrBotSeller_robot" }
  ],
  [
    { text: "• 🔭 Support •", callback_data: "/support" },
    { text: "• 👨‍💻 Developer •", url: "https://t.me/JasnaP" }
  ],
  [
    {
      text: "• ➕ Add To Group •",
      url: "https://telegram.me/" + bot.name + "?startgroup=true"
    },
    { text: "• ⁉️ Help •", callback_data: "/help" }
  ]
]
if (chat.chat_type == "private") {
  if (request.data) {
    Api.editMessageText({
      message_id: request.message.message_id,
      text: msg,
      parse_mode: "Markdown",
      disable_web_page_preview: false, //if needed
      reply_markup: { inline_keyboard: buttons2 }
    })
  } else {
    Bot.sendInlineKeyboard(buttons, msg)
  }
} else Bot.sendMessage("Heya ! Use Me Private !!")
