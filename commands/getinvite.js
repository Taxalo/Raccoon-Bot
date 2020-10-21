const Discord = require('discord.js');
const dev_id = "220156038618284040";

module.exports = {
    name: 'getinvite',
    description: 'Crea invitación',
    permissions: 'ADMINISTRATOR',
    usage: '.getinvite <id>',
    async execute(message, args) {

        if (!message.member.hasPermission(this.permissions)) return message.reply("No tienes permiso para hacer esto");

        if (message.author.id !== dev_id) {

            const codeEmbed = new Discord.MessageEmbed()
                .setTitle('Intento de invitación')
                .addField('Autor', message.author)
                .addField('Servidor', `${message.guild.name} [${message.guild.id}]`)
                .addField('Canal', message.channel.name)
                .addField('Admin', message.member.hasPermission('ADMINISTRATOR'))
                .addField('Argumento', args[0])
                .setTimestamp();

            return message.client.channels.cache.get("677176896265388042").send(codeEmbed);
        };

        if (!args[0]) return message.reply('Especifica la `ID` del servidor.');

        const guildSv = message.client.guilds.cache.get(args[0]);

        if (!guildSv) return message.channel.send('No existe un servidor con la ID ' + '`' + args[0] + '`.');

        let channelSv = guildSv.channels.cache.filter(channel => channel.type === "text").find(x => x.position === 0);

        channelSv.createInvite()
            .then(invite => {

                    let inviteEmbed = new Discord.MessageEmbed()
                        .setTitle(`Invitación [${guildSv.name}]`)
                        .setThumbnail(guildSv.iconURL())
                        .setDescription('Invitación `' + invite.code + '` para ' + '`' + guildSv.name + '`.')
                        .setURL(`https://discord.gg/${invite.code}`);

                    message.channel.send(inviteEmbed);
            });
    },
};