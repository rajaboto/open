/*CMD
  command: 📈 JOIN VIP BSF
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
🔔_Pendaftaran VIP segera di tutup pada 7 Juli 2022!_

❗Dengan bergabung VIP BSF, anda setuju dikenakan biaya sejumlah yang sudah ditentukan!

Pilih *YA* atau *TIDAK* untuk melanjutkan..
  ANSWER
  keyboard: ✅ YA,❎ TIDAK
  aliases: 💎gabung vip, 💎 gabung vip, 📈 join vip, 📈 join vip bsf, 📈 vip bit signal fx
CMD*/

var tgID=data.user.telegramid;
if(data.user.telegramid!=1217304482)
if(data.user.telegramid!=5080376190)
{
if(data.message=="✅ YA"){
   Bot.runCommand("/verifi")
}else{
  Bot.sendMessage('❌Perintah salah!');
}
 return
 } 
 Bot.sendKeyboard("📈 JOIN VIP BSF,📉 FREE TRIAL\n🗓️ CARA KERJA,💬 SUPPORT","❗*anda sudah pernah terdaftar di system kami!*");
