source(findFile("scripts", "globalFunctions.js"));

function clickPlayForMeButton() {
    click(names.play_for_me_btn);
}

function play() {
    click(names.play_btn);
    click(names.play_for_me_btn);
}