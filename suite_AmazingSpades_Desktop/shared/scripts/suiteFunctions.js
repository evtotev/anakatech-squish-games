source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));

function select4Horses() {
    let clicks = 4;
    while(clicks > 0){
        waitForImage(questionBtn, questionsBtnTolerant);
        clickImg(questionBtn, questionsBtnTolerant);
        test.log("clicked");
        snooze(8);
        
        clicks--;
    }
    
    waitForImage(startBtn, startBtnTolerant);
}

function enterFSRouns() {
    waitForImage(startBtn, startBtnTolerant);
    clickImg(startBtn, startBtnTolerant);
}

function playBonusGame() {
    let multiplier = 0;
    clickImg(trophyIcon, trophyIconTolerant);
    test.log('Clicked trophy icon');

    waitForImage(backBtn, backBtnTolerant);
   
    multiplier = getMultiplier();

    clickImg(backBtn, backBtnTolerant);
    test.log('Clicked Back button');
    
    return multiplier;
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
            if (findImage(trophyIcon, trophyIconTolerant)) {
                isInBonus = true;
                playBonusGame();
                test.log('Bonus game played');
            }
        } catch (e) {
            isInBonus = false;
            test.log('No trophy icon');
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
            if (findImage(trophyIcon, trophyIconTolerant)) {
                playBonusGame();
            break;
            }
        } catch (e) {
            test.log('after Bonus check');
        }
       
        try {

            if (findImage(questionBtn, questionsBtnTolerant)) {
                select4Horses();
                enterFSRouns();
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

function clickBackBtn() {
    activateBrowserTab(waitForObject(names.game_tab));
    mouseClick(waitForObject(names.canvas), 859, 834);
}

//function handleBonusFSGames() {
//    test.log('before checks');
//    try {
//        testSettings.imageNotFoundDebugging = false;
//        trophyIconTolerant.timeout = 6000;
//        waitForImage(trophyIcon, trophyIconTolerant);
//        playBonusGame();
//    } catch (e) {
//        
//    }
//    
//    try {
//        testSettings.imageNotFoundDebugging = false;
//        questionsBtnTolerant.timeout = 5000;
//        if (waitForImage(questionBtn, questionsBtnTolerant)) {
//            playFS();
//            snooze(3);
//        }
//    } catch (e) {
//        
//    }
//}

//    function play() {

    
//    waitForImage(backBtn, {timeout: 200000});
//    clickImg(backBtn, backBtnTolerant);
//}
//function clearGameSession() {
//    click(names.game_session);
//}






