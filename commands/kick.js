const Discord = require('discord.js')

module.exports = {
    name: 'kick',
    description: 'Kickea al mencionado.',
    permissions: 'ADMINISTRATOR',
    usage: '.kick <miembro>',
    async execute(message, args) {
        const member = message.mentions.members.first();

        var reason = args.slice(1).join(' ');

        if (!message.member.hasPermission(this.permissions)) return message.reply("No tienes permiso para hacer esto");

        if (!member) return message.reply("No se ha especificado un usuario");

        if (!member.kickable) return message.reply("No se ha podido expulsar al usuario <@!" + member + ">");

        if (!reason) reason = "No reason";

        await member.kick(reason)
            .catch(error => message.reply(`${message.author} Error: ${error}`));

        var embedKick = new Discord.MessageEmbed()
            .setDescription(':warning: ' + `${member.user.username} ha sido kickeado.`);

        let embedPrivateKick = new Discord.MessageEmbed()
            .setDescription(':imp: ' + 'Has sido kickeado de **' + message.guild.name + '**. Motivo: `' + reason + '`.');

        message.channel.send(embedKick);

        member.send(embedPrivateKick);

    },
};