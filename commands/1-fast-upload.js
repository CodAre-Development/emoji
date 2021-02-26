const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('MANAGE_EMOJIS')) return;
if(!args[0] && !message.attachments.first()) return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.addField('Fast-upload Command', 'You can upload emojis fastly without giving them a name. To use this, send an emoji file with the command, send an emoji link or send the emoji itself.')
.addField('Usage', `-fast-upload link
-fast-upload :emoji:`)
.addField('Examples', `-fast-upload 😀
-fast-upload https://ptb.discord.com/assets/7c010dc6da25c012643ea22c1f002bb4.svg
-fast-upload (don't write anything and send the file)`)
.addField('Aliases', `-fu
-fast
-fastupload`)
.setFooter('Requested by '+message.author.username, message.author.avatarURL({ dynamic: true })));


if(message.attachments.first()) {
  try {

    return message.guild.emojis.create(message.attachments.first().url, message.attachments.first().name.split('.')[0], { reason: `Responsible moderator: `+message.author.tag }).then(emoji => message.channel.send(`Uploaded: ${message.guild.emojis.cache.get(emoji.id)}`))

  } catch(error) {
    console.log(error);
    return message.channel.send(`An error occured. Please make sure that; 
- Server has at least one space to upload an emoji, 
- The file that you uploaded is an image/gif, 
- File is not above 256kb in size.`);
  }
} else {
  if(args.slice(0).join(' ').startsWith('https://') && args.slice(0).join(' ').includes('discord')) {
    try {

      return message.guild.emojis.create(args.slice(0).join(' '), args.slice(0).join(' ').split('/')[4].split('.')[0], { reason: `Responsible moderator: `+message.author.tag }).then(emoji => message.channel.send(`Uploaded: ${message.guild.emojis.cache.get(emoji.id)}`)).catch(err => message.channel.send(`An error occured. Please make sure that; 
- Server has at least one space to upload an emoji, 
- The file that you uploaded is an image/gif, 
- File is not above 256kb in size.`))
    
    } catch(error) {
      console.log(error);
      return message.channel.send(`An error occured. Please make sure that; 
- Server has at least one space to upload an emoji, 
- The file that you uploaded is an image/gif, 
- File is not above 256kb in size.`);
    };
  } else {
const s = args.slice(0).join(' ').split(' ').filter(x => x.includes('<') && x.includes('>'))[0];
  try {
    
    let animated = false;
    if(s.startsWith('<a:')) animated = true;
    var url = '';
    var isim = '';

    if(animated === false) {
     url = 'https://cdn.discordapp.com/emojis/'+s.split(':')[2].split('>')[0]+'.png?v=1';
     isim = s.split('<:')[1].split(':')[0];
    } else {
     url = 'https://cdn.discordapp.com/emojis/'+s.split(':')[2].split('>')[0]+'.gif?v=1';
     isim = s.split('<a:')[1].split(':')[0];
    };

    return message.guild.emojis.create(url, isim, { reason: `Responsible moderator: `+message.author.tag }).then(emoji => message.channel.send(`Uploaded: ${message.guild.emojis.cache.get(emoji.id)}`));

  } catch(error) {
    console.log(error);
    return message.channel.send(`An error occured. Please make sure that; 
- Server has at least one space to upload an emoji, 
- The file that you uploaded is an image/gif, 
- File is not above 256kb in size.`);
  
};
  };
};




}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fastupload', 'fu'],
  permLevel: 0
};
 
exports.help = {
  name: 'fast-upload'
};