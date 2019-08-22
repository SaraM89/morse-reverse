import reveal from "./index";
const a = ".-";
const b = "-...";
const c = "-.-.";
const d = "-..";
const e = ".";
const f = "..-.";
const g = "--.";
const h = "....";
const i = "..";
const j = ".---";
const k = "-.-";
const l = ".-..";
const m = "--";
const n = "-.";
const o = "---";
const p = ".--.";
const q = "--.-";
const r = ".-.";
const s = "...";
const t = "-";
const u = "..-";
const v = "...-";
const w = ".--";
const x = "-..-";
const y = "-.--";
const z = "--..";
const zero = "-----";
const one = ".----";
const two = "..---";
const three = "...--";
const four = "....-";
const five = ".....";
const six = "-....";
const seven = "--...";
const eight = "---..";
const nine = "----.";

// const reveal = () => {
//   return h + " " + e + " " + l + " " + l + " " + o;
// };

// const reverse = () => {
//   return ".... . .-.. .-.. ---";
// };

// test("the output of a digit", function() {
//   expect(reveal()).toEqual(".... . .-.. .-.. ---");
// });

// test("the output of a digit", function() {
//   expect(reverse()).toEqual(h + " " + e + " " + l + " " + l + " " + o);
// });

const reveal = require("./index.js");
message = "hello";
//document.getElementById("inputText").value = message;
test("the output of a digit", function() {
  expect(reveal(message)).toEqual(".... . .-.. .-.. --- ");
});
