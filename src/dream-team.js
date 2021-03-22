module.exports = function createDreamTeam(members) {
  if (!members || typeof members !== "object" || !members.length) return false;
  return members
    .map((name) =>
      typeof name === "string" && name.length > 0
        ? name.trim()[0].toUpperCase()
        : ""
    )
    .sort()
    .join("");
};
