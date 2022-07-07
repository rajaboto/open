/*CMD
  command: /verifi
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📔*Pilih Jangka Waktu Berlangganan*
  keyboard: Rp 250.000 (1 bulan), Rp 500.000 (2 bulan)\nRp 1.200.000 (5 bulan),Rp 2.600.000 (1 Tahun),🔙 Batal
  aliases: 
CMD*/

var tgID=data.user.telegramid;
User.setProperty("vip", data.message, "string");
if(data.message=="Rp 250.000 (1 bulan)"){
   Bot.sendMessage("💳 *1 Month VIP Payment Rp250.000,-*\n*--------------------------------------------------*\n📔ID: "+ tgID + " 🗓️ VIP 1 Bulan\n\n*Total Transfer* Rp250.000,-\n\n🔹Dana `085809548026`\n a.n Christof\n\n🔹Gopay `085809548026`\na.n Agustina\n\n🔹Bank Danamon `003636021408`\na.n Christof\n\n*----------------------------------------------------*\n_mohon segera /konfirmasi setelah transfer!_");
 }
if(data.message=="Rp 500.000 (2 bulan)"){
  Bot.sendMessage("💳 *2 Month VIP Payment Rp500.000,-*\n*--------------------------------------------------*\n📔ID: "+ tgID + " 🗓️ VIP 2 Bulan\n\n*Total Transfer* Rp500.000,-\n\n🔹Dana `085809548026`\n a.n Christof\n\n🔹Gopay `085809548026`\na.n Agustina\n\n🔹Bank Danamon `003636021408`\na.n Christof\n\n*----------------------------------------------------*\n_mohon segera /konfirmasi setelah transfer!_");
}
if(data.message=="Rp 1.200.000 (5 bulan)"){
  Bot.sendMessage("💳 *5 Month VIP Payment Rp1.200.000,-*\n*--------------------------------------------------*\n📔ID: "+ tgID + " 🗓️ VIP 5 Bulan\n\n*Total Transfer* Rp1.200.000,-\n\n🔹Dana `085809548026`\n a.n Christof\n\n🔹Gopay `085809548026`\na.n Agustina\n\n🔹Bank Danamon `003636021408`\na.n Christof\n\n*----------------------------------------------------*\n_mohon segera /konfirmasi setelah transfer!_");
}
if(data.message=="Rp 2.600.000 (1 Tahun)"){
  Bot.sendMessage("💳 *1 Year VIP Payment Rp2.600.000,-*\n*--------------------------------------------------*\n📔ID: "+ tgID + " 🗓️ VIP 1 Tahun\n\n*Total Transfer* Rp2.600.000,-\n\n🔹Dana `085809548026`\n a.n Christof\n\n🔹Gopay `085809548026`\na.n Agustina\n\n🔹Bank Danamon `003636021408`\na.n Christof\n\n*----------------------------------------------------*\n_mohon segera /konfirmasi setelah transfer!_");
}
