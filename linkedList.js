class Node {
    constructor( value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head
    }

    append(value) {
        let tmp = this.head;
        if (this.head === undefined) {
            this.head = new Node(value);
            return
        }

        while (tmp.next !== null) {
            tmp = tmp.next
        }

        tmp.next = new Node(value)
    }
}

export default LinkedList;

//let list = new LinkedList()

//list.append("value");
//list.append("value1");
//list.append("value2");
//console.log(list);
