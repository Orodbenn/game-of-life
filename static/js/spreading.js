export const spreading = {
    checkForColoredCells: function () {
        const allCells = document.getElementsByClassName('cells')
        for (let cell of allCells) {
            cell.addEventListener('spread', () => {
                setInterval(() => spreading.checkEmptyCells(cell), 500)
            })
        }
    },
    checkEmptyCells: function (cell) {
        let cells = document.getElementsByClassName('cells');
        let col = parseInt(cell.dataset.col);
        let row = parseInt(cell.dataset.row);
        let coloredCellsAround = 0;

        for (let i = 0; cells.length > i; i++) {
            if (cells[i].classList.contains('colored')) {
                let colCheck = parseInt(cells[i].dataset.col);
                let rowCheck = parseInt(cells[i].dataset.row);
                if (colCheck + 1 === col && rowCheck + 1 === row ||
                    colCheck === col && rowCheck + 1 === row ||
                    colCheck - 1 === col && rowCheck + 1 === row ||
                    colCheck + 1 === col && rowCheck === row ||
                    colCheck - 1 === col && rowCheck === row ||
                    colCheck + 1 === col && rowCheck - 1 === row ||
                    colCheck === col && rowCheck - 1 === row ||
                    colCheck - 1 === col && rowCheck - 1 === row
                ) {
                    coloredCellsAround++;
                }
            }
        }
        if (coloredCellsAround < 2) {
            spreading.unColorAdjacent(cell);
        }else if (coloredCellsAround === 2 || coloredCellsAround === 3) {
            spreading.colorAdjacent(cell);
        }
        if (coloredCellsAround > 3) {
            spreading.unColorAdjacent(cell);
        }else if (coloredCellsAround === 3) {
            spreading.colorAdjacent(cell);
        }
    },
    colorAdjacent: function (cell) {
        cell.classList.remove('uncolored');
        cell.classList.add('colored');
    },
    unColorAdjacent: function (cell) {
        cell.classList.remove('colored');
        cell.classList.add('uncolored');
    }
}