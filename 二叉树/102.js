var levelOrder = function(root) {
    // 1. 空树直接返回空数组
    if (root === null) return [];

    // 2. result 存最终答案
    const result = [];

    // 3. queue 存接下来要处理的节点
    const queue = [root];

    // 4. head 表示当前队头位置
    let head = 0;

    // 5. 只要队列里还有没处理的节点，就继续
    while (head < queue.length) {
        // 当前层的节点数量
        const levelSize = queue.length - head;

        // 当前层的结果
        const level = [];

        // 6. 只处理当前这一层
        for (let i = 0; i < levelSize; i++) {
            // 取出队头节点
            const node = queue[head];
            head++;

            // 把当前节点值加入当前层
            level.push(node.val);

            // 左孩子存在就入队
            if (node.left !== null) {
                queue.push(node.left);
            }

            // 右孩子存在就入队
            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        // 当前层处理完，放进总结果
        result.push(level);
    }

    return result;
};
