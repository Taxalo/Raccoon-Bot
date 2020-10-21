const Discord = require('discord.js');
const dev_id = "220156038618284040";

module.exports = {
    name: 'stats',
    description: 'Stats del dios Raccoon.',
    usage: '.stats <here/servers>',
    execute(message, args) {
        switch (args[0]) {
            case undefined:

                var statsEmbedNow = new Discord.MessageEmbed()
                    .setTitle('Server INFO')
                    .addField('Dueño', '`' + message.guild.owner.user.username + '`')
                    .addField('Usuarios', '`' + message.guild.memberCount + '`')
                    .addField('Creación', '`' + message.guild.createdAt + '`')
                    .addField('Region', '`' + message.guild.region + '`');

                message.channel.send(statsEmbedNow);

                break;
            case 'total':

                var data = {
                    users: [],
                    servers: []
                };

                message.client.guilds.cache.forEach((guild) => {
                    data.users.push(guild.memberCount);
                    data.servers.push(guild.name);
                });

                let statsEmbed = new Discord.MessageEmbed()
                    .addField('**Usuarios** totales:', data.users.reduce((a, b) => a + b, 0))
                    .addField('**Servidores** totales:', data.users.length)
                    .setColor('#ffd396')
                    .setFooter('Raccoon Bot', message.client.user.avatarURL());

                message.channel.send(statsEmbed);

                break;
            default:

                if (message.author.id !== dev_id) return message.reply('No tienes permisos para usar esto.')

                let serverEmbed = new Discord.MessageEmbed()
                    .setColor('#d9ba91');

                let errorMessage = new Discord.MessageEmbed()
                    .setColor('#8a111b')
                    .setDescription(`:interrobang: No se ha podido encontrar un servidor con el nombre/id: ` + '`' + args[0] + '`');

                const clearedGuild = message.client.guilds.cache.filter(g => g.name.toLowerCase().includes(args[0].toLowerCase()) || g.id.includes(args[0]));

                if (clearedGuild.size >= 2) {

                    let servers = [];

                    clearedGuild.forEach(c => {
                        servers.push(c.name + ' `[' + c.id + ']`');
                    });

                    serverEmbed.setTitle('ERROR');
                    serverEmbed.setDescription('Hay más de 1 servidor que contiene `' + args[0] + '`:' + '\n' + servers.join('\n'));
                    serverEmbed.setFooter('Especifica el servidor con .stats <serverID>', message.client.user.avatarURL());

                    return message.channel.send(serverEmbed);

                };

                clearedGuild.map(m => {
                    serverEmbed.setTitle(`Servidor "${m.name} [${m.id}]"`);
                    serverEmbed.addField('Dueño', '`' + m.owner.user.username + '`');
                    serverEmbed.addField('Usuarios', '`' + m.memberCount + '`');
                    serverEmbed.addField('Creación', '`' + m.createdAt + '`');
                    serverEmbed.addField('Region', '`' + m.region + '`');
                });

                if (!serverEmbed.title) return message.channel.send(errorMessage);

                message.channel.send(serverEmbed);

                break;
        };
    },
};

