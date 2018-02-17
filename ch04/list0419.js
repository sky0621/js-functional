var reverse = (array) => {
    return array.reduce((accumulator, item) => {
        return [item].concat(accumulator);
    }, []);
};

var array = [1,2,3,4,5];
var reversed = reverse(array);
console.log(array);
console.log(reversed);
