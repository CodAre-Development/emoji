const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('MANAGE_EMOJIS')) return;
if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.addField('Delete Command', "You can delete emojis using their name or sending them directly.")
.addField('Usage', `-delete emojiname
-delete :emoji:`)
.addField('Examples', `-delete 😎
-delete wavingboy`)
.addField('Aliases', `-del
-remove`)
.setFooter('Requested by '+message.author.username, message.author.avatarURL({ dynamic: true })));

try {
const s = args.slice(0).join(' ').split(' ').filter(x => x.includes('<') && x.includes('>'))[0];
var emoji;
if(s) {
if(!message.guild.emojis.cache.get(s.split(':')[2].split('>')[0])) return message.channel.send(`I can't delete the emoji. Please make sure that you're sending an emoji that is **from** this server. For ex; \`-delete emoji\``);
emoji = message.guild.emojis.cache.get(s.split(':')[2].split('>')[0]);
} else {
if(!message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'))) return message.channel.send(`I can't delete the emoji. Please make sure that you're sending an emoji that is **from** this server. For ex; \`-delete emoji\``);
emoji = message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'));
};

emoji.delete();
return message.channel.send(`Deleted the emoji with \`${emoji.name}\` name.`);

} catch(error) {
  return message.channel.send(`I can't delete the emoji. Please make sure that you're sending an emoji that is **from** this server. For ex; \`-delete emoji\``);
};
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['del', 'remove'],
  permLevel: 0
};
 
exports.help = {
  name: 'delete'
};