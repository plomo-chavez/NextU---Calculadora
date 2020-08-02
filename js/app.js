var numeroUno = 0, numeroDos = 0, operacion = '',segundo = false,puntoUno = false,puntoDos = false,signo = true,resultado = 0;
function agregar(e) {
    var valor = e.srcElement.id;
    var display =   (segundo)?numeroDos:numeroUno;
    nuevoDisplay = (display ==  "0")?valor:display+valor;
    (segundo)?numeroDos = nuevoDisplay:numeroUno = nuevoDisplay;
    nuevoDisplay = (signo)?nuevoDisplay.substr(0,8):nuevoDisplay.substr(0,9);
    document.getElementById('display').innerHTML=nuevoDisplay;
    fn_log();
}
function fn_signo(){
    signo = (signo == true)?false:true;
    var display =   (segundo)?numeroDos:numeroUno;
    nuevoDisplay = (signo)?display.substr(1):'-'+display;
    (segundo)?numeroDos = nuevoDisplay:numeroUno = nuevoDisplay;
    nuevoDisplay = (signo)?nuevoDisplay.substr(0,8):nuevoDisplay.substr(0,9);
    document.getElementById('display').innerHTML=nuevoDisplay;
    fn_log();
}
function fn_cancelar(){
    nuevoDisplay = "0";
    (segundo)?numeroDos = nuevoDisplay:numeroUno = nuevoDisplay;
    document.getElementById('display').innerHTML=nuevoDisplay;
    segundo = false,puntoUno = false,puntoDos = false,signo = true;
    fn_log();
}function fn_punto(){  
    punto = (segundo)?puntoUno:puntoDos;
    if(punto == false){
        punto = true;
        var display =  (segundo)?numeroDos:numeroUno;
        nuevoDisplay = display + '.' ;
        alert(nuevoDisplay);
        (segundo)?numeroDos = nuevoDisplay:numeroUno = nuevoDisplay;
        alert(numeroUno);
        alert(display.length);
        if(display.length < 8){
            total =  display.substr(0,8)+'.';
        }else{
            total = (signo)?display.substr(0,8):display.substr(0,9);

        }
        document.getElementById('display').innerHTML= total;
        fn_log();
    }

}function fn_operacion(opcion){  
    operacion = opcion;
    $segundo = true;
    document.getElementById('display').innerHTML='';
        fn_log();
}
for(x=0;x<=9;x++){
    document.getElementById(x).onclick = agregar;
}
document.getElementById("sign").addEventListener("click", fn_signo);
document.getElementById("on").addEventListener("click", fn_cancelar);
document.getElementById("punto").addEventListener("click", fn_punto);
document.getElementById("mas").addEventListener("click", fn_operacion('+'));
document.getElementById("menos").addEventListener("click", fn_operacion('-'));
document.getElementById("por").addEventListener("click", fn_operacion('*'));
document.getElementById("dividido").addEventListener("click", fn_operacion('/'));
document.getElementById("raiz").addEventListener("click", fn_operacion('-'));



function fn_log(){
    // console.log('Pruebas: '+ numeroUno.substr(0,8));
    console.log('NumeroUno: '+numeroUno+' NumeroDos: '+numeroDos+' Operacion: '+operacion);
}
