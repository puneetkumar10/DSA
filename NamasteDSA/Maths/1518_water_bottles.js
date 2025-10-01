var numWaterBottles = function(numBottles, numExchange) {
    return numBottles + Math.floor((numBottles - 1) / (numExchange - 1));
};