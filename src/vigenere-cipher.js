class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct !== undefined ? direct : true;
  }

  encrypt(str, key) {
    str = str.toUpperCase();
    let text = this.stringToIntList(str);
    key = this.stringToIntList(key.toUpperCase());
    var table = this.makeTable();
    var keyChar = 0;
    var message = new Array();
    while (message.length < text.length) {
      for (var i = 0; i < text.length; i++) {
        if (text[i] < 65 || text[i] > 91)  {
          message[message.length] = text[i];
          continue;
        } else {
          var row = table[0].indexOf(key[keyChar]);
          var col = table[0].indexOf(text[i]);
          message[message.length] = table[row][col];
        }
        if (keyChar < key.length - 1) {
          keyChar++;
        } else {
          keyChar = 0;
        }
      }
    }
    return this.intsToCharList(this.direct ? message : message.reverse()).join("");
  }

  decrypt(cipher, key) {
    cipher = this.stringToIntList(cipher);
    key = this.stringToIntList(key.toUpperCase());
    var table = this.makeTable();
    var keyChar = 0;
    var message = new Array();
    while (message.length < cipher.length) {
      for (var i = 0; i < cipher.length; i++) {
        if (cipher[i] < 65 || cipher[i] > 91)  {
          message[message.length] = cipher[i];
          continue;
        } else {
          var row = table[0].indexOf(key[keyChar]);
          var col = table[row].indexOf(cipher[i]);
          message[message.length] = table[0][col];
        }
        if (keyChar < key.length - 1) {
          keyChar++;
        } else {
          keyChar = 0;
        }
      }
    }
    return this.intsToCharList(this.direct ? message : message.reverse()).join("");
  }

  stringToIntList(string) {
    var s = new Array();
    for (var i = 0; i < string.length; i++) {
      s[i] = string.charCodeAt(i);
    }
    return s;
  }

  intsToCharList(integers) {
    var ints = new Array();
    for (var i = 0; i < integers.length; i++) {
      ints[i] = String.fromCharCode(integers[i]);
    }
    return ints;
  }

  makeTable() {
    var table = new Array();
    var minASCII = 65;
    var maxASCII = 91;
    var i = 0;
    while (i + minASCII < maxASCII) {
      var line = new Array();
      for (var j = 0; j < maxASCII - minASCII; j++) {
        if (j + i + minASCII >= maxASCII) {
          line[line.length] = j + i - (maxASCII - minASCII) + minASCII;
        } else {
          line[line.length] = j + i + minASCII;
        }
      }
      table[table.length] = line;
      i++;
    }
    return table;
  }
}

module.exports = VigenereCipheringMachine;
