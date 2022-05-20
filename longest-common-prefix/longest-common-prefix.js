/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let words = strs[0];
    
    for(let i = 1; i < strs.length; i++) {
        while(strs[i].indexOf(words) != 0) {
            words = words.substring(0, words.length - 1);
        }
    }
    return words
    
};