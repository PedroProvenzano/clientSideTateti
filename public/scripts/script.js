// variables globales
let queJugadorVa = 1;
let tableroTateti = [[0,0,0],
                     [0,0,0],
                     [0,0,0]];
let empate = 0;

// Jugadores
let jugadorUno = "";
//let jugadorDos = prompt("Porfavor jugador dos ingrese su nombre");

function jugadores(){
    jugadorUno = prompt("Porfavor ingresa tu nombre");

    
}






// Constantes de DOM
const arrayCasilleros = document.getElementById("contenedorTateti").getElementsByTagName("div");
const pQuienJuega = document.getElementById("jugadorJuega");
const reiniciar = document.getElementById("reiniciar");
const felicitaciones = document.getElementById("felicitaciones");

// Eventos
reiniciar.addEventListener('click',()=>{
    for(let div of arrayCasilleros){
        div.innerText = "";
        div.setAttribute("style", "pointer-events: all");
    }
    queJugadorVa = 1;
    pQuienJuega.innerText = jugadorUno + " x";
    checkdeGanar();
    tableroTateti = [[0,0,0],
                     [0,0,0],
                     [0,0,0]];
    felicitaciones.style.display = "none";
    empate = 0;
})


function agregarEventos(div,a,b){
    div.addEventListener('click', ()=>{
        empate++
        if(queJugadorVa==1){
            div.innerText = "x";
            queJugadorVa++
            pQuienJuega.innerText = jugadorDos + " o";
            tableroTateti[a][b] = 1;
            div.setAttribute("style", "pointer-events: none");
        }else{
            div.innerText = "o"
            queJugadorVa--
            pQuienJuega.innerText = jugadorUno + " x";
            tableroTateti[a][b] = 2;
            div.setAttribute("style", "pointer-events: none");
        }
    })
}
function ganador(nombreJugador){
    felicitaciones.innerText = "Felicitaciones " + nombreJugador + " ganaste!";
    felicitaciones.style.display = "block";
}


agregarEventos(document.getElementById("uno"),0,0);
agregarEventos(document.getElementById("dos"),0,1);
agregarEventos(document.getElementById("tres"),0,2);
agregarEventos(document.getElementById("cuatro"),1,0);
agregarEventos(document.getElementById("cinco"),1,1);
agregarEventos(document.getElementById("seis"),1,2);
agregarEventos(document.getElementById("siete"),2,0);
agregarEventos(document.getElementById("ocho"),2,1);
agregarEventos(document.getElementById("nueve"),2,2);
function checkdeGanar(){

let checkGana = setInterval(() => {
    if(empate==9){
        felicitaciones.innerText = "Empate!";
        felicitaciones.style.display = "block";
    }
    // Horizontales
    for(let i=0; i < 3; i++){
        switch(JSON.stringify(tableroTateti[i])){
            case JSON.stringify([1,1,1]):
                ganador(jugadorUno);
                clearInterval(checkGana);
            break;
            case JSON.stringify([2,2,2]):
                ganador(jugadorDos);
                clearInterval(checkGana);
            break;
            default:

            break;
        }
    }
    // Verticales
    
    for(let j = 0; j<3;j++){
        let arrayCell = [];
        for(let i=0;i<3;i++){
            arrayCell.push(tableroTateti[i][j]);
        }
        switch(JSON.stringify(arrayCell)){
            case JSON.stringify([1,1,1]):
                ganador(jugadorUno);
                clearInterval(checkGana);
            break;
            case JSON.stringify([2,2,2]):
                ganador(jugadorDos);
                clearInterval(checkGana);
            break;
            default:

            break; 
        }
    }
    // Diagonales
    // Uno
    let arrayCellDiagUno = [];
    for(let i = 0, j = 2; i<3,j>=0;i++,j--){
        arrayCellDiagUno.push(tableroTateti[i][j]); 
    }
    switch(JSON.stringify(arrayCellDiagUno)){
        case JSON.stringify([1,1,1]):
            ganador(jugadorUno);
            clearInterval(checkGana);
        break;
        case JSON.stringify([2,2,2]):
            ganador(jugadorDos);
            clearInterval(checkGana);
        break;
        default:

        break; 
    }
    // Dos
    let arrayCellDiagDos = [];
    for(let i=0, j=0;i<3,j<3;i++,j++){
        arrayCellDiagDos.push(tableroTateti[i][j]);
    }
    switch(JSON.stringify(arrayCellDiagDos)){
        case JSON.stringify([1,1,1]):
            ganador(jugadorUno);
            clearInterval(checkGana);
        break;
        case JSON.stringify([2,2,2]):
            ganador(jugadorDos);
            clearInterval(checkGana);
        break;
        default:

        break; 
    }
    }, 200);
}
checkdeGanar();
pQuienJuega.innerText = jugadorUno + " x";