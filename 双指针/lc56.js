
var merge = function(intervals) {
    intervals.sort((a,b) => {
      return a[0] - b[0];
    })

    const result = [intervals[0]]

    for(let i = 1; i < intervals.length; i++) {
      const last = result[result.length - 1];
      const curr = intervals[i];
      
      //判断是否重叠
      if(curr[0] <= last[1]) {
        //合并
        last[1] = Math.max(last[1], curr[1]);
      } else {
        result.push(curr);
      }
    }

    return result;
};




