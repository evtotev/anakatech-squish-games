source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));

function pickBonus() {
    clickImg(pickBonusBtn);
}

function playBonusGame(interrupt) {
    testSettings.imageNotFoundDebugging = false;
//    clickImg(spinBtn);
//    
//    snooze(100);

    while(findImage(spinBtn)){
        clickImg(spinBtn);
        
        try {
            if (findImage(backBtn, backBtnTolerant)) {
                test.log('Back button found');
                
                if (interrupt === 'bonusSummary') {
                    test.log('Back without clicking');
                    break;
                    } else {
                        clickImg(backBtn, backBtnTolerant);
                        test.log('Clicked Back button')
                        break;
                    } 
            }
        } catch (e) {
            test.log('Still playing bonus');
        }
  
    }
   
//    waitForImage(backBtn, backBtnTolerant);
//    test.log('Back button found');
    
//    if (interrupt === 'bonusSummary') {
//      test.log('Back without clicking');
//      } else {
//          clickImg(backBtn, backBtnTolerant);
//          test.log('Clicked Back button')
//      } 
}

function handleBonusFSGames() {
    test.log('before checks');
    testSettings.imageNotFoundDebugging = false;
    while (true) {
        try {
            if (findImage(startBtnBonus, startBtnBonusTolerant)) {
                clickImg(startBtnBonus, startBtnBonusTolerant);
                snooze(3);
                playBonusGame();
            break;
            }
        } catch (e) {
            test.log('after Bonus check');
        }
       
        
        try {
            if (findImage(playBtn, playBtnTolerant)) {
                break;
            }
        } catch (e) {
            test.log('after Play button check');
        }    
    }
}
