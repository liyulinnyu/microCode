/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    var length = parseInt((nums1.length + nums2.length)/2),
        i = 0,
        j = 0,
        one = 0,
        two = 0,
        isOdd = (nums1.length + nums2.length) % 2 === 1;
    
    while (i + j <= length){
        two = one;
        if (nums1[i] < nums2[j] || j >= nums2.length){
            one = nums1[i++];
        }else{
            one = nums2[j++];
        }
    }
    if (isOdd){
        return one;
    }else{
        return (one + two) / 2;
    }
    
};