import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "verifications.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(282,'13168,!13602,!13602,!13602');
    
    clearCache(282);
    
    openGame2('construct2',282,'13168,!13602,!13602,!13602','no');
    
    clickStartButton();

    clickPlayButton();
    
    snooze(10);
    
    waitForImage(pickFSbtn, {timeout:35000});

    pickFS();
    snooze(2);
 
    verifyFSFields();
     
    while (true) {
        testSettings.imageNotFoundDebugging = false;
        try{
            if (getSpinWin() === 0) {
                closeCurrentTab();
                
                currentApplicationContext().detach();
                snooze(2);
                startApplication('__squish__webhook');
                
                openGame2('construct2',282,'','no');

                snooze(5);
                break;
            }
        } catch(e) {
            test.log('TotalBet > 0');
        }
    }        

        verifyFSFields();

        playFS();
        
        test.imagePresent(playBtn, playBtnTolerant);
}
