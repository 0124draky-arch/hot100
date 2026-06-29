var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0);
    let cur = result;
    let carry = 0;

    while(l1 || l2 || carry ) {
      let v1  = l1 ? l1.val : 0;
      let v2 = l2 ? l2.val : 0;
      let sum = v1 + v2 + carry;

      cur.next = new ListNode(sum % 10);
      carry = Math.floor(sum / 10)
      
      cur = cur.next;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;;
    }

    return result.next;
};




















