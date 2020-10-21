const { DiscordAPIError } = require('discord.js');
const Guild = require('../mod/guild.js')
const {MessageEmbed} = require('discord.js');

module.exports = {
        name: 'move',
        description: 'Reemplaza el canal actual.',
        permissions: 'ADMINISTRATOR',
        async execute(message) {

                const req = await Guild.findOne({id: message.guild.id});

                const logError = new MessageEmbed()
                        .setDescription(':exclamation: Especifica un canal de logueo con `.setlog (id de la categoría)`.');

                if (!req.logParent) return message.channel.send(logError);

                const logparent = req.logParent;

                if (!message.member.hasPermission(this.permissions)) return message.reply("No tienes permiso para hacer esto");

                message.channel.send(":no_mobile_phones:" + "Reemplazando canal  "+ '<#' + message.channel.id + '>' + '...');

                message.channel.clone()
                        .then(newChannel => {
                                newChannel.setPosition(message.channel.position).then( () => {
                                        message.channel.setParent(logparent, {
                                                lockPermissions: true
                                        });
                                });
                        });
        }
};