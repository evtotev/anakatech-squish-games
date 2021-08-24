source(findFile("scripts", "globalFunctions.js"));

function openGame(id) {
    //Sheldon 
    startBrowser(`http://sheldon.anakatech.com/syndication_framework/games/${id}/web-mobile/?gameId=${id}&cheatIndex=&playerId=1&audio=3&enableHistory=1&forceMock=0&playMode=1&brandId=7&country=GB&currency=EUR&customerId=100&depositButton=&jurisdiction=uk&language=en&lobbyURL=http://sheldon.anakatech.com/menu&maxBet=20000&minBet=1&autoplayRounds=&defaultBet=100&injectResponse=&securityToken=851DB11BBD90A533977005D86711619A&serverURL=https://gs-tests.winomania.co.uk/game&isGameHistory=&pfrButton=true&pfrPromoRounds=`);
    //Test32
    //    startBrowser(`https://test32.netomed.local/syndication_framework/games/${id}/web-mobile/?gameId=${id}&cheatIndex=&playerId=108&forceMock=0&audio=3&autoplayRounds=&brandId=7&country=UK&currency=EUR&customerId=100&defaultBet=100&depositButton=&injectResponse=&isGameHistory=&jurisdiction=gb&keepAliveInterval=&keepAliveURL=&language=en&lobbyURL=https://test32.netomed.local/menu&maxBet=2000&minBet=1&pfrButton=true&pfrPromoRounds=&playMode=1&realityCheckInterval=60000&realityCheckStartTime=60000&securityToken=851DB11BBD90A533977005D86711619A&serverURL=https://gs-tests.winomania.co.uk/game&enableHistory=1`);
    //    activateBrowserTab(waitForObject(names.sF275BrowserTab));
    //w88
    //    startBrowser(`http://casino.w88uat.com/sportbooks/ankt?language=en&game_code=${id}&op=W88&ticket=0DFEDF2B-47E9-4FE7-A8F4-DEEA92DB0F9D`);
}

function openGameWithCheat(id, cheat) {
    if (Array.isArray(cheat)) {
        cheat = cheat[0];
    }

    //Sheldon
    startBrowser(`http://sheldon.anakatech.com/syndication_framework/games/${id}/web-mobile/?gameId=${id}&cheatIndex=${cheat}&playerId=1&audio=3&enableHistory=1&forceMock=0&playMode=1&brandId=7&country=GB&currency=EUR&customerId=100&depositButton=&jurisdiction=uk&language=en&lobbyURL=http://sheldon.anakatech.com/menu&maxBet=20000&minBet=1&autoplayRounds=&defaultBet=100&injectResponse=&securityToken=851DB11BBD90A533977005D86711619A&serverURL=https://gs-tests.winomania.co.uk/game&isGameHistory=&pfrButton=true&pfrPromoRounds=`);
    //Test32
    //    startBrowser(`https://test32.netomed.local/syndication_framework/games/${id}/web-mobile/?gameId=${id}&cheatIndex=${cheat}&playerId=108&forceMock=0&audio=3&autoplayRounds=&brandId=7&country=UK&currency=EUR&customerId=100&defaultBet=100&depositButton=&injectResponse=&isGameHistory=&jurisdiction=gb&keepAliveInterval=&keepAliveURL=&language=en&lobbyURL=https://test32.netomed.local/menu&maxBet=2000&minBet=1&pfrButton=true&pfrPromoRounds=&playMode=1&realityCheckInterval=60000&realityCheckStartTime=60000&securityToken=851DB11BBD90A533977005D86711619A&serverURL=https://gs-tests.winomania.co.uk/game&enableHistory=1`);
    //    activateBrowserTab(waitForObject(names.sF275BrowserTab));
}