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

var buttons = [[{ text: "ā¢ BACK š ā¢", callback_data: "/help" }]]

var msg =
  "šāāļø *Base Commands*\n\nšµš» Available to Admins\n\nšµš» `/chat`  lets you manage all the Group settings in a group\n\nš®š»  `/ban`  lets you ban a user from the group without giving him the possibility to join again using the link of the group\n\nš®š»  `/mute`  puts a user in read-only mode. He can read but he can't send any messages . \n\nš®š»  `/kick`  bans a user from the group, giving him the possibility to join again with the link of the group\n\nš®š»  `/unban`  lets you remove a user from group's blacklist, giving them the possibility to join again with the link of the group\n\nš®āāļø  `/unmute`  To ummute the user have was added in mute Mode\n\nš®š»  `/info`  gives information about a user\n\nā½ļø  `/kickme`  User Can Use This To Kick Themselves \n\n_Need To Replay A User OR Pass ID or UserName After The Command As Parameter_"

Api.editMessageText({
  message_id: request.message.message_id,
  text: msg,
  parse_mode: "Markdown",
  disable_web_page_preview: true, //if needed
  reply_markup: { inline_keyboard: buttons }
})
