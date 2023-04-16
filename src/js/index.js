import '../css/styles.css';
import { createMarkup, onShowCountryList } from '../markeup';
import fetchCountries from './fetchCountries'
import { debounce } from 'lodash';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector("#search-box")
const countryList = document.querySelector(".country-list")
const countryInfoEl = document.querySelector(".country-info")

inputEl.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY) ); 

function handleInput(e) {

    const userInput = e.target.value.trim();

    if (userInput === '') {
        countryList.innerHTML = '';
        countryInfoEl.innerHTML = '';
    }
    
    if (userInput) {
        fetchCountries(userInput).then(onSuccess).catch(onError)
    };
    
    function onSuccess(data) {

        if (data.length > 10) {
            Notify.info("Too many Countries")
            countryInfoEl.innerHTML = '';
            countryList.innerHTML = '';
        }
        
        if (data.length >= 2 && data.length <= 10) {
            countryList.innerHTML = data.map
                (country => onShowCountryList(country)).join('');
        }

        if (data.length === 1) {
            countryList.innerHTML = '';
            countryInfoEl.innerHTML = data.map
                (country => createMarkup(country)).join('')
        }
    }
    function onError(error) {
        Notify.info('Oops, there is no country with that name');
        countryInfoEl.innerHTML = '';
        countryList.innerHTML = '';
        throw new Error(error);
    }
}




    
