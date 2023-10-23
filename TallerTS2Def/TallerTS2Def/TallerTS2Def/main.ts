// Imports
import { Serie } from './Serie.js';
import { series } from './data.js';

// Variable Declarations
const component = document.getElementById('series')!;
const componentAvg = document.getElementById('avg')!;
const image = document.getElementById('image')!;
const title = document.getElementById('title')!;
const description = document.getElementById('desc')!;
const webPage = document.getElementById('webPage')!;

// Initialize UI
populateTable();
updateAverage();
btns();

// Functions
function populateTable(): void {
    series.forEach(serie => createRow(serie));
}

function createRow(serie: Serie): void {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td style="font-weight: bold;">${serie.id}</td>
        <td style="color:#547dde;"><a id="${serie.id}">${serie.name}</a></td>
        <td>${serie.station}</td>
        <td>${serie.seasons}</td>
    `;
    component.appendChild(row);
}

function updateAverage(): void {
    componentAvg.innerHTML = `Seasons average: ${avgCalc()}`;
}

function avgCalc(): string {
    let totalSeasons = 0;
    series.forEach(serie => totalSeasons += serie.seasons);
    const average = totalSeasons / series.length;
    return Math.round(average).toString();
}

function btns(): void {
    series.forEach(serie => {
        const btn = document.getElementById(`${serie.id}`)!;
        btn.onclick = () => updateCard(btn.id);
    });
}

function updateCard(id: string): void {
    const serieIndex = parseInt(id) - 1;
    const selectedSerie = series[serieIndex];
    image.setAttribute('src', selectedSerie.image);
    title.innerHTML = selectedSerie.name;
    description.innerHTML = selectedSerie.description;
    webPage.setAttribute('href', selectedSerie.webPage);
    webPage.innerHTML = 'Go watch';
    
    const card = document.querySelector('.card');
    if (card && card.classList.contains('card')) {
        (card as HTMLElement).style.display = 'block';
    }
}
