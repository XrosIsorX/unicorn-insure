'use strict'

var images = [];
var video, image;
var buttonTake, buttonRetake, buttonProceed;

function loadCamera () {
  video = createTag('video');
  video.id = 'video'
  video.width = video.offsetWidth;

  image = createTag('img');
  image.id = 'image';
  image.style.display = 'none';

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

  askPermission();
}

function askPermission () {
  var videoSource;
  navigator.mediaDevices.enumerateDevices().then(function(deviceInfos){
    var temp = createTag('div');
    for (var i = 0; i !== deviceInfos.length; ++i) {
      var deviceInfo = deviceInfos[i];
      if (deviceInfo.kind === 'videoinput') {
        temp.innerHTML += deviceInfo.label;
        temp.innerHTML += '\n';
      }
    }
    videoSource = deviceInfos[0].deviceId;
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
}
