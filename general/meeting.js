let days = 10
let meetings = [[5,7],[1,3],[9,10]]

let count = 0
let meetMap = {}
if (meetings.length == 0) {
    console.log("No meet")
} else {
    for (let i = 0 ; i < meetings.length ; i++){
        let start  = meetings[i][0]
        let end  = meetings[i][1]

        for(let k = start ; k <= end ; k++) {
            if (meetMap.hasOwnProperty(k)) {
                meetMap[k] = meetMap[k] + 1 
            }else {
                meetMap[k] = 1
            }
        }
    }
    console.log(meetMap)
}
for (let index = 1 ; index <= days ; index++) {
    if(!meetMap.hasOwnProperty(index)) {
        count++
    }
}

console.log(count)
