
var videoObj    = { "video": true },
    errBack        = function(error){
        // alert("Video capture error: ", error.code);
    };

// Ask the browser for permission to use the Webcam
if(navigator.getUserMedia){                    // Standard
    navigator.mediaDevices.getUserMedia(videoObj).then(startWebcam);
}else if(navigator.webkitGetUserMedia){        // WebKit
    navigator.webkitGetUserMedia(videoObj, startWebcam, errBack);
}else if(navigator.mozGetUserMedia){        // Firefox
    navigator.mozGetUserMedia(videoObj, startWebcam, errBack);
};

function startWebcam(stream){
    var my_online_camera    = document.getElementById('my_online_camera');
    var video            = document.getElementById('video');
    var canvas            = document.getElementById('canvas');

    video.width = video.offsetWidth;

    if(navigator.mediaDevices.getUserMedia){                    // Standard
        video.srcObject = stream;
        video.onloadedmetadata = function(e) {
            video.play();
        };
    }else if(navigator.webkitGetUserMedia){        // WebKit
        video.src = window.webkitURL.createObjectURL(stream);
        video.play();
    }else if(navigator.mozGetUserMedia){        // Firefox
        video.src = window.URL.createObjectURL(stream);
        video.play();
    };

    //Click to take the photo
    $('#take_picture').click(function(){
        // Copying the image in a temporary canvas
        var temp = document.createElement('canvas');

        temp.width  = video.offsetWidth;
        temp.height = video.offsetHeight;

        var tempcontext = temp.getContext("2d"),
            tempScale = (temp.height/temp.width);

        tempcontext.drawImage(
            video,
            0, 0,
            video.offsetWidth, video.offsetHeight
        );

        // Resize it to the size of our canvas
        canvas.style.height    = parseInt( canvas.offsetWidth * tempScale );
        canvas.width        = canvas.offsetWidth; 
        canvas.height        = canvas.offsetHeight;
        var context        = canvas.getContext("2d"),
            scale        = canvas.width/temp.width;
        context.scale(scale, scale);
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        document.getElementById('my_online_camera').innerHTML = "";
    });
};

