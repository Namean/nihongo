// src/index.js



// Top 2000 kanji
// https://www.manythings.org/kanji/top2000kanji.html


/*


To distinguish between hiragana, and katakana we'll use the String.prototype.charCodeAt()


'あ'.charCodeAt() // -> 12354

*/

htmlCollectionToArray = function(collection) {
    let buff = [];
    for (let i = 0; i < collection.length; i++) {
        buff.push(collection[i]);
    }
    return buff;
}

let kanjiList = document.getElementById('kanjilist');
let kanjiTable = kanjiList.children[0].children[0].children;
let kanjiTableArray = htmlCollectionToArray(kanjiTable);
let kanjiTableArrayChildren = kanjiTableArray.map(idx => idx.children);

let tableRows = kanjiTableArray.map(idx => idx.children).map(idx => htmlCollectionToArray(idx)).map(idx => idx)

tableRows[0].map(idx => idx.innerText).slice(1, Infinity);

let kanjiArray = [];
for (let i = 0; i < tableRows.length; i++) {
    kanjiArray.push(tableRows[i].map(idx => idx.innerText).slice(1, Infinity))
}

for (let i = 0; i < kanjiArray.length; i++) {
    for (let j = 0; j < 20; j++) {
        kanji.push(kanjiArray[i][j]);
    }
}






const getKanaObject = (romaji) => {
   let kana = kana.filter(idx => idx.romaji === romaji);
   return result;
}

getKanaObject = (input, prop) => {
   if (prop) return kana.filter(idx => idx[prop] === input);
}

getKanaObject = (input) => {
   return kana.filter(idx => idx.romaji === input || idx.character === input)[0];
   }


try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
  // Expected output: ReferenceError: nonExistentFunction is not defined
  // (Note: the exact output may be browser-dependent)
}



getKanaCharacter = (romaji) => {
   const index = 0;
   let kanaObject = getKanaObject(romaji);
   let kana = kanaObject[index].character;
   return kana;
}

const getKanaCharacter = (romaji) => {
   try {
   let kanaObject = getKanaObject(romaji);
   let kana = kanaObject.character;
   return kana;
   } catch (error) {
      console.error(error);
      console.log(`input: ${romaji}, not found!`);
      }
}


const getRomaji = (input) => {
   let result = getKanaObject(input);
   return result.romaji;
}



let kana = {
   hiragana: [],
   katakana: [],
   kanji: [],
}


let hiraganaString = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";

let romajiString = "a, i, u, e, o,ka, ki, ku, ke, ko,sa, shi, su, se, so,ta, chi, tsu, te, to,na, ni, nu, ne, no,ha, hi, fu, he, ho,ma, mi, mu, me, mo,ya, yu, yo,ra, ri, ru, re, ro, wa, wo, n";


let katakanaString = "ワラヤマハナタサカアリミヒノチシキイルユムフヌツスクウンレメヘネテセケエヲロヨモホノトソコオ";

let katakanaRomajiString = "wa,ra,ya,ma,ha,na,ta,sa,ka,a,ri,mi,hi,ni,chi,shi,ki,i,ru,yu,mu,fu,nu,tsu,su,ku,u,n,re,me,he,ne,te,se,ke,e,wo,ro,yo,mo,ho,no,to,so,ko,o";


katakanaArray = katakanaString.split('')
katakanaRomajiArray = katakanaRomajiString.split('')



katakana = katakanaRomajiArray.map(idx => new Object({ character: idx })



// https://www.busuu.com/en/japanese/alphabet/hiragana
let dakuten = "がぎぐげござじずぜぞぢづでどばびぶべぼ"

let handakuten = "ぱぴぷぺぽ"




let romajiArray = romajiString.split(',').map(idx => idx.trim())

str = hiraganaString;
let arr = str.split('');

let kana = arr.map(idx => new Object({ character: idx }));


kana.map(idx => idx.romaji = '')
kana.map((idx, index) => idx.romaji = romajiArray[index])

const katakana = katakanaArray.map((idx, index) => new Object({ character: idx, romaji: katakanaRomajiArray[index], code: idx.charCodeAt() }));

katakana = katakanaArray.map((idx, index) => new Object({         character: idx,
    romaji: katakanaRomajiArray[index],
    code: idx.charCodeAt()
}));

hiraganaCharacter = {
   character: 'を',
   romaji: 'o',
   romaji_sequence: ['w', 'o'],
   furigana: ''
}

kanjiCharacter = {
   character: "学",
   romaji_sequence: {
      hiragana: ["が", "く", "tab", "space"],
      katakana: [""]
      },
   furigana: ''
   }


// https://community.memrise.com/t/how-do-i-type-smaller-and-used-in-some-words/11947


let yoon = "きゃきゅ"


// https://www.busuu.com/en/japanese/alphabet/hiragana
// Hard stops using つ




