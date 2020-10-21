const Discord = require('discord.js');
const Guild = require('../mod/guild.js');


module.exports = {
    name: 'setprefix',
    description: 'Especifica el prefijo.',
    permissions: 'ADMINISTRATOR',
    usage: '.setprefix <prefijo>',
    async execute(message, args) {

        if (!message.member.hasPermission(this.permissions)) return message.reply("No tienes permiso para hacer esto");

        if (!args[0]) return message.reply(`Especifica un \`prefijo\`.`);

        const req = await Guild.findOneAndUpdate({
            id: message.guild.id
        }, {
            $set: {
                prefix: args[0]
            }
        }, {
            new: true
        });

        const prefijoEmbed = new Discord.MessageEmbed()
            .setDescription(`Ahora el prefijo de \`${message.guild.name}\` es \`${req.prefix}\``);

        message.channel.send(prefijoEmbed);

    },
};