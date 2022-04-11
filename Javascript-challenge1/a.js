
// for loop
// if m is divisible by three print "Fizz"
// if m is divisible by five print "Buzz"
// for multiples of three and five print "FizzBuzz"

for (let m=1; m<101; m++) {
    if (m%3===0 && m%5===0){
        console.log("FizzBuzz")
    }
    else if (m%5===0){
        console.log("Buzz")
    }
    else if (m%3==0){
        console.log("Fizz")
    }
    else {
        console.log(m)
    }
}