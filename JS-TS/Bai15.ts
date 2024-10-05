const randomArray15 = Array.from({ length: Math.floor(Math.random() * 10) + 1 }, () => Math.floor(Math.random() * 46) + 5);

// Tìm số lớn nhất
const maxNumber = Math.max(...randomArray15);

// Log kết quả
console.log('Mảng:', randomArray15);
console.log('Số lớn nhất:', maxNumber);
