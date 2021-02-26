const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');

exports.run = async (client, message, args) => {

require('moment-duration-format');
var os = require('os')
let iş = os.cpus()[0]

return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.setAuthor(client.user.username+' | İstatistikler', client.user.avatarURL())
.addField('❯ Gecikme', client.ws.ping+'ms.', true)
.addField('❯ Çalışma Süresi', moment.duration(client.uptime).format(`w [hafta] d [gün] h [saat] m [dakika] s [saniye]`), true)
.addField('❯ Sunucu', '`'+client.guilds.cache.size.toLocaleString()+'`', true)
.addField('❯ Ram Kullanımı', (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)+' MB', true)
.addField('❯ İşletim Sistemi', os.platform()+' | '+os.arch(), true));

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'istatistik',
  namee: 'stats'
};