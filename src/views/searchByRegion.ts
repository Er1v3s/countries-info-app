import { AllCountriesDataType } from "../types";
import { searchAllCountries, searchCountriesWithParams } from "./search";

export const searchByRegion = (
  countryName: string,
  countryRegion: string,
  regionSearchResult: AllCountriesDataType[],
  APIreponse: AllCountriesDataType[]
) => {
  if (countryName != "" && countryName != undefined) {
    regionSearchResult = searchCountriesWithParams(
      countryName,
      countryRegion,
      APIreponse,
      regionSearchResult
    );
  } else {
    regionSearchResult = searchAllCountries(
      countryRegion,
      APIreponse,
      regionSearchResult
    );
  }

  document.querySelector("#select_option").setAttribute("disabled", "true");
  return regionSearchResult;
};
