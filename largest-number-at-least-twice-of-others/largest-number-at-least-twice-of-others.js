/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max = Math.max(...nums)
    for(let i = 0; i < nums.length; i++) {
        if(max < nums[i] * 2) {
            if(max != nums[i]) {
                return -1    
            }
        } else if (nums.length == 1) {
            return 0
        } 
        
    }
    return nums.indexOf(max)
};