$(document).ready(function () {
    // $.getJSON("https://43d.github.io/404/photos.json", function (data) {
    //     const count = Object.keys(data.photos).length;
    //     const r = Math.floor(Math.random() * (count));
    //     const res = Object.values(data.photos)[r];
    //     $("#mais").attr("href", "http://pixiv.net/artworks/" + res[0])
    //     const url = "https://43d.github.io/404/image/"+res[0] + "_p" + res[1] + ".jpg";
    //     $('#img-background').css("background-image", "url( '"+url+"')"); 
    //     $("meta")[16].content =url;
    //     $("meta")[17].content =url;
    // });
});

const Project = class {
    init() {
        this.getRequest();
    }

    getHeader() {
        const myHeaders = new Headers();
        myHeaders.append("Referer", "https://www.pixiv.net/");
        return myHeaders;
    }

    getRequestBody() {
        return {
            method: 'GET',
            headers: this.getHeader(),
            redirect: 'follow'
        };
    }

    getRequest() {
        fetch("https://i.pximg.net/img-original/img/2023/11/29/19/15/33/113810403_p0.png", this.getRequestBody())
            .then(response => console.log(response.text()))
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
};

new Project().init();