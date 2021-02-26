const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('MANAGE_EMOJIS')) return;
if(client.emojis.cache.size <= 0) return;
  
  if(!args[0] || isNaN(args[0])) {
    
    let findedEmoji = client.emojis.cache.random();
    message.channel.send(`Emoji found: ${findedEmoji}. If want it to be added to the server, type \`yes\`. Type anything else to cancel. 
I can also upload multiple emojis at once: \`-random-upload 5\``)

    const filter = response => {
    	return response.author.id === message.author.id;
    };
    message.channel.awaitMessages(filter, { max: 1, time: 0, errors: ['time'] }).then(collected => {
			
      if(collected.first().content === 'yes') {
      
      return message.guild.emojis.create(findedEmoji.url, findedEmoji.name).then(m => message.channel.send(`Uploaded: ${message.guild.emojis.cache.get(m.id)}`));

      } else return message.channel.send("You didn't confirm the upload, command canceled.");

		});

  } else {
    if(args[0] > 5 || args[0] <= 0) return message.channel.send("I can't random-upload more than 5 emojis at once.");

    let emojis = [];
    for(var i = 0; i < args[0]; i++) {
      emojis.push(client.emojis.cache.random().id);
    };

    message.channel.send(`Emojis found: ${emojis.map(a => client.emojis.cache.get(a)).join(' ')}. If want them to be added to the server, type \`yes\`. Type anything else to cancel.`)

    const filter = response => {
    	return response.author.id === message.author.id;
    };
    message.channel.awaitMessages(filter, { max: 1, time: 0, errors: ['time'] }).then(collected => {
			
      if(collected.first().content === 'yes') {
      
      message.channel.send(`Emojis have been added: ${emojis.map(a => client.emojis.cache.get(a)).join(' ')}`);
      emojis.map(a => client.emojis.cache.get(a)).forEach(x => {
      return message.guild.emojis.create(x.url, x.name);
      });
      } else return message.channel.send("You didn't confirm the upload, command canceled.");

		});

  };



}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'random-upload'
};