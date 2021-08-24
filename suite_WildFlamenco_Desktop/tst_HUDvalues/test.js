import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "verifications.js"));

function main()
{
    //clearCacheAndOpenGame(282,'');
        
    openGame('construct2',282,'','no');
    
    clickStartButton();
    
    verifyHUDvalues("€1", "€0.05", "20");
}
