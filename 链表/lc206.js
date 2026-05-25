
/*
迭代法就是不断反转指针，
要储存状态
存、转、移、移 — 存next，转指针，移prev，移curr
这4步顺序不能乱，尤其是①必须在②之前。
*/

var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        const next = curr.next;  // ① 保存
        curr.next = prev;        // ② 反转
        prev = curr;             // ③ prev前进
        curr = next;             // ④ curr前进
    }
    return prev;
};
