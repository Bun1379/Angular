const checkEqual = (arr1: Array<string | number>, arr2: Array<string | number>): boolean => {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
};

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [3, 2, 1];

console.log(checkEqual(arr1, arr2));
console.log(checkEqual(arr1, arr3));
