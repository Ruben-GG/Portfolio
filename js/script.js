function ocupation(container, text, interval) {
    lgth = text.length;
    cnt = document.querySelector(container);
    let i = 0;
    timer = setInterval(function () {
        cnt.innerHTML = cnt.innerHTML.substr(0, cnt.innerHTML.length - 1) + text.charAt(i) + ".";
        if (i >= lgth) {
            clearInterval(timer);
            return true;
        } else {
            i++;
        }
    }, interval);
};
const text = 'Software Developer';
ocupation(".ocupation", text, 100);