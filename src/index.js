import './css/styles.css';
import API from './js/fetchCountries'
const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector("#search-box")
const countryList = document.querySelector(".countryList")



function checkApi(e) {
    const userInput = e.target.value.trim();
    if (userInput === '') {
        countryList.innerHTML = '';
}


    API.fetchCountries(userInput).then(data => {
        if (data.length > 10) {
            console.log('Too many matches found. Please enter a more specific name.');
        } else if (data.length > 1 && data.length <= 10) {
            console.log(data);
            data.forEach(item => {
                let li = document.createElement('li');
                let img = document.createElement('img');
                li.innerHTML =
                "<p> ${item} </> ";
                img.innerHTML = 
                "< img.src = ${item.flags.svg } />"
                countryList.append(li);
                countryList.append(img);
            });
        } else if (data.length === 1) {
            //TODO load the countries data
            console.log(data.value)
        }
        else if
            (data.length === 0) {
            alert("there is no country with that name")
        }
    });
}
//TODO we need to debounce our addEventListener for every 300ms

inputEl.addEventListener('input', checkApi); 


    
