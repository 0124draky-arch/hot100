/**
 二分查找，
 好像还有一些什么区间的细节
 暂时就写成这样
 后面再看
 */
var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length-1
    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        if(nums[mid] == target) {
            return mid
        } else if(mid < target) {
            left = mid + 1
        } else if(mid > target) {
            right = mid - 1
        }
    }
    return left
    
};











