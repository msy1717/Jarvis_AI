/*CMD
  command: /tempmute
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Function 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (params) {
  var chtid = params.split(" ")[0]
  var id = params.split(" ")[1]

  Api.restrictChatMember({
    chat_id: chtid,
    user_id: id,
    can_send_messages: false
  })
  Bot.run({
    command: "/autounmute " + chtid + " " + id,
    run_after: 60 * 15 // 15 min delay
  })
}

//result.query

