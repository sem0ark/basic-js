/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  getLength() {
    return this.arr?.length || 0;
  },

  addLink(value) {
    if (value !== undefined) value = new String(value);
    else value = '';

    const cur = this.arr || [];
    return newMaker(cur.concat([value]));
  },

  removeLink(position) {
    if (typeof position !== "number"
      || !Number.isInteger(position)
      || position <= 0
      || position > this.getLength()) throw new Error("You can't remove incorrect link!");

    const cur = this.arr || [];
    return newMaker(cur.filter((v, i) => i !== (position - 1)));
  },

  reverseChain() {
    const cur = this.arr || [];
    return newMaker([...cur].reverse());
  },

  finishChain() {
    const cur = this.arr || [];
    const result = "( " + cur.join(" )~~( ") + " )";
    return result;
  }
};

function newMaker(arr) {
  const obj = { arr: arr || [] };
  Object.setPrototypeOf(obj, chainMaker);
  return obj;
}


module.exports = {
  chainMaker
};
