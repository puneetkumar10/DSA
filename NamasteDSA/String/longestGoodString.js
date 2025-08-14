var largestGoodInteger = function(num) {
    let max = "";

    for (let i = 0; i <= num.length - 3; i++) {
        if (num[i] === num[i+1] && num[i] === num[i+2]) {
            let triple = num.slice(i, i+3);
            if (max === "" || triple > max) {
                max = triple;
            }
        }
    }

    return max;
};