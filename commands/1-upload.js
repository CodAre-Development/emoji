const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  const filter = response => {
    return response.author.id === message.author.id;
  };

  message.channel.send(`Type in a name for the emoji that I will upload to your server. 
Input will automatically be canceled in 30 seconds.`);

  let first;
  let two;

  message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
  .then(collected => {
    first = collected.first().content
    message.channel.send(`Send the emoji itself, send it's file or send a link to the emoji. 
Input will automatically be canceled in 30 seconds.`);
message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(collected => {
  
  if(collected.first().attachments.size > 0) {
    two = collected.first().attachments.first().url;
  } else {
    const s = collected.first().content.split(' ').filter(x => x.includes('<') && x.includes('>'))[0];
    if(s) {
      two = `https://cdn.discordapp.com/emojis/${s.split(':')[2].split('>')[0]}${s.split('<')[0].split('')[1] === 'a' ? '.gif' : '.png'}?v=1`
    } else {
      two = collected.first().content;
    };

    };
  try {
    
  message.guild.emojis.create(two, first, { reason: 'Responsible moderator: '+message.author.tag}).then(emoji => {
  message.channel.send(`Emoji yüklendi: ${message.guild.emojis.cache.get(emoji.id)}`);

  }).catch(error => message.channel.send(`An error occured. Please make sure that; 
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
})
.catch(collected => {
  console.log(collected);
  return message.channel.send(`An error occured. Please make sure that; 
- Server has at least one space to upload an emoji, 
- The file that you uploaded is an image/gif, 
- File is not above 256kb in size.`);  
});
  })
  .catch(collected => {
    console.log(collected);
    return message.channel.send(`An error occured. Please make sure that; 
- Server has at least one space to upload an emoji, 
- The file that you uploaded is an image/gif, 
- File is not above 256kb in size.`);  
  });




}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'upload'
};