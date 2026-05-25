
/*
双指针逆序比较以及跳过
但感觉这个边界很不好确定，不是很好
*/



var backspaceCompare = function(s, t) {
    let i1 = s.length - 1
    let i2 = t.length - 1
    let skip1 = 0,skip2 = 0
    while(i1 >= 0 || i2 >=0) {
        while(i1 >=0) {
            if(s[i1] == '#') {
                skip1++
                i1--
            }else if(skip1 > 0){
                skip1--
                i1--
            }else {
                break
            }
        }

        while(i2 >=0) {
            if(t[i2] == '#') {
                skip2++
                i2--
            }else if(skip2 > 0){
                skip2--
                i2--
            }else {
                break
            }
        }

        if(i1 >= 0 && i2 >= 0) {
            if(s[i1] != t[i2]) {
                return false
            }
        } else if(i1 >=0 || i2 >=0) {
            return false
        }
        i1--
        i2--
    }
    return true
};