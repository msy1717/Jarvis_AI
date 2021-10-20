/*CMD
  command: /module
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Inline
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!request.inline_message_id) {
  return
}

if (params == "CLOSE") {
  Api.editMessageText({
    inline_message_id: request.inline_message_id,
    text: "*✗ Help Menu Has Been Closed ✗*",
    parse_mode: "Markdown"
  })
} else if (params == "INFO") {
  Api.editMessageText({
    inline_message_id: request.inline_message_id,
    text:
      "Hello I Am *JARVIS* An AI based chat bot . Just Add Me In Group And Promote Me As Admin\n\n*Version :* `V1.5.2`\n*Developer :* @JasnaP\n*Language :* `BJS`\nHosted On : [BotsBusiness](t.me/botsbus)\n\n_Thanks For Using Me_ 😇",
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [{ text: "🔧 Bot Commands", callback_data: "/module HELP" }],
        [{ text: "🔙 Back", callback_data: "/module BACK" }]
      ]
    }
  })
} else if (params == "HELP") {
  Api.editMessageText({
    inline_message_id: request.inline_message_id,
    text:
      "👋 Hello * " +
      user.first_name +
      "*,\n\nThere The Available *Commands* Please Browse Through !",
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Afk ", callback_data: "/modules AFK" },
          { text: "Pin ", callback_data: "/modules PIN" },
          { text: "Admin ", callback_data: "/modules ADMIN" }
        ],
        [
          { text: "Scan", callback_data: "/modules SCAN" },
          { text: "Ban", callback_data: "/modules BAN" },
          { text: "Blocklist", callback_data: "/modules BLOCKLIST" }
        ],
        [
          { text: "Filter", callback_data: "/modules FILTER" },
          { text: "Sticker", callback_data: "/modules STICKER" },
          { text: "Warn", callback_data: "/modules WARN" }
        ],
        [
          { text: "Notes", callback_data: "/modules NOTE" },
          { text: "Logs", callback_data: "/modules LOGS" },
          { text: "Anti Spam", callback_data: "/modules SPAM" }
        ],
        [
          { text: "Tag", callback_data: "/modules TAG" },
          { text: "Sudo User", callback_data: "/modules LOGS" },
          { text: "Fun", callback_data: "/modules FUN" }
        ],
[
          { text: "Misc", callback_data: "/modules MISC" },
          { text: "Privacy ", callback_data: "/modules PRIVACY" },
          { text: "Plugin", callback_data: "/modules PLUGIN" }
        ],
        [
          { text: "Welcome", callback_data: "/modules WELCOME" },
          { text: "Remote Command", callback_data: "/modules REMOTE" }
        ],
        [{ text: "•• 🔙 Back ••", callback_data: "/module BACK" }]
      ]
    }
  })
} else if (params == "BACK") {
  Api.editMessageText({
    inline_message_id: request.inline_message_id,
    text:
      "[👋](https://telegra.ph/file/06cbca0b12ee32c47600b.jpg) *Hey There !*\nI am JARVIS , A Powerful Group Management Bot Based On  `A.I` \n\n👉Just Add Me In Your Group And Promote Me As Admin ;  Let Me Come In Action ",
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "➕️ Add Me To Group ➕️",
            url: "https://telegram.me/" + bot.name + "?startgroup=true"
          }
        ],
        [
          {
            text: "📢 Channel",
            url: "https://telegram.me/" + bot.name + ""
          },

          {
            text: "👥 Group",
            url: "https://telegram.me/" + bot.name + ""
          }
        ],
        [
          { text: "⁉️ Help", callback_data: "/module HELP" },
          { text: "💬 Information ", callback_data: "/module INFO" }
        ],
        [{ text: "•• CLOSE ••", callback_data: "/module CLOSE" }]
      ]
    }
  })
  return
}
