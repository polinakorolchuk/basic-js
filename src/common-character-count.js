const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let a1 = [...s1];
  let a2 = [...s2];
  let count = 0;

  let arr = (a1.length >= a1.length) ? a1 : a2;
  let arr2 = arr == a1 ? a2 : a1;
  let arr3 = arr2;

  for (let i = 0; i < arr.length; i++) {

      if (arr3.includes(arr[i])) {
          let index = arr3.indexOf(arr[i]);
          arr3 = arr3.filter((el, ind) => ind != index);
          ++count;
      }
  }
  return count;
}


module.exports = {
  getCommonCharacterCount
};
