/*CMD
  command: /signal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Input Mata Uang*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("uang", data.message, "text");
Bot.runCommand("/brpsl");
