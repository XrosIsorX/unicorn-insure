'use strict'

var images = [];
var video, image;
var buttonTake, buttonRetake, buttonProceed;
var selectors = [];

function loadCamera () {
  video = createTag('video');
  video.id = 'video'
  video.width = video.offsetWidth;

  image = createTag('img');
  image.id = 'image';
  image.style.display = 'none';

  var row = createTag('div', 'row');
  selectors[0] = createTag('select', '', row)

  var row = createTag('div', 'row');

  buttonTake = createTag('button', '', row);
  buttonTake.id = 'button-take';
  buttonTake.innerHTML = 'Take';

  buttonRetake = createTag('button', '', row);
  buttonRetake.id = 'button-retake';
  buttonRetake.innerHTML = 'Retry';
  buttonRetake.style.display = 'none';

  row = createTag('div', 'row');
  buttonProceed = createTag('a', 'btn btn-outline-primary btn-sm');
  buttonProceed.id = 'button-proceed'
  buttonProceed.innerHTML = 'Proceed';

  // askPermission();
  navigator.mediaDevices.enumerateDevices().then(gotDevices);
  selectors[0].onchange = start;
  start();
}

function askPermission () {
  var videoSource;
  navigator.mediaDevices.enumerateDevices().then(function(deviceInfos){
    var temp = createTag('div');
    for (var i = 0; i !== deviceInfos.length; ++i) {
      var deviceInfo = deviceInfos[i];
      if (deviceInfo.kind === 'videoinput') {
        temp.innerHTML += deviceInfo.label + "This is test 2";
        temp.innerHTML += "(" + i + ")";
        temp.innerHTML += '\n';
      }
    }
    videoSource = deviceInfos[4].deviceId;
    temp.innerHTML += '--------------------';
    temp.innerHTML += videoSource;
  });
  var videoObj = {
    video: {
      deviceId: {exact: videoSource}
    }
  };
  var errBack = function(error){
    alert("Video capture error: ", error.code);
  };

  if(navigator.getUserMedia) {                      // Standard
    navigator.mediaDevices.getUserMedia(videoObj).then(startWebcam);
  } else if (navigator.webkitGetUserMedia) {        // WebKit
    navigator.webkitGetUserMedia(videoObj, startWebcam, errBack);
  }else if (navigator.mozGetUserMedia) {            // Firefox
    navigator.mozGetUserMedia(videoObj, startWebcam, errBack);
  };
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
      option.text = deviceInfo.label || 'camera ' + (selectors[0].length + 1);
      selectors[0].appendChild(option);
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

function start() {
  if (window.stream) {
    window.stream.getTracks().forEach(function(track) {
      track.stop();
    });
  }
  var videoSource = selectors[0].value;
  var constraints = {
    audio: {deviceId: undefined},
    video: {deviceId: videoSource ? {exact: videoSource} : undefined}
  };
  navigator.mediaDevices.getUserMedia(constraints).
      then(startWebcam).then(gotDevices)
}

function gotStream(stream) {
  video.srcObject = stream;
  // Refresh button list in case labels have become available
  return navigator.mediaDevices.enumerateDevices();
}

function startWebcam (stream) {
  if(navigator.mediaDevices.getUserMedia){      // Standard
    video.srcObject = stream;
    video.onloadedmetadata = function(e) {
      video.play();
    };
  }else if(navigator.webkitGetUserMedia){       // WebKit
    video.src = window.webkitURL.createObjectURL(stream);
    video.play();
  }else if(navigator.mozGetUserMedia){          // Firefox
    video.src = window.URL.createObjectURL(stream);
    video.play();
  };

  $("#button-take").click(function(){
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

  $("#button-retake").click(function(){
    video.style.display = "block";
    image.style.display = "none";

    buttonTake.style.display = 'block';
    buttonRetake.style.display = 'none';
  })

  $("#button-proceed").click(function(){
    clear();
    loadPictureSummary();
  })

  return navigator.mediaDevices.enumerateDevices();
}
