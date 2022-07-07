/*CMD
  command: /brptp
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Input Nilai TP*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("tp", data.message, "text");
Bot.runCommand("/tglbrp");
