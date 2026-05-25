/*
三步走：

找中点 — 快慢指针，慢指针走一步、快指针走两步，慢指针停下时就是中点
反转后半段 — 从中点开始，反转后半段链表
双指针比较 — 一个从头、一个从反转后的后半段头，逐一比较


*/



var isPalindrome = function(head) {
    // 1. 找中点
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. 反转后半段
    let prev = null, curr = slow;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // 3. 比较
    let left = head, right = prev;
    while (right) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }
    return true;
};
