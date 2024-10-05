const randomArray = (): { stt: number }[] => {
    const length = Math.floor(Math.random() * 10) + 1;

    return Array.from({ length }, () => ({
        stt: Math.floor(Math.random() * 51)
    }));
};

let arr = randomArray();
console.log('Mảng ban đầu:', arr);

arr = arr.sort((a, b) => b.stt - a.stt);

console.log('Mảng sắp xếp giảm dần:', arr);
