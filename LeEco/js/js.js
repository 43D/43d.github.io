var json = {};

$("#option").change(function() {
    showC($("#option option:selected").val());

});

$.getJSON("https://raw.githubusercontent.com/43D/Web/master/LeEco/json/leMax2.json", function(jso) { //https://raw.githubusercontent.com/43D/Web/master/LeEco
    json = jso;
    main(json);
    $('#option').removeAttr("disabled");
});

function main(json) {
    for (let i = 0; i < json.option.length; i++) {
        $('#option').append('<option value="' + i + '">' + json.option[i].name + '</option>');

    }
}

function showC(id) {
    if ($('#conteudo').attr('class') == "hide container-fluid")
        $('#conteudo').removeClass('hide').addClass('show')

    let hardware = json.option[id].deviceHardware,
        model = json.option[id].deviceModel,
        system = json.option[id].deviceSystem,
        resultado = json.option[id].resultId;
    ident(json, model);
    hard(json, hardware);
    sys(json, system);
    tabela(json, resultado);
}

function ident(json, model) {
    $('#text1').html(json.name);
    $('#text2').html(json.model[model].model);
    $('#text3').html(json.model[model].region);
}

function hard(json, hardware) {
    $('#text4').html(json.hardware[hardware].CPU);
    $('#text5').html(json.hardware[hardware].GPU);
    $('#text6').html(json.hardware[hardware].RAM);
    $('#text7').html(json.hardware[hardware].ROM);
    $('#text8').html(json.hardware[hardware].screen);
    $('#text9').html(json.hardware[hardware].resolution);
}

function sys(json, system) {

    $('#text10').html(json.system[system].system);
    $('#text11').html(json.system[system].version);
    $('#text12').html(json.system[system].SDK);
    $('#text13').html(json.system[system].bluid);
    $('#text14').html(json.system[system].bluidVersion);
    $('#text15').html(json.system[system].kernel);
    $('#text16').html(json.system[system].kernelVersion);
}

function tabela(json, resultado) {
    $('#tbody').empty();
    for (let i = 0; i < json.result[resultado].govenador.length; i++) {
        let table = $('<tr>');

        let row1 = $('<td>').addClass('neg').text(json.result[resultado].govenador[i].name);
        let row2 = $('<td>').addClass('neg').text(json.result[resultado].govenador[i].antutu[0].score);
        let row3 = $('<td>').addClass('neg').text(json.result[resultado].govenador[i].antutu[0].cpu);
        //var row4 = $('<td>').text(json.result[resultado].govenador[i].antutu[0].cpuScore[0].mat);
        //var row5 = $('<td>').text(json.result[resultado].govenador[i].antutu[0].cpuScore[0].com);
        //var row6 = $('<td>').text(json.result[resultado].govenador[i].antutu[0].cpuScore[0].multi);
        let row7 = $('<td>').addClass('neg').text(json.result[resultado].govenador[i].antutu[0].gpu);
        //var row8 = $('<td>').text(json.result[resultado].govenador[i].antutu[0].gpuScore[0].marooned);
        //var row9 = $('<td>').text(json.result[resultado].govenador[i].antutu[0].gpuScore[0].coastline);
        //var row10 = $('<td>').text(json.result[resultado].govenador[i].antutu[0].gpuScore[0].refinery);
        let row11 = $('<td>').addClass('neg').text(json.result[resultado].govenador[i].antutu[0].ux);
        //var row12 = $('<td>').text(json.result[resultado].govenador[i].antutu[0].uxScore[0].security);
        //var row13 = $('<td>').text(json.result[resultado].govenador[i].antutu[0].uxScore[0].process);
        //var row14 = $('<td>').text(json.result[resultado].govenador[i].antutu[0].uxScore[0].picture);
        //var row15 = $('<td>').text(json.result[resultado].govenador[i].antutu[0].uxScore[0].user);
        let row16 = $('<td>').addClass('neg').text(json.result[resultado].govenador[i].antutu[0].mem);

        table.append(row1);
        table.append(row2);
        table.append(row3);
        //table.append(row4);
        //table.append(row5);
        //table.append(row6);
        table.append(row7);
        //table.append(row8);
        //table.append(row9);
        //table.append(row10);
        table.append(row11);
        //table.append(row12);
        //table.append(row13);
        //table.append(row14);
        //table.append(row15);
        table.append(row16);
        console.log(table);
        $('#tbody').append(table);
    }
}