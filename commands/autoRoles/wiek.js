const Discord = require('discord.js');

module.exports = {
    name: 'wiek',
    description: 'Wysyła embeda button roles',
    usage: '!wiek',
    execute: async(message, args) => {
        const lat = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setCustomId('1315')
            .setLabel('13-15')
            .setStyle('SECONDARY'),
            
            new Discord.MessageButton()
            .setCustomId('1617')
            .setLabel('16-17')
            .setStyle('SECONDARY'),
            
            new Discord.MessageButton()
            .setCustomId('1820')
            .setLabel('18-20')
            .setStyle('SECONDARY'),
            
            new Discord.MessageButton()
            .setCustomId('2025')
            .setLabel('20-25+')
            .setStyle('SECONDARY')
        );

        const wiek = new Discord.MessageEmbed()
        .setTitle('<a:yellowarrow:998725687059955834>   𝓦𝓲𝓮𝓴')
        .setDescription('<a:pinkarrow:1001911652498817034> <@&968953332557312060>\n\n<a:greenarrow:1001911654000361492> <@&968953334440554516>\n\n<a:pinkarrow:1001911652498817034> <@&968953337611431956>\n\n<a:greenarrow:1001911654000361492> <@&968953340421636148>')
        .setColor('FFCBC1');

        message.channel.send({ embeds: [wiek], components: [lat] });
    }
}