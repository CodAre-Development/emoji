const Discord = require('discord.js');

exports.run = async (client, message, args) => {

return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.setTitle('Balık Paketi')
.setDescription(`Satın almak veya daha detaylı bilgi için [sunucuya katılıp](https://discord.gg/UYkzDT3M4J) bir yöneticiye ulaşabilirsiniz.`)
.setFooter('69.90TL', 'https://images-ext-1.discordapp.net/external/aF0bO9bh9C2kdcrS2uWhjhYbnqV03oaNyyxc8ee_FPg/https/media.discordapp.net/attachments/768596536376426516/773130531851862077/icons.png'))


}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'paket',
  nameee: 'sa'
};