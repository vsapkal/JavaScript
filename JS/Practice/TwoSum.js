let arr = [2,1,3,5,6,2,9,3];
let res = [];

const twoSum = (arr) => {
    for(let i=0; i<arr.length; i++){
        const balance = target_sum - num[i];
        for(let j=0; j<arr.length; j++){
            if(num[j] == balance){
                return res.push([num[j], num[i]]);
            }
        }
    }
}

console.log(res);