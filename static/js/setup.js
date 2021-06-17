import {spreading} from "./spreading.js";

export const initialSetup = {
    setup: function () {
        //initialSetup.startButton();
        //initialSetup.stopButton();
        initialSetup.attachLeftClick();
    },
    attachLeftClick: function () {
        const allCells = document.querySelectorAll('.cells')
        const changeEvent = document.createEvent('Event')
        changeEvent.initEvent('spread', true, true)

        for (let cell of allCells) {
            cell.addEventListener('click', function () {
                cell.classList.remove('uncolored');
                cell.classList.add('colored');
                setTimeout(() => cell.dispatchEvent(changeEvent), 1000)
            })
        }
    },
    startButton: function () {
        const startButton = document.getElementById('start-button')
        startButton.addEventListener('click', () => {
            const changeEvent = document.createEvent('Event')
            changeEvent.initEvent('spread', true, true)
            startButton.dispatchEvent(changeEvent)
        })
    },
    stopButton: function () {
        const stopButton = document.getElementById('stop-button')
        //stopButton.addEventListener('click', () => )
    }
}