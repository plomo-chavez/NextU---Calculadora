// function display(valor){
//     document.getElementById('display').innerHTML=valor;
// }
var logica = (function(){
    var numeroUno = "0",numeroDos = "0",resultado = "0",operacion = '',signo = false,punto = false,segundo = false,operado = false;
    return {
        display: function (valor){
            display = (valor.includes('-'))?valor.substr(0,9):valor.substr(0,8);
            document.getElementById('display').innerHTML= display;
        },
        cancelar: function (){ 
            logica.display('0');   
            numeroUno = 0,numeroDos = 0,resultado = 0,operacion = '',puntoUno = false,puntoDos=false,segundo = false,operado = false;
        },
        agregar: function (tecla){
            valor = (segundo)?numeroDos:numeroUno;
            display = (valor == "0" || valor == "-0")?tecla:valor+tecla;
            (segundo)?numeroDos = display:numeroUno = display;
            logica.display(display); 
        },
        signo: function (){
            valor = (segundo)?numeroDos:numeroUno;
            display = (signo)?display.substr(1):'-'+valor;
            (segundo)?numeroDos = display:numeroUno = display;            
            signo = (signo == true)?false:true; 
            logica.display(display); 
        },
        punto: function (){
            if(punto == false){
                punto = true;
                display =  (segundo)?numeroDos:numeroUno;
                display = display + '.';
                (segundo)?numeroDos = display:numeroUno = display;
                logica.display(numeroUno); 
            }
        },
        resultado: function (){
            if(operado == false){
                numeroUno=(numeroUno.includes('.') == true)?parseFloat(numeroUno):parseInt(numeroUno, 10);
                numeroDos = numeroDos=(numeroDos.includes('.') == true)?parseFloat(numeroDos):parseInt(numeroDos, 10);
                switch(operacion){
                    case 'mas':            
                        resultado = numeroUno + numeroDos;
                    break;
                    case 'menos':            
                        resultado = numeroUno - numeroDos;
                    break;
                    case 'por':            
                        resultado = numeroUno * numeroDos;
                    break;
                    case 'dividido':            
                        resultado = numeroUno / numeroDos;
                    break;
                }
                signo=false;
                operado=true;
                punto=true;
                numeroUno=resultado.toString();
                numeroDos='0';
                operacion = '';
                logica.display(numeroUno); 
            }else{

            }
        },
        
        
        operacion: function (tecla){
            operacion = tecla;
            if(segundo){
                logica.resultado(); 
            }else{
                segundo = true;
                logica.display(''); 
            }
        },
        
        
        raiz: function (){
            numero =  numeroUno;
            resultado = Math.sqrt(numero);
            numeroUno=resultado.toString();
                numeroDos='0';
                operacion = '';
                
                logica.display(numeroUno); 
        }



    
    };
})();
var btnClick = function()
{
    id = this.id;
    if(id == 'on'){
       logica.cancelar();
    }else if(id == 'sign'){
        logica.signo();
    }else if(id == 'raiz'){
        logica.raiz();
    }else if(id == 'punto'){
        logica.punto();
    }else if(id == 'igual'){
        logica.resultado();
    }else if(id == 'mas'|| id == 'menos' || id == 'por' || id == 'dividido'){
        logica.operacion(id);
    }else{
        logica.agregar(id);
    }
}
var btnPushIn = function()
{
    id = this.id;
    
        if(id == 'mas'){
            document.getElementById(id).style.width ='80%';
            document.getElementById(id).style.height='90%'
        }else{
            document.getElementById(id).style.width ='60px';
            document.getElementById(id).style.height='60px';
        }
}
var btnPushOut = function()
{
    id = this.id;
    if(id == 'mas'){
        document.getElementById(id).style.width ='90%';
        document.getElementById(id).style.height='100%'
    }else{
        document.getElementById(id).style.width='80px';
        document.getElementById(id).style.height='65px';
    }
}
teclas = document.getElementsByClassName("tecla");
for (var i = 0; i < teclas.length; i++) {
    var id = teclas[i].id;

    document.getElementById(id).addEventListener("click", btnClick);
    document.getElementById(id).addEventListener("mousedown", btnPushIn);
        document.getElementById(id).addEventListener("mouseup", btnPushOut);
}