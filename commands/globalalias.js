module.exports = {
    name: 'globalalias',
    description: 'Alias global',
    permissions: 'ADMINISTRATOR',
    async execute(message, args) {

        if (!message.member.hasPermission(this.permissions)) return;

        var interval = 27500;
        var pmise = Promise.resolve();

        message.guild.members.cache.forEach(c => {

            pmise = pmise.then(function () {

                c.setNickname(args[0]);
                console.log(`${c} alias ${args[0]}`);

                return new Promise(function (resolve) {
                    setTimeout(resolve, interval);
                });
            });
        });
    },
};