//时间复杂度：O(n)
//空间复杂度：O(1)

//核心就是快慢指针
//slow指向的是下一个元素
var removeElement = (nums, val) => {
    let k = 0;
    for(let i = 0;i < nums.length;i++){
        if(nums[i] != val){
            nums[k++] = nums[i]
        }
    }
    return k;
};