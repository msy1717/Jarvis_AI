/*CMD
  command: /inlineQuery
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Function 3
  answer: 
  keyboard: 
  aliases: 
CMD*/

var menu = [
  [
    {
      text: "➕️ Add Me To Group ➕️",
      url: "https://telegram.me/" + bot.name + "?startgroup=true"
    }
  ],
  [
    { text: "📢 Channel", url: "https://telegram.me/" + bot.name },
    { text: "👥 Group", url: "https://telegram.me/" + bot.name }
  ],
  [
    { text: "⁉️ Help", callback_data: "/module HELP" },
    { text: "💬 Information ", callback_data: "/module INFO" }
  ],
  [{ text: "•• CLOSE ••", callback_data: "/module CLOSE" }]
]
var results = []
results.push({
  type: "article",
  id: request.query,
  title: "Jarvis HERE !!",
  description: "Open Jarvis Help Menu !!",
  //thumb_url: "https://telegra.ph/file/06cbca0b12ee32c47600b.jpg",
  input_message_content: {
    message_text:
      "[👋](https://telegra.ph/file/06cbca0b12ee32c47600b.jpg) *Hey There !*\nI am JARVIS , A Powerful Group Management Bot Based On  `A.I` \n\n👉Just Add Me In Your Group And Promote Me As Admin ;  Let Me Come In Action",
    parse_mode: "Markdown"
  },
  reply_markup: { inline_keyboard: menu }
})

if (request.query == "help" || request.query == "Help") {
  Api.answerInlineQuery({
    inline_query_id: request.id,
    results: results,
    cache_time: 1
  })
}

