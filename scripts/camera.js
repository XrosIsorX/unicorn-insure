'use strict'

var videoElement;
var videoSelect;
var selectors;
var images = [];
var video, image;
var buttonTake, buttonRetake, buttonProceed;
var selectors = [];

function loadCamera() {
  video = createTag('video');
  video.id = 'video'
  video.width = video.offsetWidth;
  video.setAttribute('playsinline', true);
  video.setAttribute('autoplay', true);


  image = createTag('img');
  image.id = 'image';
  image.style.display = 'none';

  var row = createTag('div', 'row');
  selectors[0] = createTag('select', '', row)

  var v = createTag('div', 'select');
  var v1 = createTag('label', '', v);
  v1.setAttribute('for', 'videoSource');

  var se = createTag('select', '', v);
  se.id = 'videoSource';

  var row = createTag('div', 'row');

  buttonTake = createTag('button', '', row);
  buttonTake.id = 'button-take';
  buttonTake.innerHTML = 'Take';

  buttonRetake = createTag('button', '', row);
  buttonRetake.id = 'button-retake';
  buttonRetake.innerHTML = 'Retry';
  buttonRetake.style.display = 'none';

  row = createTag('div', 'row');
  buttonProceed = createTag('a', 'btn btn-outline-primary btn-sm', row);
  buttonProceed.id = 'button-proceed'
  buttonProceed.innerHTML = 'Proceed';

  videoElement = document.querySelector('video');
  videoSelect = document.getElementById('videoSource');
  selectors = [videoSelect];
  navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);
  videoSelect.onchange = start;
  start();
}



function gotDevices(deviceInfos) {
  // Handles being called several times to update labels. Preserve values.
  var values = selectors.map(function(select) {
    return select.value;
  });
  selectors.forEach(function(select) {
    while (select.firstChild) {
      select.removeChild(select.firstChild);
    }
  });
  for (var i = 0; i !== deviceInfos.length; ++i) {
    var deviceInfo = deviceInfos[i];
    var option = document.createElement('option');
    option.value = deviceInfo.deviceId;
    if (deviceInfo.kind === 'videoinput') {
      option.text = deviceInfo.label || 'camera ' + (videoSelect.length + 1);
      videoSelect.appendChild(option);
    } else {
      // console.log('Some other kind of source/device: ', deviceInfo);
    }
  }
  selectors.forEach(function(select, selectorIndex) {
    if (Array.prototype.slice.call(select.childNodes).some(function(n) {
        return n.value === values[selectorIndex];
      })) {
      select.value = values[selectorIndex];
    }
  });
}

function gotStream(stream) {
  window.stream = stream; // make stream available to console
  videoElement.srcObject = stream;
  // Refresh button list in case labels have become available
  return navigator.mediaDevices.enumerateDevices();
}

function start() {
  if (window.stream) {
    window.stream.getTracks().forEach(function(track) {
      track.stop();
    });
  }
  var videoSource = videoSelect.value;
  var constraints = {
    video: {
      deviceId: videoSource ? {
        exact: videoSource
      } : undefined
    }
  };
  navigator.mediaDevices.getUserMedia(constraints).
  then(gotStream).then(gotDevices).catch(handleError);


  document.getElementById("button-take").addEventListener("click", function() {
    console.log("take")
    var canvas = document.createElement("canvas");
    canvas.width = video.offsetWidth;
    canvas.height = video.offsetHeight;
    canvas.getContext('2d')
      .drawImage(video, 0, 0, canvas.width, canvas.height);

    image.src = canvas.toDataURL();
    images.push(image.src)

    image.style.display = "block";
    video.style.display = "none";

    buttonTake.style.display = 'none';
    buttonRetake.style.display = 'block';
  });

  document.getElementById("button-retake").addEventListener("click", function() {
    video.style.display = "block";
    image.style.display = "none";

    buttonTake.style.display = 'block';
    buttonRetake.style.display = 'none';
  });

}


function handleError(error) {
  console.log('navigator.getUserMedia error: ', error);
}
$("#button-proceed").click(function() {
  clear();
  loadPictureSummary();
})
