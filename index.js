const reveal = e => {
  var message = document.getElementById("inputText").value;
  if (document.getElementById("inputText").value.includes("-" || ".")) {
    document.getElementById("translated").innerHTML = morseTo(message);
  } else {
    document.getElementById("translated").innerHTML = engTo(message);
  }
};

const morseTo = message => {
  var messageConverted = [];
  var alphabet = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "/": " ",
    "-·-·--": "!",
    "·-·-·-": ".",
    "--··--": ","
  };
  message.split("  ").map(function(word) {
    word.split(" ").map(function(letter) {
      messageConverted.push(alphabet[letter]);
    });
    messageConverted.push(" ");
  });
  return messageConverted.join("");
};

const engTo = message => {
  var messageConverted = [];
  var alphabet = {
    b: "-...",
    a: ".-",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
    ".": ".-.-.-",
    ",": "--..--",
    "'": ".----.",
    '"': ".-..-.",
    _: "..--.-",
    ":": "---...",
    ";": "-.-.-.",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "+": ".-.-.",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "=": "-...-",
    "@": ".--.-.",
    " ": " "
  };

  message.split(" ").map(function(word) {
    word.split("").map(function(letter) {
      messageConverted.push(alphabet[letter]);
      messageConverted.push(" ");
    });
 
  });
  return messageConverted.join("");
};

module.exports = { reveal, engTo, morseTo };
