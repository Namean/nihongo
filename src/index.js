// src/index.js
// import sum from "./sum.js";

import Hiragana from "./data/hiragana.data.js";
import Katakana from "./data/katakana.data.js";
import Kanji from "./data/kanji.data.js";

let kanji, hiragana, katakana;
hiragana = Hiragana();
katakana = Katakana();
kanji = Kanji();

console.log(kanji);
