// const ids = new Set(['Hi', 'from', 'set!']); // 무조�? ?��?���? ?��?��?��?�� ?��.
// ids.add(2);
// ids.delete('213123123'); // ?��?�� ?�� ?��.
// if(ids.has('Hi')){
//     ids.delete('Hi'); // delete�? ?��?���? ?��?�� �??��
// }
// console.log(ids.has(2));
// // 2�? ?�� �? 추�?? ?��?���?�? 2�? 2개인�? ?��?��??? �? ?��.

// for (const entry of ids.entries()){
//     console.log(entry[0]);
// }

// // Set?��?�� 값의 ?��료형??? ?��?�� 개�?? ?��?�� ?�� ?��?��.
// // entries() ????��?�� values()�? ?��?��?���? ?��?�� Set 값을
// // ?�� 번만 출력?��?�� Iterable�? 반환?��?��.
// // ?��?���? console.log(entry[0]);

// const person1 = {name: 'Max'};
// const person2 = {name: 'Manuel'};

// const personData = new Map([[person1, [{date: 'yesterday', price : 10}]]]);

// personData.set(person2,[{date:'two weeks ago', price: 100}]);

// console.log(personData);
// console.log(personData.get(person1));

// for(const [key, value] of personData.entries()){
//     console.log(key, value);
// }

// for(const key of personData.keys()){ // key?���? ?��근하�? ?��?�� ?��
//     console.log(key);
// }

// for(const value of personData.values()){ // value?���? ?��근하�? ?��?�� ?��
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