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

    } catch (error) {
    console.error(error);
    throw(error);
    }
}
main();