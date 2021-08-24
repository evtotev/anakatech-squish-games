import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "verifications.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main()
{
    //clearCacheAndOpenGame(275, '692,,,,,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830');
         
    clearCache(275);
    
    openGame2('construct2',275,'692,,,,,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830','no');
    
    clickStartButton();

    clickPlayButton();
    snooze(10);
    
    select4Horses();
    
    clickStartFS();
    
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
            closeCurrentTab();
   
            currentApplicationContext().detach();
            snooze(2);
            startApplication('__squish__webhook');
            
            openGame2('construct2',275,'','no');
            break;
        }
        
        test.log('Rround ' + currentFS);
    }
    
    snooze(5);
    
    clickStartButton();
    
    verifyDefaultIcons(defaultIcons, defaultIconsTolerant);
}
