/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var num = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000};
    var length = s.length;
    var result = num[s.charAt(length-1)];
    for (var i = 0; i < length-1; i++){
        if (num[s.charAt(i)] < num[s.charAt(i+1)]){
            result -= parseInt(num[s.charAt(i)]);
        }else{
            result += parseInt(num[s.charAt(i)]);
        }
    }
    return result;
};