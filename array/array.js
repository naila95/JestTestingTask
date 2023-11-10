function acceptArr(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Type must be array");
  } else if (arr.length == 0) {
    throw new Error("Empty array");
  } else {
    let newArr = arr.filter((element) => {
      return element % 2 === 0;
    });
    return newArr;
  }
}

module.exports = { acceptArr };
