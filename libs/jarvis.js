let libPrefix = "jarvis"

function startAI(msg_text){

  HTTP.get( {

    url: "https://api.affiliateplus.xyz/api/chatbot?message="+msg_text+"&botname=friday&ownername=arjun&user=1",

    success: libPrefix + 'onLoading '

  } )

}

function onLoading(){

   var json = JSON.parse(content)

   var response = json.message

   Bot.sendMessage(response)

}

function onMasterCommand() {

  var newUser = Bot.getProperty("WelcomeText" + chat.chatid)

  var leftUser = Bot.getProperty("LeftText" + chat.chatid)

  if (request) {

    if (request.new_chat_members[0].username == bot.name) {

    Bot.sendInlineKeyboard([[{title : "📢 Help Menu" ,command:"/help"}]],"Thanks For Adding Me To Your Group\nDon't Forget To Make Me As Admin Of The Group Or I Will Not Be Able To Manage This Group \n\n   *Thank You 😇*")

      return 

  } 

    if (request.new_chat_members.length > 0) {

      var WelcomeMsg = newUser.replace("{name}",request.new_chat_members[0].first_name)

      WelcomeMsg = WelcomeMsg.replace("{id}", request.new_chat_members[0].id)

      WelcomeMsg = WelcomeMsg.replace("{username}",request.new_chat_members[0].username)

      Bot.sendMessage(WelcomeMsg)

    }

    if (request.left_chat_member) {

      Bot.sendMessage(leftUser)

    }

  }else{

  Api.sendChatAction({chat_id:chat.chatid, action:"typing"})

  }

}

on('*', onMasterCommand );

on(libPrefix + 'onLoading', onLoading );
