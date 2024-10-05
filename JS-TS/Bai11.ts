const getKeysByValue = (obj: Record<string, any>, value: any): string[] => {
    return Object.keys(obj).filter(key => obj[key] === value);
};

const exampleObj = {
    a: 1,
    b: 2,
    c: 1,
    d: 3
};

const valueToFind = 1;
const result = getKeysByValue(exampleObj, valueToFind);

console.log(result);
