function goToTestEnvironment() {
    //Sheldon
    startBrowser("http://sheldon.anakatech.com/menu/");
    //    activateBrowserTab(waitForObject(names.games_menu_environment));
    //Test32
    //    startBrowser("https://test32.netomed.local/menu");
    //    activateBrowserTab(waitForObject(names.games_menu_environment));
}

/**
 * @SuppressWarnings(unused)
 */
function openGame(gameType, id, cheat, juris) {
    const framework = {
        'cocos': `games/${id}/web-mobile/`,
        'construct2': 'games_c2.html'
    }
    const jurisdiction = {
        'uk': `gb`,
        'no': ''
    }
    
    let cheatId = '';
    if (cheat) {
        if (Array.isArray(cheat)) {
            cheatId = cheat[0];
        } else {
            cheatId = cheat;
        }
    }
    //Sheldon
    //let app = startBrowser(`http://sheldon.anakatech.com/syndication_framework/${framework[gameType]}?gameId=${id}&cheatIndex=${cheatId}&playerId=15&forceMock=0&enableHistory=1&audio=3&autoplayRounds=&brandId=7&country=UK&currency=EUR&customerId=100&defaultBet=100&depositButton=&injectResponse=&isGameHistory=&jurisdiction=${jurisdiction[juris]}&keepAliveInterval=&keepAliveURL=&language=en&lobbyURL=http://sheldon.anakatech.com/menu&maxBet=2000&minBet=1&pfrButton=true&pfrPromoRounds=&playMode=1&realityCheckInterval=60000&realityCheckStartTime=60000&securityToken=851DB11BBD90A533977005D86711619A&serverURL=https://gs-tests.winomania.co.uk/game`);
    //Test32
    //    startBrowser(`https://test32.netomed.local/syndication_framework/games_c2.html?gameId=${id}&cheatIndex=${cheat}&playerId=110&forceMock=0&enableHistory=1&audio=3&autoplayRounds=&brandId=7&country=UK&currency=EUR&customerId=100&defaultBet=100&depositButton=&injectResponse=&isGameHistory=&jurisdiction=gb&keepAliveInterval=&keepAliveURL=&language=en&lobbyURL=https://test32.netomed.local/menu&maxBet=2000&minBet=1&pfrButton=true&pfrPromoRounds=&playMode=1&realityCheckInterval=60000&realityCheckStartTime=60000&securityToken=851DB11BBD90A533977005D86711619A&serverURL=https://gs-tests.winomania.co.uk/game`);
    //    activateBrowserTab(waitForObject(names.sF275BrowserTab));    
    
    startBrowser(`http://sheldon.anakatech.com/syndication_framework/${framework[gameType]}?gameId=${id}&cheatIndex=${cheatId}&playerId=15&forceMock=0&enableHistory=1&audio=3&autoplayRounds=&brandId=7&country=UK&currency=EUR&customerId=100&defaultBet=100&depositButton=&injectResponse=&isGameHistory=&jurisdiction=${jurisdiction[juris]}&keepAliveInterval=&keepAliveURL=&language=en&lobbyURL=http://sheldon.anakatech.com/menu&maxBet=2000&minBet=1&pfrButton=true&pfrPromoRounds=&playMode=3&realityCheckInterval=60000&realityCheckStartTime=60000&securityToken=851DB11BBD90A533977005D86711619A&serverURL=https://gs-tests.winomania.co.uk/game`);
    
}
/**
 * @SuppressWarnings(unused)
 */
function openGame2(gameType, id, cheat, juris) {
    const framework = {
        'cocos': `games/${id}/web-mobile/`,
        'construct2': 'games_c2.html'
    }
    const jurisdiction = {
        'uk': `gb`,
        'no': ''
    }
    
    let cheatId = '';
    if (cheat) {
        if (Array.isArray(cheat)) {
            cheatId = cheat[0];
        } else {
            cheatId = cheat;
        }
    }
    //Sheldon
    startBrowser(`http://sheldon.anakatech.com/syndication_framework/${framework[gameType]}?gameId=${id}&cheatIndex=${cheatId}&playerId=15&forceMock=0&enableHistory=1&audio=3&autoplayRounds=&brandId=7&country=UK&currency=EUR&customerId=100&defaultBet=100&depositButton=&injectResponse=&isGameHistory=&jurisdiction=${jurisdiction[juris]}&keepAliveInterval=&keepAliveURL=&language=en&lobbyURL=http://sheldon.anakatech.com/menu&maxBet=2000&minBet=1&pfrButton=true&pfrPromoRounds=&playMode=1&realityCheckInterval=60000&realityCheckStartTime=60000&securityToken=851DB11BBD90A533977005D86711619A&serverURL=https://gs-tests.winomania.co.uk/game`);
    //Test32
    //    startBrowser(`https://test32.netomed.local/syndication_framework/games_c2.html?gameId=${id}&cheatIndex=${cheat}&playerId=110&forceMock=0&enableHistory=1&audio=3&autoplayRounds=&brandId=7&country=UK&currency=EUR&customerId=100&defaultBet=100&depositButton=&injectResponse=&isGameHistory=&jurisdiction=gb&keepAliveInterval=&keepAliveURL=&language=en&lobbyURL=https://test32.netomed.local/menu&maxBet=2000&minBet=1&pfrButton=true&pfrPromoRounds=&playMode=1&realityCheckInterval=60000&realityCheckStartTime=60000&securityToken=851DB11BBD90A533977005D86711619A&serverURL=https://gs-tests.winomania.co.uk/game`);
    //    activateBrowserTab(waitForObject(names.sF275BrowserTab));
}

function clearCache(id) {
    goToTestEnvironment();
    
    gamesMenuSelectOne();
    
    findGameById(`${id}`);
    
    clearGameSession();
    
    closeCurrentTab();
    
    snooze(4);
}

function clearCacheAndOpenGame(id, cheatId) {
    goToTestEnvironment();
    
    gamesMenuSelectOne();
    
    findGameById(`${id}`);
    
    clearGameSession();
    
    enterCheat(`${cheatId}`);
    
    test.compare(waitForObjectExists(names.gamesMenuSelectOne_2).domPath, "DOCUMENT.HTML1.BODY1.DIV1.SECTION1.DIV2.DIV3.DIV5.SELECT1");

    removeJurisdiciton();
    
    openGameOnNewTab();
}

function clearCacheAndOpenGameDE(id, cheatId) {
    goToTestEnvironment();
    
    gamesMenuSelectOne();
    
    gamesMenuSelectOne_2();
    
    findGameById(`${id}`);
    
    clearGameSession();
    
    enterCheat(`${cheatId}`);
    
    openGameOnNewTab();
}

function findGameById(id) {
    typeText(waitForObject(names.search_game_field), id);
}

function gamesMenuSelectOne() {
    click(names.gamesMenuSelectOne);
    for(let i = 0; i <= 14; i++){
        nativeType("<Down>");
    }
}

function gamesMenuSelectOne_2(){
    click(names.gamesMenuSelectOne_2);
    nativeType("<Down>");
}

function removeJurisdiciton(){
    click(names.jurisdiction);
    nativeType("Up");
    nativeType("Up");
}

function enterCheat(cheatId) {
    typeText(waitForObject(names.cheats_field), cheatId);
}

function enterCheats(cheatId) {
    typeText(waitForObject(names.cheats_field), cheatId[0]);
}

function openGameOnNewTab() {
    click(names.selected_game);
    click(names.open_game_new_tab_btn);
}

function enterURL(id) {
    nativeType("<Alt+d>");
    snooze(0.5);
    nativeType(`http://sheldon.anakatech.com/syndication_framework/games_c2.html?gameId=${id}&cheatIndex=&playerId=1&forceMock=0&enableHistory=1&audio=3&autoplayRounds=&brandId=7&country=UK&currency=EUR&customerId=100&defaultBet=100&depositButton=&injectResponse=&isGameHistory=&jurisdiction=gb&keepAliveInterval=&keepAliveURL=&language=en&lobbyURL=http://sheldon.anakatech.com/menu&maxBet=2000&minBet=1&pfrButton=true&pfrPromoRounds=&playMode=1&realityCheckInterval=60000&realityCheckStartTime=60000&securityToken=851DB11BBD90A533977005D86711619A&serverURL=https://gs-tests.winomania.co.uk/game`);
    snooze(0.5);
    nativeType("<Return>");
    waitForObject("DOCUMENT");
}

function checkDontShowThisAgain(image, tolerant) {
    clickImg(image, tolerant);
}

function clickStartButton() {
    startBtnTolerant.timeout = 35000;

    clickImg(startIntroBtn, startBtnTolerant);
}

function getTotalBet() {
    return parseToNumber(waitForObjectExists(names.total_bet).innerText);
}

function getTotalBetAbs() {
    return waitForObjectExists(names.total_bet).innerText;
}

function getBet() {
    return parseToNumber(waitForObjectExists(names.bet_currency).innerText);
}

function getAutoGames() {
    return parseToNumber(waitForObjectExists(names.autoPlayCounter).innerText);
}

function getBetAbs() {
    return waitForObjectExists(names.bet_currency).innerText;
}

function getLinesAmount() {
    return Number(waitForObjectExists(names.lines).innerText);
}

function getTotalWin() {
    return parseToNumber(waitForObjectExists(names.total_win).innerText);
}

function getBalance() {
    return parseToNumber(waitForObjectExists(names.balance).innerText);
}

function getSpinWin() {
    return parseToNumber(waitForObjectExists(names.spin_win).innerText);
}

function getFsSpinWin(){
    return parseToNumber(waitForObjectExists(names.fs_spin_win).innerText);
}

function getFreeSpins() {
    return waitForObjectExists(names.free_spins).innerText;
}

function getGameSession() {
    return waitForObjectExists(names.game_session).innerText;
}

function clickPlayButton() {
    click(names.play_btn);
}

function clickStopButton() {
    click(names.stop_btn);
}

function clickPlayButtonImage(){
    clickImg(playBtn);
}

function clickStopButtonImage(){
    clickImg(stopBtn);
}

function doubleClickPlayButton() {
    doubleClick(names.play_btn);
}

function checkIfDecimal(newTotalBet) {
    if (newTotalBet.includes('.')) {
        test.log("newTotalBet: " + newTotalBet);

        return newTotalBet = parseToNumber(newTotalBet);
    }
    return newTotalBet;
}

function checkIfNotDecimal(newTotalBet) {
    if (newTotalBet.includes('.')) {
        test.log("Is decimal");
    } else {
    return newTotalBet = parseToNumber(newTotalBet);
    }
}

function clearGameSession() {
    click(names.selected_game);
    click(names.clear_game_session_btn);
    snooze(5);
}

function closeCurrentTab() {
    waitForObject("DOCUMENT");
    snooze(1);
    nativeType("<Ctrl+w>");
}

function refreshTab() {
    nativeType("<Ctrl+r>");
}

function refreshTabAndCheats() {
    snooze(2);
    closeCurrentTab();
    snooze(1);
    click(names.clearCheat)
    openGameOnNewTab();
    snooze(3);
}

function refreshBrowserTab(gameType, gameId) {
    closeCurrentTab();
    snooze(3);
    openGame(gameType, gameId);
}

function reloadBrowserTab(mobile) {
    waitForObject("DOCUMENT");
    snooze(1);
    nativeType("<Alt+d>");
    evalJS(activeBrowserTab(), "window.location.reload()");
    
    if (mobile === 'Yes'){
        closeGameSoundPopUp();
    }
}

function getErrorTitleWrongCheat() {
    test.compare(waitForObjectExists(names.error_title).innerText, "999 - Wrong cheat for the game");

    return waitForObjectExists(names.error_title).innerText;
}

function getErrorTitle() {
    test.compare(waitForObjectExists(names.error_title).innerText, "Field Required");

    return waitForObjectExists(names.error_title).innerText;
}

function getErrorTitleLossLimit() {
    test.compare(waitForObjectExists(names.error_title).innerText, "Loss limit");

    return waitForObjectExists(names.error_title).innerText;
}

function closeError() {
    //click(names.close_error);
    click(waitForObjectExists(names.close_error).simplifiedInnerText, "Close");
}

function closeErrorImg(){
    clickImg(closeErrorBtn, closeErrorBtnTolerant);
}

function clickStartFS() {
    clickImg(startBtn, startBtnTolerant);
}

function click(element, tolerant) {
    try {
        (tolerant) ? mouseClick(waitForObject(element, tolerant)) : mouseClick(waitForObject(element));
    } catch (e) {
        return;
    }
}

function clickImg(element, tolerant) {

    (tolerant) ? mouseClick(waitForImage(element, tolerant)) : mouseClick(waitForImage(element));

    moveMouse(0, 0);
}

function moveMouse(x, y) {
    mouseMove(waitForObject(names.canvas), x, y);
}

function parseToNumber(money) {
    try {
        (money.includes('.')) ? money = Number((money).match(/\d+/g).join("")) : money = Number( (money).match(/\d+/g).join("")) * 100;
    } catch (e) {
        money = 0;
    } 

    return money;
}

function spamBetButtons(bet) {
    //click(names.bet_more);
    clickImg(betDecrease);
    test.compare(getBet(), bet);
    test.log('bet: ' + bet);

    bet = getBet();

    //click(names.bet_less);
    //clickImg(betIncrease);
    //test.compare(getBet(), bet);
    //test.log('bet: ' + bet);
}

function spamInfoPayButtons(bet) {
    clickImg(infoPageBtn);
    test.log('InfoPage clicked');

    clickImg(payTableBtn);
    test.log('PayTable clicked');
}

function spamLinesButtons(lines) {
    click(names.lines_less);
    test.compare(getLinesAmount(), lines);
    test.log('lines:' + lines);

    click(names.lines_more);
    test.compare(getLinesAmount(), lines);
    test.log('lines:' + lines);
}

function spamAutoTurboButtons() {
    click(names.turbo_button, { timeout: 1000 });
    test.imagePresent(playBtn, playBtnTolerant);
    test.log('turbo not presented');

    click(names.autoplay_btn, { timeout: 1000 });
    test.imagePresent(playBtn, playBtnTolerant);
    test.log('auto not presented');
}

function startAutoplay() {
//    const gamesAmountBtn = {
//        10: names.auto_games_10,
//        25: names.auto_games_25,
//        50: names.auto_games_50,
//        100: names.auto_games_100
//    };
    
    click(names.autoplay_btn);
    click(names.auto_games_10);

//    const lossLimit = getTotalBet() / 100 * gamesAmount + gamesAmount;
//
//    typeText(waitForObject(names.loss_limit), lossLimit);
//
//    click(gamesAmountBtn[gamesAmount]);
}

function startAutoplayWihoutLimit(gamesAmount) {
    const gamesAmountBtn = {
        10: names.auto_games_10,
        25: names.auto_games_25,
        50: names.auto_games_50,
        100: names.auto_games_100
    };
    click(names.autoplay_btn);

    click(gamesAmountBtn[gamesAmount]);
}

function clearCheatOpenGame(){
    closeCurrentTab();
    snooze(3);
    click(names.clearCheat);
    openGameOnNewTab();
}

