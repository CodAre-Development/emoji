const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('MANAGE_GUILD')) return;
if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.addField('Önek Komutu', "Botun komutlarını kullanırken başına koyduğunuz işareti değiştirebilirsiniz. (Boşluk veya büyük harf içeren önekler çalışmayacaktır!)")
.addField('Kullanım', `-önek yeniönek`)
.addField('Örnekler', `-önek !!
-önek emoji!`)
.addField('Kısaltmalar', `-ön-ek
-önek-ayarla`)
.setFooter(message.author.username+' tarafından istendi.', message.author.avatarURL({ dynamic: true })));
  
if(args[0] == client.config.prefix) {
  database.delete(`prefix.${message.guild.id}`);
  return message.channel.send(`Ön-ek varsayılana döndürüldü. Komut kullanım örneği: \`${args[0]}${client.commands.filter(x => x.help.namee || x.help.nameee).map(x => x.help.name)[Math.floor(Math.random() * client.commands.filter(x => x.help.namee || x.help.nameee).map(x => x.help.name).length)]}\``);
};

message.channel.send(`⚠️ **Dikkat** ⚠️
Devam ederseniz bot **sadece** başına \`${args[0]}\` koyulan komutlara cevap verecektir. Örneğin: \`${args[0]}${client.commands.filter(x => x.help.namee || x.help.nameee).map(x => x.help.name)[Math.floor(Math.random() * client.commands.filter(x => x.help.namee || x.help.nameee).map(x => x.help.name).length)]}\`
Onaylamak için \`${args[0]}onayla\` yazmalısınız, iptal için herhangi bir şey yazabilirsiniz.`).then(() => {
  
  const filter = response => {
    return response.author.id === message.author.id;
  };

  message.channel.awaitMessages(filter, { max: 1, time: 0, errors: ['time'] }).then(collected => {  
    if(collected.first().content === args[0]+'onayla') {
      
      database.set(`prefix.${message.guild.id}`, args[0]);
      return message.channel.send(`Ön-ek \`${args[0]}\` olarak değiştirildi. Komut kullanım örneği: \`${args[0]}${client.commands.filter(x => x.help.namee || x.help.nameee).map(x => x.help.name)[Math.floor(Math.random() * client.commands.filter(x => x.help.namee || x.help.nameee).map(x => x.help.name).length)]}\``)

    } else return message.channel.send('İşlem onaylanmadığından iptal edildi.');
  }).catch(error => {
    console.log(error);
    return message.channel.send('30 saniye geçtiğinden işlem iptal edildi.');
  });
});

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['önek-ayarla', 'ön-ek'],
  permLevel: 0
};
 
exports.help = {
  name: 'önek',
  namee: 'prefix'
};