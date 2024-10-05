const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

const obj4 = { ...obj1, ...obj2, ...obj3 };
console.log(obj4);
