/*CMD
  command: /addblocklist
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Blocklist
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) {
  Bot.sendMessage("Invalid Format ! , `/addblocklist <word>`")
  return
}
var words = Bot.getProperty("BlockList" + chat.chatid)
var noword = "null" + chat.chatid

// updating  old  words

if (params.includes("edit")) {
  var prms = params.split(" ")[1]
  var word_no = prms.split(" ")[0]
  var word = prms.split(" ")[1]

  if (word_no == 1) {
    Bot.setProperty(
      "BlockList" + chat.chatid,
      [chat.chatid, word, words[2], words[3], words[4], words[5]],
      "string"
    )
    Bot.sendMessage("BlockList Updated !!", { is_replay: true })
  } else if (word_no == 2) {
    Bot.setProperty(
      "BlockList" + chat.chatid,
      [chat.chatid, words[1], word, words[3], words[4], words[5]],
      "string"
    )
    Bot.sendMessage("BlockList Updated !!", { is_replay: true })
  } else if (word_no == 3) {
    Bot.setProperty(
      "BlockList" + chat.chatid,
      [chat.chatid, words[1], words[2], word, words[4], words[5]],
      "string"
    )
    Bot.sendMessage("BlockList Updated !!", { is_replay: true })
  } else if (word_no == 1) {
    Bot.setProperty(
      "BlockList" + chat.chatid,
      [chat.chatid, words[1], words[2], words[3], word, words[5]],
      "string"
    )
    Bot.sendMessage("BlockList Updated !!", { is_replay: true })
  } else if (word_no == 5) {
    Bot.setProperty(
      "BlockList" + chat.chatid,
      [chat.chatid, words[1], words[2], words[3], words[4], word],
      "string"
    )
    Bot.sendMessage("BlockList Updated !!", { is_replay: true })
  } else if (word_no > 5) {
    Bot.sendMessage("Maximum Words Allowed Are 5 !!", { is_replay: true })
  }
  return
}

// adding  new  BlockList  Words

if (words[1] == noword) {
  Bot.setProperty(
    "BlockList" + chat.chatid,
    [chat.chatid, params, noword, noword, noword, noword],
    "string"
  )
  Bot.sendMessage("BlockList Updated !!", { is_replay: true })
} else if (words[2] == noword) {
  Bot.setProperty(
    "BlockList" + chat.chatid,
    [chat.chatid, words[1], params, noword, noword, noword],
    "string"
  )
  Bot.sendMessage("BlockList Updated !!", { is_replay: true })
} else if (words[3] == noword) {
  Bot.setProperty(
    "BlockList" + chat.chatid,
    [chat.chatid, words[1], words[2], params, noword, noword],
    "string"
  )
  Bot.sendMessage("BlockList Updated !!", { is_replay: true })
} else if (words[4] == noword) {
  Bot.setProperty(
    "BlockList" + chat.chatid,
    [chat.chatid, words[1], words[2], words[3], params, noword],
    "string"
  )
  Bot.sendMessage("BlockList Updated !!", { is_replay: true })
} else if (words[5] == noword) {
  Bot.setProperty(
    "BlockList" + chat.chatid,
    [chat.chatid, words[1], words[2], words[3], words[4], params],
    "string"
  )
  Bot.sendMessage("BlockList Updated !!", { is_replay: true })
} else
  Bot.sendMessage(
    "Seems All The Words Are Occupied !!\n\nUse : `/addblocklist edit <word no.> <new word>` To Rewrite Old Word with new given word",
    { is_replay: true }
  )

