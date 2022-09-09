let url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/prague?unitGroup=metric&key=5UDTJFRZ2RG5LBM7XSTP7J3MG&contentType=json';

let adress = document.getElementById('resolvedAddress');
let description = document.getElementById('description');
let temperature = document.getElementById('temp-value');
let feelslike = document.getElementById('feelslike-value');
let humidity = document.getElementById('humidity-value');
let pressure = document.getElementById('pressure-value');
let uvindex = document.getElementById('uvindex-value');
let minuteCount = document.getElementById('minute-value');
let minuteWord = document.getElementById('min-mins');

let seconds = 0;


// fce getData() bude dostavat aktualni data
async function getData () {
     await fetch(url)
        .then((response) => response.json())
        .then(function(data){
            adress.innerHTML = data.resolvedAddress;
            description.innerHTML = data.description;
            temperature.innerHTML = data.currentConditions.temp;
            feelslike.innerHTML = data.currentConditions.feelslike;
            humidity.innerHTML = data.currentConditions.humidity;
            pressure.innerHTML = data.currentConditions.pressure;
            uvindex.innerText = data.currentConditions.uvindex;
        })}



// kliknuti na refresh button --> zavola se fce vyse, ktera aktualizuje data
let refreshBtn = document.getElementById('refresh-btn');

refreshBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getData();
    seconds = 0;
    // cas se nastavi na 0 zacne se opet pricitat
    seconds = Date.now() - start;
    minuteCount.innerHTML = '0';
    minuteWord.innerHTML = 'minute';
});

let start = Date.now();

    let updateInfo = function (){
    // seconds = cas ted - cas zacatek
        seconds = Date.now() - start;


    if (seconds < 60000) {
        minuteCount.innerHTML = '0';
        minuteWord.innerHTML = 'minute';
    } else if (seconds >= 60000 && seconds < 120000) {
        minuteCount.innerHTML = '1';
        minuteWord.innerHTML = 'minute';
    } else if (seconds >= 120000 && seconds < 180000) {
        minuteCount.innerHTML = '2';
        minuteWord.innerHTML = 'minutes';
    } else if (seconds >= 180000 && seconds < 240000) {
        minuteCount.innerHTML = '3';
        minuteWord.innerHTML = 'minutes';
    } else if (seconds >= 240000 && seconds < 300000) {
        minuteCount.innerHTML = '4';
        minuteWord.innerHTML = 'minutes';
    } else {
        seconds = 0;
        getData();
        minuteCount.innerHTML = '0';
        minuteWord.innerHTML = 'minute';
}};


setInterval(updateInfo,1000);

