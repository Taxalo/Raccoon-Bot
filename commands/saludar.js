const Discord = require('discord.js');

var sorpresas = ["Me cago en tu puta vida niño con down.", //1
    "Deja de llamarme, pedazo subnormal que respira por la boca.", //2
    "Más tonto y no naces gordo anoréxico.", //3
    "¿Te he dicho alguna vez que tienes un retraso tan grande como la cabeza de un buho? - Pues ahora te lo digo retrasado.", //4
    "Huelo a un subnormal cerca, CREO QUE ES EL QUE ME ACABA DE SALUDAR.", //5
    "Pobre niño hypebeast, me ha saludado y he pasado de él, puto pringado.", //6
    "Las ganas que tengo de meterte un bastón en el culo son más grandes que los coches que han quemado los indepes.", //7
    "El piso está bueno, y por eso eres tan puto anormal que lo vas a chupar con la lengua para ver si pillas el coronavirus, gilipollas.", //8
    "Eres el típico gilipollas que se bebería una botella de alcohol caducada un sábado a las 7:30 de la tarde.", //9
    "Tengo el placer de comunicarte de que ahora mismo hay un equipo de científicos trabajando para determinar si se puede ser más retrasado que tú.", //10
    "Voy a llamar a dalas para que te viole pesao", //11
    "La única indepe que está buena es **@slvtorres**", //12
    "¿Te has planteado trabajar para sacar a tu madre de la prostitución en vez de saludar a un mapache?", //13
    "No hablo con subnormales que no se comen el borde de la pizza.", //14
    "No soy indepe ni facha, pero quemarte vivo sería una manera de manifestar mi opinión sobre ti.", //15
    "No creo en la violencia, pero no creo que pueda dejarte más tonto si te meto un palazo.", //16
    "No tengo nada malo que decir sobre ti salvo la búsqueda de 'Giving a hug to my grandmother with my bigdick' en PornHub.", //17
    "Es increíble que un retrasado como tú que se pierde en el corte inglés haya sido el espermatozoide más rápido..", //18
    "¿Tienes primos?\nClaro, \n**Tus padres.**.", //19
    "A ver si te meten un raquetazo y te conviertes en 160º.", //20
    "Las ganas que tengo de follarte son nulas, igual que tu dignidad.", //21
    "Deberías de linkear tus redes sociales a discord para poder analizar lo antisocial y puto pringado que eres.", //22
    "Te voy a pagar un viaje a Irán mongólico de mierda.", //23
    "¿Te puedes puto callar antisocial de mierda con 2000 horas en el LoL?.", //24
    "Ojalá tener sentimientos para poder llorar de la risa con las pintas que me llevas puto anormal.", //25
    "Voy a convertir chipiron.es en un centro de prostitución de la deep web para venderte ahí hijo de puta.", //26
    "A mi me molará follarme cabras pero a ti te mola que se follen a tu madre.", //27
    "Estoy deseando que haya un atentado y te metan una bomba por el culo para ver si te callas.", //28
    "Puedes ignorarme, pero no ignorar el retraso que tienes gilipollas.", //29
    "Ehh.... **MEDIO**\n Medio de cerebro me cago en tus putos muertos, a ver si dejas de ser tan puto subnormal retrasado de los cojones, cómete el puto bocadillo o me voy a cagar en tus muertos.", //30
    "Eyyy, pero ti onde vas con esas pintas mameluco?", //31
    "Siéndote sincero, deseo que conozcas a Yao Cabrera para que te drogue y desaparezcas.", //32
    "Te voy a enviar a mis 3 amigos futbolistas para que te violen puta subnormal.", //33
    "C90 C90... A TU PUTA ABUELA LE ENTRA UNA DE 30.", //34
    "El ordenador de tu abuela hace mejores huevos que tú pedazo deficiente anormalmente retrasado.", //35
    "Mira puto otaku, gordo, niño gafotas; te estás quedando calvo y estoy esperando a  que alguien te de algún consejo de mierda para amenar tu suicidio deficiente mental.", //36
    "Ojalá venga Eixo y te meta un paralelogramo por el culo y tengas que calcular las diagonales para sacártelo del ano bien grande que tienes, cabrón.", //37
    "No te conozco, pero estoy seguro, que con esa cara y esa voz de mierda que me llevas, te cabe un eucalipto bien grande por el culo.", //38
    "¿Sabes que el comunismo es bueno? Bueno para ponerte a trabajar OBLIGADO desatascando váteres de la mierda que te va a salir por el culo cuando me veas.", //39
    "Tengo tantas ganas de meterte 4 escobas y una fregona por el culo como tú de que te follen el culo, muchas.", //40
    "Tu cuerpo parece una carcasa veneca, te recomiendo comer danoninos y bebértelos por el culo desgraciado de mierda te vas a morir puto anoréxico." //41
];

module.exports = {
    name: 'saludar',
    description: 'Saludociones racooneras.',
    aliases: ['saluda', 'saludo'],
    usage: '.saludar <miembro>',
    execute(message) {
        
        const member = message.mentions.members.first();
        var number = sorpresas.length;
        var response = sorpresas[Math.floor(Math.random() * (number - 0) + 0)];

        if (!member) {
            return message.reply('¡Menciona a algún amigo!, si es que lo tienes, subnormal.');
        };

        var saludarEmbed = new Discord.MessageEmbed()
            .setColor('#b53535')
            .addField(`:exclamation: Raccoon te manda este **saludo** anónimamente:`, response);

        message.delete();
            
        message.channel.send('||<@' + member + '>||', saludarEmbed)
            .catch(console.error);
    },
};