/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    // nums.sort((a,b) => a-b).filter((a,i)=>!(i%2)).reduce((a,b)=>a+b,0)
    return nums.sort((a,b) => a-b).filter((a,i)=> !(i%2)).reduce((a,b)=>a+b)
};