import { dadJokeHTML } from './jokeHTML.js';
import { copyOfDadJokesArray } from './jokeDataArray.js';

const contentTarget = document.querySelector('.jokesSection');

export const dadJokeMaker = () => {
    const newDadJokesArray = copyOfDadJokesArray();
    for (const newDadJokeObject of newDadJokesArray) {
        const newDadJokeHTMLString = dadJokeHTML(newDadJokeObject);
        contentTarget.innerHTML += newDadJokeHTMLString
    }
}