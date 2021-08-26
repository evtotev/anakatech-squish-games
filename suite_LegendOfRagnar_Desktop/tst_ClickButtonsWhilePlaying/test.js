import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(150, '13223,13223,13223');
    
    openGame('cocos',150,'!13227,!13227,!13227','no');
    
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
