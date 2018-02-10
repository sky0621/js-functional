var constant = (any) => {
    return (_) => {
        return any;
    };
};

var alwaysOne = constant(1);
console.log(alwaysOne(33));
console.log(alwaysOne(-1));
