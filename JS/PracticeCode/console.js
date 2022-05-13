//Console count
// console.count(`label`);

console.group("log, info, table");
//Console Time to show you how much time take by code to execute.
console.time(`You took Time`);

//Array with log and table
let arr = [32, 4, 5, 23, 1, 56, 75];
console.log([32, 4, 5, 23, 1, 56, 75]);
console.table([32, 4, 5, 23, 1, 56, 75]);
console.info("This is length of Array", arr.length);

console.groupEnd("log, info, table");

console.group("Object: log, table, warn");
//Object with log and Table
let obj = { name: "Alex", age: 23, position: "Software Engineer" };
console.log({ name: "Alex", age: 23, position: "Software Engineer" });
console.table({ name: "Alex", age: 23, position: "Software Engineer" });
console.warn("Education is missing in this object");
console.groupEnd("Object: log, table, warn");

console.timeEnd(`You took Time`);

console.group("label")
//Console assert to tell you this condition is true or not
let age = 119;
let res = `Age ${age} this is not possible.`;
console.assert(age < 110, { age, res });
console.debug("Age Debug", age, arr);

let x = 5;
let y = 3;
let result = `x is expected less than y.`
console.assert(x < y, { x, y, result });

//Console trace method outputs a stack trace to the Web console.
console.trace("Trace", { age, res, x, y, result, obj });

console.groupEnd("label");

// console.countReset(`label`);
//Clear console.
// console.clear();