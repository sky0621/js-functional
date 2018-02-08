var constant = (any) => {
    return (_) => {
        return any;
    };
};

var alwaysOne = constant(1);
console.log(alwaysOne(33));
console.log(alwaysOne(-1));

// expect(
//     map(alwaysOne)([1,2,3])
// ).to.eql(
//     [1,1,1]
// );

// var m = map(alwaysOne());
