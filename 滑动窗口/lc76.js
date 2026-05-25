
/*
整个过程，我很难描述
需要后面多做几次类似的



*/
var minWindow = function(s, t) {
    // 1. 初始化两个“账本”
    let window = new Map(); // 当前窗口中包含的字符及其频率
    let need = new Map();   // 目标 t 中每个字符需要的数量

    // 统计 t 中字符出现的频率，建立“需求清单”
    for (let char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    // 2. 初始化双指针和状态变量
    let left = 0, right = 0; // 左右指针，闭区间 [left, right]
    let valid = 0;           // 记录当前窗口内有多少个种类的字符已经达到了 need 中的数量要求
    let len = Infinity;      // 记录最小覆盖子串的长度，初始设为无穷大
    let start = 0;           // 记录最小覆盖子串的起始位置，方便最后截取

    // 3. 开始移动右指针，扩张窗口
    while (right < s.length) {
        let char = s[right]; // 即将进入窗口的字符

        // 如果这个字符在“需求清单”里，更新窗口账本
        if (need.has(char)) {
            window.set(char, (window.get(char) || 0) + 1);
            // 关键：如果该字符在窗口里的数量正好等于需求数量，说明这个字符“达标”了
            if (need.get(char) === window.get(char)) {
                valid++;
            }
        } 

        // 4. 判断是否需要收缩左边界
        // 当 valid 等于 need.size 时，说明所有字符种类和数量都凑齐了（找到了一个可行解）
        while (valid === need.size) {
            // 在这里更新最终答案：如果当前窗口更短，就记录下来
            if (right - left + 1 < len) {
                start = left;
                len = right - left + 1;
            }

            let d = s[left]; // 即将移出窗口的字符
            
            // 如果移出的字符在需求清单里，需要更新账本
            if (need.has(d)) {
                // 关键：如果移出前数量刚好等于需求量，移出后就不再达标了，valid 减 1
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, window.get(d) - 1);
            }

            // 移动左指针，尝试寻找更短的子串（优化可行解）
            left++;
        }

        // 继续移动右指针
        right++;
    }

    // 5. 返回结果
    // 如果 len 还是初始的 Infinity，说明没找到符合条件的子串，返回空字符串
    // 否则根据记录的 start 和 len 截取子串
    return len === Infinity ? "" : s.substring(start, start + len);
};


