var machine = (program, tape, initState, endState) => {
    /* ヘッドの位置 */
    var position = 0;
    /* マシンの状態 */
    var state = initState;
    /* 実行する命令 */
    var currentInstruction = undefined;

    while(state != endState) {
        var cell = tape[String(position)];
        if(cell) {
            currentInstruction = program[state][cell];
        } else {
            currentInstruction = program[state].B;
        }

        if(currentInstruction) {
            /* テープに印字 */
            tape[String(position)] = currentInstruction.write;
            /* ヘッドを動かす */
            position += currentInstruction.move;
            /* 次の状態に移る */
            state = currentInstruction.next;
        } else {
            return false;
        }
    }
    return tape;
};

/* 2進法で10 = 10進法で2を表すテープ */
var tape = {
    '0': '1',
    '1': '0'
};

/* マシンに与えるプログラム */
var program = {
    'q0': {
        "1": {"write": "1", "move": 1, "next": 'q0'},
        "0": {"write": "0", "move": 1, "next": 'q0'},
        "B": {"write": "B", "move": -1, "next": 'q1'},
    },
    'q1': {
        "1": {"write": "0", "move": -1, "next": 'q1'},
        "0": {"write": "1", "move": -1, "next": 'q2'},
        "B": {"write": "1", "move": -1, "next": 'q3'},
    },
    'q2': {
        "1": {"write": "1", "move": -1, "next": 'q2'},
        "0": {"write": "0", "move": -1, "next": 'q2'},
        "B": {"write": "B", "move": 1, "next": 'q4'},
    },
    'q3': {
        "1": {"write": "1", "move": 1, "next": 'q4'},
        "0": {"write": "0", "move": 1, "next": 'q4'},
        "B": {"write": "B", "move": 1, "next": 'q4'},
    }
};

console.log(machine(program, tape, 'q0', 'q4'));
