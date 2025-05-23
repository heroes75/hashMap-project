import LinkedList from "./linkedList.js";

class HashSet {
    constructor(capacity, loadFactor) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.bs = new Array(this.capacity).fill(6).map(el => el = new LinkedList());
        this.entries = 0;
    }

    hash(key) {
        let hashCode = 0;
      
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;

    }

    bucket(key) {
        let h = this.hash(key);
        return this.bs[h]
    }

    entry(b, key) {
        return b.contains(key)
    }

    set(key) {
        let b = this.bucket(key);
        let e = this.entry(b, key)
        
        if(e) {
            return
        }
        b.append(key);
        this.entries++;

        if (this.entries > this.capacity * this.loadFactor) {
            this.capacity *= 2;
            let filteredBs = this.bs.filter(el => el.size() > 0);
            this.bs = new Array(this.capacity).fill(6).map(el => el = new LinkedList());
            this.entries = 0;
            filteredBs.forEach((el => el.toArray().forEach(el => this.set(el))))
        }
    }

    get(key) {
        let b = this.bucket(key);
        let e = this.entry(b, key)
        if(e) {
            return this.hash(key);
        }
        return null
    }

    has(key) {
        let b = this.bucket(key);
        let e = this.entry(b, key);
        return e
    }

    remove(key) {
        let b = this.bucket(key);
        let e = this.entry(b, key);
        if (e) {
            b.remove(b.findIndex(key));
            return true
        }
        return false
    }

    length() {
        return this.entries
    }

    clear() {
        this.capacity = 16;
        this.bs = new Array(this.capacity).fill(6).map(el => el = new LinkedList())
    }

    keys() {
        let arr = [];
        let filterdBs = this.bs.filter(el => el.size() > 0);
        filterdBs.forEach(el => {
             arr = arr.concat(el.toArray())
        });
        return arr
    }
}

export default HashSet;


