import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js")); 
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

//could try adding a case for changing the number of cards

function main()
{
    //clearCacheAndOpenGame(217, '');
        
    openGame('construct2',217,'','no');

    verifyDefaultIcons(defaultIcons, defaultIconsTolerant);
}

