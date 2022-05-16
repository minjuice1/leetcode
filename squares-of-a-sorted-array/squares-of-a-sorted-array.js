/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squaring = [];
    
    for(let i = 0; i < nums.length; i++) {
        squaring.push(nums[i] * nums[i])
    }
    squaring.sort((a, b) => a - b);
    return squaring;

};