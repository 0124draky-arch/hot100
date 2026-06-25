var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let result = 0;
    let leftMax = height[left], rightMax = height[right];

    while(left < right) {
        if(leftMax >= rightMax) {
            result += (rightMax - height[right]);
            right--;
            rightMax = Math.max(rightMax, height[right]);
        } else {
            result += (leftMax - height[left]);
            left++;
            leftMax = Math.max(leftMax, height[left]);
        }    
    }

    return result;

};