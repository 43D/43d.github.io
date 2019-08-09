$.getJSON("https://raw.githubusercontent.com/43D/Web/master/LeEco/json/leMax2.json", function(json) {
    main(json)
});

function main(json) {
    var hardware = json.deviceHardware,
        model = json.deviceModel,
        system = json.deviceSystem,
        resultado = json.resultId;
    ident(json, model);
    hard(json, hardware);
    sys(json, system);
    tabela(json, resultado);
}

function ident(json, model) {
    document.getElementById("text1").innerHTML = json.name;
    document.getElementById("text2").innerHTML = json.model[model].model;
    document.getElementById("text3").innerHTML = json.model[model].region;
}

function hard(json, hardware) {
    document.getElementById("text4").innerHTML = json.hardware[hardware].CPU;
    document.getElementById("text5").innerHTML = json.hardware[hardware].GPU;
    document.getElementById("text6").innerHTML = json.hardware[hardware].RAM;
    document.getElementById("text7").innerHTML = json.hardware[hardware].ROM;
    document.getElementById("text8").innerHTML = json.hardware[hardware].screen;
    document.getElementById("text9").innerHTML = json.hardware[hardware].resolution;
}

function sys(json, system) {
    document.getElementById("text10").innerHTML = json.system[system].system;
    document.getElementById("text11").innerHTML = json.system[system].version;
    document.getElementById("text12").innerHTML = json.system[system].SDK;
    document.getElementById("text13").innerHTML = json.system[system].bluid;
    document.getElementById("text14").innerHTML = json.system[system].bluidVersion;
    document.getElementById("text15").innerHTML = json.system[system].kernel;
    document.getElementById("text16").innerHTML = json.system[system].kernelVersion;
}

function tabela(json, resultado) {
    var pai = document.getElementById("tbody");
    for (let i = 0; i < json.result[resultado].govenador.length; i++) {
        var row = pai.insertRow(i);
        
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        var cell10 = row.insertCell(9);
        var cell11 = row.insertCell(10);
        var cell12 = row.insertCell(11);
        var cell13 = row.insertCell(12);
        var cell14 = row.insertCell(13);
        var cell15 = row.insertCell(14);
        var cell16 = row.insertCell(15);

        cell1.innerHTML = json.result[resultado].govenador[i].name;
        cell1.className = "neg";
        cell2.innerHTML = json.result[resultado].govenador[i].antutu[0].score;
        cell2.className = "neg";
        cell3.innerHTML = json.result[resultado].govenador[i].antutu[0].cpu;
        cell3.className = "neg";
        cell4.innerHTML = json.result[resultado].govenador[i].antutu[0].cpuScore[0].mat;
        cell5.innerHTML = json.result[resultado].govenador[i].antutu[0].cpuScore[0].com;
        cell6.innerHTML = json.result[resultado].govenador[i].antutu[0].cpuScore[0].multi;
        cell7.innerHTML = json.result[resultado].govenador[i].antutu[0].gpu;
        cell7.className = "neg";
        cell8.innerHTML = json.result[resultado].govenador[i].antutu[0].gpuScore[0].marooned;
        cell9.innerHTML = json.result[resultado].govenador[i].antutu[0].gpuScore[0].coastline;
        cell10.innerHTML = json.result[resultado].govenador[i].antutu[0].gpuScore[0].refinery;
        cell11.innerHTML = json.result[resultado].govenador[i].antutu[0].ux;
        cell11.className = "neg";
        cell12.innerHTML = json.result[resultado].govenador[i].antutu[0].uxScore[0].security;
        cell13.innerHTML = json.result[resultado].govenador[i].antutu[0].uxScore[0].process;
        cell14.innerHTML = json.result[resultado].govenador[i].antutu[0].uxScore[0].picture;
        cell15.innerHTML = json.result[resultado].govenador[i].antutu[0].uxScore[0].user;
        cell16.innerHTML = json.result[resultado].govenador[i].antutu[0].mem;
        cell16.className = "neg";
    }
}
