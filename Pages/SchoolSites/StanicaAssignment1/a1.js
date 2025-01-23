// This constant is defined outside of any function.
// It is therefore global - i.e., accessible by all of the functions.
const PLACES = [
  "Madrid,Spain,3255944",
  "Santiago,Chile,4837295",
  "Lima,Peru,7737002",
  "Bogota,Colombia,7674366",
  "Caracas,Venezuela,3000000",
  "Buenos Aires,Argentina,13076300",
  "Reykjavik,Iceland,118918",
  "Prague,Czechia,1165581",
  "Rome,Italy,2318895",
  "Beirut,Lebanon,1916100",
  "Amman,Jordan,1275857",
  "Ankara,Turkey,3517182",
  "Nairobi,Kenya,2750547",
  "Damascus,Syria,1569394",
  "Riyadh,Saudi Arabia,4205961",
  "Tehran,Iran,7153309",
  "Baghdad,Iraq,7216000",
  "Mogadishu,Somalia,2587183",
  "Dakar,Senegal,2476400",
  "Ouagadougou,Burkina Faso,1086505",
  "Kinshasa,Democratic Republic of the Congo,7785965",
  "Luanda,Angola,2776168",
  "Accra,Ghana,1963264",
  "Antananarivo,Madagascar,1391433",
  "Lusaka,Zambia,1267440",
  "Saint-Denis,Reunion,137195",
  "Maputo,Mozambique,1191613",
  "Kampala,Uganda,1353189",
  "Dhaka,Bangladesh,10356500",
  "Kathmandu,Nepal,1442271",
  "Algiers,Algeria,1977663",
  "Amsterdam,Netherlands,741636",
  "Brussels,Belgium,1019022",
  "London,United Kingdom,7556900",
  "Copenhagen,Denmark,1153615",
  "Paris,France,2138551",
  "Berlin,Germany,3426354",
  "Dublin,Ireland,1024027",
  "Luxembourg,Luxembourg,76684",
  "Bern,Switzerland,121631",
  "Manila,Philippines,1600000",
  "Taipei,Taiwan,7871900",
  "Bangkok,Thailand,5104476",
  "Jakarta,Indonesia,8540121",
  "Hong Kong,Hong Kong,7012738",
  "Phnom Penh,Cambodia,1573544",
  "Beijing,China,11716620",
  "Pyongyang,North Korea,3222000",
  "Seoul,South Korea,10349312",
  "Tokyo,Japan,8336599",
  "Tashkent,Uzbekistan,1978028",
  "Kabul,Afghanistan,3043532",
  "Addis Ababa,Ethiopia,2757729",
  "Cairo,Egypt,7734614",
  "Bucharest,Romania,1877155",
  "Warsaw,Poland,1702139",
  "Moscow,Russia,10381222",
  "Tbilisi,Georgia,1049498",
  "Baku,Azerbaijan,1116513",
  "Kiev,Ukraine,2797553",
  "Yerevan,Armenia,1093485",
  "Sofia,Bulgaria,1152556",
  "Hanoi,Vietnam,1431270",
  "Stockholm,Sweden,1515017",
  "Budapest,Hungary,1741041",
  "Havana,Cuba,2163824",
  "Mexico City,Mexico,12294193",
  "Sucre,Bolivia,224838",
  "Washington,United States,601723",
  "Panama City,Panama,408168",
  "Port-au-Prince,Haiti,1234742",
  "Tegucigalpa,Honduras,850848",
  "Managua,Nicaragua,973087",
  "Quito,Ecuador,1399814",
  "San Jose,Costa Rica,335007",
  "Fort-de-France,Martinique,89995",
  "Nassau,Bahamas,227940",
  "Montevideo,Uruguay,1270737",
  "Windhoek,Namibia,268132",
  "Brasilia,Brazil,2207718",
  "Asuncion,Paraguay,1482200",
  "Paramaribo,Suriname,223757",
  "Kingston,Jamaica,937700",
  "Santo Domingo,Dominican Republic,2201941",
  "Willemstad,Curacao,125000",
  "Bratislava,Slovakia,423737",
  "Ljubljana,Slovenia,272220",
  "Zagreb,Croatia,698966",
  "Sarajevo,Bosnia and Herzegovina,696731",
  "Podgorica,Montenegro,136473",
  "Oslo,Norway,580000",
  "Tirana,Albania,374801",
  "Bujumbura,Burundi,331700",
  "Muscat,Oman,797000",
  "Doha,Qatar,344939",
  "Manama,Bahrain,147074",
  "Athens,Greece,664046",
  "Riga,Latvia,742572",
  "Abu Dhabi,United Arab Emirates,603492",
  "Ashgabat,Turkmenistan,727700",
  "Nicosia,Cyprus,200452",
  "Sanaa,Yemen,1937451",
  "Noumea,New Caledonia,93060",
  "Canberra,Australia,367752",
  "Suva,Fiji,77366",
  "Lome,Togo,749700",
  "Sao Tome,Sao Tome and Principe,53300",
  "Conakry,Guinea,1767200",
  "Bangui,Central African Republic,542393",
  "Libreville,Gabon,578156",
  "Freetown,Sierra Leone,802639",
  "N'Djamena,Chad,721081",
  "Bissau,Guinea-Bissau,388028",
  "Nouakchott,Mauritania,661400",
  "Porto-Novo,Benin,234168",
  "Port Moresby,Papua New Guinea,283733",
  "Lisbon,Portugal,517802",
  "Malabo,Equatorial Guinea,155963",
  "Monrovia,Liberia,939524",
  "Yamoussoukro,Ivory Coast,194530",
  "Vientiane,Laos,196731",
  "Tunis,Tunisia,693210",
  "Bamako,Mali,1297281",
  "Niamey,Niger,774235",
  "Brazzaville,Republic of the Congo,1284609",
  "Yaounde,Cameroon,1299369",
  "Tripoli,Libya,1150989",
  "Honiara,Solomon Islands,56298",
  "Ulan Bator,Mongolia,844818",
  "Lilongwe,Malawi,646750",
  "Maseru,Lesotho,118355",
  "Gaborone,Botswana,208411",
  "Port Louis,Mauritius,155226",
  "Mbabane,Swaziland,76218",
  "Moroni,Comoros,42872",
  "Mamoudzou,Mayotte,54831",
  "Pretoria,South Africa,1619438",
  "Colombo,Sri Lanka,648034",
  "Thimphu,Bhutan,98676",
  "Dushanbe,Tajikistan,679400",
  "Kigali,Rwanda,745261",
  "Djibouti,Djibouti,623891",
  "Male,Maldives,103693",
  "Rabat,Morocco,1655753",
  "Vienna,Austria,1691468",
  "Dili,East Timor,150000",
  "Bandar Seri Begawan,Brunei,64409",
  "Macao,Macao,520400",
  "Singapore,Singapore,3547809",
  "Astana,Kazakhstan,345604",
  "Bishkek,Kyrgyzstan,900000",
  "Asmara,Eritrea,563930",
  "Khartoum,Sudan,1974647",
  "Juba,South Sudan,450000",
  "Helsinki,Finland,558457",
  "Harare,Zimbabwe,1542813",
  "Minsk,Belarus,1742124",
  "Tallinn,Estonia,394024",
  "Belgrade,Serbia,1273651",
  "Skopje,Macedonia,474889",
  "Pristina,Kosovo,550000",
  "Chisinau,Moldova,635994",
  "Vilnius,Lithuania,542366",
  "Kuala Lumpur,Malaysia,1453975",
  "Bridgetown,Barbados,98511",
  "Praia,Cape Verde,113364",
  "Georgetown,Guyana,235017",
  "Cayenne,French Guiana,61550",
  "San Juan,Puerto Rico,418140",
  "Ottawa,Canada,812129",
  "Nay Pyi Taw,Myanmar [Burma],925000",
  "Guatemala City,Guatemala,994938",
  "Wellington,New Zealand,381900",
  "San Salvador,El Salvador,525990",
  "Nuku'alofa,Tonga,22400",
  "Papeete,French Polynesia,26357",
  "Apia,Samoa,40407",
  "Avarua,Cook Islands,13373",
  "Port of Spain,Trinidad and Tobago,49031",
  "Stanley,Falkland Islands,2213",
  "Nuuk,Greenland,14798",
  "Andorra la Vella,Andorra,20430",
  "Mariehamn,aland,10682",
  "Vaduz,Liechtenstein,5197",
  "Douglas,Isle of Man,26218",
  "St Peter Port,Guernsey,16488",
  "Dodoma,Tanzania,180541",
  "Port Vila,Vanuatu,35901",
  "Gibraltar,Gibraltar,26544",
  "Banjul,Gambia,34589",
  "Tarawa,Kiribati,40311",
  "Victoria,Seychelles,22881",
  "Torshavn,Faroe Islands,13200",
  "Monaco,Monaco,32965",
  "Charlotte Amalie,U.S. Virgin Islands,20000",
  "Pago Pago,American Samoa,11500",
  "Basseterre,Saint Kitts and Nevis,12920",
  "Roseau,Dominica,16571",
  "Castries,Saint Lucia,20000",
  "Oranjestad,Aruba,29998",
  "Kingstown,Saint Vincent and the Grenadines,24518",
  "George Town,Cayman Islands,29370",
  "Adamstown,Pitcairn Islands,46",
  "Mata-Utu,Wallis and Futuna,1200",
  "Alofi,Niue,624",
  "Hamilton,Bermuda,902",
  "The Valley,Anguilla,2035",
  "Grytviken,South Georgia and the South Sandwich Islands,2",
  "Kralendijk,Bonaire,3081",
  "Saint-Pierre,Saint Pierre and Miquelon,6200",
  "Saint Helier,Jersey,28000",
  "San Marino,San Marino,4500",
  "Kuwait City,Kuwait,60064",
  "Kingston,Norfolk Island,880",
  "Abuja,Nigeria,590400",
  "Funafuti,Tuvalu,4492",
  "Majuro,Marshall Islands,25400",
  "Flying Fish Cove,Christmas Island,500",
  "Islamabad,Pakistan,601600",
  "New Delhi,India,317797",
  "Longyearbyen,Svalbard and Jan Mayen,2060",
  "Port-aux-Francais,French Southern Territories,45",
  "Jamestown,Saint Helena,637",
  "West Island,Cocos [Keeling] Islands,120",
  "Vatican City,Vatican City,829",
  "Yaren District,Nauru,1100",
  "Belmopan,Belize,13381",
  "St John's,Antigua and Barbuda,24226",
  "Cockburn Town,Turks and Caicos Islands,3720",
  "Road Town,British Virgin Islands,8449",
  "Marigot,Saint Martin,5700",
  "Gustavia,Saint Barthelemy,5988",
  "St. George's,Grenada,7500",
  "Saipan,Northern Mariana Islands,48220",
  "Philipsburg,Sint Maarten,1400",
  "Basse-Terre,Guadeloupe,11472",
  "Hagatna,Guam,1051",
  "Valletta,Malta,6794",
  "Palikir,Micronesia,0",
  "Melekeok,Palau,0",
  "Plymouth,Montserrat,0",
];

// ALBERT STANICA
// 18/01/2025
window.onload = function () {
  // your code
  buildTable();
  // initialize buttons
  let btnSearchByCity = document.querySelector("#btnSearchByCity");
  btnSearchByCity.addEventListener("click", searchByCity);

  let btnSearchByCountry = document.querySelector("#btnSearchByCountry");
  btnSearchByCountry.addEventListener("click", searchByCountry);

  let btnSearchByPopulation = document.querySelector("#btnSearchByPopulation");
  btnSearchByPopulation.addEventListener("click", searchByPopulation);
};

// buildTable() builds the html of the table
// Then inserts it into index.html
function buildTable() {
  let htmlString = "<table>\n";
  htmlString += "<tr>\n";
  htmlString += "<th>City</th>\n";
  htmlString += "<th>Country</th>\n";
  htmlString += "<th>Population</th>\n";
  htmlString += "</tr>\n";
  htmlString += populateTable();
  htmlString += "</table>";
  document.querySelector("#table").innerHTML = htmlString;
}

// populateTable() populates the table with the array given
function populateTable() {
  let returnVar = "";
  for (let z = 0; z < PLACES.length; z++) {
    let placesValues = PLACES[z].split(",");
    returnVar += "<tr>\n";
    for (let i = 0; i < 3; i++) {
      let item = placesValues[i];
      returnVar += "<td>" + item + "</td>\n";
    }
    returnVar += "</tr>";
  }
  return returnVar;
}

// resetHighlight() takes away all css class selectors for the highlight
// from each element td
function resetHighlight() {
  resetResults();
  let allData = document.querySelectorAll("tr td");
  for (let z = 0; z < allData.length; z++) {
    let list = allData[z].classList;
    if (list.contains("highlight")) {
      list.remove("highlight");
    }
  }
}

// resetResults() resets the contents of the result window
function resetResults() {
  let resultWindow = document.querySelector("#resultsContent");
  resultWindow.innerHTML = "";
}

// printToResults(inString) prints the inString into the innerHtml of the results
// window
function printToResults(inString) {
  let resultWindow = document.querySelector("#resultsContent");
  resultWindow.innerHTML += "<ul>";
  resultWindow.innerHTML += "<li>" + inString + "</li>" + "\n";
  resultWindow.innerHTML += "</ul>";
}

//highlight(city, country, population)
//highlights the elements given
function highlight(city, country, population) {
  cityList = city.classList;
  countryList = country.classList;
  populationList = population.classList;
  let agents = [cityList, countryList, populationList];
  for (let z = 0; z < agents.length; z++) {
    agents[z].add("highlight");
  }
}

// searchByCity()
// is linked to button
function searchByCity() {
  resetHighlight();
  // Creating a lower case seeker
  let searchSeeker = document.querySelector("#city");
  let seekerString = String(searchSeeker.value);
  seekerString = seekerString.toLowerCase();

  // Looping through all datapoints if search query not empty
  if (seekerString !== "") {
    let searchSource = document.querySelectorAll("tr td:nth-child(1)");
    for (let z = 0; z < searchSource.length; z++) {
      let search = searchSource[z].innerHTML.toLowerCase();
      if (search.includes(seekerString)) {
        let allRows = document.querySelectorAll("td");
        for (let x = 0; x < allRows.length; x++) {
          let row = allRows[x];
          let rowString = row.innerHTML.toLowerCase();
          if (rowString === search) {
            let city = allRows[x];
            let country = allRows[x + 1];
            let population = allRows[x + 2];
            highlight(city, country, population);
            let outResult =
              "City: " +
              city.innerHTML +
              ", Country: " +
              country.innerHTML +
              ", Population: " +
              population.innerHTML;
            printToResults(outResult);
          }
        }
      }
    }
  }
  matchCheck();
}

// searchByCountry()
// is linked to button
function searchByCountry() {
  resetHighlight();
  // lower case seeker
  let searchSeeker = document.querySelector("#country");
  let seekerString = String(searchSeeker.value);
  seekerString = seekerString.toLowerCase();
  // Looping if search is not empty
  if (seekerString !== "") {
    // Create an array of all <td> elements that are secondary child
    // of the row ie the Countries
    let countries = document.querySelectorAll("tr td:nth-child(2)");
    // Loop through all countries and find a match for the country name
    for (let z = 0; z < countries.length; z++) {
      let country = countries[z];
      let countryString = country.innerHTML.toLowerCase();
      if (countryString.includes(seekerString)) {
        // We need to highlight the other columns in the row as well so
        // we need to identify them
        // for that I will be looping through each instance
        // of a td element and checking if it equals to the seeker
        tdSearchArea = document.querySelectorAll("td");
        for (let x = 0; x < tdSearchArea.length; x++) {
          let td = tdSearchArea[x];
          let tdContent = td.innerHTML.toLowerCase();
          if (countryString === tdContent) {
            let city = tdSearchArea[x - 1];
            let country = tdSearchArea[x];
            let population = tdSearchArea[x + 1];
            highlight(city, country, population);
            let outResult =
              "City: " +
              city.innerHTML +
              ", Country: " +
              country.innerHTML +
              ", Population: " +
              population.innerHTML;
            printToResults(outResult);
          }
        }
      }
    }
  }
  matchCheck();
}

function matchCheck() {
  if (document.querySelector("#resultsContent").innerHTML === "") {
    document.querySelector("#resultsContent").innerHTML = "no matches";
  }
}

// searchByPopulation()
// is linked to button
function searchByPopulation() {
  resetHighlight();
  let min = Number(document.querySelector("#min").value);
  let max = Number(document.querySelector("#max").value);
  if (min > max || min < 0) {
    printToResults("User Error");
  } else {
    let populations = document.querySelectorAll("tr td:nth-child(3)");
    for (let z = 0; z < populations.length; z++) {
      let pop = populations[z];
      let popValue = Number(pop.innerHTML);
      if (popValue >= min && popValue <= max) {
        let searchArea = document.querySelectorAll("td");
        for (let x = 0; x < searchArea.length; x++) {
          let cell = searchArea[x];
          let cellValue = Number(cell.innerHTML);
          if (cellValue === popValue) {
            let population = searchArea[x];
            let country = searchArea[x - 1];
            let city = searchArea[x - 2];
            highlight(city, country, population);
            let outResult =
              "City: " +
              city.innerHTML +
              ", Country: " +
              country.innerHTML +
              ", Population: " +
              Number(population.innerHTML);
            printToResults(outResult);
          }
        }
      }
    }
  }
  matchCheck();
}
