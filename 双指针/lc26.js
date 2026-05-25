/*
复习了一下快慢指针
主要是条件，这道题得先挪
慢指针就相当于数量
*/

var removeDuplicates = function(nums) {
    let slow = 0

    for(let fast = 0; fast < nums.length; fast++) {
        if(nums[fast] != nums[slow]) {
            nums[++slow] = nums[fast]
        }
    }

    return slow+1

};