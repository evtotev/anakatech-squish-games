import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "verifications.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(275, 692);
    
    clearCache(275);
    
    snooze(3);
    
    openGame2('construct2',275,'!692','no');
    
    snooze(2);
    
    clickStartButton();

    clickPlayButton();
    
    select4Horses();
        
    snooze(3);
    
    closeCurrentTab();
    
    snooze(3);
    
    currentApplicationContext().detach();
    snooze(2);
    startApplication('__squish__webhook');
    
    openGame2('construct2',275,'','no');
    
    snooze(4);

    verifyFSFields();
  
    playFS();

}
