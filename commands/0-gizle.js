const Discord = require('discord.js');

exports.run = async (client, message, args) => {

return message.channel.send(`🟡 **Premium bir özellik keşfettiniz!** Bu komutu sadece Emoji Premium almış sunucular kullanabilir. Daha fazla bilgi için \`-premium tr\` yazabilirsiniz.`)

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'gizle',
  namee: 'hide'
};