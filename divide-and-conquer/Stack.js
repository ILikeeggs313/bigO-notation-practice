class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
      }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //push
    push(){
        let node = new Node(val);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            let tmp = this.first;
            this.first = node;
            this.first.next = tmp;
        }

        this.size++;
    }
    //pop
    pop(){
        if (!this.first) throw new Error("Can't pop from an empty stack.");

        let temp = this.first;

        if (this.first == this.last) {
            this.last = null;
    }

        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
    //peek
    peek(){
        return this.first.val;
    }
    //isEmpty
    isEmpty(){
        return this.size === 0;
    }
}