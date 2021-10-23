let libPrefix = "JARVIS"

function paste(text) {
  HTTP.post({
    url: "https://nekobin.com/api/documents",
    success: "/onPaste",
    body: { content: text }
  })
}
function onPaste() {
  var json = JSON.parse(content)
  var link = "https://nekobin.com/" + json.result.key
  return link
}
function chat_bot(){

}

on(libPrefix + "onPaste", onPaste)
