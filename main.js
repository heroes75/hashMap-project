import HashMap from "./hashMap.js";
import HashSet from "./hashSet.js";


// test hashMap
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


// test Hash test

console.log("test HashSet ".repeat(20));


let hashSet = new HashSet(16, 0.75);

hashSet.set("key");
hashSet.set("key");
hashSet.set("key1");
hashSet.set("key1");
hashSet.set("key2");
hashSet.set("key3");
hashSet.set("key4");
hashSet.set("key5");
hashSet.set("key6");
hashSet.set("key7");
hashSet.set("key8");
hashSet.set("key9");
hashSet.set("key10");
hashSet.set("key11");
hashSet.set("key12");
for (let i = 0; i < 20; i++) {
    hashSet.set(`key${i}`);
}


console.log((hashSet.bs));
console.log((hashSet.get("key11")));
console.log((hashSet.bs.length));
console.log((hashSet.length()));
console.log(hashSet.keys());