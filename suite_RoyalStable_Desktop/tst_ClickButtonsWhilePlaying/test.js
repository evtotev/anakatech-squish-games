import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

// not supposed to click on the bet buttons
function main()
{
    //clearCacheAndOpenGame(275, '863,863,863');
        
    openGame('construct2',275,'863,863,863','no');
    
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
