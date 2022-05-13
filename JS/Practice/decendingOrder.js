
let arr =  [1,4,33,57,88,9,23,20,100,45];

for (let i = 1; i < arr.length; i++)
{
    for (let j = 0; j < i; j++)
    if (arr[i] > arr[j]) {       /* Here is change >  */
        let x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
}

console.log(arr);


let arr2 = [1,4,33,57,88,9,23,20,100,45];

arr2.sort((a,b)=>{
    return b - a;
})

console.log("Array 2 ", arr2);