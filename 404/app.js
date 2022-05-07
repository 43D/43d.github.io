$(document).ready(function () {
    $.getJSON("https://43d.github.io/404/photos.json", function (data) {
        const count = Object.keys(data.photos).length;
        const r = Math.floor(Math.random() * (count));
        const res = Object.values(data.photos)[r];
        $("#mais").attr("href", "http://pixiv.net/artworks/" + res[0])
        $('#img-background').css("background-image", "url( 'https://43d.github.io/404/image/"+res[0] + "_p" + res[1] + ".jpg"+"')"); 
    });
});