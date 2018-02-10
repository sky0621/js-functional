var enumForm = (n) => {
    return [
        n, 
        (_) => {
            return enumForm(n + 1);
        }
    ];
};

var l0222r = enumForm(3);
// console.log(l0222r);
console.log(l0222r[0]);
// console.log(l0222r[1](3));
console.log(l0222r[1](3)[0]);
console.log(l0222r[1](4)[0]);
