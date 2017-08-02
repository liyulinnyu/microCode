/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    var sublen = words[0].length;
    var length = words.length;
    var slength = s.length;
    var result = [];
    var main = {};
    for (let i = 0; i < length; i++){
        if(main[words[i]] === undefined){
            main[words[i]] = 1;
        }else{
           main[words[i]]++;
        }
    }
    
    for (let i = 0; i + sublen*length <= slength; i++){
        if (main[s.substr(i, sublen)] !== undefined){
            var temp = {};
            for (let key in main){
                temp[key] = main[key];
            }
            var flag = true;
            for (let j = 0; j < length; j++){
                let p = s.substr(i + j*sublen, sublen);
                if (temp[p] === undefined || temp[p] === 0){
                    flag = false;
                    break;
                }
                temp[p]--;
            }
            if (flag){
                for (let key in temp){
                    if (temp[key] !== 0){
                        flag = false;
                        break;
                    }
                }
            }
            if (flag){
                result.push(i);
            }
        }
    }
    return result;
};