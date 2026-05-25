/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

//核心就是快慢指针
var removeElement = function(nums, val) {
    let slow=0, fast = 0
    for(fast=0; fast < nums.length; fast++) {
        if(nums[fast] == val) {
            continue
        }
        nums[slow++] = nums[fast]
    }
     return slow
};