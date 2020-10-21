const Discord = require('discord.js');
const dev_id = "220156038618284040";

module.exports = {
    name: 'gay',
    description: '¿Cuan maricón eres?',
    async execute(message) {
        
        let gayNumber = Math.floor(Math.random() * (101 - 0)) + 0;

        if (message.author.id == dev_id) gayNumber = 0;

        if (message.author.id == '734519881940074547' || message.author.id == '457171871591563264' || message.author.id == '619522385800069145' || message.author.id == '705780286696456343' || message.author.id == '454688246350217217') gayNumber = 100; //Tontos

        let gayPerson;

        if (gayNumber == 0) {

            gayPerson = 'Taxalo';

        } else if (gayNumber < 25) {

            gayPerson = 'Alexander';

        } else if (gayNumber < 50) {

            gayPerson = 'Leirro';

        } else if (gayNumber < 75) {

            gayPerson = 'Martin Ruibal';

        } else if (gayNumber <= 100) {
            gayPerson = 'Vidal';
        };

        var embedGay = new Discord.MessageEmbed()
            .setColor('#f542e9')
            .setDescription(':rainbow_flag:  ' + `Eres un **${gayNumber}% gay**. Te pareces un poco a **${gayPerson}**.`);

        message.channel.send(embedGay);
    },
};