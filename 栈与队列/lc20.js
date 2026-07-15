var isValid = function(s) {
    const stack = [];

    for(const ch of s) {
        if(ch === '(' || ch === '[' || ch === '{')
            stack.push(ch);

        if(ch === ')') {
            if(stack.pop() !== '(') return false;
        }

        if(ch === ']') {
            if(stack.pop() !== '[') return false;
        }

        if(ch === '}') {
            if(stack.pop() !== '{') return false;
        }
    }

    return stack.length === 0;
};