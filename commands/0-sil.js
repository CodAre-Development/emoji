const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('MANAGE_EMOJIS')) return;
if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.addField('Sil Komutu', "Sunucudaki bir emojiyi adını yazarak veya emojiyi göndererek silmenizi sağlar.")
.addField('Kullanım', `-sil emojiadi
-sil :emoji:`)
.addField('Örnekler', `-sil 😎
-sil karpuz`)
.addField('Kısaltmalar', `-sıl
-kaldır`)
.setFooter(message.author.username+' tarafından istendi.', message.author.avatarURL({ dynamic: true })));

try {
const s = args.slice(0).join(' ').split(' ').filter(x => x.includes('<') && x.includes('>'))[0];
var emoji;
if(s) {
if(!message.guild.emojis.cache.get(s.split(':')[2].split('>')[0])) return message.channel.send(`Yazdığınız emoji silinemiyor. Lütfen emojinin **bu sunucuda** ekli olduğuna emin olun. Örnek; \`-sil emoji\``);
emoji = message.guild.emojis.cache.get(s.split(':')[2].split('>')[0]);
} else {
if(!message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'))) return message.channel.send(`Yazdığınız emoji silinemiyor. Lütfen emojinin **bu sunucuda** ekli olduğuna emin olun. Örnek; \`-sil emoji\``);
emoji = message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'));
};

emoji.delete();
return message.channel.send(`\`${emoji.name}\` adlı emoji silindi.`);

} catch(error) {
return message.channel.send(`Yazdığınız emoji silinemiyor. Lütfen emojinin **bu sunucuda** ekli olduğuna emin olun. Örnek; \`-sil emoji\``);
};
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sıl', 'kaldır'],
  permLevel: 0
};
 
exports.help = {
  name: 'sil',
  namee: 'remove'
};