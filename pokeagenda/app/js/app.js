async function getJs(json) {
    return await getJsonPromise(json).then(result => {
        return result;
    });
}

function getJsonPromise(js) {
    return new Promise((resolve, reject) => {
        let a = js;
        let j = $.getJSON(a);
        resolve(j);
    });
}

function getG(data) {
    let str = window.location.search.substr(1);
    let spl = str.split("&");
    for (var i in spl)
        if (spl[i].split("=")[0] == data)
            return spl[i].split("=")[1];
    return null;
}

function getDB() {
    if (localStorage.pokemon != undefined)
        return JSON.parse(localStorage.pokemon);
    return null;
}

function setDB(data) {
    let id = 0;
    let js = [];
    if (localStorage.pokemon != undefined) {
        js = JSON.parse(localStorage.pokemon);
        if (js[0] != undefined)
            id = js[js.length - 1]["id"] + 1;
    }
    data.id = id;
    js.push(data);
    localStorage.setItem("pokemon", JSON.stringify(js));
    return data.id;
}