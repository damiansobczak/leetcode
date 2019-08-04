class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert first node
  insertAtBeginning(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //Insert last node
  insertAtEnd(data) {
    let current = this.head;
    if (current === null) {
      this.head = new Node(data);
    } else {
      while (current) {
        if (current.next === null) {
          current.next = new Node(data);
          return;
        }
        current = current.next;
      }
    }
    this.size++;
  }

  //Insert at index
  insertAtIndex(data, index) {
    if (index > this.size) {
      console.log("There is no such index");
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      this.size++;
      return;
    }
    const node = new Node(data);
    let current,
      previous,
      count = 0;
    current = this.head;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    previous.next = node;
    node.next = current;
    this.size++;
  }

  //Get at index

  //Remove at index

  //Clear list

  //Print list data
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  //Get list size
  getSize() {
    return this.size;
  }
}

const ll = new LinkedList();

ll.insertAtEnd(100);
ll.insertAtEnd(200);
ll.insertAtEnd(300);
ll.insertAtBeginning(400);
ll.insertAtEnd(500);
ll.insertAtIndex(600, 2);
ll.insertAtBeginning(700);
ll.insertAtIndex(800, 1);
ll.insertAtEnd(900);
ll.printList();
