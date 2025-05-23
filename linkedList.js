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

    size() {
        let tmp = this.head;
        let size = 0;
        if(this.head === undefined) return size
        if (this.head !== undefined) size++
        while (tmp.next !== null) {
            size++;
            tmp = tmp.next;
        }
        
        return size
    }

    contains(key) {
        let tmp = this.head;
        let pointer = 0
        while(pointer < this.size()) {
            if(tmp.value.key === key || tmp.value === key) {
                return true
            }
            tmp = tmp.next;
            pointer++
        }
        return false
    }

    modifyBucket(key, value) {
        let tmp = this.head;
        let pointer = 0;
        while(pointer < this.size()) {
            if(tmp.value.key === key) {
                tmp.value.value = value
            }
            tmp = tmp.next;
            pointer++
        }
    }

    toArray() {
        let tmp = this.head;
        let arr = [];
        while (tmp.next !== null) {
            arr.push(tmp.value);
            tmp = tmp.next;
        }

        arr.push(tmp.value);
        return arr
    }

    find(key) {
        let tmp = this.head;
        let pointer = 0;
        while(pointer < this.size()) {
            if(tmp.value.key === key) {
                return tmp.value
            }
            tmp = tmp.next;
            pointer++
        }
        return null
    }

    remove(index) {
        let tmp = this.head;
        let pointer = 0;

        if(index === 0) {
            this.head = this.head.next;
            if(this.head === null) this.head = undefined;
            return
        }

        while (pointer < index - 1) {
            tmp = tmp.next;
            pointer++
        }

        tmp.next = tmp.next.next
        if(this.head === null) this.head = undefined
    }

    findIndex(key) {
        let tmp = this.head;
        let index = 0;
        while(index < this.size()) {
            if(tmp.value.key === key || tmp.value === key) return index;
            tmp = tmp.next;
            index++;
        }
        return null
    }
}

export default LinkedList;

let list = new LinkedList()

//list.append("value");
list.append({key: "dasdasd", value: "1234"});
list.append({key: "qwerty", value: "56789"});
list.size();
list.modifyBucket("dasdasd", "new1234")

console.log(list.contains("dasdasd"));
console.log(list.toArray());
console.log(list.remove(1));
console.log(list.remove(0));

console.log(list);
