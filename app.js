

let cronometro;
    
//Para detener el bucle
function detenerse(){
    clearInterval(cronometro);  
 }
 

function carga() {

    let contadorMinutes = 0;
    let contadorSeconds = 0;
    let contadorMiliseconds = 0;

    let m = document.querySelector('.minutes');
    let s = document.querySelector('.seconds');
    let mls = document.querySelector('.miliseconds');

    cronometro = setInterval(
        function () {
            if (contadorMiliseconds == 60) {
                contadorMiliseconds = 0;
                contadorSeconds++
                s.innerHTML = contadorSeconds;

                if (contadorSeconds == 60) {
                    contadorSeconds = 0;
                    contadorMinutes++
                    m.innerHTML = contadorMinutes
                }

            }

            mls.innerHTML = contadorMiliseconds;
            contadorMiliseconds++

        },17);

}














