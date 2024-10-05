const isEqual = (obj1: any, obj2: any): boolean => {
    if (typeof obj1 === 'object' && obj1 !== null && typeof obj2 === 'object' && obj2 !== null) {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) return false;

        for (let key of keys1) {
            if (!isEqual(obj1[key], obj2[key])) return false;
        }

        return true;
    } else {
        return obj1 === obj2;
    }
};

const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
const objC = { a: 1, b: { c: 3 } };

console.log(isEqual(objA, objB));
console.log(isEqual(objA, objC));
