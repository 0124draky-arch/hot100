var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0

    while(left < right) {
        const width = right - left;
        const h = Math.min(height[left], height[right]);
        const area = width * h;

        max = Math.max(max, area);

        if(height[left] >= height[right]) {
            right--;
        } else {
            left++
        }
    }

    return max;
};