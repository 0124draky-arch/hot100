
/*
快面指针相遇 固定写法
同142

*/



var hasCycle = function(head) {
    let fast = head, slow = head
    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next

        if(fast === slow)
        return true
    }
    return false
};