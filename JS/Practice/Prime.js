function isPrime(num) {
    for ( let i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function display(n) {
    var arr = [];
    let notPrime = []
    for ( let i = 2; i <= n; i++ ) {
        if ( isPrime(i) ) {
            arr.push(i);
            // console.log(i)
        } else{
            notPrime.push(i);
        }
    }
    console.log("Prime ", arr); // use arr result on your own
    console.log("Not Prime ", notPrime)
}

display(100);