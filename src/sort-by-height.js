const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const one = arr.filter((h) => h !== -1). sort((a, b) => a - b);
  let ind = 0;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      res[i] = one[ind];
      ind++;
    } else {
      res[i] = -1;
    }
  }
  return res;
}


module.exports = {
  sortByHeight
};
