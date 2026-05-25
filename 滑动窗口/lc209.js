
/*
滑动窗口
sum是整个窗口的和
不断收集直到大于target
然后缩小区间，移动前面的指针
*/



var minSubArrayLen = function(target, nums) {
    let sum=0,start = 0
    let length = Infinity
    for(let index = 0; index < nums.length; index++) {
        sum += nums[index]
        while(sum >= target) {
            let subL = index - start + 1
            length = Math.min(subL, length)
            sum -= nums[start]
            start++
        }
    }

    return length === Infinity ? 0 : length
};