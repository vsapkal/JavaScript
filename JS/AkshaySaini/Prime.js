let num = [2,3,5,7,6,16,19,34,33,57];

numArray = num.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  
  console.log(numArray);

let arr = [];
let flag = true;
for(let i=0; i<num.length; i++){
    for(let j=2; j<num[i]-1; i++){
        if(j % 2 === 0){
            let res = arr.push(num[i]);
            console.log(res);
        }
    }
}