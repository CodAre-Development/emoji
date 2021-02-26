const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');

exports.run = async (client, message, args) => {

require('moment-duration-format');

return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.setAuthor('Shard Info', client.user.avatarURL())
.setDescription('» This server is at shard **0** from total of **0** shards.')
.addField('Shard 0', `${client.guilds.cache.size} servers,
${moment.duration(client.uptime).format(`w [weeks] d [days] h [hours] m [minutes] s [seconds]`)}
${client.ws.ping}ms!`)
.setFooter(`Requested by ${message.author.tag}.`, message.author.avatarURL({ dynamic: true })));

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'shard-info'
};