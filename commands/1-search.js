const Discord = require('discord.js');
const database = require('quick.db');
exports.run = async (client, message, args) => {

if(!database.fetch(`s.${message.author.id}`)) {
  message.channel.send(`⚠️ Usage Terms  ⚠️ 

Emojis sent from this command may cause in epileptic seizures for some users.
Using the command afterwards is on your responsibility. 

You can accept the terms with typing \`-accept\`, type anything else to cancel.`)

  const filter = response => {
    return response.author.id === message.author.id;
  };

  message.channel.awaitMessages(filter, { max: 1, time: 0, errors: ['time'] }).then(collected => {  
    if(collected.first().content === '-accept') {
      database.set(`s.${message.author.id}`, true);
      return client.commands.get('ara').run(client, message, args, client.elevation(message));
    } else return;
  });

} else {
  
if(!args[0]) return;

if(!client.emojis.cache.find(x => x.name === args[0]) && !client.emojis.cache.find(x => x.name.includes(args[0]))) return message.channel.send('Aradığınız isime tam olarak veya benzerine sahip olan bir emoji bulamadım.');
if(client.emojis.cache.find(x => x.name.includes(args[0])) && !client.emojis.cache.find(x => x.name === args[0])) {
   message.channel.send(`I couldn't find the exact emoji you asked for. Instead, I'll show you the similar results.`);
   return message.channel.send(client.emojis.cache.filter(x => x.name.includes(args[0])).map(a => client.emojis.cache.get(a.id)).join(' '));
} else if(client.emojis.cache.find(x => x.name === args[0])) {
   return message.channel.send(client.emojis.cache.filter(x => x.name === args[0]).map(a => client.emojis.cache.get(a.id)).join(' '))
}

};

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['search'],
  permLevel: 0
};
 
exports.help = {
  name: 'find'
};