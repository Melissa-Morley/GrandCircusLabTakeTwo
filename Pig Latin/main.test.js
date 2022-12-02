let main = require("./main");

test("entering apple should produce appleway", () => {
  let testResult = main.translate("apple");
  expect(testResult).toBe("appleway");
});

test("entering else should produce elseway", () => {
  let testResult = main.translate("else");

  expect(testResult).toBe("elseway");
});

test("entering index should produce indexway", () => {
  let testResult = main.translate("index");

  expect(testResult).toBe("indexway");
});

test("entering otter should produce otterway", () => {
  let testResult = main.translate("otter");

  expect(testResult).toBe("otterway");
});

test("entering uncle should produce uncleway", () => {
  let testResult = main.translate("uncle");

  expect(testResult).toBe("uncleway");
});

//words starting with one consonant

test("entering giraffe should produce iraffegay", () => {
  let testResult = main.translate("giraffe");

  expect(testResult).toBe("iraffegay");
});

test("entering salad should produce aladsay", () => {
  let testResult = main.translate("salad");

  expect(testResult).toBe("aladsay");
});

//words starting with two consonants

test("entering chair should produce airchay", () => {
  let testResult = main.translate("chair");

  expect(testResult).toBe("airchay");
});

//words starting with three consonants

test("entering splash should produce ashsplay", () => {
  let testResult = main.translate("splash");

  expect(testResult).toBe("ashsplay");
});

//checking for lower case conversion
test("entering SPLASH should produce ashsplay", () => {
  let testResult = main.translate("SPLASH");

  expect(testResult).toBe("ashsplay");
});
