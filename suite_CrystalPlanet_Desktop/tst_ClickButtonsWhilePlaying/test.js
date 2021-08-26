import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(253, '!13797,!13797,!13797');
        
    openGame('cocos',253,'!13797,!13797,!13797','no');
    
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
