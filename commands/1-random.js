const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('MANAGE_EMOJIS')) return;
if(client.emojis.cache.size <= 0) return;

var i = [`I can only send static emojis too. Usage; \`-random ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25][Math.floor(Math.random() * 24)]} static\``, `You can make me send animated emojis only! Usage; \`-random ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25][Math.floor(Math.random() * 24)]} +a\``, `Tek seferde çok sayıda rastgele emoji gönderebilirim. Örnek; \`-rastgele ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25][Math.floor(Math.random() * 24)]}\` -`]
if(!args[0]) {
message.channel.send(`**Pro Tip** — ${i[Math.floor(Math.random() * i.length)]}`);
const emojis = [];
for(var i = 0; i < [1, 2, 3][Math.floor(Math.random() * 2)]; i++) {
  emojis.push(client.emojis.cache.random().id);
};
return message.channel.send(emojis.map(x => client.emojis.cache.get(x)).join(''));
} else {

if(args[0] > 25) return message.channel.send("I can't send more than 25 random emojis at once. (Emoji Premium doubles this limit to **50**:`-premium`)");

if(!args[1]) {
const emojis = [];
for(var i = 0; i < args[0]; i++) {
  emojis.push(client.emojis.cache.random().id);
};
return message.channel.send(emojis.map(x => client.emojis.cache.get(x)).join(''));
} else {
if(!['+a', '-a', 'static', 'animated'].includes(args[1])) {
message.channel.send(`⚠️ I couldn't get whether you want animated or static emojis, sending mixed.
Usage example: ${i.filter(a => !a.endsWith('-'))[Math.floor(Math.random() * i.length)].split('Örnek: ')[1]}`)
const emojis = [];
for(var i = 0; i < args[0]; i++) {
  emojis.push(client.emojis.cache.random().id);
};
return message.channel.send(emojis.map(x => client.emojis.cache.get(x)).join(''));
};
if(args[1] === '+a' || args[1] === 'animated') {
const emojis = [];
for(var i = 0; i < args[0]; i++) {
  emojis.push(client.emojis.cache.filter(a => a.animated).random().id);
};
return message.channel.send(emojis.map(x => client.emojis.cache.get(x)).join(''));
};
if(args[1] === '-a' || args[1] === 'static') {
const emojis = [];
for(var i = 0; i < args[0]; i++) {
  emojis.push(client.emojis.cache.filter(a => !a.animated).random().id);
};
return message.channel.send(emojis.map(x => client.emojis.cache.get(x)).join(''));
};
};


};


}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'random'
};