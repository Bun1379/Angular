const intersect = <T>(arr1: T[], arr2: T[]): T[] => {
    return arr1.filter(item => arr2.includes(item));
};

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const result12 = intersect(arr1, arr2);

console.log(result12);
