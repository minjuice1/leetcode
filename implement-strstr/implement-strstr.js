/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let result = haystack.indexOf(needle);
    
    if(result) {
        return result
    } else if(result == 0) {
        return result
    } else {
        return -1;
    }
    
};