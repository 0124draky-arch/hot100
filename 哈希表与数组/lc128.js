var longestConsecutive = function(nums) {
  const set = new Set(nums);//set去重
  let maxLen = 0;

  for(const num of set) {
    if(!set.has(num-1)) {
      let current = num;
      let len = 0;

      while(set.has(current)) {
        current++;
        len++;
      }

      maxLen = Math.max(maxLen, len)
    }
  }

  return maxLen;
}
