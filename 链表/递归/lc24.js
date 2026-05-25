/*
边界条件就是递归"缩小问题"到最后，最小的情况是什么

递归的核心心智模型就一句话：
假设函数已经能处理好"更小的问题"，你只需要处理"当前这一步"。


对于这道题，脑子里只需要想：
swapPairs 的承诺：给我一个链表头，我返回给你"两两交换后的新头"
基于这个承诺，你只需要思考当前这一对：

1 -> 2 -> [后面的我不管，交给递归]

我要做的：
1. 把 2 提到前面
2. 1 接上"后面处理好的结果"
3. 返回 2
画出来就是：


before:  1  ->  2  ->  (剩余)
                        ↑
              swapPairs 会处理好这部分，返回新头

after:   2  ->  1  ->  (swapPairs处理好的结果)
*/


var swapPairs = function(head) {
    if(!head || !head.next) return head
    
    let first = head
    let second = head.next
    first.next = swapPairs(second.next)
    second.next = first
    return second
};