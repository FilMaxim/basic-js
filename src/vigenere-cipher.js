const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    const letter = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let arrmesage = message.toUpperCase().split("");
    let long = arrmesage.length;
    let strKey = key.toUpperCase();
    let arrKey = [];
    // создаем массив message
    arrmesage = arrmesage.filter((elem) => letter.indexOf(elem) >= 0);
    arrmesage = arrmesage.map((elem) => letter.indexOf(elem));

    //создаем массив ключа
    for (let i = 0, j = 0; i < arrmesage.length; i++, j++) {
      if (j >= strKey.length) j = 0;
      arrKey[i] = letter.indexOf(strKey[j]);
    }

    // суммируем массив
    let resultSum = [];
    for (let i = 0, j = 0; i < long; i++) {
      if (letter.indexOf(message[i].toUpperCase()) === -1) {
        resultSum.push(message[i]);
      } else {
        let sum = arrmesage[j] + arrKey[j];
        resultSum.push(letter[sum > letter.length - 1 ? sum - 26 : sum]);
        j++;
      }
    }
    let result = this.mode ? resultSum.join("") : resultSum.reverse().join("");

    return result;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }
    const letter = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let arrmesage = encryptedMessage.split("");
    let long = arrmesage.length;
    let strKey = key.toUpperCase();
    let arrKey = [];
    // создаем массив decryptMessage
    arrmesage = arrmesage.filter((elem) => letter.indexOf(elem) >= 0);
    arrmesage = arrmesage.map((elem) => letter.indexOf(elem));

    //создаем массив ключа
    for (let i = 0, j = 0; i < arrmesage.length; i++, j++) {
      if (j >= strKey.length) j = 0;
      arrKey[i] = letter.indexOf(strKey[j]);
    }

    // суммируем массив
    let resultSum = [];
    for (let i = 0, j = 0; i < long; i++) {
      if (letter.indexOf(encryptedMessage[i].toUpperCase()) === -1) {
        resultSum.push(encryptedMessage[i]);
      } else {
        let sum = arrmesage[j] - arrKey[j];
        resultSum.push(letter[sum < 0 ? sum + 26 : sum]);
        j++;
      }
    }
    let result = this.mode ? resultSum.join("") : resultSum.reverse().join("");
    return result;
  }
}
module.exports = {
  VigenereCipheringMachine,
};
