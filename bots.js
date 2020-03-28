function rollForFairyCakes(callback) {
    let effect = '';
    let diceRoll = (Math.round(Math.random() * 5) + 1) + (Math.round(Math.random() * 5) + 1);
    let effects = ['drunk', 'stoned', 'anxious', 'depressed', 'deaf', 'mute', 'hallucinating',
        'only able to use six letter words', 'only able to use four letter words', 'seemingly trapped in a large body of water', 'surrounded by anthropomorphized animals wearing the clothes of the people who were there a moment ago.'];
    let tastes = ['spicy', 'tart', 'purple', 'cold', 'sweet', 'apricot-ish', 'apple-ish', 'peppery', 'fishy', 'bland', 'flowery'];
    
    if (diceRoll < 7) {
        effect = 'You notice no other effects.';
    } else if (diceRoll < 10) {
        let d8 = Math.round(Math.random() * 7) + 1;
        effect = 'You were healed for '
            + d8
            + ', but you\'re now '
            + effects[Math.round(Math.random() * (effects.length - 1))]
            + '. It\'ll wear off soon.'
    } else {
        let d8 = Math.round(Math.random() * 7) + 1;
        effect = 'You were healed for '
            + d8 + ' with no ill effects!'
    }

    let flavourOne = Math.round(Math.random() * (tastes.length - 1));
    let flavourTwo = Math.round(Math.random() * (tastes.length - 1));

    while (flavourOne === flavourTwo) {
        flavourTwo = Math.round(Math.random() * (tastes.length - 1));
    }

    let toReturn = 'You ate a fairy cake that tasted ' + tastes[flavourOne] + ' and ' + tastes[flavourTwo] + '. ' + effect;
    callback(toReturn);
}

function morrigusWrath(callback, author) {
    let toReturn = `${author}'s `;
    let target = ['pants', 'top', 'house', 'fork', 'spoon', 'eye brows', 'car', 'tree', 'cape'];
    let effect = ['exploded', 'imploded', 'turned orange', 'turned blue', 'turned turquoise',
        'suddenly shredded', 'flew away', 'turned into a turnip', 'turned into an orange',
        'turned into grape jello', 'turned into a pillow', 'turned into a rock', 'turned into a stick'];

    toReturn += target[Math.round(Math.random() * (target.length - 1))] +
        ' ' + effect[Math.round(Math.random() * (effect.length - 1))] + '.';

    callback(toReturn);
}

function summonBazooka(callback) {
    let things = ['A turnip', 'An apple', 'A cat', 'A pen', 'A ball', 'A tambourine', 'A pair of dice',
        'A bagful of dice', 'A copper pot', 'A dozen soft pretzel buns', 'Fairy sparkles', 'A worn out sandal',
        'Money from a different universe (I forget the name)', 'A guitar', 'An orange', 'A broken alarm clock',
        'A working alarm clock', 'A baby bassinet', 'An empty and cracked water canteen', 'A cheesecake',
        'A random assortment of Candy World pieces', 'Some extremely stale cookies', 'A lemon',
        'A 10ft poking stick that will immediately break', 'A bowl of cold spaghetti', 'A fairy sized cone of shame',
        'A giant sized cone of shame', 'A human sized cone of shame', 'A pup robot toy without the batteries', 'An artificial centaur tail',
        'The script for the next EOT episode'
    ];


    let out = (Math.floor(Math.random() * 12)) ?
    things[Math.floor(Math.random() * (things.length - 1))] + ' suddenly appears in Blat\'s hand.' :
    'BOOOOOOOOM!';

    callback(out);
}

module.exports = {
    summonBazooka,
    rollForFairyCakes,
    morrigusWrath
};
