module.exports = {
    name: 'discord',
    description: "discord",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#961126')
        .setTitle('πππ¨ππ€π§π')
        .setURL('https://discord.gg/zYxtFNCeSH')
        .setDescription('Discord |')
        .addFields(
            {name:'..', value: `...`}, 
            
            {name:`...`, value: `α΅ΚΈ Λ’α΅Κ³α΅α΅Κ³` }
        )
        .setFooter('by Andrei');
        


          message.channel.send(newEmbed);
        

        
    }


}