import LinkedList from "./linkedList.js";

class HashMap {
    constructor(loadFactor, capacity) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.bs = new Array(this.capacity)
    }

    hash(key) {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        console.log(hashCode);
        
        return hashCode;
    }

    bucket(key) {
        let h = this.hash(key);
        this.bs[h] = new LinkedList()

        console.log(this.bs[h]);
        console.log(this.bs);
        
        return this.bs[h];
    }

    entry(bucket, key) {
        let e = bucket(key)
        console.log({e});
        
        return e
    }

    set(key, value) {
        let b = this.bucket(key);
        let e = this.entry(b, key);
        if (e) {
            if (e.key === key) {
                e = new LinkedList();
                e.append(value);
                return
            }
            e.append(value);
            return
        }
        e = new LinkedList();
        e.append(value);
        b.push({key, e})

        if(this.bs.filter(el => typeof el === "array").length > this.capacity * this.loadFactor) {
            this.capacity *= 2;
            let newArray = new Array(this.capacity);
            newArray = [...this.bs];
            this.bs = newArray;
        }
    }

}

const hash = new HashMap(0.75, 16)

hash.set("ken", 23)

