

var threeSum = function(nums) {
    const result = [];

    nums.sort((a, b) => a-b);

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i-1] && i > 0) {
            continue;
        }

        if(nums[i] > 0)
            break;

        let left = i + 1;
        let right = nums.length - 1;

        while(left < right) {
            if(nums[i] + nums[left] + nums[right] === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while(left < right && nums[left] === nums[left+1]){
                    left++;
                }
                while(left < right && nums[right] === nums[right - 1]){
                    right--;
                }
                left++;
                right--;
            } else if(nums[i] + nums[left] + nums[right] > 0) {
                right--;
            } else{
                left++;
            }
        }

    }
    return result;
};