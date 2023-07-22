const HTMLCollectionToArray = (inputHTMLCollection) => {
  let inputArray = [];

  for (let i = 0; i < inputHTMLCollection.length; i++) {
    inputArray.push(inputHTMLCollection[i]);
  }
  return inputArray;
};

const getClassOfElementsAsArray = (classList) => {
  let htmlCollection = document.getElementsByClassName(classList);

  const HTMLCollectionToArray = (collection) => {
    let buff = [];

    for (let i = 0; i < collection.length; i++) {
      buff.push(collection[i]);
    }

    return buff;
  };
  return HTMLCollectionToArray(htmlCollection);
};

const convertMinutesToSeconds = (inputTime) => {
  let _time = Number(inputTime.toString().slice());
  let count = 0;
  while (_time > minute) {
    _time -= minute;
    count += 1;
  }
  return _time + count * minute;
};

class VideoControllerHelper {
  constructor() {}

  static transcriptVisible() {}
  static convertMinutesToSeconds() {}
  static getClassOfElementsAsArray() {}
  static HTMLCollectionToArray() {}

  static openYoutubeTranscripts() {}

  static findEditedElementIndex(inputCollection) {
    HTMLCollectionToArray(
      document.getElementsByClassName("yt-spec-touch-feedback-shape__fill")
    )
      .map((idx) => idx.id === "...")
      .indexOf(true);
  }
}

class VideoController {
  constructor(video) {
    this.video = video;
  }

  // methods go here...

  get() {}

  getTime() {
    return this.video.currentTime;
  }

  getDuration() {}

  set() {}

  setTime(inputTime) {
    const minute = 60;

    if (typeof inputTime === "string") {
      let timeArray = input.split(":");
      let minutes = Number(timeArray[0]) * minute;
      let seconds = Number(timeArray[1]);

      this.currentTime = minutes + seconds;
    }

    if (typeof inputTime === "number") {
      this.currentTime = inputTime;
    }
  }
}

let video = document.querySelector("video");
let v = new VideoController(video);
let helper = new VideoControllerHelper();

export { VideoController, VideoControllerHelper };

const openYoutubeTranscripts = () => {
  const indicies = { "circle-button": 7, "show-transcript": 0 };
  const className = "yt-spec-touch-feedback-shape__fill";
  let elementsCollection = document.getElementsByClassName(className);
  let elementsArray = helper.HTMLCollectionToArray(elementsCollection);

  let circleButton = elementsArray[indicies["circle-button"]];

  if (helper.transcriptVisible) return;

  circleButton.click();
  const getElementIndex = (inputCollection, prop = "id") => {
    let elementLiteral = getClassOfElementsAsArray(
      "yt-spec-touch-feedback-shape__fill"
    ).filter((idx) => idx[`${prop}`] === "...")[0];
    let index = inputCollection.indexOf(elementLiteral);

    return index;
  };

  getElementIndex(elementsArray);

  elementsArray.indexOf();
  el[0].click();
};

let segmentsContainer = HTMLCollectionToArray(
  document.getElementsByClassName(
    "segment-timestamp style-scope ytd-transcript-segment-renderer"
  )
);

let timestamps = segmentsContainer.map((idx) => idx.innerText);

// video.setTime();
console.log(timestamps);

video.getTime = () => {
  return video.currentTime;
};
video.setTime = function (input) {
  if (typeof input === "string") {
    let timeArray = input.split(":");
    let minutes = Number(timeArray[0]) * 60;
    let seconds = Number(timeArray[1]);

    this.currentTime = minutes + seconds;
  }

  if (typeof input === "number") this.currentTime = input;
};
