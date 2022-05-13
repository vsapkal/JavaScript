let arr = [2, 4, 5, 7, 8, 2];

console.log("Original Array", arr);

const graterThan = (x) => {
    return x % 2;
}

console.log("Map Function");
// let res = arr.map((val, ind, arr) => {
//     // console.log(`Value... ${val}, Index... ${ind}, Array... ${arr}`);
//     console.log(val * 4);
// })

let res = arr.map(graterThan);
console.log(res);


// let result = arr.map((x, i, a) => { x, i, a });

console.log("Filter Function");

function isOdd(x, i) {
    return x = x + x[i];
}

// console.log(arr.filter(isOdd));

let res1 = arr.filter(isOdd);

console.log(res1);


console.log("Reduce Function");

let output = arr.reduce((acc, cur) => {
    // console.log("Accumulator...", acc, "Current Value...", cur);
    if (cur > acc) {
        acc = cur;
    }
    return acc;
}, 0)

console.log(output);

let obj = [
    { fname: "alex", age: 23 },
    { fname: "John", age: 33 },
    { fname: "Julie", age: 26 },
    { fname: "Ram", age: 30 },
    { fname: "Lakhan", age: 21 },
    { fname: "Megha", age: 43 },
    { fname: "Akash", age: 53 },
    { fname: "Chetan", age: 37 },
]

let output1 = obj.filter((x) => x.age > 30).map((x) => x.fname).reduce((val) => val);

console.log(output1);