/** JAVASCRIPT 
1 setTimeout vs setImmediate vs setNextTick()
2 Execution context ??
3 If you have millions of records to fetch form db how will you store and fetch 
4 Also what are the security measures you will take
5 What all variable types are there ? 
6 Primitive and non primitive data types 
7 Middlewares ??
*/

/** CODING
1 Push all zero to he end of the array = [4,3,0,8,0,5,0,1,0]
*/

/**


async function printHello() {
    return new Promise ((resolve , reject) => {
        setTimeout(() => {
        console.log("hello");
        resolve("it must be printed after hello");
    } , 3000 ); 
    }) 
}
await printHello().then((resp) => console.log(resp)).catch((err) => console.error(" ERROR while resolving promise : " ,err))

*/