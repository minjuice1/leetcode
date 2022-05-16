/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let result = 0;
    let count = 0
    
    let num;
    for(let i = 0; i < nums.length; i++) {
        num = nums[i];
        count = 0;
        while(1) {
            ++count
            num = num / 10;
            num = parseInt(num)
            
            if(num == 0) break;
        }
        if(count % 2 === 0) {
        result++
        }
    }
    
    return result    
};