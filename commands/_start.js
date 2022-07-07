/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var tgID=data.user.telegramid;
var firstName = data.user.first_name;
var lastName = data.user.last_name;
var userName = data.user.username;

Bot.sendKeyboard('📉 FREE TRIAL,📈 JOIN VIP BSF\n🗓️ CARA KERJA,💬 SUPPORT', 'Bit Signal FX yang di dasarkan pada TECHNICAL ANALYSIS yang modern, TERUJI, dan akurat!\n\n🔹 Signal harian Nyata\n🔹 Profit 99,99% Konsisten!\n🔹 up to 3000 pip 1 bulan\n🔹 Resiko rendah\n🔹 Signal Notifikasi Langsung!\n🔹Jaminan tidak pernah minus profit\n🔹 Support Semua Broker!\n\n💳 *Payment Method* ◽E-Wallet ◽ Bank Transfer');
