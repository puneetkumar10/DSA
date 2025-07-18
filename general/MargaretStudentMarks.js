let input1 = 3
let input2 = 5
let input3 = [ [75, 76, 65, 87, 87] , 
              [78, 76, 68, 56, 89] , 
              [67, 87, 78, 77, 65] ]
               
// let input1 = 3
// let input2 = 3
// let input3 = [ [50, 30, 70] , 
//               [30, 70, 99] , 
//               [99, 20, 30] ]

// output = [ 325, 299, 296 ]

// find minimum avg 
let minTotal = Infinity;
let minCol = 0;
for (let col = 0 ; col < input2 ; col ++) {  // columns
    let total = 0;
    for (let row = 0 ; row < input1 ; row ++) {
        console.log(input3[row][col])
        total += input3[row][col]
    }
    console.log("total is : ", total)
    if (total < minTotal) {
        minCol = col
        minTotal = total
    }
}

console.log("minimum avg is : ", minCol)
console.log("minimum avg is : ", minTotal)

// traverse all arrays and skip when column is 2 
let totalMarksNoAvgSub = 0;
let respArr = []
for (let i = 0 ; i < input1 ; i ++) {
    for (let j = 0 ; j < input2 ; j ++) {
        if (j == minCol) {
            continue;
        } else {
            totalMarksNoAvgSub += input3[i][j]
        }
    }
    respArr.push(totalMarksNoAvgSub);
    totalMarksNoAvgSub = 0
}

console.log("response : ", respArr)
