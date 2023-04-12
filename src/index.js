import './css/styles.css';
import API from './js/fetchCountries'
const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector("#search-box")
const countryList = document.querySelector(".country-list")
const countryInfoEl = document.querySelector(".country-info")

function checkApi(e) {
    const userInput = e.target.value.trim();
    if (userInput === '') {
        countryList.innerHTML = '';
}
    API.fetchCountries(userInput).then(data => {
        console.log(data)
        if (data.length > 10) {
            console.log('Too many matches found. Please enter a more specific name.');
        }
        else if (data.length > 1 && data.length <= 10) {
            data.forEach(item => {
                let li = document.createElement('li');
                li.style.listStyleType = "none";
                li.style.display = "flex"; 
                li.style.alignItems = "center";
                let img = document.createElement('img');
                img.style.display = "flex";
                img.style.height = '30px';
                img.style.width = '40px';
                img.style.marginRight = "10px";
                img.src = item.flags.svg
                li.innerHTML =
                    `
                <p> ${item.name.common} </p>

                `; 
                li.prepend(img);
                countryList.append(li);
                
            });
            
        } else if (data.length === 1) {
            //TODO load the countries data
            let li = document.createElement('li');
            let img = document.createElement('img');
                img.style.height = '30px';
                img.style.width = '40px';
                img.src = data.flags.svg
                li.innerHTML =
                    `
                <p> Name : ${data.name.common} </p>
                <p> Capital: ${data.capital} </p>
                <p> Population: ${data.population} </p>
                `; 
            countryInfoEl.append(img);
                countryInfoEl.append(li);
                
        }
        else if
            (data.length === 0) {
            alert("there is no country with that name")
        }
    });
}
//TODO we need to debounce our addEventListener for every 300ms

inputEl.addEventListener('input', checkApi); 


    
