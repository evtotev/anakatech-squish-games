import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "verifications.js"));

function main()
{
    //clearCacheAndOpenGame(150,'');
    
    openGame('cocos',150,'','no');
    
    clickStartButton();
    
    verifyHUDvalues("€1", "€0.04", "25");
}
