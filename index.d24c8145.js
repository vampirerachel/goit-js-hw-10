!function(){var e={fetchCountries:function(e){return fetch("https://restcountries.com/v3.1/name/".concat(e,"?fields=name,capital,population,flags,languages")).then((function(e){return e.json()}))}},n=document.querySelector("#search-box"),t=document.querySelector(".country-list"),o=document.querySelector(".country-info");n.addEventListener("input",(function(n){var a=n.target.value.trim();""===a&&(t.innerHTML=""),e.fetchCountries(a).then((function(e){if(console.log(e),e.length>10)console.log("Too many matches found. Please enter a more specific name.");else if(e.length>1&&e.length<=10)e.forEach((function(e){var n=document.createElement("li");n.style.listStyleType="none",n.style.display="flex",n.style.alignItems="center";var o=document.createElement("img");o.style.display="flex",o.style.height="30px",o.style.width="40px",o.style.marginRight="10px",o.src=e.flags.svg,n.innerHTML="\n                <p> ".concat(e.name.common," </p>\n\n                "),n.prepend(o),t.append(n)}));else if(1===e.length){var n=document.createElement("li"),a=document.createElement("img");a.style.height="30px",a.style.width="40px",a.src=e.flags.svg,n.innerHTML="\n                <p> Name : ".concat(e.name.common," </p>\n                <p> Capital: ").concat(e.capital," </p>\n                <p> Population: ").concat(e.population," </p>\n                "),o.append(a),o.append(n)}else 0===e.length&&alert("there is no country with that name")}))}))}();
//# sourceMappingURL=index.d24c8145.js.map
