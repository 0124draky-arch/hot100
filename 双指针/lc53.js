var maxSubArray = function(nums) {
    let currentMax = nums[0];
    let maxSum = nums[0];

    for(let i = 1; i < nums.length; i++) {
        currentMax = Math.max(nums[i], nums[i] + currentMax);
        maxSum = Math.max(currentMax, maxSum);
    }

    return maxSum;
};