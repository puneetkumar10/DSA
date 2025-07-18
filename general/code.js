// push into element
// create a checkpoint 
// can go back to any checkpoint (Remove remaining checkpoint)
// element exist check
// classes and objects -- multiple instances 


let arr1 = [];
let cpMap = {};

function pushEle(ele) {
    arr1.push(ele);
}
function createCP(index) {
    cpMap[index] = [...arr1];
}
function restoreToCP(index){
    arr1 =cpMap[index]
    cpMap = {};
}
function eleExists(ele) {
    return arr1.includes(ele);
}

pushEle(2);
pushEle(5);
pushEle(7);

createCP(2);
console.log("arr1 (1): ", arr1);
console.log("cpMap (1): ", cpMap);

pushEle(4);
createCP(3);
console.log("arr1 (2): ", arr1);
console.log("cpMap (2): ", cpMap);

restoreToCP(2);
console.log("arr1 (3): ", arr1);
console.log("cpMap (3): ", cpMap);

let resp1 = eleExists(4);
console.log("ele exist call 1" , resp1)


let resp2 = eleExists(7);
console.log("ele exist call 2" , resp2)

// [2,5,7,4] , 

/**
 * 
 *  {
 * 2 : [2,5,7] , 
 * 3 : [2,5,7,4]
  * }
 */
