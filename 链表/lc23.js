function mergeKLists(lists) {
    if (!lists.length) return null;
    if (lists.length === 1) return lists[0];
    
    const mid = Math.floor(lists.length / 2);
    const left  = mergeKLists(lists.slice(0, mid));
    const right = mergeKLists(lists.slice(mid));
    
    return mergeTwoLists(left, right);
}


const mergeTwoLists = (l1, l2) => {
  let dummy = new ListNode(0);
  let cur = dummy;
  while(l1 && l2) {
    if(l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }

  cur.next = l1 || l2;
  return dummy.next;
}