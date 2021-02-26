const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');

exports.run = async (client, message, args) => {

require('moment-duration-format');

return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.setTitle("Hi there! I'm Emoji.")
.setDescription(`[Invite me to your server!](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=1074121728)
[CodAre](https://discord.gg/codare)`)
.setFooter('This substructure coded with ♥ by can#0002 for CodAre Development.', client.user.avatarURL()))

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'invite'
};