// write a program that takes a set of numbers and returns the sum of all the numbers passed

const num = [10, 7, 17, 23, 32, 55] // generating an array of numbers
let sum = 0 // initializing num as 0 to store the result
for (let i=0; i<num.length; i++) {
    sum +=num[i]
} // used the for loop to visit each element and add them to the sum of the Array
console.log(sum)