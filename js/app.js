var numeroUno = 0, numeroDos = 0, operacion = '',segundo = false,puntoUno = false,puntoDos = false,signo = true,resultado = 0,operado=false;
function agregar(e) {
    var valor = e.srcElement.id;
    var display =   (segundo)?numeroDos:numeroUno;
    nuevoDisplay = (display ==  "0" || display ==  "-0" )?valor:display+valor;
    (segundo)?numeroDos = nuevoDisplay:numeroUno = nuevoDisplay;
    nuevoDisplay = (signo)?nuevoDisplay.substr(0,8):nuevoDisplay.substr(0,9);
    document.getElementById('display').innerHTML=nuevoDisplay;
    
}
function operacionn(){
    resultado = 0;
        numeroUno=(numeroUno.includes('.') == true)?parseFloat(numeroUno):parseInt(numeroUno, 10);
        numeroDos = numeroDos=(numeroDos.includes('.') == true)?parseFloat(numeroDos):parseInt(numeroDos, 10);
        raiz = false;
        switch(operacion){
            case '+':
                resultado = numeroUno + numeroDos;
                break;
                case '-':
                    resultado = numeroUno - numeroDos;
                    break;
                    case '*':
                        resultado = numeroUno * numeroDos;
                        break;
                        case '/':
                            resultado = numeroUno / numeroDos;
                            break;
                            case 'r':
                                numero = (segundo)? numeroDos:numeroUno;
                                resultado = Math.sqrt(numero);
                                raiz = (segundo == false)?false:true;
                                break;
        }
        // alert(resultado);
        signo=false;
        operado=true;
        numeroUno=resultado.toString();
        numeroDos='0';
        operacion = '';
        // alert(Math.sign(resultado));
        resultadoFinal = (Math.sign(resultado) >= 0  )?resultado.toString().substr(0,8):resultado.toString().substr(0,8);
        // alert(resultadoFinal);
        (raiz == false)?document.getElementById('display').innerHTML=resultadoFinal:'';
        
}
function fn_signo(){
    var display =   (segundo)?numeroDos:numeroUno;
    nuevoDisplay = (signo)?display.substr(1):'-'+display;
    (segundo)?numeroDos = nuevoDisplay:numeroUno = nuevoDisplay;
    nuevoDisplay = (signo)?nuevoDisplay.substr(0,8):nuevoDisplay.substr(0,9);
    document.getElementById('display').innerHTML=nuevoDisplay;
    signo = (signo == true)?false:true;
    
}
function fn_cancelar(){
    nuevoDisplay = "0";
    (segundo)?numeroDos = nuevoDisplay:numeroUno = nuevoDisplay;
    document.getElementById('display').innerHTML=nuevoDisplay;
    numeroUno = 0, numeroDos = 0,resultado = 0, operacion = '',segundo = false,puntoUno = false,puntoDos = false,signo = true,operado=false;
    
}
function fn_punto(){  
    punto = (segundo)?puntoUno:puntoDos;
    if(punto == false){
        (segundo)?puntoUno = true:puntoDos = true;
        var display =  (segundo)?numeroDos:numeroUno;
        nuevoDisplay = display + '.' ;
        (segundo)?numeroDos = nuevoDisplay:numeroUno = nuevoDisplay;
        if(display.length < 8){
            total =  display.substr(0,8)+'.';
        }else{
            total = (signo)?display.substr(0,8):display.substr(0,9);

        }
        document.getElementById('display').innerHTML= total;
        
    }

}
function fn_raiz(){
    numero =  numeroUno;
    resultado = Math.sqrt(numero);
    numeroUno=resultado.toString();
        numeroDos='0';
        operacion = '';
        // alert(Math.sign(resultado));
        resultadoFinal = (Math.sign(resultado) >= 0  )?resultado.toString().substr(0,8):resultado.toString().substr(0,8);
        // alert(resultadoFinal);
        document.getElementById('display').innerHTML= resultadoFinal;
        
}
function fn_operacion(opcion){             
    if(segundo == true){
        if(operado){            
            operacion = opcion;

            if(numeroDos != 0){
                fn_resultado(); 
            }else{
                document.getElementById('display').innerHTML='';
                
            }

        }else{
            operacion = opcion;
            if(opcion == "r"){
                fn_resultado();
                
            }
        }
    }else{
        operacion = opcion;

        if(opcion == "r"){
            fn_resultado();
            
        }else{
            if  (document.getElementById('display').innerText != "0"){
                segundo = true;
                document.getElementById('display').innerHTML='';
                
            }
        }
    } 
}
function fn_resultado(){
    if(operado){
        if(segundo){
            operacionn();
        }else{
            document.getElementById('display').innerHTML='0';
        segundo = true;
        numeroUno = resultado;
        
        }

    }else{
        operacionn();
    }
}
for(x=0;x<=9;x++){
    document.getElementById(x).onclick = agregar;
}
var teclas = document.getElementsByClassName("tecla");

function push(id,opcion){
    if(opcion == 1){
        alert('opcion');
        document.getElementById(id).style.width= "15%";
        document.getElementById(id).style.height=" 30px";

    }else{
        alert('push');
        document.getElementById(id).style.width= "29%";
        document.getElementById(id).style.height=" 62.91px";
    }

}

for (var i = 0; i < teclas.length; i++) {
    console.log(teclas[i]);
    document.getElementById(teclas[i].id).addEventListener('keypress', function(){push(teclas[i].id,1)}, false);
    document.getElementById(teclas[i].id).addEventListener('keydown', function(){push(teclas[i].id,0)}, false);
}
document.getElementById("sign").addEventListener("click", fn_signo);
document.getElementById("on").addEventListener("click", fn_cancelar);
document.getElementById("punto").addEventListener("click", fn_punto);
document.getElementById("mas").addEventListener("click", function(){fn_operacion("+")},false);
document.getElementById("menos").addEventListener("click", function(){fn_operacion("-")},false);
document.getElementById("por").addEventListener("click", function(){fn_operacion("*")},false);
document.getElementById("dividido").addEventListener("click", function(){fn_operacion("/")},false);
document.getElementById("raiz").addEventListener("click", function(){fn_raiz()},false);
document.getElementById("igual").addEventListener("click", function(){fn_resultado()},false);

