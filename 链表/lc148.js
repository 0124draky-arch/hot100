var sortList = function(head) {
    // 递归终止条件：0个或1个节点，已经有序
    if (!head || !head.next) return head;

    // 第一步：找中点，切断链表
    let mid = findMid(head);

    // 第二步：递归排序两半
    let left = sortList(head);
    let right = sortList(mid);

    // 第三步：合并两个有序链表（21题！）
    return merge(left, right);
};


const findMid = (head) => {
  let slow = head;
  let fast = head;

  /*
  为什么是fast.next && fast.next.next 而不是 fast && fast.next？
  因为我们希望 slow 停在左半部分的最后一个节点，这样才能切断。
  如果条件是 fast && fast.next，slow 会多走一步，切点就错了。
  */
  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let mid = slow.next;
  slow.next = null;

  return mid;
}


const merge = (l1, l2) => {
  let dummy = new ListNode(0);
  let cur = dummy;

  while(l1 && l2) {
    if(l1.val < l2.val) {
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