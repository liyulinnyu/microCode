/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    var result = [];
    var length = nums.length;
    if (length < 3){
        return result;
    }
    nums.sort(function(num1, num2){
        return num1 - num2;
    });
    for (var i = 0; i < length-2; i++){
        if (nums[i] > 0){
            return result;
        }
        if (i > 0 && nums[i] === nums[i-1]){
            continue;
        }
        for (var j = i+1, k = length-1; j < k; ){
            var temp = nums[i] + nums[j] + nums[k];
            if (temp === 0){
                result.push([nums[i],nums[j],nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] === nums[j-1]){
                    j++;
                }
                while (j < k && nums[k] == nums[k+1]) {
				    k--;
			    }
            }else if(temp > 0){
                k--;
            }else{
                j++;
            }
        }
        
    }
    return result;
};