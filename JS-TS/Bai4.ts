const text = "xin chào mọi người";
const text2 = text.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

console.log(text2); 
