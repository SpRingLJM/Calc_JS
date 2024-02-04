// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = Array(5, 2); // []
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems); // 숫자를 여러 개 넣으면 안 됨
// console.log(arrayListItems);
// // Hi!를 입력하면 H, i, ! 이렇게 분리된 상태로 나타난다.

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30,'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4,2.1], 5];

// for(const data of analyticsData){
//     for(const dataPoint of data){
//         console.log(dataPoint);
//     }
// }

// console.log(personalData[1]);

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// console.log(hobbies);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// // const storeResults = testResults.slice(0, 2);
// const storeResults = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log(storeResults, testResults);
// console.log(testResults.indexOf(1.5));

// console.log(testResults.includes(10.99));
// console.log(testResults.indexOf(10.99) !== -1);

// const personData = [{name : 'Max'}, {name : 'Manuel'}];
// console.log(personData.indexOf({name : 'Manuel'}));

// const manuel = personData.find((person, idx, persons) => {
//     return person.name === 'Manuel';
// });
// manuel.name = 'Anna';

// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//     return person.name === 'Max';
// });

// console.log(maxIndex);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
// const taxAdjustedPrices = [];

// for(const price of prices){
//     taxAdjustedPrices.push(price * (1 + tax)); // const인 경우에도 이렇게 할 수 있다.
//     // 왜냐하면 참조 유형 때문이며 상수에 새 값을 할당하지 않고 메모리의 데이터를 변경하기 때문이다.
// }

const taxAdjustedPrices = prices.map((price, idx, prices) => { // 위에 prices를 여기서 써도 에러 X
    // 이는 섀도잉 때문에 다른 스코프를 갖기 때문
    const priceObj = {index: idx, taxAdjPrice : price * (1 + tax)};
    return priceObj;
});

// console.log(prices, taxAdjustedPrices);

const sortedPrices = prices.sort((a , b) =>{
    if(a > b){
        return 1;
    } else if(a === b){
        return 0;
    } else {
        return -1;
    }
});
// console.log(sortedPrices.reverse());
console.log(sortedPrices);

const filteredArray = prices.filter(price => price > 6);

console.log(filteredArray);