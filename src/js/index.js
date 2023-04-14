import '../css/styles.css';
import fetchCountries from './fetchCountries'
const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector("#search-box")
const countryList = document.querySelector(".country-list")
const countryInfoEl = document.querySelector(".country-info")


const handleInput = function checkApi(e) {

    const userInput = e.target.value.trim();
        let data = fetchCountries(userInput)

    if (userInput === '') { countryList.innerHTML = ''; }
    
        if(userInput !== '') {
        
            data.then(res => {
        
        fetchCountries(value)

        function onShowCountryList({ flags, name }) {return `
        <li style="display:flex;">
        <img style="margin-right: 15px;" src="${res[0].flags.svg}" alt="${res[0].name.official}" width=50/>
        <h2>${res[0].name.official}</h2>
        </li>
        `;}



        function createMarkup ({ flags, name, capital, population, languages}){return `
        <div style='display: flex; align-items: center;'>
            <img style="margin-right: 15px;" src='${flags.svg}' alt='${name.official}' width=100 />
            <h2 style="font-size: 36px; font-weight: 700;">${name.official}</h2>
        </div>
        <div style='display: flex; align-items: center;'>
            <p style="margin-right: 15px; font-size: 28px; font-weight: 500; color: darkgreen; ">Capital:</p>
            <span style="font-size: 30px; font-weight: 700; color: darkblue; ">${capital}</span>
        </div>
        <div style='display: flex; align-items: center;'>
            <p style="margin-right: 15px; font-size: 28px; font-weight: 500; color: darkgreen; ">Population:</p>
            <span style="font-size: 30px; font-weight: 700; color: darkblue; ">${population}</span>
        </div>
        <div style='display: flex; align-items: center;'>
            <p style="margin-right: 15px; font-size: 28px; font-weight: 500; color: darkgreen; ">Languages:</p>
            <span style="font-size: 30px; font-weight: 700; color: darkblue; ">${Object.values(languages)}</span>
        </div>
        `};


        })};
    }
//TODO we need to debounce our addEventListener for every 300ms

inputEl.addEventListener('input', handleInput); 


    
