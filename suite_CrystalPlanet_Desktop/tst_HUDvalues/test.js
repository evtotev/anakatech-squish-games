import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "verifications.js"));

function main()
{
    //clearCacheAndOpenGame(253, '');
        
    openGame('cocos',253,'','no');
    
    clickStartButton();
    
    verifyHUDvalues("€1", "€0.04", "25");
}
