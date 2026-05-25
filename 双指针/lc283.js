
/**
同样是快慢指针 
慢指针代表新数组当前位置（还未填充）
要遍历到length-1的位置
 */


var moveZeroes = function(nums) {
    let slow = 0
    for(let fast = 0; fast < nums.length; fast++) {
        if(nums[fast] != 0) {
            nums[slow] = nums[fast]
            slow++
        }
    }

    while(slow < nums.length) {
        nums[slow] = 0
    }

};