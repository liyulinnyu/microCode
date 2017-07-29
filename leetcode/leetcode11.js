/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    var maxarea = 0;
    var tail = height.length-1;
    var start = 0;
    while (start < tail){
        maxarea = Math.max(maxarea, Math.min(height[start],height[tail])*(tail-start));
        if (height[start] < height[tail]){
            start++;
        }else{
            tail--;
        }
    }
    return maxarea;
    
};