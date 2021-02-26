const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if(!args[0]) return message.channel.send(`Type something so that I can send it back to you with emojis. For example; \`-emojify Hello world!\``);

const mapping = {

  ' ': '   ',

  '0': ':zero:',

  '1': ':one:',

  '2': ':two:',

  '3': ':three:',

  '4': ':four:',

  '5': ':five:',

  '6': ':six:',

  '7': ':seven:',

  '8': ':eight:',

  '9': ':nine:',

  '!': ':grey_exclamation:',

  '?': ':grey_question:',

  '#': ':hash:',

  '*': ':asterisk:'

};



'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {

mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;

});

return message.channel.send(args.join(' ').split('').map(c => mapping[c] || c).join(' '));

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'emojify'
};