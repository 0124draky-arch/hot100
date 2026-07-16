class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];  // 辅助栈
    }

    push(val) {
        //1. 主栈正常 push
        this.stack.push(val);

        // 2. 辅助栈 push 
        const currentMin = this.minStack.length === 0 ? val : this.getMin();
        this.minStack.push(Math.min(val, currentMin));
    }

    pop() {
      // 两个栈同步弹出
      this.minStack.pop();
      return this.stack.pop();
    }

    top() {
        // 返回主栈栈顶
        return this.stack[this.stack.length -1];
    }

    getMin() {
        // 返回辅助栈栈顶
        return this.minStack[this.minStack.length -1];
    }
}
