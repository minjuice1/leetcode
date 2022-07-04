/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    if(s.length === 1) return s
    
    let splited = s.split(" ")
    let result = [];
    let store;
    for(let i = 0; i < splited.length; i++) {
        store = splited[i].split("")
        store = store.reverse()
        store = store.join("")
        if(i !== splited.length-1)  store += " "
        result += store
    }
    return result
    
};