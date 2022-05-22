/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    if(s === "") {
        return -1;
    }
    
    let result;
    result = s.split(" ")
    for(let i = 0; i < result.length; i++) {
        result[i] = result[i].split("").reverse().join("")
    }
    
    return result.join(" ")
    
};