/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let compare = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != nums[i+1]) {
            
            nums[compare] = nums[i]
            compare++;
        }
    }
    
    return compare;
    
};