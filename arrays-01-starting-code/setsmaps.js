// const ids = new Set(['Hi', 'from', 'set!']); // λ¬΄μ‘°κ±? ?΄? κ²? ?¬?©?΄?Ό ?¨.
// ids.add(2);
// ids.delete('213123123'); // ??¬ ? ?¨.
// if(ids.has('Hi')){
//     ids.delete('Hi'); // deleteκ°? ??μ§? ??Έ κ°??₯
// }
// console.log(ids.has(2));
// // 2κ°? ? λ²? μΆκ?? ??μ§?λ§? 2κ°? 2κ°μΈμ§? ??Έ??? λͺ? ?¨.

// for (const entry of ids.entries()){
//     console.log(entry[0]);
// }

// // Set?? κ°μ ?λ£ν??? ?¬?¬ κ°κ?? ??Ό ? ??€.
// // entries() ???? ? values()λ₯? ?¬?©?λ©? ?΄? Set κ°μ
// // ? λ²λ§ μΆλ ₯?? Iterableλ₯? λ°ν??€.
// // ??λ©? console.log(entry[0]);

// const person1 = {name: 'Max'};
// const person2 = {name: 'Manuel'};

// const personData = new Map([[person1, [{date: 'yesterday', price : 10}]]]);

// personData.set(person2,[{date:'two weeks ago', price: 100}]);

// console.log(personData);
// console.log(personData.get(person1));

// for(const [key, value] of personData.entries()){
//     console.log(key, value);
// }

// for(const key of personData.keys()){ // key?λ§? ? κ·Όνκ³? ?Ά? ?
//     console.log(key);
// }

// for(const value of personData.values()){ // value?λ§? ? κ·Όνκ³? ?Ά? ?
//     console.log(value);
// }

let person = {name: 'Max'};
const persons = new WeakSet();
persons.add(person);

// person = null;

console.log(persons);

const personData = new WeakMap();

personData.set(person, 'Extra info!');
person = null;

console.log(personData);