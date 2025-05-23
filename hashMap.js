import LinkedList from "./linkedList.js";

class HashMap {
    constructor(loadFactor, capacity) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        //this.bs = new Array(this.capacity).fill(6).map(el => new LinkedList());
        this.bs = new Array(this.capacity);
        //this.entries = 0;
    }

    hash(key) {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        //console.log(hashCode);
        
        return hashCode;
    }

    bucket(key) {
        let h = this.hash(key);
        if (h < 0 || h >= this.bs.length) {
            throw new Error("Trying to access index out of bounds");
        }

        this.bs[h] = this.bs[h] || new LinkedList();
        

        //console.log("typeof this.bs[h]", typeof this.bs[h]);
        //console.log(this.bs);
        
        return this.bs[h];
    }

    entry(bucket, key) {
        //console.log("in entrys", bucket.contains(key));
            return bucket.contains(key)
        
            
        
    }

    set(key, value) {
        let b = this.bucket(key);
        let e = this.entry(b, key);
        if (e) {
            console.log(false, false, false);
            
            b.modifyBucket(key, value)
            return
        }
        //console.log(this.hash(key), {key, value});
        //b = b == undefined ? new LinkedList() : b;
        
        b.append({key, value});
        //console.log(b);
        //console.log(this.bs);

        // after don't forget to refactory at this point

        let entries = this.bs.filter(el => el.size() > 0).reduce((acc, cur) => acc + cur.size(), 0);
        //this.entries++
        if(entries > this.capacity * this.loadFactor) {
            this.capacity *= 2;
            //let newArray = new Array(this.capacity).fill(6).map(el => new LinkedList());
            let newArray = new Array(this.capacity);
            let filterdBs = this.bs.filter(el => el.size() > 0);
            this.bs = newArray;
            filterdBs
            .forEach(element => {
                element.toArray().forEach(el => this.set(el.key, el.value))
            });
            //this.bs = this.bs.concat(newArray);
            //this.capacity *= 2;
            console.log("in filter", this.bs);
            
        }
    }

    get(key) {
        let b = this.bucket(key);
        let e = this.entry(b, key);
        
        return e ? b.head.value.value : null
    }

    has(key) {
        let b = this.bucket(key);
        let e = this.entry(b, key);
        return e
    }

    remove(key) {
        let b = this.bucket(key);
        let e = this.entry(b, key);

        if(e) {
            b.remove(b.findIndex(key))
            return true
        }
        return false
    }

    length() {
        return this.bs.filter(el => el.size() > 0)
        .reduce((acc, cur) => acc + cur.size(), 0);
    }

    clear() {
        this.capacity = 16;
        this.bs = new Array(this.capacity);
    }

    keys() {
        let filterdBs = this.bs.filter(el => el.size() > 0);
        let arr = [];
        filterdBs.forEach(el => {
            //console.log(el);
            //console.log(arr);
            
            arr.push(el.toArray().map(el => el.key))
        });
        return arr
    }

    values() {
        let filterdBs = this.bs.filter(el => el.size() > 0);
        let arr = [];
        filterdBs.forEach(el => {
            //console.log(el);
            //console.log(arr);
            
            arr.push(el.toArray().map(el => el.value))
        });
        return arr
    }

    entries() {
        let filterdBs = this.bs.filter(el => el.size() > 0);
        let arr = [];
        filterdBs.forEach(el => {
            //console.log(el);
            //console.log(arr);
            
            arr.push(el.toArray().map(el => [el.key, el.value]))
        });
        return arr
    }
}

export default HashMap;





