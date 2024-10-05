const nowTime = new Date();
const daysRemain = new Date(nowTime.getFullYear(), nowTime.getMonth() + 1, 0).getDate() - nowTime.getDate();
console.log(daysRemain);
