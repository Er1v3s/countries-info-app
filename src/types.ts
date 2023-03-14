export type requiredDataType = {
  capital: string;
  population: string;
  name: string;
  region: string;
  flagUrl: string;
};

export type responseDataType = {
  capital: string;
  population: number;
  name: { common: string };
  region: string;
  flags: { png: string };
};
