const reverseStr = require("../src/index");

test("return reverse string", () => {
  expect(reverseStr("love")).toBe("evol");
});
