// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target
// first thing: we must an array of integers
// second thing: we must have an integer target

const nums =[5, 8, 9, 6, 10, 11]
const target = 11
var twoAggregate = function(nums, target) {
    for (let index=0; index<nums.length; index++) {
        for (let j=index+1; j<nums.length; j++){
            if (nums[index] + nums[j] == target){
                console.log([index,j])
            }
        }

    }
}