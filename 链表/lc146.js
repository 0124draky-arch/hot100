class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();

    this.head = {prev:null, next:null};
    this.tail = {prev:null, next:null};

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if(!this.map.has(key)) return -1;
    const node = this.map.get(key);
    this._moveToHead(node);
    return node.val;
  }

  put(key, value) {
    if(this.map.has(key)) {
      const node = this.map.get(key);
      node.val = value;
      this._moveToHead(node);
    } else {
      const node = {key, val: value};
      this.map.set(key, node);
      this._addToHead(node);

      if(this.map.size > this.capacity) {
        const tail = this._removeTail()
        this.map.delete(tail.key)
      }
    }


  }


  _addToHead(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node
  }

  _removeNode(node) {
    node.next.prev = node.prev;
    node.prev.next = node.next; 
  }

  _moveToHead(node) {
    this._removeNode(node);
    this._addToHead(node);
  }

  _removeTail() {
    const tail = this.tail.prev;
    this._removeNode(tail);
    return tail;
  }


}
