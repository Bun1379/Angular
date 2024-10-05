const removeDuplicates = <T>(array: T[]): T[] => {
    return [...new Set(array)];
};

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(arrayWithDuplicates);

console.log(uniqueArray);
