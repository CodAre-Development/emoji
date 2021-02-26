const Discord = require('discord.js');

exports.run = async (client, message, args) => {

return message.channel.send(`🟡 **You have found a Premium feature!** This command can only be used on Emoji Premium actived servers. For more information, type: \`-premium\`.`)

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'pack'
};