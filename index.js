//https://discordapp.com/oauth2/authorize?client_id=551804985596313630&scope=bot&permissions=68608
require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();
const bother = require('./bots.js');
const prefix = 'Quote '

//Once ready, notify that we're ready.
client.once('ready', () => {
    console.log("We're ready for action!");
});

//Login with token
client.login(process.env.TOKEN);

//Listen for messages
client.on('message', async msg => {
    if(msg.content === (prefix + 'Darcy')) {
        bother.pester('darcy', (post) => msg.channel.send(post));
    }

    if (msg.content === (prefix + 'Eggerton')) {
        bother.pester('eggerton', (post) => msg.channel.send(post));
    }

    if (msg.content === (prefix + 'Blat')) {
        bother.pester('blat', (post) => msg.channel.send(post));
    }

    if (msg.content === (prefix + 'Snegal')) {
        bother.pester('snegal', (post) => msg.channel.send(post));
    }

    if (msg.content === ('bb!stats')) {
        bother.stats((post) => msg.channel.send(post));
    }

    if (msg.content === ('<:dice2d6:462317117841342466> <:fairycake:525033901236944907>')) {
        bother.rollForFairyCakes((post) => msg.channel.send(post));
    }

    if(msg.content.toLowerCase().includes('morrigu') ||
        msg.content.toLowerCase().includes('morigu') ||
        msg.content.toLowerCase().includes('morrigoo') ||
        msg.content.toLowerCase().includes('morrigo') ||
        msg.content.toLowerCase().includes('morigo') ||
        msg.content.toLowerCase().includes('morigoo')) {
        bother.morrigusWrath((post) => msg.channel.send(post));
    }
})
