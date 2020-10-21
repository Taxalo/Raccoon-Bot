const Discord = require('discord.js');
const parecido = ' se parece a ';

var diputado = [
    "Pedro Sánchez",
    "Pablo Iglesias",
    "Rocio de Meer",
    "Santiago Abascal",
    "Maria Irene Montero",
    "Alberto Rodriguez",
    "Pablo Amador",
    "Adriana Lastra",
    "Carmen Calvo",
    "Iván Espinosa de los Monteros",
    "Pablo Bellido",
    "Mariano Rajoy",
    "Pablo Casado",
    "Nestor Rego",
    "Tomas Guitarte",
    "El montoro de los cojones",
    "cualquier podemita de mierda"
];

module.exports = {
    name: 'diputado',
    description: '¿Qué diputado eres?',
    aliases: ['quesoy', 'quediputadosoy', 'vox', 'partido'],
    execute(message) {

        nDiputado = Math.floor(Math.random() * (diputado.length - 0) + 0);

        var diputadoEmbed = new Discord.MessageEmbed()
        .setColor('#e37f7f')
        .addField(':ballot_box_with_check: **Análisis terminado**', '<@' + message.author + '>' + parecido + diputado[nDiputado] + '.')

        message.channel.send(diputadoEmbed);

    },
};