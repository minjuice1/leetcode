var rotate = function(nums, k) {
    k = k % nums.length
    
    reverse(nums, 0, nums.length-1)
    reverse(nums, 0, k-1)
    reverse(nums, k, nums.length-1)
};

var reverse = function(nums, start, end) {
    while(start < end) {
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp;
        start++
        end--
    }
}