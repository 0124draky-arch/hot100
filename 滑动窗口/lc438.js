var findAnagrams = function (s, p) {
  const result = [];
  const pCount = new Array(26).fill(0);
  const windowCount = new Array(26).fill(0);

  const isSame = (arr1, arr2) => {
    for(let i = 0; i < 26; i++) {
      if(arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
  

  for (let i = 0; i < p.length; i++) {
    pCount[p.charCodeAt(i) - 97]++;
  }

  let left = 0;
  for(let right = 0; right < s.length; right++) {
    windowCount[s.charCodeAt(right) - 97]++;

    if(right - left + 1 > p.length) {
      windowCount[s.charCodeAt(left) - 97]--;
      left++;
    }

    if(right - left + 1 === p.length) {
      //判断两个数组是否相同

      if(isSame(pCount, windowCount)){
        result.push(left);
      }
          
    }

  }

  return result;
};







function isSame(arr1, arr2) {
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i])
      return false;
  }

  return true;
}