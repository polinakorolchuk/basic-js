const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let a = [];

  if(Array.isArray(members)) {

  
  members.forEach((member) => {
      if(typeof member  == 'string') {
          let k = member.trim().slice(0, 1).toUpperCase();
          a.push(k);
      } 
  })
} else {
  return false;
}
  return a.sort().join('');
}

module.exports = {
  createDreamTeam
};
