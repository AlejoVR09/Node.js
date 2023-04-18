var num=0;

function numerosAleatorios(cantidad){
    var contador=0;
    var numeros= [];
    var bandera;
    while (contador<cantidad) {
        num=Math.round(Math.random()*10)
        if(num!==0){
            bandera=false;
            for (let i = 0; i < numeros.length; i++) {
                if (numeros[i]==num) {
                    bandera=true;
                    break;
                }
            }
            if (bandera==false) {
                numeros.push(num)
                contador++;
            }
        }
    }
    console.log(numeros)
}

numerosAleatorios(4)