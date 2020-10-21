const Discord = require('discord.js')

module.exports = {
    name: 'invite',
    description: 'Invitación del bot.',
    usage: '.ivnite',
    async execute(message) {

        const messageEmbed = new Discord.MessageEmbed()
            .setDescription(`:sunglasses: | ${message.author.username} checkea tus DMs para invitarme a tu servidor.`);

        await message.author.send('https://discord.com/oauth2/authorize?client_id=668854654578196503&permissions=8&scope=bot');
        message.channel.send(messageEmbed);
    },
};