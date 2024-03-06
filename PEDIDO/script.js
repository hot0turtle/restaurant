function comecar(){
 var nome = document.getElementById("exampleFormControlInput1").value;
 show(nome);
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    if (nome && nome.trim() !== ""){
    div.style.display = "block";   
    document.getElementById("exampleFormControlInput1").style.background = "none";
    }
    else{
        document.getElementById("error").style.display = "flex";
    }

}

function fechar(){
    document.getElementById("error").style.display = "none"; 
    document.getElementById("exampleFormControlInput1").style.background = "pink";
}

function total(){
    var vA = document.getElementById("selectPrato").value;
    var vS = document.getElementById("selectSobremesa").value;
    var vPF = document.getElementById("selectPratoFeito").value;
    var vSA = document.getElementById("selectSanduiche").value;
    var vB = document.getElementById("selectBebida").value;

    console.log(vB)

   

    document.getElementById('resultado').textContent = "R$" + total + ",00";

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
    
    total();
 }

function fazerPedido() {

}


// <option value="0" selected>Selecione um prato</option>
// <option data-value="10" value="Polenta com Queijo">Polenta com Queijo</option>
// <option data-value="19" value="Polenta Com Carne">Polenta Com Carne</option>
// <option data-value="8" value="Polenta com Molho">Polenta com Molho</option>
// <option data-value="12" value="Coxinha de frango">Coxinha de frango</option>
// <option data-value="20" value="Tiras de frango frito">Tiras de frango frito</option>

// <option value="0" selected>Selecione um prato feito</option>
// <option data-value="22" value="Tradicional">Tradicional</option>
// <option data-value="24" value="Bife a Cavalo" >Bife a Cavalo</option>
// <option data-value="25" value="Frango a milanesa">Frango a milanesa</option>
// <option data-value="26" value="frango a parmegiana">frango a parmegiana</option>
// <option data-value="17" value="Frango grelhado">Frango grelhado</option>

// <option data-value="14" value="Sanduiche Natural">Sanduiche Natural</option>
// <option data-value="30" value="Smash Burguer">Smash Burguer</option>
// <option data-value="33" value="Baguete recheado com bacon">Baguete recheado com bacon</option>
// <option data-value="21" value="Sopa no Pao italiano">Sopa no Pao italiano</option>
// <option data-value="55" value="Pizza de Borda">Pizza de Borda</option>

// <option data-value="70" value="Sorvete com frutas">Sorvete com frutas</option>
// <option data-value="1" value="Chocolate com Morango">Chocolate com Morango</option>
// <option data-value="100"value="Gelatina com Morango">Gelatina com Morango</option>
// <option data-value="130" value="200 doces mistos">200 doces mistos</option>
// <option data-value="200" value="3kg de Nutella">3kg de Nutella</option>


// <option data-value="16" value="Gin Tropical">Gin Tropical</option>
// <option data-value="17" value="Gin e licor de Morango">Gin e licor de Morango</option>
// <option data-value="20" value="Gin e Tônica">Gin e Tônica</option>
// <option data-value="13" value="Energetico Bally 2L">Energetico Bally 2L</option>
// <option data-value="6" value="Powerade">Powerade</option>