/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let filtered = nums;
    let max = Math.max(...nums);
    const result = [max]
    
    for (let i = 0; i < 2; i++) {
        filtered = filtered.filter(num => num !== max);
        
        if (filtered.length === 0) return result[0];
        
        max = Math.max(...filtered);
        result.push(max);
    }
    return max;
};

