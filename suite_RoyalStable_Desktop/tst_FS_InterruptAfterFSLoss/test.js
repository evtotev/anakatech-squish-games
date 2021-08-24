import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "verifications.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(275,'692,,,,,!830,!830,!830,!830,!830,!830,!830,!830,!830')
        
    clearCache(275);
    
    openGame2('construct2',275,'!692,,,,,!830,!830,!830,!830,!830,!830,!830,!830,!830','no');
    
    clickStartButton();

    clickPlayButton();
    
    select4Horses();
    
    clickStartFS();
    
    verifyFSFields();
    snooze(5);
     
    while (true) {
        testSettings.imageNotFoundDebugging = false;
        try{
            if (getSpinWin() === 0) {
                test.log('Spin Win = 0');
                break;
            }
        } catch(e) {
            test.log('TotalBet > 0');
        }
        
        try{
           if (findImage(trophyIcon, trophyIconTolerant)) {
                isInBonus = true;
                playBonusGame();
                test.log('Bonus game played');
            }
        } catch(e) {
            test.log('After Bonus game check');
        }
    }
    
    snooze(1);
    
    closeCurrentTab();
    
    currentApplicationContext().detach();
    snooze(2);
    startApplication('__squish__webhook');
    
    openGame2('construct2',275,'','no');

    verifyFSFields();

    playFS();
    
    test.imagePresent(playBtn, playBtnTolerant);
}
