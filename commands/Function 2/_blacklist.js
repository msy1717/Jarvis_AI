/*CMD
  command: /blacklist
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Function 2
  answer: 
  keyboard: 
  aliases: 
CMD*/

var list = Bot.getProperty ("BlackList")
// ["abc","abc","abc","abc","abc","abc"]

var words = [chat.chatid, "Pro", "Pro1", "Pro2"];

var i = 1;
var text = "*✘ List Of BlackList Words ✘*\n";
for (;words[i];) {
  text += ""+i+". "+ words[i] + "\n ";
  i++;
}
Bot.sendMessage (text)
//{"blacklist":{"word1":"BlahBlah","word2":"BlahBlah","word3":"BlahBlah","word4":"BlahBlah","word5":"BlahBlah","word6":"BlahBlah"}}{"blacklist":{"word1":"BlahBlah","word2":"BlahBlah","word3":"BlahBlah","word4":"BlahBlah","word5":"BlahBlah","word6":"BlahBlah"}}{"blacklist":{"word1":"BlahBlah","word2":"BlahBlah","word3":"BlahBlah","word4":"BlahBlah","word5":"BlahBlah","word6":"BlahBlah"}}{"blacklist":{"word1":"BlahBlah","word2":"BlahBlah","word3":"BlahBlah","word4":"BlahBlah","word5":"BlahBlah","word6":"BlahBlah"}}
