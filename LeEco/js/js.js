//actions
$('#option').change(function() {
    showTable($("#option option:selected").val());
    hideCard()
});

$('#close2').click(function() { $('#conteudo2').removeClass('show').addClass('hide') });
$('#close3').click(function() { $('#conteudo3').removeClass('show').addClass('hide') });
$('#close4').click(function() { $('#conteudo4').removeClass('show').addClass('hide') });
$('#close5').click(function() { $('#conteudo5').removeClass('show').addClass('hide') });

$(document).ready(function() {
    $("#tableP").tablesorter();
});

//Json
var json = {};
$.getJSON("/LeEco/json/leMax2.json", function(jso) { //https://raw.githubusercontent.com/43D/Web/master
    json = jso;
    main(json);
    $('#option').removeAttr("disabled");
});

function main(json) {
    for (let i = 0; i < json.option.length; i++) {
        $('#option').append('<option value="' + i + '">' + json.option[i].name + '</option>');
    }
}

function showTable(id) {
    if ($('#conteudo1').attr('class') == "hide container-fluid")
        $('#conteudo1').removeClass('hide').addClass('show')

    let hardware = json.option[id].deviceHardware,
        model = json.option[id].deviceModel,
        system = json.option[id].deviceSystem,
        resultado = json.option[id].resultId;
    ident(json, model);
    hard(json, hardware);
    sys(json, system);
    tabela(json, resultado, json.option[id].antutu_version);
    $('#cap').html(json.option[id].caption);
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

function tabela(json, resultado, Aversion) {
    $('#tbody').empty();

    switch (Aversion) {
        case "v7":
            for (let i = 0; i < json.result[resultado].govenador.length; i++) {
                let table = $('<tr>');

                let row1 = $('<td>').addClass('neg').text(json.result[resultado].govenador[i].name);
                let row2 = $('<td>').addClass('neg').text(json.result[resultado].govenador[i].antutu[0].score);
                let row3 = $('<td>').addClass('neg').text(json.result[resultado].govenador[i].antutu[0].cpu + " ").append('<button id="0_' + resultado + '_' + i + '" class="border-0 bg-white showCard"> ▼</button>');
                let row4 = $('<td>').addClass('neg').text(json.result[resultado].govenador[i].antutu[0].gpu + " ").append('<button id="1_' + resultado + '_' + i + '" class="border-0 bg-white showCard">▼</button>');
                let row5 = $('<td>').addClass('neg').text(json.result[resultado].govenador[i].antutu[0].ux + " ").append('<button id="2_' + resultado + '_' + i + '" class="border-0 bg-white showCard">▼</button>');
                let row6 = $('<td>').addClass('neg').text(json.result[resultado].govenador[i].antutu[0].mem);
                table.append(row1);
                table.append(row2);
                table.append(row3);
                table.append(row4);
                table.append(row5);
                table.append(row6);
                $('#tbody').append(table);
            }
            break;
        case "v8":
            for (let i = 0; i < json.result[resultado].govenador.length; i++) {
                let table = $('<tr>');

                let row1 = $('<td>').addClass('neg').text(json.result[resultado].govenador[i].name);
                let row2 = $('<td>').addClass('neg').text(json.result[resultado].govenador[i].antutu[0].score);
                let row3 = $('<td>').addClass('neg').text(json.result[resultado].govenador[i].antutu[0].cpu + " ").append('<button id="0_' + resultado + '_' + i + '" class="border-0 bg-white showCard"> ▼</button>');
                let row4 = $('<td>').addClass('neg').text(json.result[resultado].govenador[i].antutu[0].gpu + " ").append('<button id="1_' + resultado + '_' + i + '" class="border-0 bg-white showCard">▼</button>');
                let row5 = $('<td>').addClass('neg').text(json.result[resultado].govenador[i].antutu[0].ux + " ").append('<button id="2_' + resultado + '_' + i + '" class="border-0 bg-white showCard">▼</button>');
                let row6 = $('<td>').addClass('neg').text(json.result[resultado].govenador[i].antutu[0].mem).append('<button id="3_' + resultado + '_' + i + '" class="border-0 bg-white showCard">▼</button>');
                table.append(row1);
                table.append(row2);
                table.append(row3);
                table.append(row4);
                table.append(row5);
                table.append(row6);
                $('#tbody').append(table);
            }
            break;
        default:
            break;
    }

    //table event
    $('.showCard').click(function() { showCard(this.id) });


}

function hideCard() {
    $('#conteudo2').removeClass('show').addClass('hide');
    $('#conteudo3').removeClass('show').addClass('hide');
    $('#conteudo4').removeClass('show').addClass('hide');
    $('#conteudo5').removeClass('show').addClass('hide');
}

function showCard(id) {
    let arr = id.split('_');
    hideCard();

    let table = $('<tr>');
    switch (parseInt(arr[0])) {
        case 0:
            $('#tbody2').empty();
            let row1 = $('<td>').text(json.result[arr[1]].govenador[arr[2]].antutu[0].cpuScore[0].mat);
            let row2 = $('<td>').text(json.result[arr[1]].govenador[arr[2]].antutu[0].cpuScore[0].com);
            let row3 = $('<td>').text(json.result[arr[1]].govenador[arr[2]].antutu[0].cpuScore[0].multi);
            table.append(row1);
            table.append(row2);
            table.append(row3);
            $('#tbody2').append(table);
            $('#conteudo2').removeClass('hide').addClass('show');
            break;
        case 1:
            $('#tbody3').empty();
            let row4 = $('<td>').text(json.result[arr[1]].govenador[arr[2]].antutu[0].gpuScore[0].marooned);
            let row5 = $('<td>').text(json.result[arr[1]].govenador[arr[2]].antutu[0].gpuScore[0].coastline);
            let row6 = $('<td>').text(json.result[arr[1]].govenador[arr[2]].antutu[0].gpuScore[0].refinery);
            table.append(row4);
            table.append(row5);
            table.append(row6);
            $('#tbody3').append(table);
            $('#conteudo3').removeClass('hide').addClass('show');
            break;
        case 2:
            $('#tbody4').empty();
            let row7 = $('<td>').text(json.result[arr[1]].govenador[arr[2]].antutu[0].uxScore[0].security);
            let row8 = $('<td>').text(json.result[arr[1]].govenador[arr[2]].antutu[0].uxScore[0].process);
            let row9 = $('<td>').text(json.result[arr[1]].govenador[arr[2]].antutu[0].uxScore[0].picture);
            let row10 = $('<td>').text(json.result[arr[1]].govenador[arr[2]].antutu[0].uxScore[0].user);
            table.append(row7);
            table.append(row8);
            table.append(row9);
            table.append(row10);
            $('#tbody4').append(table);
            $('#conteudo4').removeClass('hide').addClass('show');
            break;
        case 3:
            $('#tbody5').empty();
            let row11 = $('<td>').text(json.result[arr[1]].govenador[arr[2]].antutu[0].memScore[0].ram);
            let row12 = $('<td>').text(json.result[arr[1]].govenador[arr[2]].antutu[0].memScore[0].rom);
            let row13 = $('<td>').text(json.result[arr[1]].govenador[arr[2]].antutu[0].memScore[0].sequencialRead);
            let row14 = $('<td>').text(json.result[arr[1]].govenador[arr[2]].antutu[0].memScore[0].sequencialWrite);
            let row15 = $('<td>').text(json.result[arr[1]].govenador[arr[2]].antutu[0].memScore[0].random);
            table.append(row11);
            table.append(row12);
            table.append(row13);
            table.append(row14);
            table.append(row15);
            $('#tbody5').append(table);
            $('#conteudo5').removeClass('hide').addClass('show');
            break;
        default:
            break;
    }
}