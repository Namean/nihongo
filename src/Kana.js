class Kana {
  constructor(kana) {
    this.kana = kana;
  }

  // methods

  getKanaObject = (input) => {
    return kana.filter(
      (idx) => idx.romaji === input || idx.character === input
    )[0];
  };

  getKanaCharacter = (romaji) => {
    try {
      let kanaObject = getKanaObject(romaji);
      let kana = kanaObject.character;
      return kana;
    } catch (error) {
      console.error(error);
      console.log(`input: ${romaji}, not found!`);
    }
  };

  getRomaji = (input) => {
    let result = getKanaObject(input);
    return result.romaji;
  };
}

class Hiragana extends Kana {}
class Katakana extends Kana {}

export { Kana, Hiragana, Katakana };
