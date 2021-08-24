import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));


//doesn't click that fast

/**
 * @SuppressWarnings(unused)
*/
function main() 
{
    openGame('construct2',275,'!692,,,,,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830','no');

    clickStartButton();
    
    startAutoplay();
    
    let clicks = 4;
    questionsBtnTolerant.timeout = 5000;
    while(true){
        testSettings.imageNotFoundDebugging = false;
        try {
            if (waitForImage(questionBtn, questionsBtnTolerant)) {
                clickImg(questionBtn, questionsBtnTolerant);
                clicks--;
                if (clicks === 1) {
                    break;
                }
            }
        } catch (e) {
            
        }
    }
    
//    waitForImage(startBtn, startBtnTolerant);
//   
//    enterFSRouns();
    
    playFS();
    
    while (true) {
        testSettings.imageNotFoundDebugging = false;
        
        try {
            if (findImage(playBtn, playBtnTolerant)) {
                break;
            }
        } catch (e) {

        }
    }

    test.imagePresent(playBtn);
}
