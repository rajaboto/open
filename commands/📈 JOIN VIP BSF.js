/*CMD
  command: π JOIN VIP BSF
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
π_Pendaftaran VIP segera di tutup pada 7 Juli 2022!_

βDengan bergabung VIP BSF, anda setuju dikenakan biaya sejumlah yang sudah ditentukan!

Pilih *YA* atau *TIDAK* untuk melanjutkan..
  ANSWER
  keyboard: β YA,β TIDAK
  aliases: πgabung vip, π gabung vip, π join vip, π join vip bsf, π vip bit signal fx
CMD*/

var tgID=data.user.telegramid;
if(data.user.telegramid!=1217304482)
if(data.user.telegramid!=5080376190)
{
if(data.message=="β YA"){
   Bot.runCommand("/verifi")
}else{
  Bot.sendMessage('βPerintah salah!');
}
 return
 } 
 Bot.sendKeyboard("π JOIN VIP BSF,π FREE TRIAL\nποΈ CARA KERJA,π¬ SUPPORT","β*anda sudah pernah terdaftar di system kami!*");
