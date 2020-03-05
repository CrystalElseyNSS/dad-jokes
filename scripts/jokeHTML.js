export const dadJokeHTML = (dadJokeObject) => {
    return `
        <section class="joke">
            <h2 class="joke--header">Dad Joke #${dadJokeObject.id}</h2>
            <p class="joke--question">Question: ${dadJokeObject.question}</p>

            <button class="joke--button" id="button--${dadJokeObject.id}">Answer 🌽</button>
            <dialog class="joke--answer" id="dialog--${dadJokeObject.id}">
                <p>${dadJokeObject.answer}</p>
                <button class="joke--button buttons--close">Groan</button>
            </dialog>
        </section>
    `
}