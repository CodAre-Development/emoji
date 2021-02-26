const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('MANAGE_EMOJIS')) return;
if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.addField('Büyüt Komutu', "Herhangi bir emojinin ismini veya kendisini atarak fotoğraf halinde alabilirsiniz.")
.addField('Kullanım', `-büyüt emojiadi
-büyüt :emoji:`)
.addField('Örnekler', `-büyüt selam
-büyüt :superemoji:`)
.addField('Kısaltmalar', `-indir
-böyüt
-böyöt`)
.setFooter(message.author.username+' tarafından istendi.', message.author.avatarURL({ dynamic: true })));

try {
const s = args.slice(0).join(' ').split(' ').filter(x => x.includes('<') && x.includes('>'))[0];
var emoji;
if(s) {
if(!message.guild.emojis.cache.get(s.split(':')[2].split('>')[0])) return message.channel.send('Emojiyi büyütürken bir hata ile karşılaştım. Lütfen bir emoji attığından emin ol.')
emoji = message.guild.emojis.cache.get(s.split(':')[2].split('>')[0]);
} else {
if(!message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'))) return message.channel.send('Emojiyi büyütürken bir hata ile karşılaştım. Lütfen bir emoji attığından emin ol.')
emoji = message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'));
};

return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.setImage(emoji.url)
.setFooter(message.author.tag, message.author.avatarURL({ dynamic: true })))
} catch(error) {
return message.channel.send('Emojiyi büyütürken bir hata ile karşılaştım. Lütfen bir emoji attığından emin ol.');
}
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['indir', 'böyüt', 'böyöt'],
  permLevel: 0
};
 
exports.help = {
  name: 'büyüt',
  namee: 'jumbo'
};