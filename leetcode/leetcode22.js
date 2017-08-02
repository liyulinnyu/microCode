/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var result = [];
    findRes(n, n, "");
    return result;
    
    function findRes(left, right, str){
        if (left === 0 && right === 0){
            return result.push(str);
        }
        if (left > 0){
            findRes(left - 1, right, str+"(");
        }
        if (right > left){
            findRes(left, right - 1, str+")");
        }
    }
};