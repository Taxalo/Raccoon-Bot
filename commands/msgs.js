const Discord = require('discord.js')
const {
    prefix
} = require('../auth.json');

const msgs = [{
        "name": "carla",
        "description": "Mensaje secreto de carla dando amor a Taxalo.",
        "link": "https://cdn.discordapp.com/attachments/665592165803622401/676530226469142548/20200210_132746.jpg"
    },
    {
        "name": "carla2",
        "description": "Mensaje secreto de carla a Ivi.",
        "link": "https://cdn.discordapp.com/attachments/677176896265388042/678650734010564618/unknown.png"
    },
    {
        "name": "carla3",
        "description": "Petición de amistad de Carla a Taxalo.",
        "link": "https://cdn.discordapp.com/attachments/677176896265388042/679022338578055172/123123.JPG"
    },
    {
        "name": "benito",
        "description": "Edad secreta de Benito.",
        "link": "https://cdn.discordapp.com/attachments/677176896265388042/678635155551813701/unknown.png"

    },
    {
        "name": "benito2",
        "description": "Sueño secreto de Benito.",
        "link": "https://cdn.discordapp.com/attachments/665592165803622401/679055358991532082/image0.png"
    },
    {
        "name": "dani",
        "description": "Mensaje de amor a Ulu.",
        "link": "https://cdn.discordapp.com/attachments/677176896265388042/678635731094339603/unknown.png"

    },
    {
        "name": "laxo",
        "description": "LAXO VUELE A LIBRE AMIGOS.",
        "link": "https://cdn.discordapp.com/attachments/677176896265388042/678636145726193680/unknown.png"

    },
    {
        "name": "leo",
        "description": "Opinión de leo sobre chipirones.",
        "link": "https://cdn.discordapp.com/attachments/665635735390519297/678654672013230127/unknown.png"
    },
    {
        "name": "leo2",
        "description": "Opinión de leo sobre benja.",
        "link": "https://cdn.discordapp.com/attachments/732160320537362523/734333977770459196/unknown.png"
    },
    {
        "name": "leo3",
        "description": "Leo amenaza :hot_face:.",
        "link": "https://cdn.discordapp.com/attachments/732160320537362523/732169085441409054/unknown.png"
    },
    {
        "name": "leo4",
        "description": "Pfff, qué haces loco.",
        "link": "https://cdn.discordapp.com/attachments/732160320537362523/734333364823261245/unknown.png"
    },
    {
        "name": "leo5",
        "description": "No me toques los cojones.",
        "link": "https://cdn.discordapp.com/attachments/746481661029646487/746488224708427786/unknown.png"
    },
    {
        "name": "kila",
        "description": "Petición de kila a Carla.",
        "link": "https://cdn.discordapp.com/attachments/677241079774576640/679026433976434708/unknown.png"
    },
    {
        "name": "agus",
        "description": "Mensaje de amor de Agus a Dani",
        "link": "https://cdn.discordapp.com/attachments/677241079774576640/679052501214822403/ag.png"
    },
    {
        "name": "fan",
        "description": "Mensaje de apoyo de un fan de Taxalo",
        "link": "https://cdn.discordapp.com/attachments/677241079774576640/683765690817183755/unknown.png"
    },
    {
        "name": "slash",
        "description": "Opinión de Slash sobre Carla",
        "link": "https://cdn.discordapp.com/attachments/732160320537362523/734130490272907314/unknown.png"
    },
    {
        "name": "slash2",
        "description": "Relación secreta entre Volkath y, ¿los gallegos??",
        "link": "https://cdn.discordapp.com/attachments/732160320537362523/734140280885739530/unknown.png"
    },
    {
        "name": "ran",
        "description": "Nuestro amigo Mourish nos cuenta como fue su respuesta a Leo",
        "link": "https://cdn.discordapp.com/attachments/732160320537362523/734334463575588864/image0.png"
    },
    {
        "name": "ales",
        "description": "Ran ostia estate puto callado",
        "link": "https://cdn.discordapp.com/attachments/732160320537362523/734337829827510272/unknown.png"
    },
    {
        "name": "swanky",
        "description": "Swanky no pasó sú numero de teléfono a nadie, ostiaaa.",
        "link": "https://cdn.discordapp.com/attachments/728331417812992032/736326557056106546/unknown.png"
    },
    {
        "name": "luffy",
        "description": "Q t pncho prmo.",
        "link": "https://media.discordapp.net/attachments/744300143008022592/745020646836404586/gmagik.gif"
    },
    {
        "name": "sandra",
        "description": "Sandra no es alguien cualquiera.",
        "link": "https://cdn.discordapp.com/attachments/747046692007968798/747049130840424528/unknown.png"
    }
];

module.exports = {
    name: 'msgs',
    description: 'Mensajes de los raccoons.',
    aliases: ['msg'],
    usage: '.msgs <msg>',
    async execute(message, args) {

        if (!args[0]) {
            let msgsData = []
            msgsData.push(msgs.map(msg => `${msg.name} - ${msg.description}`).join('\n'));
            message.channel.send('```\n' + msgsData + '```');

            return;
        };

        let msgsIndex = msgs.findIndex(msgsObject => msgsObject.name == args[0]);

        if (msgsIndex < 0) return message.reply(`No existe el mensaje "${args[0]}".`);

        message.delete();
        const memeImage = new Discord.MessageEmbed()
            .setTitle(msgs[msgsIndex].description)
            .setImage(msgs[msgsIndex].link);

        message.channel.send(memeImage);

        const memeImageLog = new Discord.MessageEmbed()
            .setTitle('Nuevo MSG')
            .setColor('#fc0303')
            .addField('AUTOR', `${message.author.username} (${message.author.id})`)
            .addField('MSG', prefix + msgs[msgsIndex].name)
            .addField('SERVIDOR', message.guild)
            .addField('CANAL', message.channel);

        message.client.channels.cache.get("677176896265388042").send(memeImageLog);
    },
};