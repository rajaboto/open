/*CMD
  command: /adminReplyAll
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *All News*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var tgid = options.tgid;

var msg = " " + message + " ";
Bot.sendMessageToChatWithId(1493953213, msg);
Bot.sendMessageToChatWithId(1493953213, msg);
Bot.sendMessageToChatWithId(1264946924, msg);
Bot.sendMessageToChatWithId(5063116918, msg);
Bot.sendMessageToChatWithId(5002807123, msg);
Bot.sendMessageToChatWithId(1503543716, msg);
Bot.sendMessageToChatWithId(739398724, msg);
Bot.sendMessageToChatWithId(265653839, msg);
Bot.sendMessageToChatWithId(1192522311, msg);
Bot.sendMessageToChatWithId(2043537611, msg);
Bot.sendMessageToChatWithId(963013265, msg);
Bot.sendMessageToChatWithId(1490897631, msg);
Bot.sendMessage("ALL Sent!")
