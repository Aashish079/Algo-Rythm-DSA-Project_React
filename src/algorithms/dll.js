class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  search(title){
    let ptr = this.head;
    do{
      if(ptr.data.title === title){
        return ptr;
      }
      ptr = ptr.next;
  }while(ptr != this.head);
  return null;
  }

  isEmpty() {
    return this.size === 0;
  }

  back() {
    if (this.isEmpty()) {
      return null;
    }
    return this.tail.data;
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.head.data;
  }

  pushBack(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.tail.next = this.head;
    this.head.prev = this.tail;
    this.size++;
  }

  pushFront(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.tail.next = this.head;
    this.head.prev = this.tail;
    this.size++;
  }

  popBack() {
    if (this.isEmpty()) {
      return null;
    }
    const removedData = this.tail.data;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return removedData;
  }

  popFront() {
    if (this.isEmpty()) {
      return null;
    }
    const removedData = this.head.data;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
    return removedData;
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  
}




export default DoublyLinkedList;
// Example usage:
// const dll = new DoublyLinkedList();
// dll.pushBack(1);
// dll.pushBack("anup");
// dll.pushBack(3);
// // dll.display(); // Output: 1 anup 3
// var ptr = dll.head;
// ptr = ptr.next;
// ptr = ptr.prev;
// console.log(ptr.data);

// console.log(dll.tail.prev.prev.data);
