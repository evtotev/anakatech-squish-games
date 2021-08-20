source(findFile("scripts", "globalFunctions.js"));

function verifyBalance(totalBet, oldBalance, newBalance, totalWin) {
    test.compare(newBalance, oldBalance - totalBet + totalWin);
}

function verifyBalanaceWhenMaxWin(newBalance, oldBalance, totalBet, bet, multiplier, cards) {
    test.compare(newBalance, oldBalance - totalBet + (bet * multiplier * cards));
}

function verifyBalanceWhenLose(newBalance, oldBalance, totalBet) {
    test.compare(newBalance, oldBalance - totalBet);
}

function verifyBalanceWhenWin(newBalance, oldBalance, totalBet, bet, multiplier) {
    test.compare(newBalance, oldBalance - totalBet + (bet * multiplier));
}
