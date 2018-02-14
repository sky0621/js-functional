var expect = require('expect.js');

var array = [5,3,4,1,2];
expect(
    array.sort((n, m) => {
        return n > m;
    })
).to.eql(
    [1,2,3,4,5]
);
