var findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;

  // 第一阶段：快慢指针找相遇点
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  // 第二阶段：找环入口
  let ptr = 0;
  let ptr2 = slow;
  while (ptr !== ptr2) {
    ptr = nums[ptr];
    ptr2 = nums[ptr2];
  }

  // 返回重复数字
  return ptr;
};
