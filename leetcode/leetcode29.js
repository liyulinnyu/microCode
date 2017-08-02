/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
     if (divisor === 0 || dividend > 2147483647 || dividend < -2147483648 || dividend < -2147483647 && divisor === -1) return 2147483647;
    let isNegative = dividend < 0 && divisor >= 0 || dividend >= 0 && divisor < 0;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    if (dividend === 0 || dividend < divisor) return 0;
    
    let doubling = divisor;
    let count = 1;
    while (doubling < dividend && !(doubling & (1 << 30))) {
        doubling <<= 1;
        count <<= 1;
    }
    if (doubling > dividend) {
        doubling >>>= 1;
        count >>>= 1;
    }
    
    let res = count + divide(dividend - doubling, divisor);
    return isNegative ? 0 - res : res;
};