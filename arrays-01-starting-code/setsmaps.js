// const ids = new Set(['Hi', 'from', 'set!']); // 무조건 이렇게 사용해야 함.
// ids.add(2);
// ids.delete('213123123'); // 에러 안 남.
// if(ids.has('Hi')){
//     ids.delete('Hi'); // delete가 됐는지 확인 가능
// }
// console.log(ids.has(2));
// // 2가 두 번 추가 되었지만 2가 2개인지 확인은 못 함.

// for (const entry of ids.entries()){
//     console.log(entry[0]);
// }

// // Set에서 값의 자료형은 여러 개가 섞일 수 있다.
// // entries() 대신에 values()를 사용하면 이는 Set 값을
// // 한 번만 출력하는 Iterable를 반환한다.
// // 아니면 console.log(entry[0]);

const person1 = {name: 'Max'};
const person2 = {name: 'Manuel'};

const personData = new Map([[person1, [{date: 'yesterday', price : 10}]]]);

personData.set(person2,[{date:'two weeks ago', price: 100}]);

console.log(personData);
console.log(personData.get(person1));

for(const [key, value] of personData.entries()){
    console.log(key, value);
}

for(const key of personData.keys()){ // key에만 접근하고 싶을 때
    console.log(key);
}

for(const value of personData.values()){ // value에만 접근하고 싶을 때
    console.log(value);
}
