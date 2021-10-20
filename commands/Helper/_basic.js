/*CMD
  command: /basic
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Helper
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [[{ text: "• BACK 🔙 •", callback_data: "/help" }]]

var msg =
  "💁‍♂️ *Base Commands*\n\n🕵🏻 Available to Admins\n\n🕵🏻 `/chat`  lets you manage all the Group settings in a group\n\n👮🏻  `/ban`  lets you ban a user from the group without giving him the possibility to join again using the link of the group\n\n👮🏻  `/mute`  puts a user in read-only mode. He can read but he can't send any messages . \n\n👮🏻  `/kick`  bans a user from the group, giving him the possibility to join again with the link of the group\n\n👮🏻  `/unban`  lets you remove a user from group's blacklist, giving them the possibility to join again with the link of the group\n\n👮‍♂️  `/unmute`  To ummute the user have was added in mute Mode\n\n👮🏻  `/info`  gives information about a user\n\n◽️  `/kickme`  User Can Use This To Kick Themselves \n\n_Need To Replay A User OR Pass ID or UserName After The Command As Parameter_"

Api.editMessageText({
  message_id: request.message.message_id,
  text: msg,
  parse_mode: "Markdown",
  disable_web_page_preview: true, //if needed
  reply_markup: { inline_keyboard: buttons }
})
