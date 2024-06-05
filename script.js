function calcular(){
    var fPeso = parseFloat(document.getElementById("peso").value)
    
    var fAltura = parseFloat(document.getElementById("altura").value)
    var fIMC = fPeso/(fAltura*fAltura)
    document.getElementById("IMC").innerHTML = fIMC
    if(fIMC<18.5){
        document.getElementById("status").innerHTML = "status: baixo peso"
    }else if(fIMC<=24.9){
        document.getElementById("status").innerHTML = "status: peso ideal"
    }else if(fIMC<=29.9){
        document.getElementById("status").innerHTML = "status: sobre peso"
    }else if(fIMC<=34.9){
        document.getElementById("status").innerHTML = "status: obesidade 1"
    }else if(fIMC<=39.9){
        document.getElementById("status").innerHTML = "status: obesidade 2"
    }else{
        document.getElementById("status").innerHTML = "status: obesidade morbida"
    }
}