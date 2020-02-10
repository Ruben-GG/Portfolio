function maquina(contenedor,texto,intervalo){
    // Calculamos la longitud del texto
    longitud = texto.length;
    // Obtenemos referencia del div donde se va a alojar el texto.
    cnt = document.querySelector(contenedor);
    var i=0;
    // Creamos el timer
    timer = setInterval(function(){
        // Vamos añadiendo letra por letra y la _ al final.
        cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "_";
        // Si hemos llegado al final del texto..
        if(i >= longitud){
            // Salimos del Timer y quitamos la barra baja (_)
            clearInterval(timer);
            cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
            return true;
        } else {
            // En caso contrario.. seguimos
            i++;
        }},intervalo);
};

var texto = "Hola mundo.. esto es un texto de prueba para mostrar el funcionamiento de este javascript tan simple. Un dia sere un mono super poderoso y dominare el mundo en base a mostrar alert's en el Internet Explorer xD";
// 100 es el intervalo de minisegundos en el que se escribirá cada letra.
maquina("maquinas",texto,100);