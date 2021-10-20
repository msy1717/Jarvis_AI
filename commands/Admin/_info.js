/*CMD
  command: /info
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (params) {
  if (params == "USER") {
    var username = request.reply_to_message.from.username
    var name = request.reply_to_message.from.first_name
    var id = request.reply_to_message.from.id

    if (options.result.total_count == 0) {
      return Bot.sendMessage("You have no photos in profile")
    }

    let photos = options.result.photos
    for (let i in photos) {
      Api.sendPhoto({
        photo: photos[i][0].file_id,
        caption:
          "🕵️‍♂️ [User](t.me/" +
          username +
          ") *Detials Found !!* \n  ▪︎ Name : " +
          name +
          "\n  ▪︎ User ID : " +
          id +
          "\n  ▪︎ UserName : @" +
          username +
          " \n  ▪︎ UserLink : [HERE](https://t.me/" +
          username +
          ")",
        parse_mode: "Markdown"
      })
    }
  } else if (params == "CHAT") {
    Api.sendPhoto({
      photo: options.result.photos.big_file_id,
      caption:
        "🕵️‍♂️ [Chat](t.me/" +
        options.result.username +
        ") *Detials Found !!* \n  ▪︎ Name : " +
        name +
        "\n  ▪︎ Chat ID : " +
        options.result.id +
        "\n  ▪︎ UserName : @" +
        options.result.username +
        " \n  ▪︎ ChatLink : [HERE](https://t.me/" +
        options.result.username +
        ")",
      parse_mode: "Markdown"
    })
  }
}

if (!request.reply_to_message) {

  Api.getChat({ chat_id: chat.chatid, on_result: "/info CHAT" })

  return
} else
  Api.getUserProfilePhotos({
    user_id: request.reply_to_message.from.id,
    on_result: "/info USER"
  })
