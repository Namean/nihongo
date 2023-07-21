import Hiragana from "./hiragana.data.js";
import Katakana from "./katakana.data.js";

class Kana {
  constructor(kana) {
    this.kana = kana;
  }

  // methods go here...

  getKana(input) {
    const filter = (input, kana = this.kana) => {
      const index = 0;
      let result = kana.filter(
        (idx) => input === idx.character || input === idx.romaji
      )[index];

      return result;
    };

    const kanaIterableHandler = (() => {
      let buff = [];
      for (let i = 0; i < input.length; i++) {
        buff.push(filter(input[i]).character);
      }
      return buff;
    })();
    const length = input.length;

    // prettier-ignore
    if (typeof input === "string" && length > 2) return kanaIterableHandler;

    if (typeof input === "string" && input.length > 0 && input.length < 3) {
      let filterResult = filter(input);
      return filterResult.character;
    }

    // prettier-ignore
    if (input && typeof input === 'object' && input.length > 0) {
      let buff = [];
      for (let i = 0; i < input.length; i++) {
        buff.push(filter(input[i]).character);
      }
      return buff;
    }
  }

  getRomaji(input) {
    const filter = (input, kana = this.kana) => {
      const index = 0;
      let result = kana.filter(
        (idx) => input === idx.character || input === idx.romaji
      )[index];

      return result;
    };

    if (typeof input === "string" && input.length > 0 && input.length < 3) {
      let filterResult = filter(input);
      return filterResult.romaji;
    }

    // prettier-ignore
    if (input && typeof input === 'object' && input.length > 0) {
      let buff = [];
      for (let i = 0; i < input.length; i++) {
        buff.push(filter(input[i]).romaji);
      }
      
      return buff;
    }
  }
}

let hiragana = new Kana(Hiragana());

console.log(hiragana.getRomaji(["ら", "め", "ん"]));
console.log(hiragana.getRomaji("ら"));

let katakana = new Kana(Katakana());
console.log(katakana.getKana("アメリカ"));
