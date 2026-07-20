function largestRectangleArea(heights) {
    const stack = [];// 存下标，单调递增
    let maxArea = 0;
    
    const h = [...heights, 0];  // 末尾加虚拟高度0，清空栈
    
    for (let j = 0; j < h.length; j++) {
        while (stack.length > 0 && h[j] < h[___]) {  // 新高度 < 栈顶高度时弹出
            const i = stack.pop();
            const right = ___;               // 右边界
            const left = stack.length > 0 ? ___ : -1;  // 左边界
            const width = ___;               // 宽度公式
            maxArea = Math.max(maxArea, h[i] * width);
        }
        stack.push(j);
    }
    
    return maxArea;


}
