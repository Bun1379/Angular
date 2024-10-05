const sum = (arr: number[]): number => arr.reduce((sum, num) => sum + num, 0);

const array = [1, 2, 3, 4];

const sum2 = sum(array);

console.log(sum2);
