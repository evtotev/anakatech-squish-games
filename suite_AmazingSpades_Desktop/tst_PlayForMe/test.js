import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "scratch_functions.js"));
source(findFile("scripts", "balanceVerifications_scratch.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(217, '323');
        
    openGame('construct2',217,'323','no');
    
    snooze(3);

    test.imagePresent(icon);    
    
    clickPlayButton();
    
    test.imagePresent(playForMeBtn, playBtnTolerant);
    
    clickPlayForMeButton();
    
    test.imageNotPresent(icon, {tolerant: 99});
}

