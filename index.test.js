const main = require("./index");

test("Translate from morse code to english & viceversa", function() {
  expect(main.morseTo("... --- ...")).toBe("sos ");
  expect(main.engTo("sara")).toBe("... .- .-. .- ");
});
