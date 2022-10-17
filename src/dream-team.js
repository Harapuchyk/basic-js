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
  if (!Array.isArray(members)){
    return false
  }
  else{
  let membersSort = members.sort();
  let name = [];
  for (let i = 0; i < membersSort.length; i++){
    if(typeof membersSort[i] === "string") {
      membersSort[i] = membersSort[i].trimStart()
      name.push(membersSort[i][0]);
    }    
  }
return name.sort().join('').toUpperCase().split('').sort().join('');
  }
}

module.exports = {
  createDreamTeam
};
