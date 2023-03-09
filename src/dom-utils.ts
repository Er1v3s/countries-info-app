import { requiredDataType } from "./types";

const createFlageImgElement = (country: requiredDataType) => {
  const imgContainerElement: HTMLDivElement = document.createElement("div");
  const imgElement: HTMLImageElement = document.createElement("img");
  imgElement.src = country.flagUrl;
  imgElement.width = 160;
  imgElement.height = 98;

  imgContainerElement.appendChild(imgElement);

  return imgElement;
};

const createInfoElement = (labelName: string, value: string) => {
  const infoElement: HTMLDivElement = document.createElement("div");

  const labelElement: HTMLElement = document.createElement("strong");
  labelElement.innerText! = `${labelName}: `;
  const valueElement: HTMLSpanElement = document.createElement("span");
  valueElement.innerText = value;

  infoElement.appendChild(labelElement);
  infoElement.appendChild(valueElement);

  return infoElement;
};

const createCountryItemElement = (country: requiredDataType) => {
  const countryElement: HTMLLIElement = document.createElement("li");

  const countryNameElement: HTMLSpanElement = document.createElement("span");
  countryNameElement.innerText! = country.name;

  countryElement.append(createFlageImgElement(country));
  countryElement.appendChild(countryNameElement);

  countryElement.appendChild(
    createInfoElement("Population", String(country.population))
  );
  countryElement.appendChild(createInfoElement("Region", country.region));
  countryElement.appendChild(createInfoElement("Capital", country.capital));

  return countryElement;
};

const createListElement = (countries: Array<object>) => {
  const listElement: HTMLUListElement = document.createElement("ul");
  countries.forEach((country: requiredDataType) => {
    listElement.appendChild(createCountryItemElement(country));
  });

  return listElement;
};

export const renderCountriesList = (countries: Array<object>) => {
  const rootElement: HTMLDivElement = document.querySelector("#root");
  rootElement.appendChild(createListElement(countries));
};
