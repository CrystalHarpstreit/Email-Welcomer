//if certain time of day, display certain picture.
var container = document.querySelector('.container');
var date = new Date();
var hours = date.getHours();

function myTime() {
  var minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = '0' + minutes;
    console.log(minutes);
  }

  if (hours < 12) {
    document.querySelector('.time').innerHTML = '' + hours + ':' + minutes;
  } else {
    var hours = date.getHours() - 12;
    document.querySelector('.time').innerHTML = '' + hours + ':' + minutes;
  }

  setTimeout(myTime, 1000);
}

myTime();

function imageChanger() {
  if (hours >= 6 && hours <= 12) {

    container.style.backgroundImage = 'url(images/sunrise.png)';

  } else if (hours >= 12 && hours <= 18) {

    container.style.backgroundImage = 'url(images/sunset.png)';

  } else {

    container.style.backgroundImage = 'url(images/night.png)';

  }
  setTimeout(imageChanger, 1000);
}

imageChanger();

function delayedFade() {
  container.className = container.className + ' fade';
}

setTimeout(delayedFade, 1000);
