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
        this.bs[h] = []

        console.log(this.bs[h]);
        console.log(this.bs);
        
        return this.bs[h % this.bs.length];
    }

}

const hash = new HashMap(0.75, 16)

hash.bucket("ket")