import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "suiteFunctions.js"));

function main() {
    //clearCacheAndOpenGame(275);

    openGame('construct2', 275, '!830,!830,!830', 'no');

    clickStartButton();
    
    snooze(5);

    let oldGameSession = '';

    for (i = 0; i < 3; i++) {

        if (i != 0) {
            oldGameSession = getGameSession();
        }

        clickPlayButton();

        //handleBonusFSGames();

        let newGameSession = test.pass(getGameSession());

        if (oldGameSession != newGameSession) {
            test.pass("Game session ID is disfferent for the new round");
        } else {
            test.fail("Game session ID didn't change")
        }
    }
}
