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
    
    
    var findva = document.getElementById("selectPrato");
    var findvs = document.getElementById("selectSobremesa");
    var findvb = document.getElementById("selectBebida");
    var findvp = document.getElementById("selectPratoFeito");
    var findvsand = document.getElementById("selectSanduiche");

    var va = findva.getAttribute("data-value");
    var vs = findvs.getAttribute("data-value");
    var vb = findvb.getAttribute("data-value");
    var vp = findvp.getAttribute("data-value");
    var vsand = findvsand.getAttribute("data-value");
    

    var total = ~~va + ~~vb + ~~vs + ~~vsand + ~~vp

    document.getElementById('resultado').textContent = "R$" + total + ",00";

    console.log(total)
    console.log(typeof{total})
    console.log(vs)

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