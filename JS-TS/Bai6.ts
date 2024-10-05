const checkPassword = (password: string): boolean => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{}]).{8,}$/;
    return regex.test(password);
};

const password = "StrongPass1!";
// const password = "123456";

console.log(checkPassword(password) ? "Password is strong" : "Password is weak");
