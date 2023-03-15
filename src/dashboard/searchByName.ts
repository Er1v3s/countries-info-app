import { AllCountriesDataType } from "../types";
import { searchAllCountries, searchCountriesWithParams } from "./search";

export const searchByName = (
  countryName: string,
  countryRegion: string,
  countriesSearchResult: AllCountriesDataType[],
  regionSearchResult: AllCountriesDataType[],
  APIreponse: AllCountriesDataType[]
) => {
  if (countryRegion != "" && countryRegion != undefined) {
    countriesSearchResult = searchCountriesWithParams(
      countryName,
      countryRegion,
      APIreponse,
      regionSearchResult
    );
  } else {
    countriesSearchResult = searchAllCountries(
      countryName,
      APIreponse,
      countriesSearchResult
    );
  }

  return countriesSearchResult;
};
