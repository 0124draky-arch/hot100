
/*
while(fast && fast.next) 是固定套路，只要用快慢指针就这么写，不用多想
fast 每次走两步：
fast = fast.next.next

走之前需要确保：
fast 不为 null — 否则 fast.next 报错
fast.next 不为 null — 否则 fast.next.next 报错

所以：
while (fast && fast.next)
// 等价于
while (fast !== null && fast.next !== null)


### 核心思路
快慢指针分两个阶段：
找相遇点
找环入口

阶段一：找相遇点
slow 走1步，fast 走2步
有环必然在环内相遇（fast 每轮比 slow 多走1步，差距连续缩小到0，不会跳过）

阶段二：找环入口
设 a = head到入口，b = 入口到相遇点，c = 相遇点到入口
相遇时推导：
2(a+b) = a + n*(b+c) + b
化简得：a = (n-1)*(b+c) + c
意思是：从相遇点走 a 步，绕 (n-1) 整圈后恰好到环入口。

所以 ptr 从 head 出发，slow 留在相遇点，同速走，相遇处就是环入口。



### 易错点
初始 fast 和 slow 都在 head，不能用 while(fast !== slow) 开头，会直接跳过
条件是 fast && fast.next，不是 fast && fast.next.next
无环返回 null，不是 -1


*/


var detectCycle = function(head) {
    let fast = head, slow = head
    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if(fast === slow) {
            let ptr = head
            while(ptr !== slow) {
                ptr = ptr.next
                slow = slow.next
            }
            return ptr
        }
     
    }
    return null
}