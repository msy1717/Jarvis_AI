/*CMD
  command: /modules
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
if (params == "AFK") {
  Api.editMessageText({
    inline_message_id: request.inline_message_id,
    text:
      "*✗ Command Available ✗*\n\n- `/afk` Set The Group Mode To Anti Message Mode And Deletes All The Incoming Messages\n\n- `/nightmode ` Delete All The Incoming Message From 12.00 And Automatically Turns Off At 6.00 \n\n Automatically delete all the incoming messages if the mode is on .Must Pass on/off As Parameters Of Commands",
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: btn }
  })
  return
} else if (params == "PIN") {
  Api.editMessageText({
    inline_message_id: request.inline_message_id,
    text:
      "*✗ Command Available ✗*\n\n- `/pin` To Pin The Replayed Message\n- `/unpin` To Unpin The Replayed Message \n- `/unpin all` To Unpin All The Pinned Messages\n- `/repin` To Repin The  Message With Notification To All Users",
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: btn }
  })
  return
} else if (params == "NOTE") {
  Api.editMessageText({
    inline_message_id: request.inline_message_id,
    text:
      "*✗ Command Available ✗*\n\n- `/note <name> <text>` : Save Note Data And Can Retirve With Note Name.\n- `/get <note_name>` : Get The Saved Note From DataBase .\n- `/delete <note_name>` : Delete The Note Name From The DataBase\n- `/save <name>` Save The Replayed Message [Video,Photo,Voice]. \n\n*NOTE :* Cannot Save Multiple Notes With Same Name In A Single Chat So The Old Note Will Be Modified To The New Note .",
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: btn }
  })
  return
} else if (params == "BAN") {
  Api.editMessageText({
    inline_message_id: request.inline_message_id,
    text:
      "*✗ Command Available ✗*\n\n*Kicks:*\n- `/kick <handle>`*:* Kicks a user out of the group,\n- `/skick <handle>`*:* Silently kicks a user out of the group, \n- `/kickme`*:* Kicks the user who used the command.\n\n*Bans:*\n- `/ban <userhandle>`*:* Bans a user. \n- `/sban <handle>`*:* Silently bans a user without leaving any message. \n- `/tban <sec>` *:* Bans a replayed user for `x` time (in sec). .\n- `/unban <handle>`*:* Unbans a user. \n\nUser Must Be Specified After Command ( Example : `/ban < @username / user-id>` ) Or Replay To A User Message ",
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: btn }
  })
  return
} else if (params == "ADMIN") {
  Api.editMessageText({
    inline_message_id: request.inline_message_id,
    text:
      "*✗ Command Available ✗*\n\n*Mute:*\n ✪ `/mute <handle>`*:* Make The User In Read Only Mode,\n ✪ `/smute <handle>`*:* Silently mute a user in the group. \n ✪ `/unmute <handle>` *:* Unmute A Muted User And Allows To Send Message. \n\n*Admin :*\n ✪ `/promote <handle>`*:* Promote The Specified user. \n ✪ `/demote <handle>`*:* Demote The Admin Back To User. ",
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: btn }
  })
  return
} else if (params == "WELCOME") {
  Api.editMessageText({
    inline_message_id: request.inline_message_id,
    text:
      "*✗ Command Available ✗*\n\n ✪ /welcome <on/off>*:* enable/disable welcome messages.\n ✪ /welcome*:* shows current welcome settings.\n ✪ /welcome noformat*:* shows current welcome settings, without the formatting - useful to recycle your welcome messages!\n ✪ /goodbye*:* same usage and args as `/welcome`.\n ✪ /setwelcome <sometext>*:* set a custom welcome message. If used replying to media, uses that media.\n ✪ /setgoodbye <sometext>*:* set a custom goodbye message. If used replying to media, uses that media.\n ✪ /resetwelcome*:* reset to the default welcome message.\n ✪ /resetgoodbye*:* reset to the default goodbye message.\n ✪ /cleanservice <on/off*:* deletes telegrams welcome/left service messages. ",
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: btn }
  })
  return
} else if (params == "SCAN") {
  Api.editMessageText({
    inline_message_id: request.inline_message_id,
    text:
      "*✗ Command Available ✗*\n\n- `/qr <text>` Generate QR Code \n- `/qr colour <text>` : Generates A Colourful QR Code\n- `/read` : Read The Replayed QR Code \n- `/ocr` : Perform OCR on the Replayed Message And Extract All The Text In It \n- `/upload` : Upload The Replayed Message To *IBB image* server and returns its direct link",
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: btn }
  })
  return
} else if (params == "CHAT") {
  Api.editMessageText({
    inline_message_id: request.inline_message_id,
    text:
      "*✗ Command Available ✗*\n\n- `/title <tile>` Set A New Chat Title For The Chat \n- `/desc <text>` : Change The Chat Description  To Given Description \n- `/del_photo` : Delete The Current Chat Photo \n",
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: btn }
  })
  return
} else if (params == "MISC") {
  Api.editMessageText({
    inline_message_id: request.inline_message_id,
    text:
      "*✗ Command Available ✗*\nCommands Which Doesn't Fit In Other Modules Are Added In Misc Module :\n\n- `/buy_me` *:* To Purchase Me .\n- `/id` *:* Get a user's ID.\n- `/info` *:* Get a user's info.\n- `/donate` *:* Donate to the bot creator.\n- `/markdownhelp` *:* Information on how to use markdown with the bot. ",
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: btn }
  })
  return
} else if (params == "BLOCKLIST") {
  Api.editMessageText({
    inline_message_id: request.inline_message_id,
    text:
      "*✗ Command Available ✗*\nThe Words Which Are Not Allowed In Groups Can Be Deleted Using This Module :\n\n- `/addblocklist <word>` *:* To Add New Word In BlockList .\n- `/blocklist` *:* Get All The Blocklists .\n- `/blocklist <on/off>` To Enable Or Disable BlockList Module .\n- `/clearblocklist` *:* To Clear All The Words In BlockList. ",
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: btn }
  })
  return
}

