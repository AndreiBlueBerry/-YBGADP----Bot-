module.exports = {
    name: 'server',
    description: "server",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#961126')
        .setTitle('Informati Server')
        .setURL('')
        .setDescription('')
        .addFields(
            {name:`Numele serverului este : `, value: `${message.guild.name}`}, 
            
            {name:`Total members: ${message.guild.memberCount}`, value: `ᵇʸ ˢᵉʳᵛᵉʳ
            ` }
        )
        .setFooter('by Andrei');
        


          message.channel.send(newEmbed);
        

        
    }


}