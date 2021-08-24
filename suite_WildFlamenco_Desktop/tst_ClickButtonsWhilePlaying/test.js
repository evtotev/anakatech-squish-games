import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(282, '13206,13147,13147');
        
    openGame('construct2',282,'!13206,!13206,!13206,!13206','no');
    
    clickStartButton();
    
    const bet = getBet();
    const lines = getLinesAmount();
    
    clickPlayButtonImage();
    spamBetButtons(bet);
    
    clickPlayButtonImage();
    spamLinesButtons(lines);
    
    clickPlayButtonImage();
    spamAutoTurboButtons();
}
