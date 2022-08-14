const Discord = require('discord.js');

module.exports = {
    name: 'plec',
    description: 'Wysyła embeda button roles',
    usage: '!plec',
    execute: async(message, args) => {
        const plec = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setCustomId('dziewczyna')
            .setLabel('Dziewczyna')
            .setStyle('SECONDARY'),
            
            new Discord.MessageButton()
            .setCustomId('chlopak')
            .setLabel('Chlopak')
            .setStyle('SECONDARY')
        );

        const nwm = new Discord.MessageEmbed()
        .setTitle('<a:yellowarrow:998725687059955834>   𝓟𝓵𝓮𝓬')
        .setDescription('<a:pinkarrow:1001911652498817034> <@&968953345815511060>\n\n<a:greenarrow:1001911654000361492> <@&968953346503360514>')
        .setColor('FFCBC1');

        message.channel.send({ embeds: [nwm], components: [plec] });
    }
}