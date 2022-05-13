function a(){
    let x = 2, y = 4;
    return function b(){
        console.log(x);
        console.log(y);
    }
    // b();
}
let c = a();
c();