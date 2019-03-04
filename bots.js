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

let _getAllFilesFromFolder = function(dir) {

    var filesystem = require("fs");
    var results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        file = dir+'/'+file;
        var stat = filesystem.statSync(file);

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

