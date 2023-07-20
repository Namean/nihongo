# nihongo

A library for learning kana

The resources used to build JISHO.com are worth a look as well.

There's a library used to display kanji, and an accompanying library that handles animation,
for stroke order. I'm not sure how it all works, but as I work towards that goal, I'll be posting updates here. cheers!

### [Typing Yoon Characters](https://community.memrise.com/t/how-do-i-type-smaller-and-used-in-some-words/11947)

let yoon = "きゃきゅ";

// https://www.busuu.com/en/japanese/alphabet/hiragana
// Hard stops using つ

### [Top 2000 kanji](https://www.manythings.org/kanji/top2000kanji.html)

The following code extracts kanji characters from the link above, I'll be providing
a copy of these characters in JSON, and POJO formats "For your convenience!".

```js
htmlCollectionToArray = function (collection) {
  let buff = [];
  for (let i = 0; i < collection.length; i++) {
    buff.push(collection[i]);
  }
  return buff;
};

let kanjiList = document.getElementById("kanjilist");
let kanjiTable = kanjiList.children[0].children[0].children;
let kanjiTableArray = htmlCollectionToArray(kanjiTable);
let kanjiTableArrayChildren = kanjiTableArray.map((idx) => idx.children);

let tableRows = kanjiTableArray
  .map((idx) => idx.children)
  .map((idx) => htmlCollectionToArray(idx))
  .map((idx) => idx);

tableRows[0].map((idx) => idx.innerText).slice(1, Infinity);

let kanjiArray = [];
for (let i = 0; i < tableRows.length; i++) {
  kanjiArray.push(tableRows[i].map((idx) => idx.innerText).slice(1, Infinity));
}

for (let i = 0; i < kanjiArray.length; i++) {
  for (let j = 0; j < 20; j++) {
    kanji.push(kanjiArray[i][j]);
  }
}
```

### Distinguish Kana in code using Character Codes

To distinguish between hiragana, and katakana we'll use the String.prototype.charCodeAt()

```js
"あ".charCodeAt(); // -> 12354
const getKanaObject = (romaji) => {
  let kana = kana.filter((idx) => idx.romaji === romaji);
  return result;
};

const getKanaObject = (input, prop) => {
  if (prop) return kana.filter((idx) => idx[prop] === input);
};

getKanaCharacter = (romaji) => {
  const index = 0;
  let kanaObject = getKanaObject(romaji);
  let kana = kanaObject[index].character;
  return kana;
};
```
