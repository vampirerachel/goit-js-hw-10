var e={};console.log(fetch(`https://restcountries.com/v3.1/name/${"Sweden"}?fields=name,capital,population,flags,languages`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})));const n=document.querySelector("#search-box"),t=document.querySelector(".country-list");document.querySelector(".country-info");n.addEventListener("input",(function(n){const i=n.target.value.trim();""===i&&(t.innerHTML=""),i&&e.API.fetchCountries(i).then((e=>{function n({flags:e,name:n,capital:t,population:i,languages:o}){return`\n    <div style='display: flex; align-items: center;'>\n        <img style="margin-right: 15px;" src='${e.svg}' alt='${n.official}' width=100 />\n        <h2 style="font-size: 36px; font-weight: 700;">${n.official}</h2>\n    </div>\n    <div style='display: flex; align-items: center;'>\n        <p style="margin-right: 15px; font-size: 28px; font-weight: 500; color: darkgreen; ">Capital:</p>\n        <span style="font-size: 30px; font-weight: 700; color: darkblue; ">${t}</span>\n    </div>\n    <div style='display: flex; align-items: center;'>\n        <p style="margin-right: 15px; font-size: 28px; font-weight: 500; color: darkgreen; ">Population:</p>\n        <span style="font-size: 30px; font-weight: 700; color: darkblue; ">${i}</span>\n    </div>\n    <div style='display: flex; align-items: center;'>\n        <p style="margin-right: 15px; font-size: 28px; font-weight: 500; color: darkgreen; ">Languages:</p>\n        <span style="font-size: 30px; font-weight: 700; color: darkblue; ">${Object.values(o)}</span>\n    </div>\n    `}e.length>10?console.log("Too many matches found. Please enter a more specific name."):e.value===i?n():e.length>1&&e.length<=10?e.forEach((e=>{n()})):1===e.length?function({flags:e,name:n}){e.svg,n.official,n.official}():0===e.length&&alert("there is no country with that name")}))}));
//# sourceMappingURL=index.a9e8302d.js.map