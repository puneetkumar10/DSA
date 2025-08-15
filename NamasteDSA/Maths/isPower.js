var isPowerOfThree = function(n) {
    if (n < 1) return false

    while (n % 3 == 0) {
        n = n / 3;
    }

    return n === 1;
};

var isPowerOfTwo = function(n) {
    if (n < 1) return false;

    while (n % 2 == 0) {
        n = n / 2;
    }

    return n === 1;
};

var isPowerOfFour = function(n) {
    if (n < 1) return false

    while (n % 4 == 0) {
        n = n / 4;
    }

    return n === 1;
};