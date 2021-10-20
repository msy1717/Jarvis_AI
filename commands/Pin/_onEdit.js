/*CMD
  command: /onEdit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Pin
  answer: 
  keyboard: 
  aliases: 
CMD*/

function edit(id){
  Api.editMessageText({
    text: params,
    message_id: id,
    parse_mode: "Markdown",
    disable_web_page_preview: true, 
    onError: "/onEdit ERROR"
  })
}
if (params == "ERROR"){
Bot.sendMessage ("🤨 Seems This Message Is Not Send By Me !!")
return}
let status = options.result.status

var isAdmin = status == "administrator" || status == "creator"

if (isAdmin) {
  edit(params)
} else {
  Bot.sendMessage("You Need To Be Admin !!")
}
