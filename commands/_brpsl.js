/*CMD
  command: /brpsl
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Input Nilai SL*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("sl", data.message, "text");
Bot.runCommand("/brptp");
