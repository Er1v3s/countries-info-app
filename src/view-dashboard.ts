import { renderCountriesList } from "./dom-utils.js";
import { requiredDataType } from "./types.js";
import { getAllCountries } from "./API-request.js";
import { searchByName } from "./dashboard/searchByname.js";
import { searchByRegion } from "./dashboard/searchByRegion.js";

const API_URL_ALL: string = "https://restcountries.com/v3.1/all";

export const renderDashboard = async () => {
  let countries: requiredDataType[];
  let countryName: string;
  let countryRegion: string;
  let countriesSearchResult: requiredDataType[];
  let regionSearchResult: requiredDataType[];

  const APIreponse: requiredDataType[] = await getAllCountries(
    API_URL_ALL,
    countries
  );

  renderCountriesList(APIreponse);

  document
    .querySelector("#countryNameInput")
    .addEventListener("input", (event: Event) => {
      if (!(event.target instanceof HTMLInputElement)) return;
      countryName = event.target.value.toLowerCase().trim();

      countriesSearchResult = searchByName(
        countryName,
        countryRegion,
        countriesSearchResult,
        regionSearchResult,
        APIreponse
      );

      renderCountriesList(countriesSearchResult);
    });

  document
    .querySelector("#regionSelect")
    .addEventListener("change", (event: Event) => {
      if (!(event.target instanceof HTMLSelectElement)) return;
      countryRegion = event.target.value;

      regionSearchResult = searchByRegion(
        countryName,
        countryRegion,
        regionSearchResult,
        APIreponse
      );

      renderCountriesList(regionSearchResult);
    });
};
