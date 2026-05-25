
/**
 * 这是链表的定义
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

/* 
1.
哑节点最核心的作用就是这个——让头节点和其他节点的处理逻辑统一，不用单独写 if 判断头节点

2.
dummy 用 const — 哑节点创建后就不需要换了，
它一直老老实实待在那，我们只是通过它去访问链表，dummy 本身永远不变。

用cur来遍历链表
cur 用 let — cur 需要不断往前移动：
cur = cur.next  // 这行会改变 cur 指向谁
const 定义的变量不能重新赋值，所以必须用 let。
*/

var removeElements = function(head, val) {
    const dummy = new ListNode(0, head);
    let cur = dummy;
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return dummy.next;
};