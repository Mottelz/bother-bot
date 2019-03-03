const rita = require('rita');
const fs = require('fs');

module.exports.pester = function (charater, callback) {

    //load the text
    file = 'text/' + charater + '.txt';
    fs.readFile(file, 'utf8', async (err, data) => {
        if (err) throw err;
        let quote
        try {
            quote = await saySomething(data);
        } catch (e) {
            console.log(e);
        }
        let message = "To quote " + charater[0].toUpperCase() + charater.substr(1) + ', "'+ quote + '"';

        callback(message);
    });
}

saySomething = async function(text) {
    let markov = rita.RiMarkov(3);
    markov.loadText(text);
    let msg;
    try {
        msg = await markov.generateSentences(3).join(' ');
    } catch (e) {
        console.log(e);
    }
    return msg;
}
