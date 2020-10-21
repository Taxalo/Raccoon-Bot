module.exports = {
    name: 'purge',
    description: 'Aspiradora de mensajes.',
    permissions: 'ADMINISTRATOR',
    usage: '.purge <cantidad>',
    async execute(message, args) {

        let deleteCount = parseInt(args[0], 10);

        if (!message.member.hasPermission(this.permissions)) return message.reply("No tienes permiso para hacer esto");

        if (!deleteCount | deleteCount < 2 | deleteCount > 200) return message.reply("Número del 2 al 200");

        let fetched = await message.channel.messages.fetch({
            limit: deleteCount
        });

        message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`Los mensajes no han podido ser borrados, motivo: ${error}`));
    },
};