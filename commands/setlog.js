const Discord = require('discord.js');
const Guild = require('../mod/guild.js');

module.exports = {
    name: 'setlog',
    description: 'Especifica logChannel.',
    permissions: 'ADMINISTRATOR',
    usage: '.setlog <id canal>',
    async execute(message, args) {

        if (!message.member.hasPermission(this.permissions)) return message.reply("No tienes permiso para hacer esto");

        if (!args[0]) return message.reply(`Especifica la \`ID del canal\`.`);

        const req = await Guild.findOneAndUpdate({
            id: message.guild.id
        }, {
            $set: {
                logParent: args[0]
            }
        }, {
            new: true
        });

        const logEmbed = new Discord.MessageEmbed()
            .setDescription(`Setteado el canal de logs de \`${message.guild.name}\` a \`${req.logParent}\`.`)
            .setFooter('Usa [ move ] para enviar el canal actual a la categoría de logs.', message.client.user.avatarURL());

        message.channel.send(logEmbed);

    },
};