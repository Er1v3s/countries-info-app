import {
  responseDataType,
  AllCountriesDataType,
  IndyvidualCountryDataType,
} from "./types";

export const getDataFromAPI = async (
  API_URL: string,
  countries: IndyvidualCountryDataType[] | AllCountriesDataType[]
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
          code: country.cioc,
          name: country.name.common,
          region: country.region,
          subregion: country.subregion,
          flagUrl: country.flags.png,
          currencies: country.currencies && Object.keys(country.currencies)[0],
          languages: country.languages && Object.keys(country.languages)[0],
          tld: country.tld && country.tld[0],
        };
      });
    }
  } catch (err) {
    console.log(`Error: ${err}`);
  }

  return countries;
};
