let arr = [4,6,7,8,3,14,5,7];

function maxVal(a){
    let prev = 0;
    for(let i=0; i<a.length; i++){
        prev = prev > a[i];
        return prev;
    }
}

let output = arr.map(maxVal);
console.log("Out", output);

let res = arr.reduce((acc, cur) => {
    if(cur > acc){
        acc = cur;
    }
    return acc;
}, 0);
console.log("first", res);


function max(a){
    let maxV = 0;
    for(let i=0; i<a.length; i++){
        if(maxV < a[i]){
            maxV = a[i];
        }
    }
    return maxV;
}

console.log("MaxValue is ", max(arr));