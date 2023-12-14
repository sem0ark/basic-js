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

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function prepareKey(key) {
  return key.toUpperCase().split('').map((v) => alphabet.indexOf(v));
}

function moveChar(char, count, key) {
  if (!alphabet.includes(char)) return char;
  return alphabet[(alphabet.indexOf(char) + key[count % key.length]) % alphabet.length];
}

function moveCharBack(char, count, key) {
  if (!alphabet.includes(char)) return char;
  return alphabet[
    (alphabet.length + alphabet.indexOf(char) - key[count % key.length]) % alphabet.length
  ];
}


class VigenereCipheringMachine {

  constructor(not_turn = true) {
    this.reverse = !not_turn;
  }

  encrypt(str, key) {
    if (str === undefined || key === undefined)
      throw new Error("Incorrect arguments!");

    let counter = 0;
    const k = prepareKey(key);

    const result = str.toUpperCase().split('').map(c => alphabet.includes(c) ? moveChar(c, counter++, k) : c);
    if (this.reverse) return result.reverse().join('');
    return result.join('');
  }

  decrypt(str, key) {
    if (str === undefined || key === undefined)
      throw new Error("Incorrect arguments!");

    let counter = 0;
    const k = prepareKey(key);

    const result = str.toUpperCase().split('').map(c => alphabet.includes(c) ? moveCharBack(c, counter++, k) : c);
    if (this.reverse) return result.reverse().join('');
    return result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
