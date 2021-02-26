const Discord = require('discord.js');
const database = require('quick.db');
exports.run = async (client, message, args) => {

if(!database.fetch(`s.${message.author.id}`)) {
  message.channel.send(`⚠️ Kullanım Şartı ⚠️ 

Botun bu komut ile göndereceği emojilerde epilepsi hastalarını olumsuz etkileyecek emojiler bulunabilir. 
Oluşabilecek herhangi bir problem sizin sorumluluğunuz altındadır. 

Onaylamak ve devam etmek için \`-onayla\` yazmalısınız, iptal etmek için herhangi bir şey yazabilirsiniz.`)

  const filter = response => {
    return response.author.id === message.author.id;
  };

  message.channel.awaitMessages(filter, { max: 1, time: 0, errors: ['time'] }).then(collected => {  
    if(collected.first().content === '-onayla') {
      database.set(`s.${message.author.id}`, true);
      return client.commands.get('ara').run(client, message, args, client.elevation(message));
    } else return;
  });

} else {
  
if(!args[0]) return;

if(!client.emojis.cache.find(x => x.name === args[0]) && !client.emojis.cache.find(x => x.name.startsWith(args[0]))) return message.channel.send('Aradığınız isime tam olarak veya benzerine sahip olan bir emoji bulamadım.');
if(client.emojis.cache.find(x => x.name.startsWith(args[0])) && !client.emojis.cache.find(x => x.name === args[0])) {
   message.channel.send(`Aradığınız isime sahip bir emoji bulamadım, onun yerine benzer sonuçlar buldum.`);
   return message.channel.send(client.emojis.cache.filter(x => x.name.startsWith(args[0])).map(a => client.emojis.cache.get(a.id)).slice(0, 30).join(' '));
} else if(client.emojis.cache.find(x => x.name === args[0])) {
   return message.channel.send(client.emojis.cache.filter(x => x.name === args[0]).map(a => client.emojis.cache.get(a.id)).slice(0, 30).join(' '))
}

};

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'ara',
  namee: 'find'
};