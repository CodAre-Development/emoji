const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  if(!args[0]) return message.channel.send("You need to type a message ID. How to: https://support.discord.com/hc/en-us/articles/206346498");
  if(isNaN(args[0])) return message.channel.send("You need to type a message ID. How to: https://support.discord.com/hc/en-us/articles/206346498");
  
   try {
     var m = await message.channel.messages.fetch(args[0]);
   } catch(error) {
     return message.channel.send("I couldn't fetch the message. Please make sure that you sent an actual message's ID which is sent to this channel.");
   };

   let emojis = [];
   const s = m.content.split(' ').filter(x => x.includes('<') && x.includes('>'));
   s.forEach(x => {

    let animated = false;
    if(x.startsWith('<a:')) animated = true;

    var url = '';
    var isim = '';

    if(animated === false) {
     url = 'https://cdn.discordapp.com/emojis/'+x.split(':')[2].split('>')[0]+'.png?v=1';
     isim = x.split('<:')[1].split(':')[0];
    } else {
     url = 'https://cdn.discordapp.com/emojis/'+x.split(':')[2].split('>')[0]+'.gif?v=1';
     isim = x.split('<a:')[1].split(':')[0];
    };
    
    if(url === '') return;
    if(isim === '') return;

    return emojis.push({ isim: isim, url: url });

  });

  if(emojis.length == 1) return message.channel.send(new Discord.MessageEmbed()
  .setDescription(`**[Emoji Information](${emojis[0].url})**`)
  .addField('Name', emojis[0].isim, true)
  .addField('Emoji Link', '[Click Here]('+emojis[0].url+')', true)
  .setThumbnail(emojis[0].url)
  .setFooter('Emoji 1 / 1'));

  var page = 1;
  var totalpages = emojis.length;
  message.channel.send(new Discord.MessageEmbed()
  .setDescription(`**[Emoji Information](${emojis[0].url})**`)
  .addField('Name', emojis[0].isim, true)
  .addField('Emoji Link', '[Click Here]('+emojis[0].url+')', true)
  .setThumbnail(emojis[0].url)
  .setFooter(`Emoji 1 / ${emojis.length}`)).then(async function (sentEmbed) {
    
    const emojiArray = ["⏪", "⏩"];
    const filter = (reaction, user) => emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function () { });
    await sentEmbed.react(emojiArray[1]).catch(function () { });

    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 300000
    });

    reactions.on("collect", async function (reaction) {
      await reaction.users.remove(message.author);
      if (reaction.emoji.name === "⏪") {
          if (page !== 1) {
              page = page - 1;
          } else {
              page = totalpages;
          }
      } else {
          if (page !== totalpages) {
              page = page + 1;
          } else {
              page = 1;
          }
      }
      sentEmbed.edit(new Discord.MessageEmbed()
      .setDescription(`**[Emoji Information](${emojis[page - 1].url})**`)
      .addField('Name', emojis[page - 1].isim, true)
      .addField('Emoji Link', '[Click Here]('+emojis[page - 1].url+')', true)
      .setThumbnail(emojis[page - 1].url)
      .setFooter(`Emoji ${page} / ${emojis.length}`)).catch(function () { });
      reactions.on("end", () => sentEmbed.reactions.removeAll());

  });


  });


}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'get'
};