/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = [];
    let arr;
    arr = s.split(" ")
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] != '') {
            result.push(arr[i])
        }
    }
    result = result.reverse().join(" ")
    return result
};