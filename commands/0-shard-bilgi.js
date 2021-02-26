const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');

exports.run = async (client, message, args) => {

require('moment-duration-format');

return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.setAuthor('Shard Bilgileri', client.user.avatarURL())
.setDescription('» Bu sunucu toplam **0** adet shard arasından, **0** numaralı shard üzerinde bulunuyor.')
.addField('Shard 0', `${client.guilds.cache.size} servers,
${moment.duration(client.uptime).format(`w [hafta] d [gün] h [saat] m [dakika] s [saniye]`)}
${client.ws.ping}ms!`)
.setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL({ dynamic: true })));

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'shard-bilgi',
  namee: 'shard-info'
};