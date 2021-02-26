const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('MANAGE_EMOJIS')) return;
if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.addField('Rol Komutu', 'Bu komut ile bir emojiyi sadece belirli roldeki kişilerin kullanabilmesini sağlayabilirsiniz. Rol sınırlamasını kaldırmak için rol adı yerine `kaldır` veya `everyone` yazabilirsiniz.')
.addField('Kullanım', `-rol :emoji: Rol Adı
-rol :emoji: everyone
-rol emojiadi kaldır
-rol :emoji: kaldır`)
.addField('Örnekler', `-rol :superemoji: Süper İnsanlar
-rol superemoji everyone
-rol :superemoji: kaldır`)
.addField('Kısaltmalar', `-rol`)
.setFooter(message.author.username+' tarafından istendi.', message.author.avatarURL({ dynamic: true })));

if(!client.emojis.cache.find(x => (x.animated ? `<a:${x.id}:${x.name}:` : `<:${x.name}:${x.id}>`) === args[0]) || !client.emojis.cache.find(x => x.name.toLowerCase(args[0]))) return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.addField('Rol Komutu', 'Bu komut ile bir emojiyi sadece belirli roldeki kişilerin kullanabilmesini sağlayabilirsiniz. Rol sınırlamasını kaldırmak için rol adı yerine `kaldır` veya `everyone` yazabilirsiniz.')
.addField('Kullanım', `-rol :emoji: Rol Adı
-rol :emoji: everyone
-rol emojiadi kaldır
-rol :emoji: kaldır`)
.addField('Örnekler', `-rol :superemoji: Süper İnsanlar
-rol superemoji everyone
-rol :superemoji: kaldır`)
.addField('Kısaltmalar', `-rol`)
.setFooter(message.author.username+' tarafından istendi.', message.author.avatarURL({ dynamic: true })));

if(!args[1]) return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.addField('Rol Komutu', 'Bu komut ile bir emojiyi sadece belirli roldeki kişilerin kullanabilmesini sağlayabilirsiniz. Rol sınırlamasını kaldırmak için rol adı yerine `kaldır` veya `everyone` yazabilirsiniz.')
.addField('Kullanım', `-rol :emoji: Rol Adı
-rol :emoji: everyone
-rol emojiadi kaldır
-rol :emoji: kaldır`)
.addField('Örnekler', `-rol :superemoji: Süper İnsanlar
-rol superemoji everyone
-rol :superemoji: kaldır`)
.addField('Kısaltmalar', `-rol`)
.setFooter(message.author.username+' tarafından istendi.', message.author.avatarURL({ dynamic: true })));

if(args[1] === 'kaldır' || args[1] === 'everyone') {

  let emoji = client.emojis.cache.find(x => (x.animated ? `<a:${x.id}:${x.name}:` : `<:${x.name}:${x.id}>`) === args[0]) || client.emojis.cache.find(x => x.name.toLowerCase(args[0]));
  message.channel.send(`Belirtiğiniz ${client.emojis.cache.get(emoji.id)} (\`${emoji.name}\`) emojisi artık herkes tarafından kullanılabilir.`);
  return emoji.edit({ roles: [message.guild.roles.cache.find(a => a.name === '@everyone')], });

} else {

  if(!message.guild.roles.cache.find(a => a.name === args[1])) return message.channel.send(`Rol bulunamadı. Lütfen rol adının **Büyük-Küçük harflere** duyarlı olduğunu unutmayın, rolün adını tam olarak doğru yazmalısınız. Örnek kullanım: \`--rol :emoji: rol/kaldır\``)
  let emoji = client.emojis.cache.find(x => (x.animated ? `<a:${x.id}:${x.name}:` : `<:${x.name}:${x.id}>`) === args[0]) || client.emojis.cache.find(x => x.name.toLowerCase(args[0]));
  message.channel.send(`Bu emoji (\`${emoji.name}\`) artık sadece \`${args[1]}\` rolüne sahip olanlar tarafından kullanılabilir.`);
  return emoji.edit({ roles: [message.guild.roles.cache.find(a => a.name === args[1])], });

};


}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'rol',
  namee: 'role'
};