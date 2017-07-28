Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    var result = 1,
        length = 1;
    
    if (s.length === 0 || s === null){
        return 0;
    }
    
    for (var i = 0; i + length < s.length;){
        
        var string = s.substring(i, i + length);
        if (string.indexOf(s[i + length]) > -1){
            // has
            i++;
            length = 1;
            result = Math.max(result, string.length);
            
        }else{
            // not 
            length++;
            if (i + length === s.length){
                result = Math.max(result, string.length + 1);   // add the last one
            }
            
        }
       
        
    }
    
    return result;
    
};