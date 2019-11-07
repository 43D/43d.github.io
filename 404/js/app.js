var you = "https://youtube.com/embed/",
    tube = "https://youtu.be/",
    conf = "?autoplay=1&controls=0&showinfo=0&autohide=1&rel=0";


var json = {
    "video": [{
        "nome": "Prayer In C - 8 Bit Remix",
        "id": "ub-AbuiKycE"
    }]
}

var rand = Math.floor(Math.random() * (json.video.length - 0)) + 0;

$('#name').html(json.video[rand].nome);
$('#mais').attr("href", tube + json.video[rand].id);
$('#player').attr("src", you + json.video[rand].id + conf);