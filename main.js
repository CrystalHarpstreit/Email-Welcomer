//if certain time of day, display certain picture.
var container = document.querySelector('.container');

function myTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();

  if (hours < 12) {
    document.querySelector('.time').innerHTML = '' + hours + ':' + minutes;
  } else {
    var hours = date.getHours() - 12;
    document.querySelector('.time').innerHTML = '' + hours + ':' + minutes;
  }

  setTimeout(myTime, 1000);
}

myTime();

function delayedFade() {
  container.className = container.className + ' fade';
}

setTimeout(delayedFade, 1000);
