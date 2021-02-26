const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('MANAGE_EMOJIS')) return;
if(!args[0]) return;

const emoji = message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'));
if(!emoji) return;
message.delete();
return message.channel.send(`<${emoji.animated ? 'a' : ''}:${emoji.name}:${emoji.id}>`);

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'send'
};