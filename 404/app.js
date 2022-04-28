//var rand = Math.floor(Math.random() * (json.video.length - 0)) + 0;
$(document).ready(function () {

    $.getJSON("404/photos.json", function (data) {
        const count = Object.keys(data.photos).length;
        const r = Math.floor(Math.random() * (count));
        const res = Object.values(data.photos)[r];
        $("#mais").attr("href", "http://pixiv.net/artworks/" + res[0])
        console.log("url(404/img/"+res[0] + "_p" + res[1] + ".jpg"+")");
        $('#img-background').css("background-image", "url(404/img/"+res[0] + "_p" + res[1] + ".jpg"+")"); 
    });
});