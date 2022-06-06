/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let sumLeft = 0;
        for (let j = i - 1; j > -1; j--) {
            sumLeft += nums[j]
        }
        
        let sumRight = 0;
        for (let k = i + 1; k < nums.length; k++) {
            sumRight += nums[k]
        }
        
        if (sumLeft === sumRight) {
            return i
        }
    }
    return -1;
    
};