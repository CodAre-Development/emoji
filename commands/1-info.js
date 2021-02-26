const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');

exports.run = async (client, message, args) => {

if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.addField('Info Command', "You can get information about an emoji that is from this server.")
.addField('Usage', `-info emojiname
-info :emoji:`)
.addField('Examples', `-info ${client.emojis.cache.get(client.emojis.cache.random().id)}
-info myemoji`)
.addField('Aliases', `-ınfo
-information`)
.setFooter('Requested by '+message.author.username, message.author.avatarURL({ dynamic: true })));

  const s = args.slice(0).join(' ').split(' ').filter(x => x.includes('<') && x.includes('>'))[0];
  var emoji;
  if(s) {
  if(!message.guild.emojis.cache.get(s.split(':')[2].split('>')[0])) return message.channel.send("Make sure you're sending an emoji or typing an emoji's name that is **from this server**. For ex; `-info emoji`");
  emoji = message.guild.emojis.cache.get(s.split(':')[2].split('>')[0]);
  } else {
  if(!message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'))) return message.channel.send("Make sure you're sending an emoji or typing an emoji's name that is **from this server**. For ex; `-info emoji`");
  emoji = message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'));
  };

  const author = await emoji.fetchAuthor();
  return message.channel.send(new Discord.MessageEmbed()
  .setColor('#eb5c0e')
  .setAuthor('Emoji Info')
  .addField("ID", emoji.id, true)
  .addField('Animated?', emoji.animated ? 'Yes' : 'No', true)
  .addField('Date Added', moment(emoji.createdAt).format('DD')+' '+moment(emoji.createdAt).format('MM').toString()
  .replace('01', 'January')
  .replace('02', 'February')
  .replace('03', 'March')
  .replace('04', 'April')
  .replace('05', 'May')
  .replace('06', 'June')
  .replace('07', 'July')
  .replace('08', 'August')
  .replace('09', 'September')
  .replace('10', 'October')
  .replace('11', 'November')
  .replace('12', 'December')+' '+moment(emoji.createdAt).format('YYYY'), true)
  .addField('Usage', `\`<${emoji.animated ? 'a' : ''}:${emoji.name}:${emoji.id}>\``, true)
  .addField('Added By', '<@!'+author.id+'>', true)
  .addField('Link', '[Click here]('+emoji.url+')', true)
  .setThumbnail(emoji.url)
  .setFooter(`Requested by ${message.author.tag}.`, message.author.avatarURL({ dynamic: true })));



}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['information', 'ınfo'],
  permLevel: 0
};
 
exports.help = {
  name: 'info'
};