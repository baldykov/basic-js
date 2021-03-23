module.exports = function transform(arr) {
  const result = [...arr];
  result.forEach((e, i) => {
    switch (e) {
      case "--discard-next":
        if (result[i + 1] !== undefined) result[i + 1] = "discard";
        result.splice(i, 1);
        break;
      case "--discard-prev":
        if (result[i - 1] !== undefined) result[i - 1] = "discard";
        result.splice(i, 1);
        break;
      case "--double-next":
        if (result[i + 1] !== undefined) result.splice(i, 1, result[i + 1]);
        else result.splice(i, 1);
        break;
      case "--double-prev":
        if (result[i - 1] !== undefined) result.splice(i, 1, result[i - 1]);
        else result.splice(i, 1);
        break;
    }
  });

  return result.filter((item) => item != "discard");
};

// --discard-next excludes the next element of the array from the transformed array.
// --discard-prev excludes the previous element of the array from the transformed array.
// --double-next doubles the next element of the array in the transformed array.
// --double-prev doubles the previous element of the array in the transformed array.
