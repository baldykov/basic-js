module.exports = function countCats(matrix) {
  return matrix.reduce(
    (acc, arr) => acc + arr.filter((item) => item === "^^").length,
    0
  );
};
