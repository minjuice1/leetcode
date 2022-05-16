/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let val_array = [];
    
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == val) {
            nums.splice(i, 1)
            console.log(nums)
            i = i -1;
            console.log(i)
        } 
    }
    return nums.length
};