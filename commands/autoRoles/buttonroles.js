const Discord = require('discord.js');

module.exports = {
    name: 'buttonroles',
    description: 'Wysyła embeda button roles',
    usage: '!buttonroles',
    execute: async(message, args) => {
        const buttons = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setCustomId('greenleaf')
            .setLabel('Green Leaf')
            .setStyle('SECONDARY'),

            new Discord.MessageButton()
            .setCustomId('sunbeams')
            .setLabel('Sun Beams')
            .setStyle('SECONDARY'),

            new Discord.MessageButton()
            .setCustomId('cupidkiss')
            .setLabel('Cupid Kiss')
            .setStyle('SECONDARY'),
            
            new Discord.MessageButton()
            .setCustomId('usagidokis')
            .setLabel('Usagi Dokis')
            .setStyle('SECONDARY'),
            
            new Discord.MessageButton()
            .setCustomId('calmwind')
            .setLabel('Calm Wind')
            .setStyle('SECONDARY'),
        );

        const kolor = new Discord.MessageEmbed()
        .setTitle('<a:yellowarrow:998725687059955834>   𝒦𝑜𝓁𝑜𝓇')
        .setDescription('<a:greenarrow:1001911654000361492> <@&994715367303819344>\n\n<a:pinkarrow:1001911652498817034> <@&994715339701100654>\n\n<a:greenarrow:1001911654000361492> <@&994715185732395039>\n\n<a:pinkarrow:1001911652498817034> <@&994705917729845289>\n\n<a:greenarrow:1001911654000361492> <@&994715412866551931>')
        .setColor('FFCBC1');

        message.channel.send({ embeds: [kolor], components: [buttons] });
    }
}