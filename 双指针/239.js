var maxSlidingWindow = function(nums, k) {
  const deque = []; //存下标，队列
  const result = [];
  
  for(let i = 0; i < nums.length; i++) {
    // 第1步：踢掉队尾所有比 nums[i] 小的
    while(deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

     // 2. 新下标入队
     deque.push(i);

     // 第3步：队头滑出窗口了吗？
     if(deque[0] < i - k + 1) {
      deque.shift();
     }

     if(i >= k - 1) {
      result.push(nums[deque[0]]);
     }
  }

  return result;


};