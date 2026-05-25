
/*
1.越界检查
if (index < 0 || index >= this.size) return -1;
index 不能是负数，也不能超过链表长度，否则直接返回 -1（题目规定的非法返回值）。

2.循环条件
dummy -> [0] -> [1] -> [2]
  ↑
 cur 起点
get(0)：走1步 → 到index=0的节点
get(1)：走2步 → 到index=1的节点
get(2)：走3步 → 到index=2的节点
走的步数 = index + 1，所以
循环 i 从 0 到 index，共 index+1 次


主要就是这个循环条件、步长的理解
// get：i <= index，走 index+1 步，停在目标节点本身
for (let i = 0; i <= index; i++)

// addAtIndex：i < index，走 index 步，停在目标节点的前一个
for (let i = 0; i < index; i++)

*/



var MyLinkedList = function() {
    this.dummy = new ListNode(0)
    this.size = 0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index > this.size - 1) return -1
    let cur = this.dummy
    for(let i = 0; i <= index; i++) {
        cur = cur.next
    }
    return cur.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.addAtIndex(0, val)
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    this.addAtIndex(this.size, val)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index > this.size) return 
    const node = new ListNode(val)
    let cur = this.dummy
    if(index < 0 ) index = 0
    for(let i = 0; i < index; i++) {
        cur = cur.next
    }
    node.next = cur.next
    cur.next = node
    this.size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index > this.size - 1) return 
    let cur = this.dummy
    for(let i = 0; i < index; i++) {
        cur = cur.next
    }
    cur.next = cur.next.next
    this.size--
};

