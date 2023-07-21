const getKanaObject = (input) => {
  return kana.filter(
    (idx) => idx.romaji === input || idx.character === input
  )[0];
};

const getKanaCharacter = (romaji) => {
  try {
    let kanaObject = getKanaObject(romaji);
    let kana = kanaObject.character;
    return kana;
  } catch (error) {
    console.error(error);
    console.log(`input: ${romaji}, not found!`);
  }
};

const getRomaji = (input) => {
  let result = getKanaObject(input);
  return result.romaji;
};

let kana =
  "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";

let romaji =
  "a, i, u, e, o,ka, ki, ku, ke, ko,sa, shi, su, se, so,ta, chi, tsu, te, to,na, ni, nu, ne, no,ha, hi, fu, he, ho,ma, mi, mu, me, mo,ya, yu, yo,ra, ri, ru, re, ro, wa, wo, n";
// https://www.busuu.com/en/japanese/alphabet/hiragana
let dakuten = "がぎぐげござじずぜぞぢづでどばびぶべぼ";

let handakuten = "ぱぴぷぺぽ";

const Hiragana = () => {
  let kanaString =
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";

  let romajiString =
    "a, i, u, e, o,ka, ki, ku, ke, ko, sa, shi, su, se, so,ta, chi, tsu, te, to, na, ni, nu, ne, no,ha, hi, fu, he, ho,ma, mi, mu, me, mo,ya, yu, yo,ra, ri, ru, re, ro, wa, wo, n";

  let romajiArray = romajiString.split(",").map((idx) => idx.trim());

  kanaString;
  let kanaArray = kanaString.split("");
  // prettier-ignore
  let hiragana = kanaArray.map((idx, index) => new Object({ 
    character: idx,
    romaji: romajiArray[index],
    code: idx.charCodeAt(),
  }));

  return hiragana;
};

export default Hiragana;
