$(function () {
    $.getJSON("public/json/links.json", function (b) { preencher(b) });
    //links
    fbButtom();

});

function preencher(json) {
    const pages = Object.values(json.projects.pages);
    const other = Object.values(json.projects.others);
    $.each(pages, function (index, value) {
        addPages(value);
    });
    addElement($("<hr>"));
    $.each(other, function (index, value) {
        addOther(value);
    });
}
function addPages(value) {
    let pai = $('<ul/>').attr("class", "list-group list-group-horizontal");
    let filho = $('<li/>').attr("class", "list-group-item bg-light p-0 border-light list-group-item-action d-grid gap-2");
    let link = $('<a/>').attr("href", value.link).html(value.name).attr("class", "btn btn-outline-success btn-lg").attr("target", "_black");
    filho.append(link);
    pai.append(filho);
    if (value.repo) {
        let filho2 = $('<li/>').attr("class", "list-group-item bg-light p-0 border-light list-group-item-action d-grid gap-2 d-none-m");
        let link2 = $('<a/>').attr("href", value.repo.link).html(value.repo.name).attr("class", "btn btn-outline-danger btn-lg").attr("target", "_black");
        filho2.append(link2);
        pai.append(filho2);
    }
    addElement(pai);
}

function addOther(value) {
    let pai = $('<ul/>').attr("class", "list-group list-group-horizontal");
    let filho = $('<li/>').attr("class", "list-group-item bg-light p-0 border-light list-group-item-action d-grid gap-2");
    let link = $('<a/>').attr("href", value.link).html(value.name).attr("class", "btn btn-outline-danger btn-lg").attr("target", "_black");
    filho.append(link);
    pai.append(filho);
    addElement(pai);
}

function addElement(element) {
    $("#projetos").append(element);
}

function fbButtom() {
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    let isMobileDevice = regexp.test(details);

    if (isMobileDevice)
        document.getElementById("facebook-mobile").className = "bot";
    else
        document.getElementById("facebook-desktop").className = "bot";
}