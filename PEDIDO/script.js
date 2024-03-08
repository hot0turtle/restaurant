function comecar() {
    var nome = document.getElementById("exampleFormControlInput1").value;
    show(nome);
}

var total = 0;

function show(nome) {
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    if (nome && nome.trim() !== "") {
        div.style.display = "block";
        document.getElementById("exampleFormControlInput1").style.background = "none";
    }
    else {
        document.getElementById("error").style.display = "flex";
    }

}

function fechar() {
    document.getElementById("error").style.display = "none";
    document.getElementById("exampleFormControlInput1").style.background = "pink";
}

function totalbt() {
    var vA = document.getElementById("selectPrato").value;
    var vS = document.getElementById("selectSobremesa").value;
    var vPF = document.getElementById("selectPratoFeito").value;
    var vSA = document.getElementById("selectSanduiche").value;
    var vB = document.getElementById("selectBebida").value;

    total = 0;
    var name = "";

    var selectedOptions = [];

    // Switch for selectPrato
    switch (vA) {
        case "Polenta com Queijo":
            name = "Polenta com Queijo";
            total += 10;
            selectedOptions.push(name);
            break;
        case "Polenta Com Carne":
            name = "Polenta Com Carne";
            total += 19;
            selectedOptions.push(name);
            break;
        case "Polenta com Molho":
            name = "Polenta com Molho";
            total += 8;
            selectedOptions.push(name);
            break;
        case "Coxinha de frango":
            name = "Coxinha de frango";
            total += 12;
            selectedOptions.push(name);
            break;
        case "Tiras de frango frito":
            name = "Tiras de frango frito";
            total += 20;
            selectedOptions.push(name);
            break;
        default:
            name = "Selecione um prato";
    }

    // Switch for selectPratoFeito
    switch (vPF) {
        case "Tradicional":
            name = "Tradicional";
            total += 22;
            selectedOptions.push(name);
            break;
        case "Bife a Cavalo":
            name = "Bife a Cavalo";
            total += 24;
            selectedOptions.push(name);
            break;
        case "Frango a milanesa":
            name = "Frango a milanesa";
            total += 25;
            selectedOptions.push(name);
            break;
        case "frango a parmegiana":
            name = "Frango a parmegiana";
            total += 26;
            selectedOptions.push(name);
            break;
        case "Frango grelhado":
            name = "Frango grelhado";
            total += 17;
            selectedOptions.push(name);
            break;
        default:
            name = "Selecione um prato feito";
    }

    // Switch for selectSanduiche
    switch (vSA) {
        case "Sanduiche Natural":
            name = "Sanduiche Natural";
            total += 14;
            selectedOptions.push(name);
            break;
        case "Smash Burguer":
            name = "Smash Burguer";
            total += 30;
            selectedOptions.push(name);
            break;
        case "Baguete recheado com bacon":
            name = "Baguete recheado com bacon";
            total += 33;
            selectedOptions.push(name);
            break;
        case "Sopa no Pao italiano":
            name = "Sopa no Pao italiano";
            total += 21;
            selectedOptions.push(name);
            break;
        case "Pizza de Borda":
            name = "Pizza de Borda";
            total += 55;
            selectedOptions.push(name);
            break;
        default:
            name = "Selecione um Sanduiche";
    }

    // Switch for selectSobremesa
    switch (vS) {
        case "Sorvete com frutas":
            name = "Sorvete com frutas";
            total += 70;
            selectedOptions.push(name);
            break;
        case "Chocolate com Morango":
            name = "Chocolate com Morango";
            total += 1;
            selectedOptions.push(name);
            break;
        case "Gelatina com Morango":
            name = "Gelatina com Morango";
            total += 100;
            selectedOptions.push(name);
            break;
        case "200 doces mistos":
            name = "200 doces mistos";
            total += 130;
            selectedOptions.push(name);
            break;
        case "3kg de Nutella":
            name = "3kg de Nutella";
            total += 200;
            selectedOptions.push(name);
            break;
        default:
            name = "Selecione uma sobremesa";
    }

    // Switch for selectBebida
    switch (vB) {

        case "Gin Tropical":
            name = "Gin Tropical";
            total += 20;
            selectedOptions.push(name);
            break;
        case "Gin e licor de Morango":
            name = "Gin e licor de Morango";
            total += 17;
            selectedOptions.push(name);
            break;
        case "Gin e Tônica":
            name = "Gin e Tônica";
            total += 16;
            selectedOptions.push(name);
            break;
        case "Energetico Bally 2L":
            name = "Energetico Bally 2L";
            total += 13;
            selectedOptions.push(name);
            break;
        case "Powerade":
            name = "Powerade";
            total += 6;
            selectedOptions.push(name);
            break;
        default:
            name = "Selecione uma bebida";
    }

    document.getElementById('resultado').textContent = "R$" + total + ",00";
    displaySelectedOptions(selectedOptions);

}


function displaySelectedOptions(options) {
    var listElement = document.getElementById('selectedList');
    listElement.innerHTML = '';

    for (var i = 0; i < options.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = options[i];
        listElement.appendChild(listItem).scrollIntoView();;

    }
}
function reset() {
    $("#selectSobremesa option").prop("selected", function () {
        // return defaultSelected property of the option
        return 0;
    });
    $("#selectPrato option").prop("selected", function () {
        // return defaultSelected property of the option
        return 0;
    });
    $("#selectBebida option").prop("selected", function () {
        // return defaultSelected property of the option
        return 0;
    });
    $("#selectPratoFeito option").prop("selected", function () {
        // return defaultSelected property of the option
        return 0;
    });
    $("#selectSanduiche option").prop("selected", function () {
        // return defaultSelected property of the option
        return 0;
    });
    history.go(0);
}

function fazerPedido() {
    if (total > 0) {
        let data = new Date();
        let dataFormatada = ((data.getDate())) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear() + " " + data.getHours() + ":" + data.getMinutes();

        var numeroTelefone = "32"
        var linkzap = "https://wa.me/" + numeroTelefone + "?text=Total:R$:" + total + " " + dataFormatada
        window.open(linkzap, "_blank");
    }
    else{
        alert("Calcule o total antes de fazer o pedido");
    }
}
