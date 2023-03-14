import { responseDataType, requiredDataType } from "./types";

export const getAllCountries = async (
  API_URL: string,
  countries: requiredDataType[]
) => {
  const response: Response = await fetch(API_URL);
  const data: Array<object> = await response.json();

  countries = data.map((country: responseDataType) => {
    return {
      capital: country.capital && country.capital[0],
      population: country.population,
      name: country.name.common,
      region: country.region,
      flagUrl: country.flags.png,
    };
  });

  return countries;
};
