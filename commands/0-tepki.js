const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('MANAGE_EMOJIS')) return;
if(!args[0]) return;

const emoji = message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'));
if(!emoji) return;
message.delete();
const a = await message.channel.messages.fetch({ limit: 2});
return a.map(x => x)[0].react(emoji.id);

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'tepki',
  namee: 'react'
};