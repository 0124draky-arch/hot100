
//非递减基本上跟递增没区别了
//两边大，中间小
//双指针向中间推进


var sortedSquares = function(nums) {
    let left = 0, right = nums.length-1
    const result = new Array(nums.length)
    for(let index = result.length-1; index >= 0; index--) {
        if(nums[left] * nums[left] >= nums[right] * nums[right]) {
            result[index] = nums[left] * nums[left]
            left++
        } else {
            result[index] = nums[right] * nums[right]
            right--
        }
    }
    return result
};