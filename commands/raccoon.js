module.exports = {
    name: 'raccoon',
    description: 'Imagenes de god raccoons.',
    aliases: ['racoon', 'racon', 'raccon', 'mapache'],
    execute(message) {
        let number = 82;

        let imageNumber = Math.floor(Math.random() * number + 1);

        message.channel.send({
            files: ["./Imagenes/" + imageNumber + ".png"]
        });
    },
};