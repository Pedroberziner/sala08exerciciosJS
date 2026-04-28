
function somar(){
    var n1 = document.getElementById("n1").valueAsNumber;
    var n2 = document.getElementById("n2").valueAsNumber;

    var resposta = document.getElementById("resposta")
    resposta.textContent = n1 + n2
}

function Subtração(){
    var n3 = document.getElementById("n3").valueAsNumber;
    var n4 = document.getElementById("n4").valueAsNumber;

    var respsub = document.getElementById("respsub")
    respsub.textContent = n3 - n4
}


function multiplicar(){
    var n5 = document.getElementById("n5").valueAsNumber;
    var n6 = document.getElementById("n6").valueAsNumber;

    var respmult = document.getElementById("respmult")
    respmult.textContent = n5 * n6
}

function dividir(){
    var n7 = document.getElementById("n7").valueAsNumber;
    var n8 = document.getElementById("n8").valueAsNumber;

    var respdiv = document.getElementById("respdiv")
    
    
    if(n8 == 0) {
        respdiv.textContent = "Não é possível dividir por zero"
    } else {
        respdiv.textContent = n7 / n8
    }
}