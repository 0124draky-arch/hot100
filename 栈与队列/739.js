function dailyTemperatures(temperatures) {
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    const stack = []; // 存下标，栈底到栈顶温度递减
    
    for (let i = 0; i < n; i++) {
        // 1. 当前温度 > 栈顶温度时，出栈并记录答案
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length -1]]) {
            const prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }
        // 2. 当前下标入栈
        stack.push(i);
    }
    
    return answer;
}
