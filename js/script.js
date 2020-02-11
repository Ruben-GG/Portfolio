function validate() {
    document.querySelector('.btn').disabled = !(document.querySelector('#fname').value.trim().length && document.querySelector('#fsurname').value.trim().length && document.querySelector('#email').value.trim().length && document.querySelector('#message').value.trim().length); // .trim() quita espacios por delante y detras.
}


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