var randy =function (gameMode){
    if (gameMode === "Easy"){
        return Math.round(Math.random()* (50))
    } else if (gameMode === "Medium"){
        return Math.round(Math.random()* (100))
    } else if (gameMode === "Hard"){
        return Math.round(Math.random()* (1000))
    } else {return "not allowed!"
    }
}
module.exports = randy;