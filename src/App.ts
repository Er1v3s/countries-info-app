// Shows that my script file is working all the time.
console.log("Hello world!");

import { renderCountriesList } from "./dom-utils.js";

import { requiredDataType, responseDataType } from "./types.js";

import "./style.css";

const API_URL_ALL: string = "https://restcountries.com/v3.1/all";

let countries: Array<object>;

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
