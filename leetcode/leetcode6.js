/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows <= 1) {
        return s;
    }
    var circle = 2*numRows - 2;
    var result = "";
    var length = s.length;
    var n = 0;
    while (n < numRows){
        for (var i = 0; i*circle + n < length; i++){
            result += s[i*circle + n];
            var secondJ = (i+1)*circle - n;
            if (n > 0 && n < numRows-1 && secondJ < length){
                result += s[secondJ];
            }
        }
        n++;
    }
    
    return result;
};