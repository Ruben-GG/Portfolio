/*
https://rickandmortyapi.com/api/character/
https://rickandmortyapi.com/api/character/?page=2 --> páginas
https://rickandmortyapi.com/api/character/?name=rick&status=alive --> Para filtrar por nombre y status por ejemplo.
 */

const list = document.querySelector('.container');
const info = document.querySelector('.RickMorty');
const searchField = document.querySelector('#searchField');
const statusSelect = document.querySelector('#inputStatus');
const genderSelect = document.querySelector('#inputGender');
let url = 'https://rickandmortyapi.com/api/character/?name=';

searchField.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        document.querySelector('button').click();
    }
});

function validate() {
    document.querySelector('button').disabled = !(searchField.value.trim().length || statusSelect.options.selectedIndex !== 0 || genderSelect.options.selectedIndex !== 0);
}

function fetchData(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState === 4)
            callback(xhr.response);
    };
    xhr.send();
}

function showCharacter(response) {

    clearFields()

    for (let i = 0; i < response.results.length; i++) {
        list.innerHTML += `
        <article>
        <div class="data">
            <div class="photo">
                <img src="${response.results[i].image}" alt="">
            </div>
            <div class="name">
                <h2>
                ${response.results[i].name}
                </h2>
                <p>
                
                </p>
            </div>
        </div>
        <div>
            <div class="info">
                <span>
                    STATUS
                </span>
                <p>
                    ${response.results[i].status}
                </p>
            </div>
            <div class="info">
                <span>
                    SPECIES
                </span>
                <p>
                   ${response.results[i].species}
                </p>
            </div>
            <div class="info">
                <span>
                    GENDER
                </span>
                <p>
                    ${response.results[i].gender}
                </p>
            </div>
            <div class="info">
                <span>
                    ORIGIN
                </span>
                <p>
                    ${response.results[i].origin.name}
                </p>
            </div>
            <div class="info">
                <span>
                    LAST LOCATION
                </span>
                <p>
                    ${response.results[i].location.name}
                </p>
            </div>
        </div>
        </article>
        `;
    }
}

function search() {
    let urlN = document.querySelector('#searchField').value;
    let urlS = document.querySelector('#inputStatus');
    let urlG = document.querySelector('#inputGender');
    let gOption = urlG.options[urlG.selectedIndex].text;
    let sOption = urlS.options[urlS.selectedIndex].text;

    if (urlN != null && urlS.selectedIndex !== 0 && urlG.selectedIndex !== 0)
        url = 'https://rickandmortyapi.com/api/character/?name=' + urlN + '&status=' + sOption + '&gender=' + gOption;
    else if (urlN != null && urlS.selectedIndex !== 0)
        url = 'https://rickandmortyapi.com/api/character/?name=' + urlN + '&status=' + sOption;
    else if (urlN != null && urlG.selectedIndex !== 0)
        url = 'https://rickandmortyapi.com/api/character/?name=' + urlN + '&gender=' + gOption;
    else if (urlS.selectedIndex !== 0 && urlG.selectedIndex !== 0)
        url = 'https://rickandmortyapi.com/api/character/?status=' + sOption + '&gender=' + gOption;
    else if (urlS.selectedIndex !== 0)
        url = 'https://rickandmortyapi.com/api/character/?status=' + sOption;
    else if (urlG.selectedIndex !== 0)
        url = 'https://rickandmortyapi.com/api/character/?gender=' + gOption;
    else
        url = 'https://rickandmortyapi.com/api/character/?name=' + urlN;
    fetchData(url, showCharacter);
}


function clearFields() {
    list.innerHTML = '';
    document.querySelector('#searchField').value = '';
    statusSelect.options[0].selected = 'selected';
    genderSelect.options[0].selected = 'selected';
    document.querySelector('button').disabled = true;
}