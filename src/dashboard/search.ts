import { AllCountriesDataType } from "../types";

export const searchCountriesWithParams = (
  inputCountryValue: string,
  selectRegionValue: string,
  APIresponse: AllCountriesDataType[],
  searchBy: AllCountriesDataType[]
) => {
  searchBy = APIresponse.filter(
    (country: AllCountriesDataType) =>
      country.region === selectRegionValue &&
      country.name.toLowerCase().includes(inputCountryValue)
  );

  return searchBy;
};

export const searchAllCountries = (
  queryType: string,
  APIreponse: AllCountriesDataType[],
  searchBy: AllCountriesDataType[]
) => {
  searchBy = APIreponse.filter(
    (country: AllCountriesDataType) =>
      country.region === queryType ||
      country.name.toLowerCase().includes(queryType)
  );

  return searchBy;
};
