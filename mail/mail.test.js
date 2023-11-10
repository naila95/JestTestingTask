const { acceptMail } = require("./mail");

describe("AcceptMail Function:", () => {
  test("Mail must have '@'", () => {
    expect(() => acceptMail("abc.")).toThrow(new Error("Mail must have '@'"));
  });
  test("Empty array", () => {
    expect(() => acceptMail("$!?&@.")).toThrow(
      new Error("Mail must not includes '$','!','?','&'")
    );
  });
  test("Mail must have '.'", () => {
    expect(() => acceptMail("abc@")).toThrow(new Error("Mail must have '.'"));
  });
  test("Must write mail", () => {
    expect(() => acceptMail("a.@")).toThrow(new Error("Must write mail"));
  });
});
