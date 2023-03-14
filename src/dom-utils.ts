import { AllCountriesDataType, IndyvidualCountryDataType } from "./types";

const createFlageImgElement = (country: AllCountriesDataType) => {
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

const createCountryItemElement = (country: AllCountriesDataType) => {
  const countryElement: HTMLLIElement = document.createElement("li");

  const anchorElement: HTMLAnchorElement = document.createElement("a");
  anchorElement.href = `?country=${country.code}`;

  anchorElement.append(createFlageImgElement(country));

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

  anchorElement.appendChild(infoContainerElement);

  countryElement.appendChild(anchorElement);

  return countryElement;
};

const createListElement = (countries: AllCountriesDataType[]) => {
  const listElement: HTMLUListElement = document.createElement("ul");
  countries.forEach((country: AllCountriesDataType) => {
    listElement.appendChild(createCountryItemElement(country));
  });

  return listElement;
};

const createDetailElement = (country: IndyvidualCountryDataType) => {
  const detailContainerElement: HTMLDivElement = document.createElement("div");

  const flagImgElement: HTMLImageElement = createFlageImgElement(country);
  const detailNameElement: HTMLElement = document.createElement("strong");
  detailNameElement.innerText = country.name;

  detailContainerElement.appendChild(flagImgElement);
  detailContainerElement.appendChild(detailNameElement);

  detailContainerElement.appendChild(
    createInfoElement("Population: ", country.population)
  );
  detailContainerElement.appendChild(
    createInfoElement("Region: ", country.region)
  );
  detailContainerElement.appendChild(
    createInfoElement("Sub region: ", country.subregion)
  );
  detailContainerElement.appendChild(
    createInfoElement("Capital: ", country.capital)
  );
  detailContainerElement.appendChild(
    createInfoElement("Top level domain: ", country.tld)
  );
  detailContainerElement.appendChild(
    createInfoElement("Currencies: ", country.currencies)
  );
  detailContainerElement.appendChild(
    createInfoElement("Languages: ", country.languages)
  );

  return detailContainerElement;
};

const createBackButtonElement = () => {
  const anchorElement: HTMLAnchorElement = document.createElement("a");
  anchorElement.innerText = "Go back";
  anchorElement.classList.add("detail-button");
  anchorElement.href = "/";

  return anchorElement;
};

export const renderCountriesList = (countries: AllCountriesDataType[]) => {
  const rootElement: HTMLDivElement = document.querySelector("#root");
  rootElement.innerHTML = "";
  rootElement.appendChild(createListElement(countries));
};

export const renderCountryDetails = (country: IndyvidualCountryDataType) => {
  const rootElement: HTMLDivElement = document.querySelector("#root");
  rootElement.innerHTML = "";
  rootElement.appendChild(createBackButtonElement());
  rootElement.appendChild(createDetailElement(country));
};
