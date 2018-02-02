var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/crwdhire/upload';
var CLOUDINARY_UPLOAD_PRESET = 'h1feojqc';

var imgPreview = document.getElementById('jobImage2');
var fileUpload = document.getElementById('jobImage');

fileUpload.addEventListener('change', function (event) {
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then(function (res) {
        console.log(res);
        imgPreview.src = res.data.secure_url;
    }).catch(function (err) {
        console.error(err);
    });
});


// var keys = require('../../../keys/keys.js');
// var cloudinary = require('cloudinary');
// var cloudinary_cors = "https://" + request.headers.host + "/cloudinary_cors.html";



// var cloudinaryKeys = new cloudinary({
//     api_key: keys.cloudinaryKeys.api_key,
//     api_secret: keys.cloudinaryKeys.api_secret
// });




// var filename = $("#jobImage").val();

// $(document).ready(function () {
//     $("input.cloudinary-fileupload[type=file]").cloudinary_fileupload();
//     console.log("did this run?");

// });

// $.cloudinary.config({ cloud_name: 'crwdhire', secure: true });


// $(function upload() {
//     if ($.fn.cloudinary_fileupload !== undefined) {
//         $("input.cloudinary-fileupload[type=file]").cloudinary_fileupload(filename);
//     }
// });


// upload();