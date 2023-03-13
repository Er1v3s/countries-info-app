// Shows that my script file is working all the time.
console.log("Hello world!");

import { renderCountriesList } from "./dom-utils.js";

import { requiredDataType, responseDataType } from "./types.js";

import "./style.css";

const API_URL_ALL: string = "https://restcountries.com/v3.1/all";

let countries: Array<object>;
let query_country: string = "";
let query_region: string = "";
let search_result_country: object[] = [];
let search_result_region: object[] = [];

const getAllCountries = (API_URL: string) => {
  try {
    fetch(API_URL)
      .then((response: Response) => response.json())
      .then((data: Array<object>) => {
        countries = data.map((country: responseDataType): requiredDataType => {
          return {
            capital: country.capital && country.capital[0],
            population: country.population,
            name: country.name.common,
            region: country.region,
            flagUrl: country.flags.png,
          };
        });
        renderCountriesList(countries);
      });
  } catch (error) {
    console.log(error);
  }
};

getAllCountries(API_URL_ALL);

document.querySelector("#query").addEventListener("input", (e) => {
  query_country = (e.target as HTMLInputElement).value.toLowerCase().trim();

  if (query_region != "") {
    search_result_country = countries.filter(
      (country: requiredDataType) =>
        country.name.toLowerCase().includes(query_country) &&
        country.region === query_region
    );
  } else {
    search_result_country = countries.filter((country: requiredDataType) =>
      country.name.toLowerCase().includes(query_country)
    );
  }

  renderCountriesList(search_result_country);
});

document.querySelector("#region").addEventListener("change", (e) => {
  query_region = (e.target as HTMLSelectElement).value;

  if (query_country != "") {
    search_result_region = countries.filter(
      (country: requiredDataType) =>
        country.region === query_region &&
        country.name.toLowerCase().includes(query_country)
    );
  } else {
    search_result_region = countries.filter(
      (country: requiredDataType) => country.region === query_region
    );
  }

  document.querySelector("#select_option").setAttribute("disabled", "true");
  renderCountriesList(search_result_region);
});
