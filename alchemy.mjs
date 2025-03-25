import fetch from 'node-fetch';

const URL = 'https://alchemy-kd0l.onrender.com'
const EMAIL = 'maxleandeb@uia.no'

async function start() {
    const response = await fetch(`${URL}/start?player=${EMAIL}`);
    const data = await response.json();
    console.log('Start game:', data);
    return data;
}
start();

async function getHint() {
    const response = await fetch(`${URL}/clue?player=${EMAIL}`);
    const data = await response.json();
    console.log('Hint:', data);
    return data;
}
getHint();