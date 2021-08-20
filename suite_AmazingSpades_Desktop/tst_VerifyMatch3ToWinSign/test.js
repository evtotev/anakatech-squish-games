import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js")); 
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main()
{
    //clearCacheAndOpenGame(217, '');
        
    openGame('construct2',217,'','no');

    waitForImage(match3ToWin,{
    maxScale:110,
    	minScale:49,
    	occurrence:18
    });
    test.log('Sign noticed')
}

