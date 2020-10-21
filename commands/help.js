const Discord = require('discord.js');
const {
    prefix
} = require('../auth.json');

module.exports = {
    name: 'help',
    description: 'Comando de ayuda.',
    aliases: ['commands'],
    usage: '[command name]',
    execute(message, args) {
        const {
            commands
        } = message.client;

        const helpEmbed = new Discord.MessageEmbed()
            .setFooter('RACCOON BOT', message.client.user.avatarURL())
            .setColor('#ffffdf');

        if (!args.length) {
            
            helpEmbed.setTitle('AYUDA (Comandos)');

            commands.forEach(c => {
                helpEmbed.addField(c.name.toUpperCase(), c.description, true);
            });

            return message.channel.send(helpEmbed);
        };

        const command = commands.get(args[0]) || commands.find(c => c.aliases && c.aliases.includes(args[0]));

        helpEmbed.setTitle(`Ayuda (${command.name})`);

        if (command.aliases) helpEmbed.addField('ALIASES', command.aliases.join(' | '));
        if (command.description) helpEmbed.addField('DESCRIPCIÓN:', command.description);
        if (command.usage) helpEmbed.addField('USO:', command.usage);
        if (command.permissions) helpEmbed.addField('PERMISOS:', command.permissions);

        message.channel.send(helpEmbed);
    },
};