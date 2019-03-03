const rita = require('rita');
const fs = require('fs');

module.exports.pester = function (charater, callback) {

    //load the text
    file = 'text/' + charater + '.txt';
    fs.readFile(file, 'utf8', async (err, data) => {
        if (err) throw err;
        let quote = await saySomething(data);
        let message = "To quote " + charater[0].toUpperCase() + charater.substr(1) + ' "'+ quote + '"';

        callback(message);
    });
}

saySomething = async function(text) {
    let markov = rita.RiMarkov(3);
    markov.loadText(text);
    return await markov.generateSentences(3).join(' ');
}
