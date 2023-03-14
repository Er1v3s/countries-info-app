import { requiredDataType } from "../types";

export const searchCountriesWithParams = (
  inputCountryValue: string,
  selectRegionValue: string,
  APIresponse: requiredDataType[],
  searchBy: requiredDataType[]
) => {
  searchBy = APIresponse.filter(
    (country: requiredDataType) =>
      country.region === selectRegionValue &&
      country.name.toLowerCase().includes(inputCountryValue)
  );

  return searchBy;
};

export const searchAllCountries = (
  queryType: string,
  APIreponse: requiredDataType[],
  searchBy: requiredDataType[]
) => {
  searchBy = APIreponse.filter(
    (country: requiredDataType) =>
      country.region === queryType ||
      country.name.toLowerCase().includes(queryType)
  );

  return searchBy;
};
