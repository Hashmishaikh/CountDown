var hr = 0;
var min = 0;
var sec = 0;
var mili = 0;

var timer = false;

function start() {
  timer = true;
  stopwatch();
}

function pause() {
  timer = false;
}

function reset() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  mili = 0;

  document.getElementById(
    "watch"
  ).innerHTML = `${hr}hrs: ${min}m: ${sec}s: ${mili}m's`;
}

function stopwatch() {
  if (timer == true) {
    mili = mili + 1;

    if (mili == 100) {
      sec = sec + 1;
      mili = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
      mili = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
      mili = 0;
    }

    document.getElementById(
      "watch"
    ).innerHTML = `${hr}hrs: ${min}m: ${sec}s: ${mili}m's`;
    setTimeout("stopwatch()", 10);
  }
}
