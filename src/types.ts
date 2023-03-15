export type AllCountriesDataType = {
  capital: string;
  population: string;
  code: number;
  name: string;
  region: string;
  flagUrl: string;
};

export type IndyvidualCountryDataType = {
  capital: string;
  population: string;
  code: number;
  name: string;
  region: string;
  subregion?: string;
  flagUrl: string;
  currencies?: string;
  languages?: string;
  tld?: string;
  borders?: [];
};

export type responseDataType = {
  capital: string;
  population: number;
  cioc: number;
  name: {
    common: string;
  };
  region: string;
  subregion: string;
  flags: { png: string };
  currencies: object;
  languages: object;
  tld: string;
  borders: [];
};
