!function(){function t(t){return fetch("".concat("https://restcountries.com/v3.1/name/").concat(t).concat("?fields=name,capital,population,flags,languages")).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))}var n=document.querySelector("#search-box"),e=document.querySelector(".country-list");document.querySelector(".country-info");n.addEventListener("input",(function(n){var o=n.target.value.trim(),r=t(o);""===o&&(e.innerHTML=""),""!==o&&r.then((function(n){t(value)}))}))}();
//# sourceMappingURL=index.1317a1c6.js.map