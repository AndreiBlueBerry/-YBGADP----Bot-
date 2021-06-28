module.exports = {
    name: 'discord',
    description: "discord",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#961126')
        .setTitle('𝙙𝙞𝙨𝙘𝙤𝙧𝙙')
        .setURL('https://discord.gg/zYxtFNCeSH')
        .setDescription('Discord |')
        .addFields(
            {name:'..', value: `...`}, 
            
            {name:`...`, value: `ᵇʸ ˢᵉʳᵛᵉʳ` }
        )
        .setFooter('by Andrei');
        


          message.channel.send(newEmbed);
        

        
    }


}