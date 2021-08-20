source(findFile("scripts", "globalFunctions.js"));

function verifyHUDvalues(totalBet, bet, lines) {
    test.compare(waitForObjectExists(names.total_bet).innerHTML, totalBet);
    test.compare(waitForObjectExists(names.bet_currency).innerHTML, bet);
    test.compare(waitForObjectExists(names.lines).innerHTML, lines);
}

function verifyTotalBetMobile(totalBet) {
    test.compare(waitForObjectExists(names.total_bet).innerHTML, totalBet);
}

function verifyTotalBetMobileScratch(totalBet) {
    test.compare(waitForObjectExists(names.totalBet).innerHTML, totalBet);
}

function verifyBetAndLines(bet, lines) {
    test.compare(waitForObjectExists(names.bet_currency).innerHTML, bet);
    test.compare(waitForObjectExists(names.lines).innerHTML, lines);
}

function verifyBetAndCards(bet, cards) {
    test.compare(waitForObjectExists(names.betMobile).innerHTML, bet);
    test.compare(waitForObjectExists(names.linesMobile).innerHTML, cards);
}

function verifyFSFields(totalBet) {
    test.compare(waitForObjectExists(names.free_spins).visible, true); // not for mobile
    test.compare(waitForObjectExists(names.fs_multiplier).visible, true);// not for mobile
    test.compare(waitForObjectExists(names.fs_spin_win).visible, true); 
    test.compare(waitForObjectExists(names.total_win).visible, true);
    test.compare(waitForObjectExists(names.total_bet).visible, true);
    //test.compare(parseToNumber(waitForObjectExists(names.total_bet).innerText), totalBet);
}

function verifyFSFieldsMobile() {
    test.compare(waitForObjectExists(names.fs_spin_win).visible, true); 
    test.compare(waitForObjectExists(names.total_win).visible, true);
    test.compare(waitForObjectExists(names.balance).visible, true);
}