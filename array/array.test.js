const { acceptArr } = require("./array");

describe("AcceptArr Function:", () => {
  test("Type must be array", () => {
    expect(() => acceptArr(123)).toThrow(new Error("Type must be array"));
  });
  test("Empty array", () => {
    expect(() => acceptArr([])).toThrow(new Error("Empty array"));
  });
});
