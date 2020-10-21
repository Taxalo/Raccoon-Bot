const {MessageEmbed} = require("discord.js");

module.exports = {
        name: 'uptime',
        description: 'Uptime del bot',
        execute(message) {

                const uptimeEmbed = new MessageEmbed()
                        .setDescription(`:timer: Raccoon bot ha estado vivo por \`${stohms(message.client.uptime)}\``);

                message.channel.send(uptimeEmbed);
        },
};

function msTransfer(num) {

        num = Number(num / 1000);

        let h = Math.floor(num / 3600);
        let m = Math.floor(num % 3600 / 60);
        let s = Math.floor(num % 3600 % 60);

        let hor = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
        let min = m > 0 ? m + (m == 1 ? " minuto y " : " minutos y ") : "";
        let seg = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";

        return hor + min + seg;
};