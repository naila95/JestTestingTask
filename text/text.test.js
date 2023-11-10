const { acceptText } = require("./text");

describe("AcceptText Function:", () => {
  test("You must write text", () => {
    expect(() => acceptText("")).toThrow(new Error("You must write text"));
  });
  test("Type must be string", () => {
    expect(() => acceptText(123)).toThrow(new Error("Type must be string"));
  });
});
