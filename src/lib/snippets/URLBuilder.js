// jisho.js

const URLBuilder = (kanji) => {
  let pathname = "/search/" + encodeURI(`${kanji}`) + "%20%23kanji";
  let hostname = "https://jisho.org/";
  const url = hostname + pathname;

  return url;
};

export default URLBuilder;

// Resources:
// [HTML encoding of Japanese Text](https://stackoverflow.com/questions/12648655/html-encoding-of-japanese-text)
