const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('MANAGE_EMOJIS')) return;
if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.addField('Rename Command', "You can change the name of an emoji with sending it or typing it's name.")
.addField('Usage', `-rename emojiname newname
-rename :emoji: newname`)
.addField('Examples', `-rename melon supermelon
-rename :oldmelon: supermelon`)
.addField('Aliases', `-ren
-renam`)
.setFooter('Requested by '+message.author.name, message.author.avatarURL({ dynamic: true })));
if(!args[1]) return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.addField('Rename Command', "You can change the name of an emoji with sending it or typing it's name.")
.addField('Usage', `-rename emojiname newname
-rename :emoji: newname`)
.addField('Examples', `-rename melon supermelon
-rename :oldmelon: supermelon`)
.addField('Aliases', `-ren
-renam`)
.setFooter('Requested by '+message.author.name, message.author.avatarURL({ dynamic: true })));

  const s = args[0].split(' ').filter(x => x.includes('<') && x.includes('>'))[0];
  var emoji;
  if(s) {
  if(!message.guild.emojis.cache.get(s.split(':')[2].split('>')[0])) return message.channel.send(new Discord.MessageEmbed()
  .setColor('#eb5c0e')
  .addField('Rename Command', "You can change the name of an emoji with sending it or typing it's name.")
  .addField('Usage', `-rename emojiname newname
  -rename :emoji: newname`)
  .addField('Examples', `-rename melon supermelon
  -rename :oldmelon: supermelon`)
  .addField('Aliases', `-ren
  -renam`)
  .setFooter('Requested by '+message.author.name, message.author.avatarURL({ dynamic: true })));
  emoji = message.guild.emojis.cache.get(s.split(':')[2].split('>')[0]);
  } else {
  if(!message.guild.emojis.cache.find(x => x.name === args[0])) return message.channel.send(new Discord.MessageEmbed()
  .setColor('#eb5c0e')
  .addField('Rename Command', "You can change the name of an emoji with sending it or typing it's name.")
  .addField('Usage', `-rename emojiname newname
  -rename :emoji: newname`)
  .addField('Examples', `-rename melon supermelon
  -rename :oldmelon: supermelon`)
  .addField('Aliases', `-ren
  -renam`)
  .setFooter('Requested by '+message.author.name, message.author.avatarURL({ dynamic: true })));
  emoji = message.guild.emojis.cache.find(x => x.name === args[0]);
  };

  if(!emoji) return message.channel.send(new Discord.MessageEmbed()
  .setColor('#eb5c0e')
  .addField('Rename Command', "You can change the name of an emoji with sending it or typing it's name.")
  .addField('Usage', `-rename emojiname newname
  -rename :emoji: newname`)
  .addField('Examples', `-rename melon supermelon
  -rename :oldmelon: supermelon`)
  .addField('Aliases', `-ren
  -renam`)
  .setFooter('Requested by '+message.author.name, message.author.avatarURL({ dynamic: true })));

emoji.edit({ name: args.slice(1).join('-'), reason: 'Sorumlu moderatör: '+message.author.tag });
return message.channel.send(`\`${emoji.name}\` emojisinin adı \`${args.slice(1).join('-')}\` olarak değiştirildi.`);


}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ren', 'renam'],
  permLevel: 0
};
 
exports.help = {
  name: 'rename'
};