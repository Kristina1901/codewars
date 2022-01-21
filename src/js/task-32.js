const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const rl = readline.createInterface({ input, output });
function startGame() {
  updateLayout();
  rl.on("line", (input) => {
    parseInt(input);
    if (input == "q") {
      endGame();
    }
    if (input > 0 && input <= 9) {
      turn(input);
      updateLayout();
    } else {
      console.log(
        "Playing field number is incorrect! Please, choose a correct playing field"
      );
    }
  });

  function renderField(field) {
    let output = "";
    let newarr = [];
    let number = [...field];

    for (let i = 0; i < field.length; i++) {
      if (field[i] !== 0) {
        newarr.push(field[i]);
      }
    }
    for (let i = 0; i < number.length; i++) {
      if (number[i] === 1) {
        number[i] = "x";
      }
      if (number[i] === -1) {
        number[i] = "0";
      }
      if (number[i] === 0) {
        number[i] = " ";
      }
    }

    if (newarr.length < 1) {
      output = `   ${"|   |"}\n${"---+---+---"}\n   ${"|   |"}\n${"---+---+---"}\n   ${"|   |"}`;
    } else {
      output = ` ${number[0]} ${"|"} ${number[1]} ${"|"} ${
        number[2]
      } \n${"---+---+---"}\n ${number[3]} ${"|"} ${number[4]} ${"|"} ${
        number[5]
      } \n${"---+---+---"}\n ${number[6]} ${"|"} ${number[7]} ${"|"} ${
        number[8]
      }`;
    }

    return output;
  }
  function makeTurn(field, player, index) {
    for (let i = 0; i < field.length; i++) {
      if (field[index] === 0) {
        field[index] = 1;
        return true;
      } else if (field[index] === 1) {
        field[index] = 1;
        return false;
      }
    }
  }
  function gameStatus(field) {
    let zeroarr = [];
    let nozeroarr = [];
    let newarr = [];
    let somarr = [];
    let orrarr = [];
    let krr = [];
    let anotherarr = [];
    let fg = [];
    let k = [];
    let l = [];
    let a = [];

    for (let i = 0; i < field.length; i++) {
      if (field[i] === 0) {
        zeroarr.push(field[i]);
      }

      if (field[i] !== 0) {
        nozeroarr.push(field[i]);
      }

      if (field[0] === field[4] && field[8] === field[0]) {
        newarr.push(field[0]);
      }

      if (field[3] === field[4] && field[4] === field[3]) {
        somarr.push(field[3]);
      }
      if (field[0] === field[1] && field[2] === field[0]) {
        krr.push(field[0]);
      }

      if (field[2] === field[4] && field[7] === field[2]) {
        orrarr.push(field[0]);
      }
      if (field[6] === field[7] && field[6] === field[8]) {
        anotherarr.push(field[0]);
      }
      if (field[0] === field[3] && field[6] === field[0]) {
        l.push(field[0]);
      }
      if (field[2] === field[5] && field[8] === field[2]) {
        a.push(field[0]);
      }
    }

    if (nozeroarr.length == 9) {
      return "end";
    } else if (zeroarr.length == 9) {
      return "turn";
    } else if (newarr[0] == -1) {
      return "0";
    } else if (newarr[0] == 1) {
      return "x";
    } else if (somarr[0] == -1) {
      return "0";
    } else if (somarr[0] == 1) {
      return "x";
    } else if (orrarr[0] == -1) {
      return "0";
    } else if (orrarr[0] == 1) {
      return "x";
    } else if (krr[0] == -1) {
      return "0";
    } else if (krr[0] == 1) {
      return "x";
    } else if (anotherarr[0] == -1) {
      return "0";
    } else if (anotherarr[0] == 1) {
      return "x";
    } else if (fg[0] == -1) {
      return "0";
    } else if (fg[0] == 1) {
      return "x";
    } else if (k[0] == -1) {
      return "0";
    } else if (k[0] == 1) {
      return "x";
    } else if (l[0] == -1) {
      return "0";
    } else if (l[0] == 1) {
      return "x";
    } else if (a[0] == 1) {
      return "x";
    } else if (a[0] == -1) {
      return "0";
    } else {
      return "turn";
    }
  }
}
console.log(startGame());
