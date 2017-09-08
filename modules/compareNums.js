var guesses = function (playerGuessArray, RandyNum) {
    var resultArray = []
    for(var i = 0; i < playerGuessArray.length; i++){
        if (playerGuessArray[i] > RandyNum) {
            resultArray.push('TOO HIGH');
        } else if (playerGuessArray[i] < RandyNum) {
            resultArray.push('TOO LOW'); 
        } else {
            resultArray.push('DING DING DING');
        }
}
        return resultArray;
};

module.exports = guesses;