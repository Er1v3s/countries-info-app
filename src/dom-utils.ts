import { requiredDataType } from "./types";

const createFlageImgElement = (country: requiredDataType) => {
  const imgContainerElement: HTMLDivElement = document.createElement("div");
  const imgElement: HTMLImageElement = document.createElement("img");
  imgElement.src = country.flagUrl;
  imgElement.alt = `${country.name} flag`;

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

  countryElement.append(createFlageImgElement(country));

  const infoContainerElement: HTMLDivElement = document.createElement("div");
  infoContainerElement.classList.add("info-container");

  const countryNameElement: HTMLSpanElement = document.createElement("strong");
  countryNameElement.classList.add("country-name");
  countryNameElement.innerText! = country.name;

  infoContainerElement.appendChild(countryNameElement);

  infoContainerElement.appendChild(
    createInfoElement("Population", String(country.population))
  );
  infoContainerElement.appendChild(createInfoElement("Region", country.region));
  infoContainerElement.appendChild(
    createInfoElement("Capital", country.capital)
  );

  countryElement.appendChild(infoContainerElement);

  return countryElement;
};

const createListElement = (countries: requiredDataType[]) => {
  const listElement: HTMLUListElement = document.createElement("ul");
  countries.forEach((country: requiredDataType) => {
    listElement.appendChild(createCountryItemElement(country));
  });

  return listElement;
};

export const renderCountriesList = (countries: requiredDataType[]) => {
  const rootElement: HTMLDivElement = document.querySelector("#root");
  rootElement.innerHTML = "";
  rootElement.appendChild(createListElement(countries));
};
