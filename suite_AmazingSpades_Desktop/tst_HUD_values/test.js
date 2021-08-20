import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "verifications.js"));


function main()
{
    //clearCacheAndOpenGame(217, '');
        
    openGame('construct2',217,'','no');
    
    verifyHUDvalues("€1.50", "€0.50", "3");
}
