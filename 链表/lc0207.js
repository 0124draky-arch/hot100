
/*

核心思路：绕一圈，消除长度差
让指针 A 遍历完链表 A 后转到链表 B，指针 B 遍历完链表 B 后转到链表 A。

若相交：两指针走过的总路程相同（lenA + lenB），会在交点相遇
若不相交：两指针同时到达 null
A: 1 → 2 → 3 ↘
               5 → 6 → null
B:     4 → 4 ↗

pA 走: 1 2 3 5 6 null → 4 4 5
pB 走: 4 4 5 6 null → 1 2 3 5  ← 在 5 相遇



先建立一个直觉：
为什么两指针会在交点相遇？
假设：
链表 A 独有部分长度为 a
链表 B 独有部分长度为 b
公共部分长度为 c

A: [--a--][--c--]
B: [----b----][--c--]
pA 走的路：a + c + b（走完A，转到B头，走到交点）
pB 走的路：b + c + a（走完B，转到A头，走到交点）
a + c + b == b + c + a ✓ 路程完全相同，所以同时到达交点。

换个角度理解：
转头的本质是补齐长度差。
B 比 A 长了 b - a 步，pB 转到 A 之后，相当于 pA 提前走了 b - a 步，两者就对齐了。

不相交的情况：
没有公共部分，c = 0，
两指针都走了 a + b 步后同时到达 null，
null == null 退出循环，返回 null。

一句话总结：
让两个指针走相同的总路程，自然就对齐了。

*/


var getIntersectionNode = function(headA, headB) {
    let a = headA, b = headB;
    while (a !== b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }
    return a;
};
