const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('MANAGE_EMOJIS')) return;
if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.addField('Jumbo Command', "You can get the image version of any emoji with sending it or typing it's name.")
.addField('Usage', `-jumbo emojiname
-jumbo :emoji:`)
.addField('Examples', `-jumbo hithere
-jumbo :superemoji:`)
.addField('Aliases', `-download
-big`)
.setFooter('Requested by '+message.author.username, message.author.avatarURL({ dynamic: true })));

try {
const s = args.slice(0).join(' ').split(' ').filter(x => x.includes('<') && x.includes('>'))[0];
var emoji;
if(s) {
if(!message.guild.emojis.cache.get(s.split(':')[2].split('>')[0])) return message.channel.send("I encountered an error while making your emoji image. Make sure that you're doing this properly.")
emoji = message.guild.emojis.cache.get(s.split(':')[2].split('>')[0]);
} else {
if(!message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'))) return message.channel.send("I encountered an error while making your emoji image. Make sure that you're doing this properly.")
emoji = message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'));
};

return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.setImage(emoji.url)
.setFooter(message.author.tag, message.author.avatarURL({ dynamic: true })))
} catch(error) {
return message.channel.send("I encountered an error while making your emoji image. Make sure that you're doing this properly.");
};
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['big', 'download'],
  permLevel: 0
};
 
exports.help = {
  name: 'jumbo'
};