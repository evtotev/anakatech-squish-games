source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));

function pickFS() {
    clickImg(pickFSbtn);
}

function pickBonus() {
    clickImg(pickBonusBtn);
}

function playBonusGame() {  
    while (true) {        
        
        try {
            if (findImage(pickBonusBtn, pickBonusBtnTolerant)) {
                clickImg(pickBonusBtn, pickBonusBtnTolerant);
                test.log('Clicked Bonus icon');
            } 
        } catch (e) {
           test.log('No Play button');
        }
        
        snooze(3);
        
        testSettings.imageNotFoundDebugging = false;
        
        try {
            if (findImage(sign20Lines, playBtnTolerant)) {
                test.log('Main game reels');
                break; 
            } 
        } catch (e) {
           test.log('Still in bonus');
        }
    
      }

}

function playBonusGameToSummary() {
    let clicks = 3;
    
    while (clicks > 0) {
        clickImg(pickVillageBtn);
        test.log('Clicked Village icon');
        
        snooze(3);
        
        clicks--;
    }
    
    waitForImage(backBtn, backBtnTolerant);
}

//function playBonusGameInFS() {
////  trophyIconTolerant.timeout = 6000;
//  findImage(trophyIcon, trophyIconTolerant);
//  
//  clickImg(trophyIcon, trophyIconTolerant);
//  
//  clickImg(backBtn, backBtnTolerant);
//}

function playFS(interrupt) {
    while (true) {
        testSettings.imageNotFoundDebugging = false;
                
        try {
            if (findImage(backBtn, backBtnTolerant)) {
                snooze(1);
                test.log('Back button found');
                if (interrupt === 'fsSummary') {
                    test.log('Back without clicking');
                    break;
                }
                
                test.pass(clickImg(backBtn, backBtnTolerant));
                test.log('Clicked Back button');
                break;
            }
        } catch (e) {
            test.log('No Back button');
        }
        
        try {
            if (findImage(playBtn, playBtnTolerant)) {
                test.log('Found Play button');
                break;
            }
        } catch (e) {
            test.log('No Play button');
        }
        
    }
}

function handleBonusFSGames() {
    test.log('before checks');
    testSettings.imageNotFoundDebugging = false;
    while (true) {
        try {
            if (findImage(bonusMenu, bonusMenuTolerant)) {
                playBonusGame();
            break;
            }
        } catch (e) {
            test.log('after Bonus check');
        }
       
        try {

            if (findImage(pickFSbtn, pickFSbtnTolerant)) {
                clickStartFS();
                playFS();
                snooze(3);
                break;
            }
        } catch (e) {
            test.log('after FS check');
        }
        
        try {
            if (findImage(playBtn, playBtnTolerant)) {
                break;
            }
        } catch (e) {
            test.log('after Play button check');
        }
        
        try {
            if (findImage(playTurboBtn, playBtnTolerant)) {
                break;
            }
        } catch (e) {
            test.log('after Play Turbo button check');
        }
        
        
    }
}

function getMultiplier() {
    try {
        testSettings.imageNotFoundDebugging = false;
        if (findImage(x40)) {
            multiplier = 40;
            test.log('multiplier: ' + multiplier);
            return multiplier;
        }
    } catch (e) {
        try {
            testSettings.imageNotFoundDebugging = false;
            if (findImage(x25)) {
                multiplier = 25;
                test.log('multiplier: ' + multiplier);
                return multiplier;
            } 
        } catch (e) {
            try {
                testSettings.imageNotFoundDebugging = false;
                if (findImage(x10)) {
                    multiplier = 10;
                    test.log('multiplier: ' + multiplier);
                    return multiplier;
                }
            } catch (e) {   
                try {
                    testSettings.imageNotFoundDebugging = false;
                    if (findImage(x5)) {
                        multiplier = 5;
                        test.log('multiplier: ' + multiplier);
                        return multiplier;
                    }
                } catch (e) {   
                    
                }
            }
        }
    }
    
    return 0;
}




