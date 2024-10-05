const text5 = "aaABB";

const lowercaseCount = (text5.match(/[a-z]/g) || []).length;
const uppercaseCount = (text5.match(/[A-Z]/g) || []).length;

const result = lowercaseCount > uppercaseCount
    ? text5.toLowerCase()
    : (uppercaseCount > lowercaseCount
        ? text5.toUpperCase()
        : (Math.random() > 0.5 ? text5.toLowerCase() : text5.toUpperCase()));

console.log(result);
