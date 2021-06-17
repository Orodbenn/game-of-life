import {initialSetup} from "./setup.js"
import {spreading} from "./spreading.js";

function init () {
    initialSetup.setup();
    spreading.checkForColoredCells();
}

init()