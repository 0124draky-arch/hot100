/*
HashMap来做滑动窗口
Map就是键值对
set,delete等方法
在窗口安全的时候就必须更新记录
左边就是一步一步挪过去-1
左右指针的差来表示长度
这种窗口模式得记住

感觉还是不太熟悉
*/


var totalFruit = function(fruits) {
    const cnt = new Map()
    let left = 0, ans = 0
    for(let right = 0; right < fruits.length; right++) {
        cnt.set(fruits[right], (cnt.get(fruits[right]) || 0) + 1)

        while(cnt.size > 2) {
            cnt.set(fruits[left], cnt.get(fruits[left]) - 1)
            if(cnt.get(fruits[left]) == 0) {
                cnt.delete(fruits[left])
            }
            left++
        }
        ans = Math.max(right-left+1, ans)
    }

    return ans
};

