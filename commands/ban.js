const Discord = require('discord.js')

module.exports = {
    name: 'ban',
    description: 'Banea al mencionado.',
    permissions: 'ADMINISTRATOR',
    usage: '.ban <miembro>',
    async execute(message, args) {
        const member = message.mentions.members.first();

        var reason = args.slice(1).join(' ');

        if (!message.member.hasPermission(this.permissions)) return message.reply("No tienes permiso para hacer esto");

        if (!member) return message.reply("Menciona a un miembro en el mensaje");

        if (!member.bannable) return message.reply("No se ha podido banear al usuario <@!" + member + ">");

        if (!reason) reason = "No reason";

        await member.ban({
            reason: reason
        }).catch(error => message.reply(` ${message.author} Error: ${error}`));

        let embedBan = new Discord.MessageEmbed()
            .setDescription(':hourglass:' + ' ' + `**${member.user.username}** has been banned from the server.`);

        let embedPrivateBan = new Discord.MessageEmbed()
            .setDescription(':imp: ' + 'Has sido baneado de **' + message.guild.name + '**. Motivo: `' + reason + '`.');

        message.channel.send(embedBan);

        member.send(embedPrivateBan);
    },
};