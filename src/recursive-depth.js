const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  constructor(arr){
    this.arr = arr
  }
  calculateDepth() {
    return 1 + (this.arr instanceof Array ? this.arr.reduce(function(max, item) {
      return Math.max(max, test(item));
    }, 0) : -1);
}
}

module.exports = {
  DepthCalculator
};
