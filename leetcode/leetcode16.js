/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var maxnum = 999;
    var result = 0;
    if (nums.length === 3){
        return nums[0] + nums[1] + nums[2];
    }
    nums.sort(function(n1, n2){
       return n1 - n2; 
    });
    
    for (var i = 0; i < nums.length-2; i++){
        for (var j = i + 1; j < nums.length-1; j++){
            for (var k = j + 1; k < nums.length; k++){
                var temp = nums[i] + nums[j] + nums[k];
                if (Math.abs(temp - target) < maxnum){
                    result = temp;
                    maxnum = Math.abs(temp - target);
                }
            }
        }
    }
    
    return result;
};