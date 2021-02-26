const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');

exports.run = async (client, message, args) => {

if(!args[0]) return;
const s = args.slice(0).join(' ').split(' ').filter(x => x.includes('<') && x.includes('>'))[0];
var emoji;
if(s) {
if(!message.guild.emojis.cache.get(s.split(':')[2].split('>')[0])) return;
emoji = message.guild.emojis.cache.get(s.split(':')[2].split('>')[0]);
} else {
if(!message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'))) return;
emoji = message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'));
};

return message.channel.send(`Link of the emoji that you requested: `+emoji.url);


}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'link'
};