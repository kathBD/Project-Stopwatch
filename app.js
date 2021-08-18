
//Variable cronometro
let cronometro;

//llamo a mis clases que estan en el html
let s = document.querySelector('.seconds');
let m = document.querySelector('.minutes');
let mls = document.querySelector('.miliseconds');


//Me vuelva a cargar mi cronometro y me inicialize todo en cero
function carga() {
    let contadorMinutes = 0;
    let contadorSeconds = 0;
    let contadorMiliseconds = 0;

    //setInterval ejecuta una función o un fragmento de código de forma repetitiva 
    //cada vez que termina el periodo de tiempo determinado
    cronometro = setInterval(
        function () {
            if (contadorMiliseconds == 60) {
                contadorMiliseconds = 0;
                contadorSeconds++
                s.innerHTML = contadorSeconds; //Nos asigna este valor en el html 

                if (contadorSeconds == 60) {
                    contadorSeconds = 0;
                    contadorMinutes++
                    m.innerHTML = contadorMinutes //Nos asigna este valor en el html 
                }
            }
            mls.innerHTML = contadorMiliseconds;
            contadorMiliseconds++

        }, 17); //Me actualiza cada 17 milisegundos,  //1 segundo es igual a 1000 mls, 1000 mls se divive entre 60segundos
}

//Esta funcion es para detener el bucle ¨clearInterval¨
function detenerse() {
    clearInterval(cronometro);
}












