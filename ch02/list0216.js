// 関数１を適用した結果に関数２を適用した結果を返す関数
var compose = (fn1, fn2) => {
    return (v) => {
        return fn2(fn1(v));
    };
};

console.log(
    compose(
        (a1) => { return a1 * a1; }, 
        (a2) => { return a2 * 10; }
    )(5)
);

var aStream = [1, (_) => {
    return 2;
}];
