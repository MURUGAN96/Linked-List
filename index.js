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

  delete(value) {
    if (!this.head) return;
    if (this.head.value == value) this.head = this.head.next;
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value == value) currentNode.next.next;
      else currentNode = currentNode.next;
    }
    if (this.tail.value == value) this.tail = currentNode;
  }

  insertAfter(value, node) {
    let elementNode = this.find(node)
    if(elementNode){
      let currenNode = {value:value,next:elementNode.next}
      elementNode.next = currenNode.next;
    }
  }

  find(value) {
    if (!head) return;
    let curNode = this.head;
    while (curNode) {
      if (curNode.value == value) return curNode;
      curNode = curNode.next;
    }
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
myList.append(1);
myList.append('Linked List');
myList.prepend('first List');
myList.prepend('second List');
myList.delete(1);

console.log(myList.formatArray());

// console.log(myList.find('Linked List'));
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Linked List</h1>`;
