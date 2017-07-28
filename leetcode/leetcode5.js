/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    var result = "",
        num = 1,
        str = "";
    
    if (s.length <= 1){
        return s;
    }
    result = s[0];
    for (var i = 1; i < s.length;){
        if (i - num < 0 || i + num > s.length){
            i++;
            num = 1;
            continue;
        }
        if (s[i - num] === s[i + num]){
            
            result = s.substring(i - num, i + num + 1).length > result.length ? s.substring(i - num, i + num + 1) : result;
            num ++;
        }else{
            i++;
            num = 1;
        }
    }
    num = 1;
    for (i = 1; i < s.length;){
        if (i - num < 0 || i + num - 1 > s.length){
            i++;
            num = 1;
            continue;
        }
        if (s[i - num] === s[i + num - 1]){
            
            result = s.substring(i - num, i + num).length > result.length ? s.substring(i - num, i + num) : result;
            num++;
        }else{
            i++;
            num = 1;
        }
    }
    
    return result;
    
};