import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "scratch_functions.js"));
source(findFile("scripts", "balanceVerifications_scratch.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

//check icon image

function main()
{
    //clearCacheAndOpenGame(217, 329);
        
    openGame('construct2',217,'329','no');
    
    const totalBet = getTotalBet();
    const oldBalance = getBalance();
    
    play();
    
    test.imageNotPresent(icon, {tolerant: 99});
    snooze(5);
        
    clickImg(scratchAllBtn, scratchAllBtnTolerant);
    snooze(45);
    
    waitForImage(backBtn, backBtnTolerant);
    test.imagePresent(backBtn, backBtnTolerant);

    snooze(3);
    
//    mouseClick(waitForImage(backBtn, backBtnTolerant));
//    mouseMove(waitForObject(names.canvas), 0, 0);
//    mouseClick(waitForImage("back",{
//    tolerant:true,
//    	maxScale:106,
//    	threshold:82.415,
//    	minScale:100,
//    	multiscale:true
//    }));
//    mouseClick(waitForImage("back",{
//    tolerant:true,
//    	maxScale:106,
//    	threshold:82.415,
//    	minScale:100,
//    	multiscale:true
//    }));
//    mouseClick(waitForImage("image", { tolerant:true,maxScale:101,threshold:84.567,minScale:100,multiscale:true }));
//    waitForImage("image",{
//    tolerant:true,
//    	maxScale:101,
//    	threshold:84.566,
//    	minScale:100,
//    	multiscale:true
//    });

    clickImg(backBtn, backBtnTolerant);
//    activateBrowserTab(waitForObject(names.game_tab));
//    mouseClick(waitForObject(names.canvas), 859, 834);

//    mouseClick(waitForImage("image", { tolerant:true,maxScale:101,threshold:84.571,minScale:100,multiscale:true }));
//snooze(2);
//    clickImg(backBtn, backBtnTolerant);
//    doubleClick(waitForImage(backBtn, backBtnTolerant));
    test.compare(totalBet, 150);
    
    const newBalance = getBalance();
    const totalWin = getTotalWin();
    
    verifyBalance(totalBet,oldBalance,newBalance,totalWin);
    
//    function playBonusGame() {
//        
//    }
}

