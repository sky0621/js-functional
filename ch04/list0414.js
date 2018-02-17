
// 空のリストを生成する（もっともシンプルな起点となる関数）
var empty = () => {
    return [];
};
console.log(empty());

// valueをlistに格納する
var construct = (value, list) => {
    list[0] = value;
    return list;
};
var oneValueList = construct("one", empty());
console.log(oneValueList);
