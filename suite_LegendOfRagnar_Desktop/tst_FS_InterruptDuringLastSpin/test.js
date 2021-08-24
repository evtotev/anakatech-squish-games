import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "verifications.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main()
{
    //clearCacheAndOpenGame(150,'!13680,,!13364,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13364');
    
    clearCache(150);
    
    openGame2('cocos',150,'!13680,,!13364,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13364','no');
    
    clickStartButton();

    clickPlayButton();
    snooze(10);
    
    waitForImage(pickFSbtn, {timeout:35000});

    pickFS();
    snooze(4);
    
    verifyFSFields();
    
    let freeSpins = getFreeSpins();
    let currentFS = freeSpins.split(' / ')[0];
    let totalFS = freeSpins.split(' / ')[1];
    
    while (currentFS !== totalFS) {
        freeSpins = getFreeSpins();
        currentFS = freeSpins.split(' / ')[0];
        totalFS = freeSpins.split(' / ')[1];
        
        if (currentFS === totalFS) {
            test.log('Last FS round');
            snooze(0.2);
            closeCurrentTab();
            break;
        }
        
        test.log('Rround ' + currentFS);
    }
    
    closeCurrentTab();
    
    currentApplicationContext().detach();
    
    snooze(2);
   
    startApplication('__squish__webhook');
    
    openGame2('cocos',150,'','no');
    
    snooze(5);
    
    clickStartButton();
    
    verifyDefaultIcons(defaultIcons, defaultIconsTolerant);
}
