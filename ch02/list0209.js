/* forEach使用版 */
var sum = (array) => {
    var result = 0;
    var index = 0;
    while(index < array.length) {
        result = result + array[index];
        index = index + 1;
    }
    return result;
};

/* reduce使用版 */
var sum2 = (array) => {
    return array.reduce(
        /* 第1引数は関数 */
        (accumulator, item) => {
            return accumulator + item;  // 足し算
        },
        /* 第2引数は蓄積変数の初期値：０ */
        0
    );
};

ary = [1,2,3,4,5];
console.log(sum(ary));
console.log(sum2(ary));
