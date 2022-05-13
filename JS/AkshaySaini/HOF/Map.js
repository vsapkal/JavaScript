let arr = [6,7,20,8,9,10];

function double(x){
    return x * 2;
}

function doubleValue(a) {
    let res = [];
    for(let i=0; i<a.length; i++){
        return res.push(a[i] * 2);
    }
}

// MAX value

let max = arr.reduce((a,b)=>Math.max(a,b));
console.log("Max Value is ", max);

const output = arr.map(binary = (x) => {
    return x.toString(2);
});

console.log("Output", output);
console.log("first", doubleValue(arr));

let res = arr.map(x => x * 2);
let res1 = arr.map(double);
console.log("res", res);
console.log("res1", res1);

document.getElementById('click').addEventListener("click", ()=>{
    console.log("Button Clicked");
});