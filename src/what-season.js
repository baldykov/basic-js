module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  try {
    const month = date.toJSON().split("-")[1];
    switch (Math.floor(month / 3)) {
      case 0:
        return "winter";
      case 1:
        return "spring";
      case 2:
        return "summer";
      case 3:
        return "autumn";
      case 4:
        return "winter";
    }
  } catch {
    throw "Some Error";
  }
};
