let asignar = 0;
let intentos = 0;
console.log(asignar);
function asignarTexto(elemento, texto ){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;

}

function VerificarIntento(){
   let numeroDEUsuario = parseInt(document.getElementById('valorUsuario').value);
  console.log(numeroDEUsuario === asignar);

  if (numeroDEUsuario == asignar){

    asignarTexto('p',`acertas el  numero en ${intentos} ${(intentos === 1) ? ' un intento' :'intentos'}`);
  }else{
    if(numeroDEUsuario > asignar){
        asignarTexto('p','el numero es menor'); 
    }else{
        asignarTexto('p','el numero es mayor');  
    }
    intentos++;
    limpiar();
  }
return;

}

function limpiar(){

    let caja = document.querySelector('#valorUsuario ');
    caja.value = '';
}


function asignarNUmeros(params) {
    return  Math.floor(Math.random()*10)+1;
    
}
function condicionesIniciales(){

  asignarTexto("h1","juego del numero secreto");
  asignarTexto("p","Ingressa un numero del 1 al 10");
  asignar = asignarNUmeros();
  intentos= 1;
}


function reiniciarJuego(){
  limpiar();
  condicionesInicialesIniciales();


}

condicionesIniciales();
 