const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('MANAGE_GUILD')) return;
if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.addField('Prefix Command', "You can change the symbols (prefix) for the commands. (Uppercase prefixes / prefixes with spaces are not supported!)")
.addField('Usage', `-prefix newprefix`)
.addField('Examples', `-prefix !!
-prefix emoji!`)
.addField('Aliases', `-pref`)
.setFooter('Requested by '+message.author.username, message.author.avatarURL({ dynamic: true })));
  
if(args[0] == client.config.prefix) {
  database.delete(`prefix.${message.guild.id}`);
  return message.channel.send(`Prefix has been set back to default. Example command usage: \`${args[0]}${client.commands.filter(x => x.help.namee).map(x => x.help.namee)[Math.floor(Math.random() * client.commands.filter(x => x.help.namee).map(x => x.help.namee).length)]}\``);
};

message.channel.send(`⚠️ **Warning** ⚠️
If you proceed, bot will **only** respond to commands starting with \`${args[0]}\` as the prefix. For example: \`${args[0]}${client.commands.filter(x => x.help.namee).map(x => x.help.namee)[Math.floor(Math.random() * client.commands.filter(x => x.help.namee).map(x => x.help.namee).length)]}\`
To accept this change, type \`${args[0]}accept\`. Type anything else to cancel.`).then(() => {
  
  const filter = response => {
    return response.author.id === message.author.id;
  };

  message.channel.awaitMessages(filter, { max: 1, time: 0, errors: ['time'] }).then(collected => {  
    if(collected.first().content === args[0]+'accept') {
      
      database.set(`prefix.${message.guild.id}`, args[0]);
      return message.channel.send(`Prefix has been set to \`${args[0]}\`. Example command usage: \`${args[0]}${client.commands.filter(x => x.help.namee).map(x => x.help.namee)[Math.floor(Math.random() * client.commands.filter(x => x.help.namee).map(x => x.help.namee).length)]}\``)

    } else return message.channel.send('Command canceled due to not accepting.');
  }).catch(error => {
    console.log(error);
    return message.channel.send('30 seconds have passed. Command canceled.');
  });
});

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pref'],
  permLevel: 0
};
 
exports.help = {
  name: 'prefix'
};