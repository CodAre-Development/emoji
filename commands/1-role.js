const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('MANAGE_EMOJIS')) return;
if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.addField('Role Command', "You can limit an emoji to a certain role's users only with this command. To make the emoji usable by everyone again, type `everyone` or `remove` instead of a role name.")
.addField('Usage', `-role :emoji: Role Name
-role emojiname everyone
-role :emoji: remove`)
.addField('Examples', `-role :superemoji: Mod
-role superemoji everyone
-role :superemoji: remove`)
.addField('Aliases', `-role`)
.setFooter('Requested by '+message.author.username, message.author.avatarURL({ dynamic: true })));

if(!client.emojis.cache.find(x => (x.animated ? `<a:${x.id}:${x.name}:` : `<:${x.name}:${x.id}>`) === args[0]) || !client.emojis.cache.find(x => x.name.toLowerCase(args[0]))) return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.addField('Role Command', "You can limit an emoji to a certain role's users only with this command. To make the emoji usable by everyone again, type `everyone` or `remove` instead of a role name.")
.addField('Usage', `-role :emoji: Role Name
-role emojiname everyone
-role :emoji: remove`)
.addField('Examples', `-role :superemoji: Mod
-role superemoji everyone
-role :superemoji: remove`)
.addField('Aliases', `-role`)
.setFooter('Requested by '+message.author.username, message.author.avatarURL({ dynamic: true })));

if(!args[1]) return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.addField('Role Command', "You can limit an emoji to a certain role's users only with this command. To make the emoji usable by everyone again, type `everyone` or `remove` instead of a role name.")
.addField('Usage', `-role :emoji: Role Name
-role emojiname everyone
-role :emoji: remove`)
.addField('Examples', `-role :superemoji: Mod
-role superemoji everyone
-role :superemoji: remove`)
.addField('Aliases', `-role`)
.setFooter('Requested by '+message.author.username, message.author.avatarURL({ dynamic: true })));

if(args[1] === 'remove' || args[1] === 'everyone') {

  let emoji = client.emojis.cache.find(x => (x.animated ? `<a:${x.id}:${x.name}:` : `<:${x.name}:${x.id}>`) === args[0]) || client.emojis.cache.find(x => x.name.toLowerCase(args[0]));
  message.channel.send(`The emoji you specified ${client.emojis.cache.get(emoji.id)} (\`${emoji.name}\`) can be used by everyone now.`);
  return emoji.edit({ roles: [message.guild.roles.cache.find(a => a.name === '@everyone')], });

} else {

  if(!message.guild.roles.cache.find(a => a.name === args[1])) return message.channel.send(`I couldn't find the role. Please note that this is **Case Sensitive**, you have to type the role's name exactly as it is. Usage: \`-role :emoji: role/remove\``)
  let emoji = client.emojis.cache.find(x => (x.animated ? `<a:${x.id}:${x.name}:` : `<:${x.name}:${x.id}>`) === args[0]) || client.emojis.cache.find(x => x.name.toLowerCase(args[0]));
  message.channel.send(`From now on, (\`${emoji.name}\`)  emoji can **only** be used by people that have the \`${args[1]}\` role.`);
  return emoji.edit({ roles: [message.guild.roles.cache.find(a => a.name === args[1])], });

};


}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'role'
};