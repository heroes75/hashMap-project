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

        //console.log(hashCode);
        
        return hashCode;
    }

    bucket(key) {
        let h = this.hash(key);
        if (h < 0 || h >= this.bs.length) {
            throw new Error("Trying to access index out of bounds");
        }

        this.bs[h] = this.bs[h] ||new LinkedList()

        //console.log(this.bs[h]);
        //console.log(this.bs);
        
        return this.bs[h];
    }

    entry(bucket, key) {
        console.log("in entrys", bucket.contains(key));

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
        //e.append(value);
        b.append({key, value})

        if(this.bs.filter(el => el instanceof LinkedList).length > this.capacity * this.loadFactor) {
            //this.capacity = this.capacity * 2 - this.capacity;
            let newArray = new Array(this.capacity);
            //console.log("in filter", newArray);
            //newArray = [...this.bs];
            //console.log("in filter", newArray.length);
            this.bs = this.bs.concat(newArray);
            this.capacity *= 2;
            console.log("in filter", this.bs);
            
        }
    }

}

const hash = new HashMap(0.75, 16);



hash.set("ken", 23);
//hash.set("keny", 23);
hash.set("keny", 230);
hash.set("kent", 23);
hash.set("konan", 23);
hash.set("kany", 23);
hash.set("kader", 23);
hash.set("frederic", 23);
hash.set("hamed", 23);
//hash.set("ismael", 23);
hash.set("ismael", 231);
hash.set("rama", 232);
console.log(hash.bs[3]);
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
 //hash.set('kite', 'pink')
 //hash.set('lion', 'golden')

console.log(hash.bs);
console.log(hash.bs.length);
console.log(hash.bs.filter(el => el instanceof LinkedList).length);


