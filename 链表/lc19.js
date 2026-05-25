
/*
双指针-----快慢指针

核心问题：如何在一次遍历中找到倒数第 N 个节点？
链表只能从前往后走，"倒数"意味着你不知道终点在哪。

核心思路：用间距固定两个指针的相对位置
让 fast 比 slow 提前 N 步出发，
这样当 fast 到终点时，
slow 和终点的距离恰好是 N，即 slow 就在倒数第 N 个位置。

fast 先走 N 步，制造间距：

[dummy] [1] [2] [3] [4] [5]
 slow            fast

然后同步移动，fast 到末尾时：

[dummy] [1] [2] [3] [4] [5]
                slow      fast(null)
slow 正好在倒数第 N 个节点的前驱，删除即可。
*/



var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0, head)
    let fast = dummy,slow = dummy
    for(let i = 0; i <= n; i++){//fast先走n+1步
        fast = fast.next
    }

    while(fast !== null) {
        fast = fast.next
        slow = slow.next
    }

    slow.next = slow.next.next
    return dummy.next

};