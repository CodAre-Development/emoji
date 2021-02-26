const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('MANAGE_EMOJIS')) return;
if(client.emojis.cache.size <= 0) return;

var i = [`Sadece hareketsiz emojiler arasından rastgele emoji gönderebilirim. Örnek: \`-rastgele ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25][Math.floor(Math.random() * 24)]} -h\``, `Sadece hareketli emoji göndermemi sağlayabilirsin! Örnek; \`-rastgele ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25][Math.floor(Math.random() * 24)]} +h\``, `Tek seferde çok sayıda rastgele emoji gönderebilirim. Örnek; \`-rastgele ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25][Math.floor(Math.random() * 24)]}\` -`]
if(!args[0]) {
message.channel.send(`**İpucu** — ${i[Math.floor(Math.random() * i.length)]}`);
const emojis = [];
for(var i = 0; i < [1, 2, 3][Math.floor(Math.random() * 2)]; i++) {
  emojis.push(client.emojis.cache.random().id);
};
return message.channel.send(emojis.map(x => client.emojis.cache.get(x)).join(''));
} else {

if(args[0] > 25) return message.channel.send("Tek seferde en fazla 25 rastgele emoji gönderebilirim. (Premium alarak bu limiti **50**'ye çıkarabilirsiniz; `-premium tr`)");

if(!args[1]) {
const emojis = [];
for(var i = 0; i < args[0]; i++) {
  emojis.push(client.emojis.cache.random().id);
};
return message.channel.send(emojis.map(x => client.emojis.cache.get(x)).join(''));
} else {
if(!['+h', '-h', 'hareketsiz', 'hareketli'].includes(args[1])) {
message.channel.send(`⚠️ Emojileri hareketli mi hareketsiz mi istediğinizi anlayamadığım için istediğiniz sayıda karışık şekilde gönderiyorum.
Örnek kullanım: ${i.filter(a => !a.endsWith('-'))[Math.floor(Math.random() * i.length)].split('Örnek: ')[1]}`)
const emojis = [];
for(var i = 0; i < args[0]; i++) {
  emojis.push(client.emojis.cache.random().id);
};
return message.channel.send(emojis.map(x => client.emojis.cache.get(x)).join(''));
};
if(args[1] === '+h' || args[1] === 'hareketli') {
const emojis = [];
for(var i = 0; i < args[0]; i++) {
  emojis.push(client.emojis.cache.filter(a => a.animated).random().id);
};
return message.channel.send(emojis.map(x => client.emojis.cache.get(x)).join(''));
};
if(args[1] === '-h' || args[1] === 'hareketsiz') {
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
  name: 'rastgele',
  namee: 'random'
};