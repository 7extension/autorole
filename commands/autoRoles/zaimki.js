const Discord = require('discord.js');

module.exports = {
    name: 'zaimki',
    description: 'Wysyła embeda button roles',
    usage: '!zaimki',
    execute: async(message, args) => {
        const zaimkibuttons = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setCustomId('sheher')
            .setLabel('she/her')
            .setStyle('SECONDARY'),
            
            new Discord.MessageButton()
            .setCustomId('hehim')
            .setLabel('he/him')
            .setStyle('SECONDARY'),
            
            new Discord.MessageButton()
            .setCustomId('theythem')
            .setLabel('they/them')
            .setStyle('SECONDARY')
        );

        const zaimkiembed = new Discord.MessageEmbed()
        .setTitle('<a:yellowarrow:998725687059955834>   𝓩𝓪𝓲𝓶𝓴𝓲')
        .setDescription('<a:pinkarrow:1001911652498817034> <@&968953348642459698>\n\n<a:greenarrow:1001911654000361492> <@&968953350349545483>\n\n<a:pinkarrow:1001911652498817034> <@&968953351725264966>')
        .setColor('FFCBC1');

        message.channel.send({ embeds: [zaimkiembed], components: [zaimkibuttons] });
    }
}