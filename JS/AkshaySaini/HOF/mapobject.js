let user = [
    {firstName: "Vinod", lastName: "Sapkal", age: 30},
    {firstName: "Sachin", lastName: "Patil", age: 32},
    {firstName: "Udit", lastName: "Jadhav", age: 25},
    {firstName: "Utkarsh", lastName: "Jadhav", age: 24},
    {firstName: "Utkranti", lastName: "Jadhav", age: 25},
]

// console.log(user[0].firstName);

let res = user.map(x => {
    return x.firstName + " " + x.lastName + " => " + x.age;
});

console.log(res);

// Age is equal to 25
let res1 = user.filter(x => x.age == 25).map(x => x.firstName);
console.log(res1);

//Using reduce find the single name of user

let res2 = user.reduce((acc, cur)=>{
    let s = [];
    if(cur.age == 24){
        s.push(acc = cur.firstName);
    }
    return acc;
},{});

console.log("Res 2", res2);