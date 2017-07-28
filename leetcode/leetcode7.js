/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var strnum = x.toString();
    var type = "";
    if (x < 0){
        type = strnum[0];
        strnum = strnum.substring(1);
    }
    strnum = strnum.split("").reverse().join("");
    if (type !== ""){
        strnum = type + strnum;
    }
    var num = parseInt(strnum);
    if (num < Math.pow(-2, 31) || num > Math.pow(2, 31) - 1){
        return 0;
    }
    return num;
};