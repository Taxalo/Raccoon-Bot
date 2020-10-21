const Discord = require("discord.js");

const s = ':purple_square:';
const a = ':blue_square:';
const b = ':green_square:';
const c = ':yellow_square:';
const d = ':orange_square:';
const f = ':red_square:';

const checks = [{
        "class": 'aimbot',
        "check": "1A",
        "name": "Aimbot A",
        "desc": "Aim extremadamente preciso que cede a ser Aimbot, basado en hitboxes.",
        "fiabilidad": a,
        "vl" : 5
    },
    {
        "class": 'aimbot',
        "check": "1A1",
        "name": "Aimbot A1",
        "desc": "AimAssists crudos.",
        "fiabilidad": a,
        "vl" : 10
        
    },
    {
        "class": 'aimbot',
        "check": "1C",
        "name": "Aim C",
        "desc": "AimAssists usados durante un tiempo prologando.",
        "fiabilidad": b,
        "vl" : 0
    },
    {
        "class": 'aimbot',
        "check": "1H",
        "name": "Aim H",
        "desc": "AimAssists sin randomización, usados durante un tiempo prologando.",
        "fiabilidad": b,
        "vl" : 0
    },
    {
        "class": 'autoclicker',
        "check": "2A",
        "name": "AutoClicker A",
        "desc": "AutoClickers simples(Check General #1).",
        "fiabilidad": d,
        "vl" : 15
    },
    {
        "class": 'autoclicker',
        "check": "2B",
        "name": "AutoClicker B",
        "desc": "AutoClickers con randomización pobre.",
        "fiabilidad": c,
        "vl" : 10
    },
    {
        "class": 'autoclicker',
        "check": "2C",
        "name": "AutoClicker C",
        "desc": "AutoClickers con randomización (Check General #2).",
        "fiabilidad": b,
        "vl" : 15
        
    },
    {
        "class": 'autoclicker',
        "check": "2D",
        "name": "AutoClicker D",
        "desc": "AutoClickers sin randomización, randomización pobre o dobleclickers.",
        "fiabilidad": a,
        "vl" : 10
    },
    {
        "class": 'autoclicker',
        "check": "2E",
        "name": "AutoClicker E",
        "desc": "AutoClickers, (Check desconocido).",
        "fiabilidad": f,
        "vl" : 0
    },
    {
        "class": 'autoclicker',
        "check": "2J",
        "name": "AutoClicker J",
        "desc": "AutoClickers. (Check desconocido).",
        "fiabilidad": f,
        "vl" : 0
    },
    {
        "class": 'autoclicker',
        "check": "2X",
        "name": "AutoClicker X",
        "desc": "Detecta más de 21 CPS.",
        "fiabilidad": a,
        "vl" : 15
        
    },
    {
        "class": 'autoclicker',
        "check": "2Y",
        "name": "AutoClicker Y",
        "desc": "AutoClickers. (Check desconocido).",
        "fiabilidad": f,
        "vl" : 0
    },
    {
        "class": 'badpackets',
        "check": "3A",
        "name": "Timer A",
        "desc": "Freecam o Disablers.",
        "fiabilidad": b,
        "vl" : 1
    },
    {
        "class": 'badpackets',
        "check": "3B",
        "name": "Invalid Direction",
        "desc": "Acciones usando Derp, Scaffold, etc.",
        "fiabilidad": c,
        "vl" : 1
    },
    {
        "class": 'badpackets',
        "check": "3C",
        "name": "Killaura C",
        "desc": "Killaura (Check desconocido)",
        "fiabilidad": f,
        "vl" : 1
    },
    {
        "class": 'badpackets',
        "check": "3D",
        "name": "Killaura D",
        "desc": "KillAura o TPAura.",
        "fiabilidad": b,
        "vl" : 1
    },
    {
        "class": 'badpackets',
        "check": "3E",
        "name": "Invalid Move E",
        "desc": "Scaffold y similares.",
        "fiabilidad": b,
        "vl" : 0
    },
    {
        "class": 'badpackets',
        "check": "3F",
        "name": "KillAura F",
        "desc": "KillAura pobre.",
        "fiabilidad": a,
        "vl" : 1
    },
    {
        "class": 'badpackets',
        "check": "3G",
        "name": "PingSpoof G",
        "desc": "PingSpoof, disablers, etc.",
        "fiabilidad": c,
        "vl" : 0
    },
    {
        "class": 'badpackets',
        "check": "3H",
        "name": "Invalid Direction H",
        "desc": "KillAura / Aimbot / Silent Aim / Scaffold.",
        "fiabilidad": b,
        "vl" : 15
    },
    {
        "class": 'badpackets',
        "check": "3I",
        "name": "Invalid Inventory I",
        "desc": "Acciones sobre el inventario (AutoArmor, Scaffold, Inventory, Refill...)",
        "fiabilidad": c,
        "vl" : 0
    },
    {
        "class": 'badpackets',
        "check": "3K",
        "name": "Invalid Interact K",
        "desc": "Scaffold.",
        "fiabilidad": a,
        "vl" : 1
    },
    {
        "class": 'badpackets',
        "check": "3O",
        "name": "Invalid Interact O",
        "desc": "Killaura / Scaffold",
        "fiabilidad": c,
        "vl" : 5
    },
    {
        "class": 'badpackets',
        "check": "3P",
        "name": "KillAura P",
        "desc": "KillAura (Check desconocido).",
        "fiabilidad": f,
        "vl" : 0
    },
    {
        "class": 'badpackets',
        "check": "3R",
        "name": "KillAura R",
        "desc": "KillAura (Check desconocido).",
        "fiabilidad": f,
        "vl" : 0
    },
    {
        "class": 'badpackets',
        "check": "3U",
        "name": "Invalid Inventory U",
        "desc": "Acciones sobre el inventario (AutoArmor, Scaffold, Inventory, Refill...).",
        "fiabilidad": b,
        "vl" : 0
    },
    {
        "class": 'badpackets',
        "check": "3V",
        "name": "Invalid Inventory V",
        "desc": "Acciones sobre el inventario (AutoArmor, Scaffold, Inventory, Refill...).",
        "fiabilidad": c,
        "vl" : 0
    },
    {
        "class": 'badpackets',
        "check": "3W",
        "name": "MultiUse W",
        "desc": "AutoClickers (click derecho) y/o intentos de crasheo.",
        "fiabilidad": b
    },
    {
        "class": 'badpackets',
        "check": "3X",
        "name": "FastBreak X",
        "desc": "FastBreak.",
        "fiabilidad": d,
        "vl" : 0
    },
    {
        "class": 'badpackets',
        "check": "3Y",
        "name": "Blink Y",
        "desc": "Detecta Blink / Freecam / Intentos de crasheo y similares",
        "fiabilidad": a,
        "vl" : 100
        
    },
    {
        "class": 'badpackets',
        "check": "3Z",
        "name": "Nuker Z",
        "desc": "Nuker y Schematica",
        "fiabilidad": d,
        "vl" : 0
    },
    {
        "class": 'flight',
        "check": "4B",
        "name": "Fly B",
        "desc": "NoFall, VCLIP y Fly.",
        "fiabilidad": b,
        "vl" : 25
    },
    {
        "class": 'flight',
        "check": "4C",
        "name": "Fly C",
        "desc": "Fly.",
        "fiabilidad": c,
        "vl" : 20
    },
    {
        "class": 'flight',
        "check": "4D",
        "name": "Fly D",
        "desc": "Fly.",
        "fiabilidad": c,
        "vl" : 25
    },
    {
        "class": 'flight',
        "check": "4E",
        "name": "Fly E",
        "desc": "Fly, LongJump, Bhop.",
        "fiabilidad": c,
        "vl" : 30
    },
    {
        "class": 'flight',
        "check": "4F",
        "name": "Fly F",
        "desc": "Fly.",
        "fiabilidad": c,
        "vl" : 50
    },
    {
        "class": 'flight',
        "check": "4G",
        "name": "Fly G",
        "desc": "Fly, VCLIP.",
        "fiabilidad": c,
        "vl" : 20
    },
    {
        "class": 'flight',
        "check": "4I",
        "name": "Fly I",
        "desc": "Fly.",
        "fiabilidad": d,
        "vl" : 50
    },
    {
        "class": 'flight',
        "check": "4K",
        "name": "Fly K",
        "desc": "Fly, NoFall e INTENTOS de VCLIP.",
        "fiabilidad": b,
        "vl" : 10
    },
    {
        "class": 'flight',
        "check": "4O",
        "name": "Fly O",
        "desc": "Strafe y derivados.",
        "fiabilidad": a,
        "vl" : 100
    },
    {
        "class": 'inventory',
        "check": "5A",
        "name": "Inventory A",
        "desc": "Acciones sobre el inventario (AutoArmor, Scaffold, Inventory, Refill...).",
        "fiabilidad": c,
        "vl" : 5
    },
    {
        "class": 'inventory',
        "check": "5B",
        "name": "Inventory B",
        "desc": "Acciones sobre inventarios que en el supuesto caso, no pueden abrirse (Cofres a +3 bloques)",
        "fiabilidad": b,
        "vl" : 0

    },
    {
        "class": 'inventory',
        "check": "5C",
        "name": "Inventory C",
        "desc": "AutoClicker en inventario, Refill, etc.",
        "fiabilidad": c,
        "vl" : 5
    },
    {
        "class": 'inventory',
        "check": "5D",
        "name": "Inventory D",
        "desc": "acciones sobre el inventario (Check desconocido).",
        "fiabilidad": f,
        "vl" : 0
    },
    {
        "class": 'inventory',
        "check": "5J",
        "name": "KillAura J",
        "desc": "KillAura con inventario abierto.",
        "fiabilidad": b,
        "vl" : 0
    },
    {
        "class": 'killaura',
        "check": "6A",
        "name": "Aimbot A",
        "desc": "Aimbot a entidades.",
        "fiabilidad": b,
        "vl" : 8
    },
    {
        "class": 'killaura',
        "check": "6B",
        "name": "KillAura B",
        "desc": "AutoClicker (cps altos, randomización de 1 único cps) usados contra una entidad.",
        "fiabilidad": a,
        "vl" : 2
    },
    {
        "class": 'killaura',
        "check": "6C",
        "name": "Aimbot C",
        "desc": "Aimbot contra usuarios.",
        "fiabilidad": b,
        "vl" : 5
    },
    {
        "class": 'killaura',
        "check": "6D",
        "name": "KillAura D",
        "desc": "KillAura con FOV bajo.",
        "fiabilidad": b,
        "vl" : 5
    },
    {
        "class": 'killaura',
        "check": "6E",
        "name": "KillAura E",
        "desc": "KillAura.",
        "fiabilidad": b,
        "vl" : 0
    },
    {
        "class": 'killaura',
        "check": "6F",
        "name": "AutoClicker F",
        "desc": "AutoClickers extremadamente malos (sigma client moment).",
        "fiabilidad": a,
        "vl" : 10
    },
    {
        "class": 'killaura',
        "check": "6G",
        "name": "KillAura G",
        "desc": "KillAura.",
        "fiabilidad": b,
        "vl" : 20
    },
    {
        "class": 'killaura',
        "check": "6H",
        "name": "KillAura H",
        "desc": "KillAura genéricos (Check General).",
        "fiabilidad": a,
        "vl" : 5
    },
    {
        "class": 'killaura',
        "check": "6H2",
        "name": "KillAura H2",
        "desc": "Check de apoyo a KillAura H, (muestra más información de debug, se basa en FOV).",
        "fiabilidad": b,
        "vl" : 0
    },
    {
        "class": 'killaura',
        "check": "6K",
        "name": "AutoClicker K",
        "desc": "AutoClicker (Check desconocido)",
        "fiabilidad": f,
        "vl" : 0
    },
    {
        "class": 'killaura',
        "check": "6M",
        "name": "KillAura M",
        "desc": "KillAura (Check desconocido).",
        "fiabilidad": f,
        "vl" : 0
    },
    {
        "class": 'killaura',
        "check": "6N",
        "name": "KillAura N",
        "desc": "KillAura",
        "fiabilidad": c,
        "vl" : 25
    },
    {
        "class": 'killaura',
        "check": "6O",
        "name": "MultiAura O",
        "desc": "KillAura / MultiAura. (Básicamente atacando a más de un usuario a la vez).",
        "fiabilidad": a,
        "vl" : 5
    },
    {
        "class": 'payload',
        "check": "7A",
        "name": "Hacked Client A",
        "desc": "Clientes basándose en la protocol version.",
        "fiabilidad": s,
        "vl" : 1
    },
    {
        "class": 'payload',
        "check": "7B",
        "name": "Hacked Client B",
        "desc": "Clientes basándose en la protocol version (No banea).",
        "fiabilidad": s,
        "vl" : 1
    },
    {
        "class": 'reach',
        "check": "9A",
        "name": "Reach A",
        "desc": "Reach horizontal y vertical.",
        "fiabilidad": a,
        "vl" : 30
    },
    {
        "class": 'reach',
        "check": "9B",
        "name": "Reach B",
        "desc": "Reach y hitboxes.",
        "fiabilidad": a,
        "vl" : 4
    },
    {
        "class": 'reach',
        "check": "9C",
        "name": "Reach C",
        "desc": "Reach.",
        "fiabilidad": a,
        "vl" : 20
    },
    {
        "class": 'speed',
        "check": "10A",
        "name": "Speed A",
        "desc": "Speed, Bhop y Timer.",
        "fiabilidad": b,
        "vl" : 30
    },
    {
        "class": 'speed',
        "check": "10B",
        "name": "Fast Ladder B",
        "desc": "FastLadder, IceBoost.",
        "fiabilidad": a,
        "vl" : 25
    },
    {
        "class": 'speed',
        "check": "10E",
        "name": "OmniSprint",
        "desc": "FastLadder, IceBoost.",
        "fiabilidad": b,
        "vl" : 20
    },
    {
        "class": 'speed',
        "check": "10F",
        "name": "NoSlowDown",
        "desc": "nada. No funciona. Mierda de check.",
        "fiabilidad": f,
        "vl" : 0
    },
    {
        "class": 'timer',
        "check": "11A",
        "name": "Timer A",
        "desc": "Cualquier tipo de Timer, en cualquier condición.",
        "fiabilidad": b,
        "vl" : 40
    },
    {
        "class": 'timer',
        "check": "11B",
        "name": "Timer B",
        "desc": "Timer en versiones superiores a la 1.9 o en esta misma.",
        "fiabilidad": b,
        "vl" : 15
    },
    {
        "class": 'timer',
        "check": "11C",
        "name": "Timer C",
        "desc": "Timer (Check desconocido)",
        "fiabilidad": f,
        "vl" : 0
    },
    {
        "class": 'velocity',
        "check": "12A",
        "name": "Velocity A",
        "desc": "Velocity Vertical.",
        "fiabilidad": d,
        "vl" : 5
    },
    {
        "class": 'velocity',
        "check": "12B",
        "name": "Velocity B",
        "desc": "Velocity Horizontal.",
        "fiabilidad": d,
        "vl" : 0
    },
    {
        "class": 'velocity',
        "check": "12C",
        "name": "Velocity C",
        "desc": "AntiKB.",
        "fiabilidad": c,
        "vl" : 0
    },
    {
        "class": 'misc',
        "check": "13F",
        "name": "Nuker F",
        "desc": "Nuker.",
        "fiabilidad": b,
        "vl" : 0
    },
    {
        "class": 'scaffold',
        "check": "14A",
        "name": "Scaffold A",
        "desc": "Scaffold.",
        "fiabilidad": b,
        "vl" : 5
    },
    {
        "class": 'scaffold',
        "check": "14D",
        "name": "Scaffold D",
        "desc": "Scaffold.",
        "fiabilidad": b,
        "vl" : 5
    },
    {
        "class": 'crashers',
        "check": "15A",
        "name": "Server Crasher A",
        "desc": "Intentos de crasheos.",
        "fiabilidad": b,
        "vl" : 5
    },
    {
        "class": 'crashers',
        "check": "15B",
        "name": "Server Crasher B",
        "desc": "Intentos de crasheos abusando bugs vanilla.",
        "fiabilidad": c,
        "vl" : 0
    },
    {
        "class": 'crashers',
        "check": "15C",
        "name": "Server Crasher c",
        "desc": "Intentos de crasheos.",
        "fiabilidad": c,
        "vl" : 1
    },
    {
        "class": 'virgen',
        "check": "16S",
        "name": "Swanky Virgen",
        "desc": "Swanky siendo virgen",
        "fiabilidad": s,
        "vl": 1
    }
];

module.exports = {
    name: 'checks',
    description: 'Checks de Verus.',
    aliases: ['check', 'chek', 'cheks'],
    usage: '.checks <check>',
    async execute(message, args) {

        if (!args[0]) {
            let checkInfo = new Discord.MessageEmbed()
                .setTitle('CHECKS')
                .setFooter(`.checks <check> para ver información sobre el check.`, message.client.user.avatarURL())
                .setColor('#75001a');

            let classes = [];

            checks.forEach(f => {
                if (!classes.includes(f.class)) classes.push(f.class);
            });

            classes.forEach(function (a) {
                let checkArray = []

                checks.filter(g => g.class.toLowerCase() == a.toLowerCase()).forEach(e => checkArray.push(e.check));

                checkInfo.addField(a.toUpperCase(), checkArray.join('/'));

            });

            return message.channel.send(checkInfo);

        } else if (args[0].toLowerCase() == 'list' || args[0].toLowerCase() == 'help') {

            let uniqueClass = [];

            checks.forEach(c => {
                if (!uniqueClass.includes(c.class)) uniqueClass.push(c.class);
            });

            let listInfo = new Discord.MessageEmbed()
                .setTitle('CLASES:')
                .setDescription(uniqueClass.join(', ').toUpperCase() + '.')
                .setColor('#948a8c');

            return message.channel.send(listInfo);

        };

        let checksEmbed = new Discord.MessageEmbed()
            .setColor('#9c8187');

        if (checks.map(c => c.class.toLowerCase()).includes(args[0].toLowerCase())) {
    
            checks.filter(c => c.class.toLowerCase() == args[0].toLowerCase()).forEach(c => {
                checksEmbed.setTitle(`Checks (${c.class.toUpperCase()})`);
                checksEmbed.addField('Check', c.check, true);
                checksEmbed.setFooter(`.checks <check> para ver información sobre el check.`, message.client.user.avatarURL());
            });

        } else if (checks.map(c => c.check.toLowerCase() == args[0])) {

            checks.filter(c => c.check.toLowerCase() == args[0].toLowerCase()).map(g => {
                checksEmbed.setTitle(`Check ${g.check}`);
                checksEmbed.addField('Nombre', g.name);
                checksEmbed.addField('Detecta', g.desc);
                checksEmbed.addField('Fiabilidad', g.fiabilidad);
                checksEmbed.addField('(VL)', g.vl.toString());

                if (g.vl.toString() == '0') checksEmbed.setFooter('Que el VL sea "0" puede indicar que el check está desactivado, o no.', message.client.user.avatarURL());
            });
        };

        if (!checksEmbed.title) {

            const errorMessage = new Discord.MessageEmbed()
                .setTitle('ERROR')
                .setDescription(`:interrobang: No se ha podido encontrar ninguna clase ni check llamado __"${args[0]}"__.`)
                .setColor('#fc0345');

            return message.channel.send(errorMessage);
        };

        message.channel.send(checksEmbed);

    }
};