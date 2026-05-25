/*
21: 每次比较两个链表的头节点，取较小的那个接到结果链表上

cur.next = l1 || l2 的语法
这是 JS 的逻辑或运算符，意思是：l1 有值就用 l1，否则用 l2。
等价于：
if (l1) {
    cur.next = l1;
} else {
    cur.next = l2;
}
为什么能这样做？因为 while 循环退出的条件是 l1 && l2，
也就是说退出时必然有一个已经是 null
剩下那个链表本身已经是有序的，直接接上去就行，不需要再逐个遍历
*/



var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode(0)
    let cur = dummy

    while(list1 && list2) {
        if(list1.val <= list2.val) {
            cur.next = list1
            list1 = list1.next
        } else {
            cur.next = list2
            list2 = list2.next
        }
        cur = cur.next
    }

    cur.next = list1 || list2
    return dummy.next
};