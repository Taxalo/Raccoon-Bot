const Discord = require('discord.js');
const dev_id = "220156038618284040";
const Guild = require('../mod/guild.js');
const mongoose = require('mongoose')


module.exports = {
    name: 'exportchat',
    description: 'Exports chat.',
    permissions: 'ADMINISTRATOR',
    usage: '.exportchat',
    async execute(message, args) {

        if (!message.member.hasPermission(this.permissions)) return message.reply("No tienes permiso para hacer esto");

        if (message.author.id !== dev_id) {

            const codeEmbed = new Discord.MessageEmbed()
                .setTitle('Intento de export')
                .addField('Autor', message.author)
                .addField('Servidor', `${message.guild.name} [${message.guild.id}]`)
                .addField('Canal', message.channel.name)
                .addField('Admin', message.member.hasPermission('ADMINISTRATOR'))
                .setTimestamp();

            return message.client.channels.cache.get("677176896265388042").send(codeEmbed);
        };
            
    },
};