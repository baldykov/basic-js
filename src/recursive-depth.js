module.exports = class DepthCalculator {
  calculateDepth(arr, deep = 0, result = [0]) {
    if (Array.isArray(arr)) {
      deep++;
      arr.filter(item => Array.isArray(item)).forEach(item => {
        result.push(deep);
        this.calculateDepth(item,deep,result);
      })
    }

    return Math.max( ...result ) + 1;
  }
};
