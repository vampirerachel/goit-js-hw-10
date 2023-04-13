import './css/styles.css';
import API from './js/fetchCountries'
const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector("#search-box")
const countryList = document.querySelector(".country-list")
const countryInfoEl = document.querySelector(".country-info")



function checkApi(e) {

    const userInput = e.target.value.trim();
    
    if (userInput === '') { countryList.innerHTML = ''; }
    
    if(userInput) {
    API.fetchCountries(userInput).then(data => {

        if (data.length > 10) {
            console.log('Too many matches found. Please enter a more specific name.');
        }


        else if
            (data.value === userInput){
        createMarkup()
            }
        


        else if (data.length > 1 && data.length <= 10) {
            data.forEach(item => {
            createMarkup()
            });


            
        } else if (data.length === 1) {
            onShowCountryList()
        }
            
            
        else if
            (data.length === 0) {
            alert("there is no country with that name")
        }


    function onShowCountryList({ flags, name }) {return `
    <li style="display:flex;">
    <img style="margin-right: 15px;" src="${flags.svg}" alt="${name.official}" width=50/>
    <h2>${name.official}</h2>
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

inputEl.addEventListener('input', checkApi); 


    
