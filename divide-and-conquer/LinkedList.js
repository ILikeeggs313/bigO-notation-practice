//array/linked list exercises
/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }
  //let's first traverse through the list to see it
  traverse(){
    let currentNode = this.head;
    while(currentNode){
        //the googleNode is the currentNode
        //then we console.log currentnode.val which is google
        console.log(currentNode.val);
        //then we increment to the next node, then the loop starts again
        currentNode = currentNode.next;
    }
  }
  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if(!this.head){
        this.head = newNode;
        this.tail = this.head;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  /** pop(): return & remove last item. */

  pop() {
    if(this.length === 0){
        return undefined;
    } else{
        let currentNode = list.head, previous;
        while(currentNode.next){
            previous = currentNode;
            currentNode = currentNode.next
        }
        previous.next = null;
        return list;
        //we remove the last item in the list
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    //remove from unshfit method
    if (this.length === 0){
        return undefined;
    } else{
        const val = this.head.value;
        this.head = this.head.next;
        this.length --;
        return val;
    }
  }
  _get(idx) {
    let cur = this.head;
    let count = 0;

    while (cur !== null && count != idx) {
      count += 1;
      cur = cur.next;
    }

    return cur;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    let count = 0;
    while(currentNode !== null){
        if (count === idx){
            return currentNode;
        }
        count++;
        currentNode = currentNode.next;
       
    }
    //if none is found, return -1
    return -1;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
        throw new Error("Invalid index.");
      }
  
      let cur = this._get(idx);
      cur.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
        throw new Error("Invalid index.");
      }
  
      if (idx === 0) return this.unshift(val);
      if (idx === this.length) return this.push(val);
  
      // get the one before it
      let prev = this._get(idx - 1);
  
      let newNode = new Node(val);
      newNode.next = prev.next;
      prev.next = newNode;
  
      this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
        throw new Error("Invalid index.");
      }
  
      // special case: remove first item
  
      if (idx === 0) {
        let val = this.head.val;
        this.head = this.head.next;
        this.length -= 1;
        if (this.length < 2) this.tail = this.head;
        return val;
      }
  
      let prev = this._get(idx - 1);
  
      // special case: remove tail
  
      if (idx === this.length - 1) {
        let val = prev.next.val;
        prev.next = null;
        this.tail = prev;
        this.length -= 1;
        return val;
      }
  
      // normal case: remove in middle
  
      let val = prev.next.val;
      prev.next = prev.next.next;
      this.length -= 1;
      return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }

    return total / this.length;
  }
  reverseInPlace(node){
    let previous = null;
    let current = node;
    let next = null;
        while(current !== null){
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        node = previous;
        return node;
  }
  printList(node){
     while(node !== null){
         document.write(node.data + " ");
         node = node.next
     } 
  }
    sortedMerge(headA,headB)
{
    /* a dummy first node to
       hang the result on */
    let dummyNode = new Node(0);
      
    /* tail points to the
    last result node */
    let tail = dummyNode;
    while(true)
    {
          
        /* if either list runs out,
        use the other list */
        if(headA == null)
        {
            tail.next = headB;
            break;
        }
        if(headB == null)
        {
            tail.next = headA;
            break;
        }
          
        /* Compare the data of the two
        lists whichever lists' data is
        smaller, append it into tail and
        advance the head to the next Node
        */
        if(headA.data <= headB.data)
        {
            tail.next = headA;
            headA = headA.next;
        }
        else
        {
            tail.next = headB;
            headB = headB.next;
        }
          
        /* Advance the tail */
        tail = tail.next;
    }
    return dummyNode.next;
    }

    partitionLast( start,  end) {
        if (start == end || start == null || end == null)
            return start;
  
        let pivot_prev = start;
        let curr = start;
        let pivot = end.data;
  
        // iterate till one before the end,
        // no need to iterate till the end
        // because end is pivot
        while (start != end) {
            if (start.data < pivot) {
                // keep tracks of last modified item
                pivot_prev = curr;
                let temp = curr.data;
                curr.data = start.data;
                start.data = temp;
                curr = curr.next;
            }
            start = start.next;
        }
  
        // swap the position of curr i.e.
        // next suitable index and pivot
        let temp = curr.data;
        curr.data = pivot;
        end.data = temp;
  
        // return one previous to current
        // because current is now pointing to pivot
        return pivot_prev;
    }
  
     sort( start,  end) {
        if (start == null || start == end || start == end.next)
            return;
  
        // split list and partition recurse
        let pivot_prev = partitionLast(start, end);
        sort(start, pivot_prev);
  
        // if pivot is picked and moved to the start,
        // that means start and pivot is same
        // so pick from next of pivot
        if (pivot_prev != null && pivot_prev == start)
            sort(pivot_prev.next, end);
  
        // if pivot is in between of the list,
        // start from next of pivot,
        // since we have pivot_prev, so we move two nodes
        else if (pivot_prev != null && pivot_prev.next != null)
            sort(pivot_prev.next.next, end);
    }


}

let list = new LinkedList();
list.push("hello");
list.push("goodbye");
list.push("last value in the list");
list.unshift("unshift val");


// module.exports = LinkedList;
