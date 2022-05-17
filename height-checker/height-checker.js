/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let count = 0;
    let newArr = [...heights]
    newArr.sort((a, b) => a - b);
    
    for(let i = 0; i < heights.length; i++) 
        if(heights[i] != newArr[i]) {
            count++
        
    }
    return count
    
};