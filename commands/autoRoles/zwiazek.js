const Discord = require('discord.js');

module.exports = {
    name: 'zwiazek',
    description: 'Wysyła embeda button roles',
    usage: '!zwiazek',
    execute: async(message, args) => {
        const zwiazekbutton = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setCustomId('zwiazek')
            .setLabel('ᡕᠵ᠊ᡃ࡚ࠢ࠘ ⸝່ࠡࠣ᠊߯᠆ࠣ࠘ᡁࠣ࠘᠊᠊ࠢ࠘𐡏~♡')
            .setStyle('SECONDARY'),

            new Discord.MessageButton()
            .setCustomId('zrywamelo')
            .setLabel('ʕ⁎̯͡⁎ʔ༄')
            .setStyle('SECONDARY')
        );

        const zwiazekembed = new Discord.MessageEmbed()
        .setTitle('<a:yellowarrow:998725687059955834>   𝓢𝓽𝓪𝓽𝓾𝓼 𝔃𝔀𝓲𝓪𝔃𝓴𝓾')
        .setDescription('<a:pinkarrow:1001911652498817034> <@&968953352799019098> - W związku\n\n<a:greenarrow:1001911654000361492> <@&968953356049580132> - Samotniak')
        .setColor('FFCBC1');

        message.channel.send({ embeds: [zwiazekembed], components: [zwiazekbutton] });
    }
}