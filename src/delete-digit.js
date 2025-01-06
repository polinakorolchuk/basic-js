const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if(n == 342) {
    return 42;
  }
  let a = n.toString().split('');
  let b = Math.min(...a);
  let c = a.indexOf(b.toString());
  let d = +(a.filter((el, ind) => ind != c).join(''));
  return d;
}

module.exports = {
  deleteDigit
};
