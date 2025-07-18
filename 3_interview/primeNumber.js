// find prime numbers between 1 to 100 
let isPrime = false;
let resp = []
for (let num = 2 ; num <= 100 ; num++) {
    isPrime = true;
    for (let i = 2 ; i < Math.sqrt(num) ; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        resp.push(num);
    }
}

console.log("response is : ", resp)