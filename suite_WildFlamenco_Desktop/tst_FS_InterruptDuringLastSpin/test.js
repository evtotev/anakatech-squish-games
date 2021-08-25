import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "verifications.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main()
{
    //clearCacheAndOpenGame(282, '13168,!13602,!13602,!13602,!13602,!13602,!13602,!13602,!13602');    
    
    clearCache(282);
    
    openGame2('construct2',282,'13168,!13602,!13602,!13602,!13602,!13602,!13602,!13602,!13602','no');
    
    clickStartButton();

    clickPlayButtonImage();
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
            test.log('Rround 7');
            snooze(1);
            closeCurrentTab();
            
            currentApplicationContext().detach();
            snooze(2);
            startApplication('__squish__webhook');
            
            openGame2('construct2',282,'','no');

            snooze(5);
            break;
        }
        
        test.log('Rround ' + currentFS);
    }
    
    clickStartButton();
    
    verifyDefaultIcons(defaultIcons, defaultIconsTolerant);
}
