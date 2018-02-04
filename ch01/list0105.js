var succ = (n) => {
    return n + 1;
};

var prev = (n) => {
    return n - 1;
};

var add = (x, y) => {
    // y は x に値が移動される過程で徐々に減らしていくので、1 を下回ったら計算は終了と捉える
    if(y < 1) {
        return x;
    }
    // x に +1 しつつ、y に -1 する（＝ y から x に 1 ずつ値を移動する）
    return add(succ(x), prev(y));
};

console.log(add(5, 7));
console.log(add(110, 525));
