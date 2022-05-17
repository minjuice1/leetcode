/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    const max = Math.max(...arr)
    const max_index = arr.indexOf(max)
    
    if(max_index == arr.length -1 || max_index == 0) {
        return false
    }
    
    for(let i = 1; i < arr.length; i++) {
        if(i <= max_index) {
            if(arr[i - 1] >= arr[i]) return false
        } else {
            if(arr[i - 1] <= arr[i]) return false
        }
    }
    return true
    
};