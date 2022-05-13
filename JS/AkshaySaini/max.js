
let arr = [3,4,56,5,6,7,8,13,6];
let large = 0;
for(let i=0; i<arr.length; i++){
    if(large < arr[i]){
        large = arr[i];
    }
}
console.log(large);