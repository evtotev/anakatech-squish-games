source(findFile("scripts", "globalFunctions.js"));

function verifyIntroScreenPresented(image, tolerant) {
    tolerant ? test.imagePresent(image, tolerant) : test.imagePresent(image);
}

function verifyIntroScreenNotPresented(image, tolerant) {
    tolerant ? test.imagePresent(image, tolerant) : test.imagePresent(image);
}

function verifyDefaultIcons(image, tolerant) {
   tolerant ? test.imagePresent(image, tolerant) : test.imagePresent(image);
}
