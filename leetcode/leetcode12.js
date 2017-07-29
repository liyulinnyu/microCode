/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var m = ["", "M", "MM", "MMM"];
    var c = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var x = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var i = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return m[Math.floor(num/1000)] + c[Math.floor((num%1000)/100)] + x[Math.floor((num%100)/10)] + i[num%10];
};