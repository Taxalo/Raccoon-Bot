const fs = require('fs');
const Discord = require('discord.js');
const discordAuth = require('./auth.json');
const Guild = require('./mod/guild.js');
const mongoose = require('mongoose');

var client = new Discord.Client();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {

    console.log('\n', "Logeado como \x1b[33m" + `${client.user.tag}!`);

    client.user.setActivity('raccoons eating cachopos', {
        type: 'WATCHING'
    });

});

client.on("message", async message => {

    if (!message.guild) return;

    const req = await Guild.findOne({
        id: message.guild.id
    });

    if (!req) {
        const newGuild = new Guild({
            id: message.guild.id,
            name: message.guild.name
        });
        await newGuild.save();

        if (message.content.startsWith('.')) return message.reply(`Debido a que no había un prefijo especificado se ha especificado el prefijo a \`.\` | No se ha ejecutado el comando.\n Puedes especificar el prefijo para tu servidor con \`.setprefix <prefijo>\``);

        return;
    };

    const prefix = req.prefix;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!message.content.startsWith(prefix) | (message.author.bot) | (message.content.indexOf(prefix) !== 0)) return;

    const command = client.commands.get(commandName) ||
        client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
    };
});

client.on('guildCreate', async guild => {

    const newGuild = new Guild({
        id: guild.id,
        name: guild.name
    });

    await newGuild.save();

});

client.on('guildDelete', async guild => {

    const findGuild = await Guild.findOneAndRemove({
        id: guild.id
    });

});

mongoose.connect('', {
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => client.login(discordAuth.token));