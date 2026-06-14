
/*
用一个哈希表（或长度26的数组）统计字符频次：

遍历 s，对每个字符 +1
遍历 t，对每个字符 -1
最后检查所有值是否为 0
*/


var isAnagram = function(s, t) {
    if(s.length !== t.length)
        return false
    const count = new Array(26).fill(0)
    const base = 'a'.charCodeAt(0)

    for(let i = 0; i < s.length; i++) {
        count[s[i].charCodeAt(0) - base]++
        count[t[i].charCodeAt(0) - base]--
    }

    return count.every(c => c === 0)

};



/*
map.get(c) || 0：如果字符不存在就当 0 处理

遍历 t 时，遇到 s 里没有的字符，
或者次数已经用完（等于0），直接返回 false

因为前面已经判断了长度相等，所以遍历完 t 后不需要再检查 map，
长度相等 + 每个字符都能抵消 = 必然是异位词
*/



var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const map = new Map();

    // 遍历 s，记录每个字符出现次数
    for (let c of s) {
        map.set(c, (map.get(c) || 0) + 1);
    }

    // 遍历 t，逐个抵消
    for (let c of t) {
        if (!map.has(c) || map.get(c) === 0) return false;
        map.set(c, map.get(c) - 1);
    }

    return true;
};
