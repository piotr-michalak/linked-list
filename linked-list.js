import Node from './node.js';

class LinkedList {
    constructor(array = []) {
        if (array.length > 0) {
            array.forEach((value) => {
                this.append(value);
            });
        };
    }

    rootNode = null;

    // adds a new node containing value to the end of the list
    append(value) {
        let node = new Node(value);

        if (this.rootNode === null) {
            this.rootNode = node;
        } else {
            this.tail().nextNode = node;
        }
        node.nextNode = null;
    }

    // adds a new node containing value to the start of the list
    prepend(value) {
        let node = new Node(value);

        if (this.rootNode === null) {
            this.rootNode = node;
            return;
        }
        node.nextNode = this.rootNode;
        this.rootNode = node;
    }

    // returns the total number of nodes in the list
    size() {
        let total = 0;
        let prevNode = this.rootNode;

        while (prevNode !== null) {
            total++;
            prevNode = prevNode.nextNode;
        }

        return total;
    }

    // returns the first node in the list
    head() {
        return this.rootNode;
    }

    // returns the last node in the list
    tail() {
        if (this.rootNode === null) return null;
        let prevNode = this.rootNode;

        while (prevNode.nextNode !== null) prevNode = prevNode.nextNode;

        return prevNode;
    }

    // returns the node at the given index
    at(index) {
        if (this.rootNode === null) return null;
        let prevNode = this.rootNode;

        for (let i = 0; i <= index; i++) {
            prevNode = prevNode.nextNode;
        }

        return prevNode;
    }

    // removes the last element from the list
    pop() {
        if (this.rootNode === null) return;
        else if (this.size() === 1) {
            this.rootNode = null;

            return;
        }

        let prevNode = this.rootNode;
        let currentNode = prevNode.nextNode;

        while (currentNode.nextNode !== null) {
            prevNode = currentNode;
            currentNode = currentNode.nextNode;
        }

        prevNode.nextNode = null;
    }

    // returns true if the passed in value is in the list and otherwise returns false
    contains(value) {
        if (this.rootNode === null) return false;

        let currentNode = this.rootNode;
        while (currentNode.nextNode !== null) {
            if (currentNode.value === value) return true;
            currentNode = currentNode.nextNode;
        }

        return false;
    }

    // returns the index of the node containing value, or null if not found
    find(value) {
        if (this.rootNode === null) return null;

        let currentNode = this.rootNode;
        let index = 0;
        while (currentNode.nextNode !== null) {
            if (currentNode.value === value) return index;
            currentNode = currentNode.nextNode;
            index++;
        }

        return null;
    }

    // represents your LinkedList objects as strings, so you can print them out and preview them in the console
    // the format should be: ( value ) -> ( value ) -> ( value ) -> null
    toString() {
        if (this.rootNode === null) return 'null';

        let prevNode = this.rootNode;
        let string = '';
        while (prevNode !== null) {
            string += `( ${prevNode.value} ) -> `;
            prevNode = prevNode.nextNode;
        }
        string += 'null';

        return string;
    }
}

export default LinkedList;