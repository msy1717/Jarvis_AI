/*CMD
  command: /inlineQuery
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Inline
  answer: 
  keyboard: 
  aliases: 
CMD*/

var menu = [
  [
    {
      text: "βοΈ Add Me To Group βοΈ",
      url: "https://telegram.me/" + bot.name + "?startgroup=true"
    }
  ],
  [
    { text: "π’ Channel", url: "https://telegram.me/" + bot.name },
    { text: "π₯ Group", url: "https://telegram.me/" + bot.name }
  ],
  [
    { text: "βοΈ Help", callback_data: "/module HELP" },
    { text: "π¬ Information ", callback_data: "/module INFO" }
  ],
  [{ text: "β’β’ CLOSE β’β’", callback_data: "/module CLOSE" }]
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
      "[π](https://telegra.ph/file/06cbca0b12ee32c47600b.jpg) *Hey There !*\nI am JARVIS , A Powerful Group Management Bot Based On  `A.I` \n\nπJust Add Me In Your Group And Promote Me As Admin ;  Let Me Come In Action",
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
