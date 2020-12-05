function getBowlingScore(pinsStr){
    var totalScore = 0;
    var currentPin = 0;
    var nextPin = 0;

    pins = pinsStr.split(",");

    for (i = 0; i < pins.length; i++) {
        currentPin = Number(pins[i])
        totalScore += currentPin

        if (i == pins.length-1) {
            continue
        }
        nextPin = Number(pins[i+1])

        // Strike Case
        if (currentPin == 10 && i < pins.length - 3) {
            totalScore += nextPin
            totalScore += Number(pins[i+2])
            continue
        } 

        // Spare Case
        if (currentPin + nextPin == 10 && currentPin != 0 && i < pins.length-2) {
            totalScore += Number(pins[i+2])
        }
    } 
    return totalScore
}
module.exports = getBowlingScore;