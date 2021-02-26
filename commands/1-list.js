const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  if(message.guild.emojis.cache.size > 15) {
  var page = 0;
  
  let arr = [];
  let emojiarr = message.guild.emojis.cache.array();
  
  for(let i =0; Number(i + "0") < (Math.round(emojiarr.length/15)*15 +1); ++i) {
  var on = emojiarr.slice(Number(i + "0"), Number(i + "0")+15)
  arr.push(on.toString())
  }

  let embd = new Discord.MessageEmbed()
  .setColor('#eb5c0e')
  message.channel.send(embd.addField("Server's Emotes", arr[0].split(',').join(' ') || 'No emojis available.').setFooter(`Page ${page+1} / ${arr.length+1}`)).then(async msg => {
        await msg.react("⏪");
        await msg.react("⏩");
  
        let filter = (reaction, user) => user.id !== message.client.user.id && user.id === message.author.id;
  
        var collector = msg.createReactionCollector(filter, {
          time: 120000
        });
  
        collector.on("collect", async (reaction, user) => {
          switch (reaction.emoji.name) {
            case "⏪":
           await reaction.users.remove(user).catch(console.error);
              if (page == 0) return;
              --page
  
                embd.setFooter(`Page ${page+1} / ${arr.length+1}`);
                embd.addField("Server's Emotes", arr[page].split(',').join(' ') || 'No emojis available.')
              msg.edit(embd)
             break;
            case "⏩":
              if (page == arr.length) return;
              ++page
              await reaction.users.remove(user).catch(console.error);
                embd.setFooter(`Page ${page+1} / ${arr.length+1}`);
                embd.addField("Server's Emotes", arr[page].split(',').join(' ') || 'No emojis available.')
              msg.edit(embd)
            break;
  
          }
        });
  
  });
} else {
  message.channel.send(new Discord.MessageEmbed()
  .setColor('#eb5c0e')
  .setFooter(`Requested by ${message.author.tag}.`, message.author.avatarURL({ dynamic: true }))
  .addField("Server's Emotes", message.guild.emojis.cache.map(x => client.emojis.cache.get(x.id)).join(' ') || 'No emojis available.'))
};

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'list'
};