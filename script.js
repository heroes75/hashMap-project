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

const hash = new HashMap(0.75, 16);

console.log(hash.bs);


hash.set("ken", 23);
hash.set("kenny", 23);
hash.set("kenny", 230);
hash.set("kent", 23);
hash.set("konan", 23);
hash.set("conan", 23);
hash.set("kany", 23);
hash.set("kader", 23);
hash.set("frederic", 23);
hash.set("hamed", 23);
hash.set("ismael", 23);
hash.set("ismael", 231);
hash.set("rama", 232);
//console.log(hash.bs[3]);
hash.set("sita", 111);
 hash.set('apple', 'red')
 hash.set('banana', 'yellow')
 hash.set('carrot', 'orange')
 hash.set('dog', 'brown')
 hash.set('elephant', 'gray')
 hash.set('frog', 'green')
hash.set('grape', 'purple')
 hash.set('hat', 'black')
 hash.set('ice cream', 'white')
 hash.set('jacket', 'blue')
 hash.set('kite', 'pink')
 hash.set('lion', 'golden')
hash.set('moon', 'silver')

console.log(hash.get("kit"));
console.log('hash.has("kit")', hash.has("kit"));
console.log(hash.remove("kite"));
 hash.set('kite', 'pink')
console.log(hash.keys());
console.log(hash.values());
console.log(hash.entries());

//hash.set('kite', 'pink')




//console.log(hash.bs[28].head.next);
console.log(hash.bs);
console.log(hash.bs.length);
console.log(hash.length());
hash.clear()
console.log(hash.length());


console.log(hash.bs);



