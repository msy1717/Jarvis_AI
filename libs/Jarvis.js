let LibPrefix = "JARVIS" 

function paste(text){
HTTP.post({
      url: "https://nekobin.com/api/documents",
      success: "/onPaste",
      body: { content: request.reply_to_message.text }
    })

}
function onPaste (){
var json = JSON.parse (content)
var link = "https://nekobin.com/"+json.result.key
return link
}

on(libPrefix + 'onPaste', onPaste )
