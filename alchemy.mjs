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

        await submitAnswer(meanings);
    } catch (error) {
    console.error(error);
    throw(error);
    }
}
main();