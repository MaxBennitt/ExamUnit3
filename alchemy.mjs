import fetch from 'node-fetch';

const URL = 'https://alchemy-kd0l.onrender.com'
const EMAIL = 'maxleandeb@uia.no'

async function start() {
    try {
        const response = await fetch(`${URL}/start?player=${EMAIL}`);
        const data = await response.json();
        console.log('Start game:', data);
        return data;
    } catch (error) {
    console.error(error);
    throw (error);
    }
}

async function submitAnswer(answer) {
    try {
        console.log('Submitting answer:', answer);
        const response = await fetch(`${URL}/answer`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                answer: answer, 
                player: EMAIL 
            })
        });
        const result = await response.json();
        console.log('Response:', result);
        return result;
    } catch (error) {
    console.error(error);
    throw(error);
    }
}

async function main() {
    try {
        await start(); 
        
        const symbols = "☉☿☽♂☉";
        const codeSymbols = {
            '☉': 'Gold',
            '☿': 'Quicksilver',
            '☽': 'Silver',
            '♂': 'Iron',
        };

        function interpretSymbols(symbols) {
            return symbols.split('').map(symbol => codeSymbols[symbol] || 'Unknown').join(',');
        }
        const meanings = interpretSymbols(symbols);

//        await submitAnswer(meanings);

        const poem = "Still flows the Icy Lethe, Veiling all 'neath Eldritch Rime.";
        const regex = /[A-Z]/g;
        const hiddenPoemCode = poem.match(regex).join('');
//        await submitAnswer(hiddenPoemCode);

        const encodedMessage = '17 20   20 9 17 24 4 34   24 127 127 1 8 8   17 20   17 10 1   34 1 46 17   48 24 45 12 17 ,   4 34 9 45 17   17 10 1   2 20 23 38 45 12 24   2 20 23   17 10 1   17 10 1   2 20 45 23 17 10   1 12 1 38 1 34 17 ;   127 20 38 29 4 34 1   38 1 23 127 45 23 108 ,   127 20 9 9 1 23   24 34 131   8 45 12 2 45 23   20 48 1 23   10 1 24 17 ,   24 131 131   8 24 12 17   24 34 131   270 24 17 1 23 ,   4 34 2 45 8 1   5 20 12 131   17 10 23 20 45 5 10   24 4 23';
        const numberToLetterConverter = {
            1: {letter: "E"},
            2: {letter: "F"},
            4: {letter: "I"},
            5: {letter: "G"},
            8: {letter: "S"},
            9: {letter: "P"},
            10: {letter: "H"},
            12: {letter: "L"},
            17: {letter: "T"},
            20: {letter: "O"},
            23: {letter: "R"},
            24: {letter: "A"},
            29: {letter: "B"},
            34: {letter: "N"},
            38: {letter: "M"},
            45: {letter: "U"},
            46: {letter: "X"},
            48: {letter: "V"},
            108: {letter: "Y"},
            127: {letter: "C"},
            131: {letter: "D"},
            270: {letter: "W"}
        };

        const numbers = encodedMessage.split(' ');
        let decodedMessage = '';
        for (const num of numbers) {
            if (num === '') {
                decodedMessage += ' ';
                continue;
            }
            if (numberToLetterConverter[num]) {
                decodedMessage += numberToLetterConverter[num].letter;
            } else {
                decodedMessage += num;
            }
        }

        console.log(decodedMessage);

        const alchemicalSymbols = {
            'Mercury': '☿',
            'Copper': '♀',      
            'Sulfur': '🜍',
            'Salt': '🜔',
            'Water': '🜄',
            'Gold': '☉',
            'Air': '🜁',
            'Fire': '🜂'
        };

        const transcriptAnswer = alchemicalSymbols['Mercury'] + alchemicalSymbols['Copper'] +
                                alchemicalSymbols['Sulfur'] + alchemicalSymbols['Fire'] +
                                alchemicalSymbols['Salt'] + alchemicalSymbols['Water']+ 
                                alchemicalSymbols['Gold'] + alchemicalSymbols['Air'];
        await submitAnswer(transcriptAnswer);

        const Challenge4Text = 'through Hidden experiments, the Observing Philosophers \n' +
    'carefully recorded their findings in secret tomes. \n' +
    'rarely did alchemists Seek answers in mundane texts, \n' +
    'for the Universal substance eluded ordinary understanding.\n' +
    '\n' +
    'beyond the limits of ordinary Methods, the most Dedicated scholars \n' +
    'turned to alchemical science, where hidden truths awaited discovery. \n' +
    'Truly, the masters of old knew that one must strive tirelessly, \n' +
    'purifying Lead into something greater, refining both mind and matter. \n' +
    'until mastery was achieved, Knowledge alone was insufficient, \n' +
    'and only those who understood the deeper mysteries Would glimpse Immortality.\n' +
    '\n' +
    'secrets, carefully veiled Behind Cryptic inscriptions, \n' +
    'teach those with patience to decode their deeper meaning. \n' +
    'hermetic ideals demand perseverance, a willingness to question, \n' +
    'and an acceptance that the path to wisdom is rarely direct. \n' +
    'long nights spent in study and contemplation lead to illumination, \n' +
    'and oaths taken by true seekers bind them to their Noble quest. \n' +
    'Yet the philosopher’s stone remains Elusive, \n' +
    'and only through great sacrifice is the truth Revealed.\n' +
    '\n' +
    'elixirs, said to restore itality and even grant eternal youth, \n' +
    'were concocted by those who dared to challenge nature’s limits. \n' +
    'distillations, performed under the guidance of celestial alignments, \n' +
    'promised insight beyond mortal comprehension. \n' +
    'Gold, though treasured by the common man, held greater meaning \n' +
    'to those who understood the principle of transmutation. \n' +
    'Joining knowledge of the material and the divine, \n' +
    'true alchemists saw wealth not in metal, but in enlightenment.\n' +
    '\n' +
    'notable are those who pursued the Quintessence, \n' +
    'a substance believed to bind together the four classical elements. \n' +
    'wielders of this hidden force were said to shape reality itself, \n' +
    'while Xenon and other elusive Vapors symbolized the mysteries of the aether. \n' +
    'yields of failed experiments were many, \n' +
    'but each failure brought the dedicated scholar closer to true wisdom. \n' +
    'Zeal alone was not enough—patience, discipline, and intellect \n' +
    'were the true keys to unlocking the universe’s greatest secret.\n' +
    '\n' +
    'through the Forgotten knowledge of Ancient scholars, \n' +
    'keepers of wisdom have safeguarded the elusive \n' +
    'keys to transformation. only those who \n' +
    'fully commit to the pursuit of enlightenment \n' +
    'can grasp the final mysteries.\n';

    const matches = Challenge4Text.match(regex);
    const capitalLetters = matches ? matches.join('') : '';
    console.log("Challenge4Text Capital letters:", capitalLetters);

    const encodedText = 'DNIS PNYYUR DNIS DNIS GLIXUR UHRJT BURPQRF PNYYUR MLRU HLR MLRU UHRJT IUHS UHRJT GLIXUR LRNC DNIS GLIXUR VHJUR DNIS PNYYUR MLRU DNIS LRNC IUHS UHRJT PNYYUR PNYYUR JLC BURPQRF';
    const words = encodedText.split(' ');
    const wordCounts = {};
    words.forEach(word => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    });
    const sortedWords = Object.entries(wordCounts)
            .sort((a, b) => b[1] - a[1])
            .map(entry => entry[0]);
    console.log("Sorted encoded text", sortedWords);

    } catch (error) {
    console.error(error);
    throw(error);
    }
}
main();