import { responseDataType, requiredDataType } from "./types";

export const getAllCountries = async (
  API_URL: string,
  countries: requiredDataType[]
) => {
  try {
    const response: Response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    } else {
      const data: Array<object> = await response.json();

      countries = data.map((country: responseDataType) => {
        return {
          capital: country.capital && country.capital[0],
          population: country.population.toLocaleString(),
          name: country.name.common,
          region: country.region,
          flagUrl: country.flags.png,
        };
      });
    }
  } catch (err) {
    console.log(`Error: ${err}`);
  }

  return countries;
};
