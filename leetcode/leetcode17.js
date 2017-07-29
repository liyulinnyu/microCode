/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var result = [""], temp = [];
    if (digits === ""){
        return [];
    }
    var table = {
      '2': ['a','b','c'],
      '3': ['d','e','f'],
      '4': ['g','h','i'],
      '5': ['j','k','l'],
      '6': ['m','n','o'],
      '7': ['p','q','r','s'],
      '8': ['t','u','v'],
      '9': ['w','x','y','z']
    };
    var length = digits.length;
    for (var i = 0; i < length; i++){
        table[digits.charAt(i)].forEach(function(t1, index1, array1){
            result.forEach(function(t2, index2, array2){
               temp.push(t2+t1); 
            });
        });
        result = temp;
        temp = [];
    }
    return result;
};