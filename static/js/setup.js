export const initialSetup = {
    setup: function (){
        this.attachEventListeners();
    },
    attachEventListeners: function (){
        const allCells = document.querySelectorAll('.cells')

        for(let cell of allCells) {
            cell.addEventListener('click', function (){
                cell.classList.remove('uncolored');
                cell.classList.add('colored');
            })
        }
    }
}