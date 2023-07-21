# nihongo

我らは「に」と言う騎士団だ！

### Scraping JISHO

I'm creating a script to scrape information from jisho.org,
which has pages for kanji with a url that looks like this [https://jisho.org/search/%E4%BC%9A%20%23kanji](https://jisho.org/search/%E4%BC%9A%20%23kanji)

There are ${count} main parts to this url, the **pathname**, and the **hostname**. don't forget the protocol prefix!

```js
"https://" + window.location.hostname + window.location.pathname ===
  window.location.href; // true
```

'/search/' + encodeURI('会') + '%20%23kanji';
'/search/' + encodeURI(`${kanji}`) + '%20%23kanji'

```js
[](https://jisho.org/search/%E4%BC%9A%20%23kanji?color_theme=dark&exact=false&original_keyword=%E4%BC%9A+%23kanji)
```

So I was wondering how kanji were HTML encoded, searching I found this article [HTML encoding of Japanese text](https://stackoverflow.com/questions/12648655/html-encoding-of-japanese-text)

The answer from user:**gogsrox**

demonstrates a pair of methods called encodeURI and decodeURI respectively

```js
encodeURI("ウェブサイトのメンテナンスの下で"); // -> "%E3%82%A6%E3%82%A7%E3%83%96%E..."
```

Which is what we need for our script.

The resources used to build jisho.org are worth a look as well.

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

let kanji = [];
for (let i = 0; i < kanjiArray.length; i++) {
  for (let j = 0; j < 20; j++) {
    kanji.push(kanjiArray[i][j]);
  }
}

console.log(kanji);
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

## Resources

[Hiragana](https://www.busuu.com/en/japanese/alphabet/hiragana)
dakuten
handakuten
combination - Yoon Character

[Typing Yoon Characters](https://community.memrise.com/t/how-do-i-type-smaller-and-used-in-some-words/11947)

[About Hiragana](http://japanese-lesson.com/characters/hiragana/index.html)
Gojūon
particle
Dakuon
Handakuon
Yōon
Sokuon
Additional Letters

[What is Furigana?](https://storylearning.com/learn/japanese/japanese-tips/what-is-furigana)
furigana
