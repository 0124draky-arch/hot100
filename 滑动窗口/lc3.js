var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    let left = 0;
    let maxLen = 0;

    for(let right = 0; right < s.length; right++) {
      let char = s[right]
      if(map.has(char) && map.get(char) >= left) {
        left = map.get(char) + 1;
      }

      map.set(s[right], right);
      maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
};



var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let left = 0;
    let maxLen = 0;

    for(let right = 0; right < s.length; right++) {
      
      while(set.has(s[right])) {
        set.delete(s[left++]);
      }

      set.add(s[right]);

      maxLen = Math.max(right - left + 1, maxLen);
    }

    return maxLen;
};


