var adder = (y) => {
    return addWithFreeVariable = (x) => {
        return x + y;
    };
};

var a = adder(9);
console.log(a);
console.log(a(3));
