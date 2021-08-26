import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "verifications.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main()
{
    //clearCacheAndOpenGame(275,692)
    
    clearCache(275);
    
    openGame2('construct2',275,'!692','no');
    
    clickStartButton();

    clickPlayButtonImage();
    
    snooze(10);

    select4Horses();
    
    clickStartFS();
    
    verifyFSFields();
    
    const interrupt = 'fsSummary';
    playFS(interrupt);
    
    closeCurrentTab();
    
    currentApplicationContext().detach();
    snooze(2);
    startApplication('__squish__webhook');
    
    openGame2('construct2',275,'','no');
    
    snooze(8);
    
    clickStartButton();
    
    verifyDefaultIcons(defaultIcons, defaultIconsTolerant);

}
