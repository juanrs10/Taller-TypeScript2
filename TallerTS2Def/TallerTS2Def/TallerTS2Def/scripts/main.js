// 1. Imports
import { series } from './data.js';

// 2. Variables
var componente = document.getElementById('series');
var componentePromedio = document.getElementById('avg');
var foto = document.getElementById('image');
var titulo = document.getElementById('title');
var descripcion = document.getElementById('desc');
var paginaWeb = document.getElementById('webPage');

// 3. Functions
function rowLoad() {
    series.forEach(serie => rowCreate(serie));
}

function rowCreate(serie) {
    var fila = document.createElement('tr');
    fila.innerHTML = `
        <td style="font-weight: bold;">${serie.id}</td>
        <td style="color:#547dde;">
            <a id="${serie.id}">${serie.name}</a>
        </td>
        <td>${serie.station}</td>
        <td>${serie.seasons}</td>`;
    componente.appendChild(fila);
}

function alterCard(id) {
    var rowId = parseInt(id);
    var serie = series[rowId - 1];
    foto.setAttribute('src', serie.image);
    titulo.innerHTML = serie.name;
    descripcion.innerHTML = serie.description;
    paginaWeb.setAttribute('href', serie.webPage);
    paginaWeb.innerHTML = 'Go watch';

    var card = document.querySelector('.card');
    if (card && card.classList.contains('card')) {
        card.style.display = 'block';
    }
}

function btns() {
    series.forEach(c => {
        var boton = document.getElementById(`${c.id}`);
        boton.onclick = () => alterCard(boton.id);
    });
}

function avcCalc() {
    var promedio = 0;
    series.forEach(s => promedio += s.seasons);
    promedio /= series.length;
    return Math.round(promedio).toString();
}

// 4. Initial Code Execution
rowLoad();
componentePromedio.innerHTML = "Seasons average: " + avcCalc();
btns();
