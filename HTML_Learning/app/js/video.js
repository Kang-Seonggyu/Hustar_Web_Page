var myVideoStream = document.getElementById('myVideo')     // make it a global variable
var myVideoStream2 = document.getElementById('myVideo2')
const video1 = document.getElementById('video1')
const video2 = document.getElementById('video2')

// function getVideo(){
//     navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
//     navigator.getMedia({video: true, audio: false},
    
//         function(stream) {
//             myVideoStream.srcObject = stream   
//             myVideoStream.play();
//             myVideoStream2.srcObject = stream   
//             myVideoStream2.play();
//     }, 
    
//         function(error) {
//             alert('webcam not working');
//     });
// }

// getVideo();

video1.playbackRate = 8.5;
video2.playbackRate = 1;