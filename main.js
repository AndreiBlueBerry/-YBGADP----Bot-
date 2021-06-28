const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '^';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('este online');
    client.user.setActivity('Salut', {type: 'PLAYING'}).catch(console.error)
});

client.on('message', message => {

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    } else if (command == 'hello'){
         message.channel.send('Noroc!');
    } else if(command == 'server'){
        client.commands.get('server').execute(message, args, Discord);
    } else if(command == 'help'){
        client.commands.get('help').execute(message, args, Discord);
    } else if (command == 'discord'){
        client.commands.get('discord').execute(message, args, Discord);
    }

          
      


});    

client.login('PUT HERE TOKEN');