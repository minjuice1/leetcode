/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let result = [];
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        arr.shift();
        const value = Math.max(...arr);
        result.push(value);
    }

    result.push(-1);

    return result;
};