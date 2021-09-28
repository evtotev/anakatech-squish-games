import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main() {

    openGame('cocos', 150, '!13227,!13227,!13227', 'no');

    snooze(5);

    clickStartButton();

    const bet = getBet();
    const lines = getLinesAmount();

    clickPlayButtonImage();
    spamBetButtons(bet);

    clickPlayButton();
    spamLinesButtons(lines);

    clickPlayButton();
    spamAutoTurboButtons();
}