/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }
    if(x < 10) {
        return true;
    }
     x=x.toString();
    for(var i = 0; i < (x.length / 2)>>0; ++i) {
        if(x[i] !== x[x.length - 1 - i]) return false;
    }
    return true;
};