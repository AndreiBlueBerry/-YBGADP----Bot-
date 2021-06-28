module.exports = {
    name: 'help',
    description: "help",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#961126')
        .setTitle('ＨＥＬＰ')
        .setURL('')
        .setDescription('PREFIX: ^')
        .addFields(
            {name:'``^server`` > pentru informati despre server', value: `${message.guild.name}`}, 
            
            {name:'``^discord`` > pentru server de discord', value: `ᵇʸ ˢᵉʳᵛᵉʳ` }
        )
        .setFooter('by Andrei');
        


          message.channel.send(newEmbed);
        

        
    }


}