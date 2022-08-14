const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

    for(const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

const prefix = '!';

client.once('ready', () =>
{
    console.log('Bot jest online');
});

client.on('messageCreate', async message =>
{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if(!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Ta komenda nie działa');
    }
});

client.on('interactionCreate', async interaction => {
    if(interaction.customId == 'greenleaf') {
        const roleId = '994715367303819344';
        const role = interaction.guild.roles.cache.get(roleId);

        if(interaction.member.roles.cache.has(roleId)) {
            await interaction.member.roles.remove(role);
            await interaction.reply({ content: `Usunięto rolę <@&${roleId}>`, ephemeral: true });
        } else {
            await interaction.member.roles.add(roleId);
            await interaction.reply({ content: `Dodano rolę <@&${roleId}>`, ephemeral: true });
        }

        // await interaction.deferUpdate();
    }

    if(interaction.customId == 'sunbeams') {
        const roleId = '994715339701100654';
        const role = interaction.guild.roles.cache.get(roleId);

        if(interaction.member.roles.cache.has(roleId)) {
            await interaction.member.roles.remove(role);
            await interaction.reply({ content: `Usunięto rolę <@&${roleId}>`, ephemeral: true });
        } else {
            await interaction.member.roles.add(roleId);
            await interaction.reply({ content: `Dodano rolę <@&${roleId}>`, ephemeral: true });
        }

        // await interaction.deferUpdate();
    }

    if(interaction.customId == 'cupidkiss') {
        const roleId = '994715185732395039';
        const role = interaction.guild.roles.cache.get(roleId);

        if(interaction.member.roles.cache.has(roleId)) {
            await interaction.member.roles.remove(role);
            await interaction.reply({ content: `Usunięto rolę <@&${roleId}>`, ephemeral: true });
        } else {
            await interaction.member.roles.add(roleId);
            await interaction.reply({ content: `Dodano rolę <@&${roleId}>`, ephemeral: true });
        }

        // await interaction.deferUpdate();
    }

    if(interaction.customId == 'usagidokis') {
        const roleId = '994705917729845289';
        const role = interaction.guild.roles.cache.get(roleId);

        if(interaction.member.roles.cache.has(roleId)) {
            await interaction.member.roles.remove(role);
            await interaction.reply({ content: `Usunięto rolę <@&${roleId}>`, ephemeral: true });
        } else {
            await interaction.member.roles.add(roleId);
            await interaction.reply({ content: `Dodano rolę <@&${roleId}>`, ephemeral: true });
        }

        // await interaction.deferUpdate();
    }

    if(interaction.customId == 'calmwind') {
        const roleId = '994715412866551931';
        const role = interaction.guild.roles.cache.get(roleId);

        if(interaction.member.roles.cache.has(roleId)) {
            await interaction.member.roles.remove(role);
            await interaction.reply({ content: `Usunięto rolę <@&${roleId}>`, ephemeral: true });
        } else {
            await interaction.member.roles.add(roleId);
            await interaction.reply({ content: `Dodano rolę <@&${roleId}>`, ephemeral: true });
        }

        // await interaction.deferUpdate();
    }

    if(interaction.customId == '1315') {
        const roleId = '968953332557312060';
        const role = interaction.guild.roles.cache.get(roleId);

        if(interaction.member.roles.cache.has(roleId)) {
            await interaction.member.roles.remove(role);
            await interaction.reply({ content: `Usunięto rolę <@&${roleId}>`, ephemeral: true });
        } else {
            await interaction.member.roles.add(roleId);
            await interaction.reply({ content: `Dodano rolę <@&${roleId}>`, ephemeral: true });
        }

        // await interaction.deferUpdate();
    }

    if(interaction.customId == '1617') {
        const roleId = '968953334440554516';
        const role = interaction.guild.roles.cache.get(roleId);

        if(interaction.member.roles.cache.has(roleId)) {
            await interaction.member.roles.remove(role);
            await interaction.reply({ content: `Usunięto rolę <@&${roleId}>`, ephemeral: true });
        } else {
            await interaction.member.roles.add(roleId);
            await interaction.reply({ content: `Dodano rolę <@&${roleId}>`, ephemeral: true });
        }

        // await interaction.deferUpdate();
    }

    if(interaction.customId == '1820') {
        const roleId = '968953337611431956';
        const role = interaction.guild.roles.cache.get(roleId);

        if(interaction.member.roles.cache.has(roleId)) {
            await interaction.member.roles.remove(role);
            await interaction.reply({ content: `Usunięto rolę <@&${roleId}>`, ephemeral: true });
        } else {
            await interaction.member.roles.add(roleId);
            await interaction.reply({ content: `Dodano rolę <@&${roleId}>`, ephemeral: true });
        }

        // await interaction.deferUpdate();
    }

    if(interaction.customId == '2025') {
        const roleId = '968953340421636148';
        const role = interaction.guild.roles.cache.get(roleId);

        if(interaction.member.roles.cache.has(roleId)) {
            await interaction.member.roles.remove(role);
            await interaction.reply({ content: `Usunięto rolę <@&${roleId}>`, ephemeral: true });
        } else {
            await interaction.member.roles.add(roleId);
            await interaction.reply({ content: `Dodano rolę <@&${roleId}>`, ephemeral: true });
        }

        // await interaction.deferUpdate();
    }

    if(interaction.customId == 'dziewczyna') {
        const roleId = '968953345815511060';
        const role = interaction.guild.roles.cache.get(roleId);

        if(interaction.member.roles.cache.has(roleId)) {
            await interaction.member.roles.remove(role);
            await interaction.reply({ content: `Usunięto rolę <@&${roleId}>`, ephemeral: true });
        } else {
            await interaction.member.roles.add(roleId);
            await interaction.reply({ content: `Dodano rolę <@&${roleId}>`, ephemeral: true });
        }

        // await interaction.deferUpdate();
    }

    if(interaction.customId == 'chlopak') {
        const roleId = '968953346503360514';
        const role = interaction.guild.roles.cache.get(roleId);

        if(interaction.member.roles.cache.has(roleId)) {
            await interaction.member.roles.remove(role);
            await interaction.reply({ content: `Usunięto rolę <@&${roleId}>`, ephemeral: true });
        } else {
            await interaction.member.roles.add(roleId);
            await interaction.reply({ content: `Dodano rolę <@&${roleId}>`, ephemeral: true });
        }

        // await interaction.deferUpdate();
    }

    if(interaction.customId == 'sheher') {
        const roleId = '968953348642459698';
        const role = interaction.guild.roles.cache.get(roleId);

        if(interaction.member.roles.cache.has(roleId)) {
            await interaction.member.roles.remove(role);
            await interaction.reply({ content: `Usunięto rolę <@&${roleId}>`, ephemeral: true });
        } else {
            await interaction.member.roles.add(roleId);
            await interaction.reply({ content: `Dodano rolę <@&${roleId}>`, ephemeral: true });
        }

        // await interaction.deferUpdate();
    }

    if(interaction.customId == 'hehim') {
        const roleId = '968953350349545483';
        const role = interaction.guild.roles.cache.get(roleId);

        if(interaction.member.roles.cache.has(roleId)) {
            await interaction.member.roles.remove(role);
            await interaction.reply({ content: `Usunięto rolę <@&${roleId}>`, ephemeral: true });
        } else {
            await interaction.member.roles.add(roleId);
            await interaction.reply({ content: `Dodano rolę <@&${roleId}>`, ephemeral: true });
        }

        // await interaction.deferUpdate();
    }

    if(interaction.customId == 'theythem') {
        const roleId = '968953351725264966';
        const role = interaction.guild.roles.cache.get(roleId);

        if(interaction.member.roles.cache.has(roleId)) {
            await interaction.member.roles.remove(role);
            await interaction.reply({ content: `Usunięto rolę <@&${roleId}>`, ephemeral: true });
        } else {
            await interaction.member.roles.add(roleId);
            await interaction.reply({ content: `Dodano rolę <@&${roleId}>`, ephemeral: true });
        }

        // await interaction.deferUpdate();
    }

    if(interaction.customId == 'zwiazek') {
        const roleId = '968953352799019098';
        const role = interaction.guild.roles.cache.get(roleId);

        if(interaction.member.roles.cache.has(roleId)) {
            await interaction.member.roles.remove(role);
            await interaction.reply({ content: `Usunięto rolę <@&${roleId}>`, ephemeral: true });
        } else {
            await interaction.member.roles.add(roleId);
            await interaction.reply({ content: `Dodano rolę <@&${roleId}>`, ephemeral: true });
        }

        // await interaction.deferUpdate();
    }

    if(interaction.customId == 'zrywamelo') {
        const roleId = '968953356049580132';
        const role = interaction.guild.roles.cache.get(roleId);

        if(interaction.member.roles.cache.has(roleId)) {
            await interaction.member.roles.remove(role);
            await interaction.reply({ content: `Usunięto rolę <@&${roleId}>`, ephemeral: true });
        } else {
            await interaction.member.roles.add(roleId);
            await interaction.reply({ content: `Dodano rolę <@&${roleId}>`, ephemeral: true });
        }

        // await interaction.deferUpdate();
    }
    
});

client.login('topkn');