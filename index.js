require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const bother = require('./bots.js');
const goddess = /morrigu|morigu|morrigoo|morrigo|morigo|morigoo|moragu|morragu/;

//Once ready, notify that we're ready.
client.once('ready', () => {
    console.log("We're ready for action!");
});

//Login with token
client.login(process.env.TOKEN);

//Listen for messages
client.on('message', async msg => {

    // Roll for Fairy Cakes
    if (msg.content === ('<:dice2d6:462317117841342466> <:fairycake:525033901236944907>')) {
        bother.rollForFairyCakes((post) => msg.channel.send(post));
    }

    // Morrigu's Wrath
    if(msg.content.toLowerCase().match(goddess)) {
        bother.morrigusWrath((post) => msg.channel.send(post), msg.author);
    }

    // The Bazooka
    if(msg.content.toLowerCase().includes('bazooka')
        && msg.author.username.toLowerCase() === 'carter'
        && msg.author.discriminator === '6638'
        ) {
        bother.summonBazooka((post) => msg.channel.send(post));
    }
});

// Morrigu's Wrath for Edits
client.on('messageUpdate', (oldMsg, newMsg) => {
    if(newMsg.content.toLowerCase().match(goddess)) {
        bother.morrigusWrath((post) => newMsg.channel.send(post), newMsg.author);
    }
});
