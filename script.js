function fileSelected() {
    var file = document.getElementById('fileToUpload').files[0];

    // show file details
    document.getElementById('filename').innerHTML = 'Name: ' + file.name;
    document.getElementById('filesize').innerHTML = 'Size: ' + file.size;
    document.getElementById('filetype').innerHTML = 'Type: ' + file.type;
}

function uploadFile() {
    var xhr = new XMLHttpRequest();
    var fd = new FormData();
    fd.append('fileToUpload', document.getElementById('fileToUpload').files[0]);

    // event listeners
    xhr.upload.addEventListener("progress", uploadProgress, false);
    xhr.addEventListener('load', uploadComplete, false);
    xhr.addEventListener('error', uploadFailed, false);
    xhr.addEventListener('abort', uploadCanceled, false);

    // send xhr
    xhr.open('POST', '/upload.php');
    xhr.send(fd);
}

function uploadProgress(e) {
    // works only on chrome
    if (e.lengthComputable) {
        document.getElementById('progressNumber').innerHTML = Math.round(e.loaded * 100 / e.total) + '%';
    } else {
        document.getElementById('progressNumber').innerHTML = 'unable to compute';
    }
}

function uploadComplete(e) {
    // raised when the server sends back a response
    alert(e.target.responseText);
}

function uploadFailed(e) {
    alert('There were an error attempting to upload the file');
}
    
function uploadCanceled(e) {
    alert('The upload has been canceled by the user');
}
