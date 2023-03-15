// import { getUniqueCountry } from "./API-request";

import { getDataFromAPI } from "../API-request";
import { renderCountryDetails } from "../dom-utils";
import { IndyvidualCountryDataType } from "../types";

export const renderDetail = async () => {
  let countryDetails: IndyvidualCountryDataType[];

  const searchParams: URLSearchParams = new URLSearchParams(
    window.location.search
  );
  const countryCode: string = searchParams.get("country");

  const API_URL_UNIQUE: string = `https://restcountries.com/v3.1/alpha/${countryCode}`;
  if (!countryCode) {
    goBackToDashboard();
  } else {
    const APIreponse: IndyvidualCountryDataType[] = await getDataFromAPI(
      API_URL_UNIQUE,
      countryDetails
    );
    renderCountryDetails(APIreponse[0]);
  }
};

const goBackToDashboard = () => {
  window.location.href = "/";
};
