const rita = require('rita');
const fs = require('fs');

module.exports.pester = function (character, callback) {

    //load the text
    let file = 'text/' + character + '.txt';
    fs.readFile(file, 'utf8', async (err, data) => {
        if (err) throw err;
        let quote
        try {
            quote = await saySomething(data);
        } catch (e) {
            console.log(e);
        }
        let message = "To quote " + character[0].toUpperCase() + character.substr(1) + ', "'+ quote + '"';

        callback(message);
    });
};

let saySomething = async function(text) {
    let markov = rita.RiMarkov(3);
    markov.loadText(text);
    let msg;
    try {
        msg = await markov.generateSentences(3).join(' ');
    } catch (e) {
        console.log(e);
    }
    return msg;
};

//Function to get the filepath for every file in a folder.
//Source: https://stackoverflow.com/a/21459809/1585599
let _getAllFilesFromFolder = function(dir) {

    let filesystem = require("fs");
    let results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        file = dir+'/'+file;
        let stat = filesystem.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(_getAllFilesFromFolder(file))
        } else results.push(file);

    });

    return results;

};


module.exports.stats = function (callback) {
    let result = _getAllFilesFromFolder('text');
    result.forEach((filename) => {
        fs.readFile(filename, 'utf8', (err, text) => {
            if (err) throw err;
            let words = text.split(" ");
            let count = words.length;
            let character = filename.substr(5).replace('.txt', '');
            character = character[0].toUpperCase() + character.substr(1);
            let msg = character + " has spoken " + count.toString() + " words.";
            callback(msg);
        })
    })
}

module.exports.rollForFairyCakes = function (callback) {
    let toReturn = '';
    let diceRoll = (Math.round(Math.random() * 5) + 1) + (Math.round(Math.random() * 5) + 1);
    let effects = ['drunk', 'stoned', 'noxious', 'depressed', 'deaf', 'mute', 'hallucinating'];
    
    if (diceRoll < 7) {
        toReturn = 'You ate a fairy cake, but nothing happened. It tasted good though.';
    } else if (diceRoll < 10) {
        let d8 = Math.round(Math.random() * 7) + 1;
        toReturn = 'You were healed for '
            + d8
            + ', but you\'re now '
            + effects[Math.round(Math.random() * (effects.length - 1))]
            + '. It\'ll wear off soon.'
    } else {
        let d8 = Math.round(Math.random() * 7) + 1;
        toReturn = 'You were healed for '
            + d8 + ' with no ill effects!'
    }
    
    callback(toReturn);
}

module.exports.morrigusWrath = function (callback) {
    let toReturn = 'Your';
    let target = ['pants', 'top', 'house', 'fork', 'spoon', 'eye brows', 'car', 'tree', 'cape'];
    let effect = ['exploded', 'imploded', 'turned orange', 'turned blue', 'turned turquoise',
        'suddenly shredded', 'flew away', 'turned into a turnip', 'turned into an orange',
        'turned into grape jello', 'turned into a pillow', 'turned into a rock', 'turned into a stick'];

    toReturn += ' ' + target[Math.round(Math.random() * (target.length - 1))] +
        ' ' + effect[Math.round(Math.random() * (effect.length - 1))] + '.';

    callback(toReturn);
}
