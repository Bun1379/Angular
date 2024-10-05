const checkMeaninglessValues = (obj: Record<string, any>): boolean => {
    return Object.values(obj).some(value => value === null || value === undefined || (typeof value === 'number' && isNaN(value)));
};

const obj1 = { a: 1, b: null, c: 3 };
const obj2 = { a: 1, b: undefined, c: NaN };
const obj3 = { a: 1, b: 2, c: 3 };

console.log(checkMeaninglessValues(obj1));
console.log(checkMeaninglessValues(obj2));
console.log(checkMeaninglessValues(obj3));
