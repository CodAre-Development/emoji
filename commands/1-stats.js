const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');

exports.run = async (client, message, args) => {

require('moment-duration-format');
var os = require('os')
let iş = os.cpus()[0]

return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.setAuthor(client.user.username+' | Stats', client.user.avatarURL())
.addField('❯ Latency', client.ws.ping+'ms.', true)
.addField('❯ Uptime', moment.duration(client.uptime).format(`w [weeks] d [days] h [hours] m [minutes] s [seconds]`), true)
.addField('❯ Servers', '`'+client.guilds.cache.size.toLocaleString()+'`', true)
.addField('❯ Ram Usage', (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)+' MB', true)
.addField('❯ Operating System', os.platform()+' | '+os.arch(), true));

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'stats'
};