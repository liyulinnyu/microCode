/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    if (strs.length === 0 || strs[0] === ""){
        return "";
    }
    if (strs.length === 1){
        return strs[0];
    }
    
    var result = strs.reduce(function(pre, cur, index, array){
        
        var tempstr = "";
        var length = Math.min(pre.length, cur.length);
        for (var i = 0; i < length; i++){
            if (pre[i] === cur[i]){
                tempstr += pre[i];
            }else{
                return tempstr;
            }
        }
        return tempstr;
    });
    
    return result;
    
};