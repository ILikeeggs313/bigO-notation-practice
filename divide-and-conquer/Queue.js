//make a queue class
//including enqueueing, dequeueing, peeking, and isEmpty
//make it throw an error if you try to dequeue from an empty queue
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueueing(val){
        //enqueue (item): add to end
        let node = new Node(val);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        this.size++;
    }
    dequeueing(){
    //dequeue : remove & return first item
        if (!this.first) throw new Error("Can't dequeue from an empty queue.");

        let temp = this.first;
        if (this.first == this.last) {
        this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;
        }
    peek(){
        return this.first.val;
    }
    isEmpty(){
        //check if the list is empty?
        return this.size === 0;
    }
}