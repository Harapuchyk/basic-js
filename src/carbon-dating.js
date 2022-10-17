const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof(sampleActivity) === "string")
  {
    let t = Number(sampleActivity);
    if (typeof(t) === "number"){
      let result = 0; 
      result = Math.ceil(Math.log((15/t)) / (0.693/5730));
      if (isNaN(result))
      {
        return false
      }
      if (typeof result === "undefined")
      {
        return false
      }
      if (result < 0)
      {
        return false
      }
      else if (isFinite(result)) return result

    }
    else return false;
  }
  if (typeof(sampleActivity) === "undefined"){
    return false;
  }
  else return false;
}

module.exports = {
  dateSample
};
