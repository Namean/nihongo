// yt-videoController.js

let video = document.querySelector("video");
video.isAdvert = () => {};
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
video.getDuration = () => {
  // returns video duration in seconds
  let durationString =
    document.getElementsByClassName("ytp-time-duration")[0].innerText;
  let durationArray = durationString.split(":");

  let minutesString = durationArray[0];
  let secondsString = durationArray[1];

  let minutes = Number(minutesString);
  let seconds = Number(secondsString);

  let durationMinutes = (function () {
    if (durationArray[0] === 0) return 0;
    return durationArray[0] * 60;
  })();

  let duration = durationMinutes + seconds;

  return duration;
};

// [:: CAPTIONS ::]
// ytp-caption-window-container ["おこめなら　まだしも、かさは、", "おじいさんのほしい　もの　では、ありません。"]
container = document.getElementsByClassName("ytp-caption-window-container")[0];
container.children[0].innerText;

(function () {
  let buff = [];
  let count = 0;
  video.setCurrentTime(timestamps[0]);
  for (let i = 0; i < 5; i++) {
    try {
      document.getElementsByClassName("ytp-caption-segment")[i].innerText;
    } catch (error) {
      count += 1;
      buff.push(count);
    } finally {
    }
  }
  console.log(`buff: ${buff}`);
})();

// [░░ TIMESTAMPS ░░]
let segmentsContainer = HTMLCollectionToArray(
  document.getElementsByClassName(
    "segment-timestamp style-scope ytd-transcript-segment-renderer"
  )
);

let _timestamps = segmentsContainer.map((idx) => idx.innerText);
let timestamps = [
  "0:08",
  "0:10",
  "0:15",
  "0:20",
  "0:27",
  "0:30",
  "0:34",
  "0:39",
  "0:41",
  "0:44",
  "0:48",
  "1:00",
  "1:04",
  "1:11",
  "1:16",
  "1:20",
  "1:25",
  "1:46",
  "2:03",
  "2:11",
  "2:16",
  "2:18",
  "2:22",
  "2:32",
  "2:34",
  "2:42",
  "2:45",
  "2:49",
  "2:51",
  "2:56",
  "3:00",
  "3:04",
  "3:05",
  "3:12",
  "3:18",
  "3:19",
  "3:26",
  "3:38",
  "3:42",
  "3:49",
  "3:52",
  "3:54",
  "4:04",
  "4:17",
  "4:22",
  "4:26",
  "4:32",
  "4:36",
  "4:43",
  "4:47",
  "4:55",
  "4:59",
  "5:07",
  "5:14",
  "5:20",
  "5:25",
  "5:44",
  "5:49",
  "5:51",
  "5:56",
  "6:00",
  "6:02",
  "6:08",
  "6:13",
  "6:24",
  "6:38",
  "6:40",
  "6:42",
  "6:47",
  "6:54",
  "7:28",
  "7:44",
  "7:59",
  "8:25",
  "8:35",
  "8:42",
  "8:47",
  "8:53",
  "8:55",
];

// Padds the timestamps, in the beginning to start at zero
// and at the end to prevent an ad from playing and skipping to the next video.
timestamps.unshift("0:00");
timestamps.push(video.getDuration - 1);
