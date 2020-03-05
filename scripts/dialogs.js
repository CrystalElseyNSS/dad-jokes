const initializeJokeAnswerButtonEvents = () => {
    const allCloseButtons = document.querySelectorAll(".buttons--close")
    for (const btn of allCloseButtons) {
        btn.addEventListener("click", theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }

    const allAnswerButtons = document.querySelectorAll("button[id^='button--']")

    for (const btn of allAnswerButtons) {
        btn.addEventListener('click', theEvent => {
            let theIdOnly = theEvent.target.id.split("--")[1]
            let theDialogIWant= document.querySelector(`#dialog--${theIdOnly}`)
            theDialogIWant.showModal()
        })
    }

}

export default initializeJokeAnswerButtonEvents;