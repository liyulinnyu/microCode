/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    var stack = [];
    var vali = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }
    for (var i = 0; i < s.length; i++){
        if (s[i] === "(" || s[i] === "[" || s[i] === "{"){
            stack.push(s[i]);
        }else if (s[i] === ")" || s[i] === "]" || s[i] === "}"){
            if (stack.length !== 0 && vali[stack.pop()] === s[i]){
                continue;
            }else{
                return false;
            }
        }
    }
    if (stack.length !== 0){
        return false;
    }
    return true;
};