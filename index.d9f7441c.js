!function(){var n,t={};console.log((n="Sweden",fetch("".concat("https://restcountries.com/v3.1/name/").concat(n).concat("?fields=name,capital,population,flags,languages")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))));var e=document.querySelector("#search-box"),a=document.querySelector(".country-list");document.querySelector(".country-info");e.addEventListener("input",(function(n){var e=n.target.value.trim();""===e&&(a.innerHTML=""),e&&t.API.fetchCountries(e).then((function(n){function t(n){var t=n.flags,e=n.name,a=n.capital,i=n.population,o=n.languages;return"\n    <div style='display: flex; align-items: center;'>\n        <img style=\"margin-right: 15px;\" src='".concat(t.svg,"' alt='").concat(e.official,'\' width=100 />\n        <h2 style="font-size: 36px; font-weight: 700;">').concat(e.official,'</h2>\n    </div>\n    <div style=\'display: flex; align-items: center;\'>\n        <p style="margin-right: 15px; font-size: 28px; font-weight: 500; color: darkgreen; ">Capital:</p>\n        <span style="font-size: 30px; font-weight: 700; color: darkblue; ">').concat(a,'</span>\n    </div>\n    <div style=\'display: flex; align-items: center;\'>\n        <p style="margin-right: 15px; font-size: 28px; font-weight: 500; color: darkgreen; ">Population:</p>\n        <span style="font-size: 30px; font-weight: 700; color: darkblue; ">').concat(i,'</span>\n    </div>\n    <div style=\'display: flex; align-items: center;\'>\n        <p style="margin-right: 15px; font-size: 28px; font-weight: 500; color: darkgreen; ">Languages:</p>\n        <span style="font-size: 30px; font-weight: 700; color: darkblue; ">').concat(Object.values(o),"</span>\n    </div>\n    ")}n.length>10?console.log("Too many matches found. Please enter a more specific name."):n.value===e?t():n.length>1&&n.length<=10?n.forEach((function(n){t()})):1===n.length?function(n){var t=n.flags,e=n.name;'\n    <li style="display:flex;">\n    <img style="margin-right: 15px;" src="'.concat(t.svg,'" alt="').concat(e.official,'" width=50/>\n    <h2>').concat(e.official,"</h2>\n    </li>\n    ")}():0===n.length&&alert("there is no country with that name")}))}))}();
//# sourceMappingURL=index.d9f7441c.js.map
