// const ids = new Set(['Hi', 'from', 'set!']); // ë¬´ì¡°ê±? ?´? ‡ê²? ?‚¬?š©?•´?•¼ ?•¨.
// ids.add(2);
// ids.delete('213123123'); // ?—?Ÿ¬ ?•ˆ ?‚¨.
// if(ids.has('Hi')){
//     ids.delete('Hi'); // deleteê°? ??Š”ì§? ?™•?¸ ê°??Š¥
// }
// console.log(ids.has(2));
// // 2ê°? ?‘ ë²? ì¶”ê?? ?˜?—ˆì§?ë§? 2ê°? 2ê°œì¸ì§? ?™•?¸??? ëª? ?•¨.

// for (const entry of ids.entries()){
//     console.log(entry[0]);
// }

// // Set?—?„œ ê°’ì˜ ?ë£Œí˜•??? ?—¬?Ÿ¬ ê°œê?? ?„?¼ ?ˆ˜ ?ˆ?‹¤.
// // entries() ????‹ ?— values()ë¥? ?‚¬?š©?•˜ë©? ?´?Š” Set ê°’ì„
// // ?•œ ë²ˆë§Œ ì¶œë ¥?•˜?Š” Iterableë¥? ë°˜í™˜?•œ?‹¤.
// // ?•„?‹ˆë©? console.log(entry[0]);

// const person1 = {name: 'Max'};
// const person2 = {name: 'Manuel'};

// const personData = new Map([[person1, [{date: 'yesterday', price : 10}]]]);

// personData.set(person2,[{date:'two weeks ago', price: 100}]);

// console.log(personData);
// console.log(personData.get(person1));

// for(const [key, value] of personData.entries()){
//     console.log(key, value);
// }

// for(const key of personData.keys()){ // key?—ë§? ? ‘ê·¼í•˜ê³? ?‹¶?„ ?•Œ
//     console.log(key);
// }

// for(const value of personData.values()){ // value?—ë§? ? ‘ê·¼í•˜ê³? ?‹¶?„ ?•Œ
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