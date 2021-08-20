source(findFile("scripts", "globalFunctions.js"));

let widthMobile = "1334";
let lengthMobile = "750";

function configureMobileDevice() {
    waitForObject("DOCUMENT");
// Open dev tools:
    nativeType("<Ctrl+Shift+i>");
    snooze(3);
// Toggle device toolbar:
    nativeType("<Ctrl+Shift+m>");
    snooze(1);
// Configure device:
// Go to and expand dropdown:
    nativeType("<Alt+d>");
    snooze(0.5);
    nativeType("<Tab>");
    snooze(0.5);
    nativeType(" ");
    snooze(0.5);
//// Select iPad Pro:
//    for (let i = 1; i <= 7; i++) {
//      nativeType("<Down>");
//      snooze(0.5);
//    }
//    nativeType("<Return>");
//    snooze(0.5);

    nativeType("<Down>");
    snooze(0.5);
    nativeType("<Return>");
    snooze(1.5);
    nativeType("<Tab>");
    snooze(1.5);
    nativeType(widthMobile);
    nativeType("<Tab>");
    snooze(1.5);
    nativeType(lengthMobile);
    
    evalJS(activeBrowserTab(),"window.location.reload()");
}

function configureMobileDevicePortait() {
    waitForObject("DOCUMENT");
// Open dev tools:
    nativeType("<Ctrl+Shift+i>");
    snooze(3);
// Toggle device toolbar:
    nativeType("<Ctrl+Shift+m>");
    snooze(1);
// Configure device:
// Go to and expand dropdown:
    nativeType("<Alt+d>");
    snooze(0.5);
    nativeType("<Tab>");
    snooze(0.5);
    nativeType(" ");
    snooze(0.5);
//// Select iPad Pro:
//    for (let i = 1; i <= 7; i++) {
//      nativeType("<Down>");
//      snooze(0.5);
//    }
//    nativeType("<Return>");
//    snooze(0.5);

    nativeType("<Down>");
    snooze(0.5);
    nativeType("<Return>");
    snooze(1.5);
    nativeType("<Tab>");
    snooze(1.5);
    nativeType(lengthMobile);
    nativeType("<Tab>");
    snooze(1.5);
    nativeType(widthMobile);
    
    evalJS(activeBrowserTab(),"window.location.reload()");
}

function switchToDesktop() {
    nativeType("<Ctrl+Shift+i>");
    snooze(1);
    nativeType("<Ctrl+Shift+i>");
    snooze(1);
    nativeType("<Ctrl+Shift+m>");
    snooze(1);
    nativeType("<Ctrl+r>");
    snooze(5);
}

function switchToMobile() {
    openDevTools();
    
    testSettings.imageNotFoundDebugging = false;
    
    try {
    closeGameSoundPopUp();
    } catch (e) {
        
    }
}

function switchToMobileNoSound() {
    openDevTools();
}

function openDevTools() {
    waitForObject("DOCUMENT");
    nativeType("<Ctrl+Shift+i>");
    snooze(1);
    nativeType("<Alt+d>");
    evalJS(activeBrowserTab(),"window.location.reload()");
    snooze(0.5);
}

function setTotalBetMax() {
    //clickImg(hamburgerBtn);
    //clickImg(betSlider, betSliderTolerant);
    click(names.rangeBetRange)
    nativeType("<Right>");
    nativeType("<Right>");
    nativeType("<Right>");
    nativeType("<Right>");
    nativeType("<Right>");
    nativeType("<Right>");
    nativeType("<Right>");
    nativeType("<Right>");
    nativeType("<Right>");
    nativeType("<Right>");
    nativeType("<Right>");
    nativeType("<Right>");
    nativeType("<Right>");
    nativeType("<Right>");
    //clickImg(settingsExitBtn);
}

function reloadBrowserTabMobile() {
    waitForObject("DOCUMENT");
    snooze(1);
    nativeType("<Alt+d>");
    evalJS(activeBrowserTab(),"window.location.reload()");
    closeGameSoundPopUp();
}

//function closeGameSoundPopUp() {
//    waitForImage(noBtn, gameSoundTolerant);
//    clickImg(noBtn, gameSoundTolerant);
//    
//    nativeType("<Escape>");    
//}

function closeGameSoundPopUp() {
    try {
        waitForImage(noBtn, gameSoundTolerant);
        clickImg(noBtn, gameSoundTolerant);
    } catch (e){
    nativeType("<Escape>");    
    }
}

function pressStartBtn() {
    startBtnTolerant.timeout = 30000;

    try {
        clickImg(startIntroBtn, startBtnTolerant);
    } catch (e) {
        return;
    }
}

function pressPlayBtn() {
    clickImg(playBtn, playBtnTolerant);
}

function pressPlayForMe(){
    clickImg(playForMeBtn);
}


function startAutoplayMobile(turboMode) {
    clickImg(hamburgerBtn);
    
    clickImg(autoPlaySettings, autoPlaySettingsTolerant);
    snooze(2);
    clickImg(autoPlaySlider, autoPlaySliderTolerant);
    nativeType("<Right>");
    
    click(names.lossLimitNumber);

    const lossLimit = getTotalBet() / 100 * 10 + 10;

    typeText(waitForObject(names.lossLimitNumber), lossLimit);
    
    if (turboMode === 'Turbo On') { // proverqvam dali raboti
        test.log('Turbo on');
        clickImg(turboBtnMobile);
    }

    clickImg(settingsExitBtn, settingsExitBtnTolerant);
}

function startAutoplayMobileNoLimit(turboMode) {
    clickImg(hamburgerBtn);
    
    clickImg(autoPlaySettings, autoPlaySettingsTolerant);
    snooze(2);
    clickImg(autoPlaySlider, autoPlaySliderTolerant);
    nativeType("<Right>");
        
    if (turboMode === 'Turbo On') {
        test.log('Turbo on');
        clickImg(turboBtnMobile);
    }

    clickImg(settingsExitBtn, settingsExitBtnTolerant);
}

function clickHamburgerBtn() {
    clickImg(hamburgerBtn)
}


