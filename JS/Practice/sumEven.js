// /* Sum of even number up to 20 */
// let res = [];
// for(let i=1; i<=20; i++){
//     if(i%2 === 0){
//         res.push(i);
//     }
// }

// console.log(res);

// let result = res.reduce((a,b)=>{
//     return a+b;
// })
// console.log("Result is ", result);

// let display = 0;
// for(let j=0; j<res.length; j++){
//     display = display + res[j];
// }

// console.log("Display is ", display);

let res1 = [3,6,1,8,4];
console.log(res1);
for (let m = 1; m < res1.length; m++) {
    for(let n=0; n<m; n++){
        if(res1[m]>res1[n]){
            let x = res1[m];
            console.log("X value assign by res1[m] ", res1[m]);
            res1[m]=res1[n];
            console.log("res1[m] value assign by res1[n] ", res1[n]);
            res1[n]=x;
            console.log("res1[n] value assign by x ", x);
        }
        console.log("Inner", res1);
    }
    console.log("Otter", res1);

}

console.log("Decending Order ", res1);