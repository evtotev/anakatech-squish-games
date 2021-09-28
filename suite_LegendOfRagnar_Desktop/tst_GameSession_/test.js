import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "imageVerifications.js"));

function main() {
    //clearCacheAndOpenGame(150,'');

    openGame('cocos', 150, '!13223,!13223,!13223', 'no');

    clickStartButton();

    snooze(5);

    let oldGameSession = '';

    for (i = 0; i < 3; i++) {

        if (i != 0) {
            oldGameSession = getGameSession();
        }

        clickPlayButtonImage();

        // handleBonusFSGames();

        let newGameSession = test.pass(getGameSession());

        if (oldGameSession != newGameSession) {
            test.pass("Game session ID is disfferent for the new round");
        } else {
            test.fail("Game session ID didn't change")
        }
    }
}
