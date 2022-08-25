// Import stylesheets
import './style.css';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = { value: value, next: null };
    if (this.tail) this.tail.next = newNode;
    this.tail = newNode;
    if (!this.head) this.head = newNode;
  }

  prepend(value) {
    const firstNode = { value: value, next: this.head };
    this.head = firstNode;
    if (!this.tail) this.tail = firstNode;
  }

  formatArray() {
    const elements = [];
    let currentNode = this.head;
    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }
    return elements;
  }
}

const myList = new LinkedList();
// myList.append(1);
// myList.append('Linked List');
myList.prepend('first List');
console.log(myList.formatArray());

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Linked List</h1>`;
