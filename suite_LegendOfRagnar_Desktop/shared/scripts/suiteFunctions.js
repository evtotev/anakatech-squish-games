source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));

function pickFS() {
    clickImg(pickFSbtn);
}

function pickBonus() {
    clickImg(pickBonusBtn);
}

function playBonusGame(interrupt) {
    let clicks = 3;
    
    while (clicks > 0) {
        clickImg(pickVillageBtn);
        test.log('Clicked Village icon');
        
        snooze(3);
        
        clicks--;
    }
    waitForImage(backBtn, backBtnTolerant);
    test.log('Back button found');
    
    if (interrupt === 'bonusSummary') {
      test.log('Back without clicking');
      } else {
          clickImg(backBtn, backBtnTolerant);
          test.log('Clicked Back button')
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
    let isInBonus = false;
    while (true) {
        testSettings.imageNotFoundDebugging = false;
        try {
            if (findImage(pickBonusBtn)) {
                isInBonus = true;
                playBonusGame();
                test.log('Bonus game played');
            }
        } catch (e) {
            isInBonus = false;
            test.log('No Bonus icon');
        }
        
        try {
            if (findImage(backBtn, backBtnTolerant)) {
                snooze(1);
                test.log('Back button found');
                if (interrupt === 'fsSummary' && !isInBonus) {
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
            if (findImage(pickAPrize, pickAPrizeTolerant)) {
                clickImg(pickBonusBtn, pickBonusBtnTolerant);
                snooze(3);
                playBonusGame();
            break;
            }
        } catch (e) {
            test.log('after Bonus check');
        }
       
        try {

            if (findImage(questionBtn, questionsBtnTolerant)) {
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
        if (findImage(x50)) {
            multiplier = 50;
            test.log('multiplier: ' + multiplier);
            return multiplier;
        }
    } catch (e) {
        try {
            testSettings.imageNotFoundDebugging = false;
            if (findImage(x15)) {
                multiplier = 15;
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
    
    return 0;
}




