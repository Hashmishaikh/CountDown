var dest = new Date("dec 1,2021 10:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var diff = dest - now;
  console.log("difference:" + diff)

  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  console.log("days:" + days);

  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  console.log("Hours:" + hours);

  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  console.log("Minutes:" + minutes);

  var sec = Math.floor((diff % (1000 * 60)) / 1000);
  console.log("second" + sec);

  document.getElementById("counts").innerHTML =
    days + "d: " + hours + "hrs: " + minutes + "m: " + sec + "s";
}, 1000);
