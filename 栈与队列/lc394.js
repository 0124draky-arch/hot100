function decodeString(s) {
    const numStack = [];
    const strStack = [];
    let cur = "";
    let num = 0;
    
    for (const ch of s) {
        // 数字
        if (ch >= '0' && ch <= '9') {
            num = num * 10 + Number(ch);   
        // 字母     
        } else if (ch >= 'a' && ch <= 'z') {
            cur = cur + ch;
        } else if (ch === '[') {
          numStack.push(num);
          strStack.push(cur);
          num = 0;
          cur = "";
        } else {
          cur = strStack.pop() + cur.repeat(numStack.pop());
        }
    }
    return cur;
}
