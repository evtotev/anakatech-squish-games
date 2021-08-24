import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "verifications.js"));


function main()
{
    //clearCacheAndOpenGame(275);
     
    openGame('construct2',275,'','no');
    
    clickStartButton();
    
    verifyHUDvalues("€20", "€1", "20");
}
