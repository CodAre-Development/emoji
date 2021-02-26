const database = require('quick.db');

module.exports = async message => {

  let client = message.client;
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;
  let prefix;
  if(database.fetch(`prefix.${message.guild.id}`)) {
    prefix = database.fetch(`prefix.${message.guild.id}`);
  } else {
    prefix = client.config.prefix;
  }
  if (message.content.startsWith(prefix)) {
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }

  if (cmd) {
    if(perms < cmd.conf.permLevel) return;

    if(message.author.id !== client.config.sahip) {
    const d = database.fetch(`dat.${message.author.id}`);
    if(d && d > Date.now()) {
      if(database.fetch(`ik.${message.author.id}`)) return;
      database.set(`ik.${message.author.id}`, true);
      database.set(`k.${message.author.id}`, Date.now()+5000);
      setTimeout(() => {
        database.delete(`ik.${message.author.id}`);
        database.delete(`k.${message.author.id}`);
       }, 5000);
      return message.channel.send(`🛑 You're on cooldown — To remove this limit entirely, consider getting premium: -premium.

Bekleme süresindesiniz — Premium alarak bu sınırı kaldırabilirsiniz: -premium tr. 🛑`).then(m => m.delete({ timeout: 4000 }));

    };

    database.set(`dat.${message.author.id}`, Date.now()+5000);
};
    return cmd.run(client, message, params, perms)
  }
  }

};
