// src/index.js

import { kana, romaji } from "./data/hiragana.data";
import { kana, romji } from "./data/katakana.data";

getKanaObject = (input) => {
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

const hiragana = () => {
  let hiraganaString =
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";

  let romajiString =
    "a, i, u, e, o,ka, ki, ku, ke, ko,sa, shi, su, se, so,ta, chi, tsu, te, to,na, ni, nu, ne, no,ha, hi, fu, he, ho,ma, mi, mu, me, mo,ya, yu, yo,ra, ri, ru, re, ro, wa, wo, n";
  let romajiArray = romajiString.split(",").map((idx) => idx.trim());

  let str = hiraganaString;
  let arr = str.split("");
  let kana = arr.map((idx) => new Object({ character: idx }));

  kana.map((idx) => (idx.romaji = ""));
  kana.map((idx, index) => (idx.romaji = romajiArray[index]));
};

const katakana = () => {
  let kanaString =
    "ワラヤマハナタサカアリミヒノチシキイルユムフヌツスクウンレメヘネテセケエヲロヨモホノトソコオ";
  let romajiString =
    "wa,ra,ya,ma,ha,na,ta,sa,ka,a,ri,mi,hi,ni,chi,shi,ki,i,ru,yu,mu,fu,nu,tsu,su,ku,u,n,re,me,he,ne,te,se,ke,e,wo,ro,yo,mo,ho,no,to,so,ko,o";

  let katakanaArray = katakanaString.split("");
  let katakanaRomajiArray = katakanaRomajiString.split("");
  let katakana = katakanaRomajiArray.map(
    (idx) => new Object({ character: idx })
  );

  katakana = katakanaArray.map(
    (idx, index) =>
      new Object({
        character: idx,
        romaji: katakanaRomajiArray[index],
        code: idx.charCodeAt(),
      })
  );

  return katakana;
};
