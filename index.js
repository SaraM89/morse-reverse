const reveal = event => {
  var message = document.getElementById("inputText").value;
  var messageConverted = [];
  if (document.getElementById("inputText").value.includes("-" || ".")) {
    // console.log("blue");
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
    document.getElementById("translated").innerHTML = messageConverted;
    //};

    // reverse = event => {
    //   console.log("red");
  } else {
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
      messageConverted.push("\xa0\xa0\xa0\xa0");
    });
  }
  document.getElementById("translated").innerHTML = messageConverted.join("");
};

//export default reveal;
