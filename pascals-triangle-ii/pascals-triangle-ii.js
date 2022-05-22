/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) {
        return [1]
    }
    
    const prevRow = getRow(rowIndex - 1)
    const result = [1]
    for (let i = 1; i < rowIndex; i++) {
        console.log(i)
        result.push(prevRow[i - 1] + prevRow[i])
    }
    result.push(1)
    return result
};