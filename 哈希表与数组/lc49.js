
/*
哈希表,排序, split, join, 数组的push, sort, 展开表达式等js基础知识
在notion里


核心思路：找到一个"签名"，让所有异位词映射到同一个 key。
排序作为 key（推荐）

同一组异位词排序后结果相同，比如 "eat" "tea" "ate" 排序后都是 "aet"。


"eat" → sort → "aet"
"tea" → sort → "aet"  ← 同一组
"tan" → sort → "ant"
"nat" → sort → "ant"  ← 同一组
用哈希表 { "aet": ["eat","tea","ate"], "ant": ["tan","nat"] } 收集，最后返回 values。


*/


var groupAnagrams = function(strs) {
    const map = new Map();                        // 哈希表：key=排序后字符串, value=原词数组

    for (const s of strs) {                       // 遍历每个词
        const key = s.split('').sort().join('');  // 1. 拆成字符数组
                                                  // 2. 排序
                                                  // 3. 拼回字符串 → 得到 key
        if (!map.has(key)) 
          map.set(key, []);      // 如果这个 key 还没有桶，新建一个空数组

        map.get(key).push(s);                     // 把原词放进对应的桶
    }

    return [...map.values()];                     // 取出所有桶，转成数组返回
};

















