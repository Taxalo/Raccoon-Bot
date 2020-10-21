const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'avatar',
    description: 'Reenvia avatar de miembro.',
    async execute(message, args) {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        var avatar;
        var avatarMember;

        if (!member && !args[0]) {
            avatar = message.author.avatarURL({
                size: 1024,
                dynamic: true
            });

            avatarMember = message.author.username;

        } else if (args[0] && !member) {
            return message.reply('Especifica un usuario válido.');

        } else {
            avatar = member.user.avatarURL({
                size: 1024,
                dynamic: true
            });

            avatarMember = member.user.username;
        };

        var embedAvatar = new MessageEmbed()
            .setTitle('Avatar de ' + avatarMember)
            .setImage(avatar)
            .setFooter('Generado por ' + message.author.username, message.author.avatarURL());

        message.channel.send(embedAvatar);
    },
};