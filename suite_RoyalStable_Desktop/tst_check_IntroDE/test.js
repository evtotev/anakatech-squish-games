import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main()
{
    openGame('construct2',275,'','no');
    
    waitForImage(introDE,{
    maxScale:106
    });
    test.log('Intro DE found')
    
    waitForImage(introDE2,{
    maxScale:108,
    	occurrence:2
    });
    test.log('Intro DE2 found')
}
