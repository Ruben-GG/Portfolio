function maquina(container, text, interval) {
    longitud = text.length;
    cnt = document.querySelector(container);
    var i = 0;
    timer = setInterval(function () {
        cnt.innerHTML = cnt.innerHTML.substr(0, cnt.innerHTML.length - 1) + text.charAt(i) + "_";
        if (i >= longitud) {
            clearInterval(timer);
            return true;
        } else {
            i++;
        }
    }, interval);
};
var text = 'Software Developer';
maquina(".ocupation", text, 70);