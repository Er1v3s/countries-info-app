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
  detailContainerElement.classList.add("detail-container");

  const flagImgElement: HTMLImageElement = createFlageImgElement(country);

  const detailContentElement: HTMLDivElement = document.createElement("div");
  detailContentElement.classList.add("detail-content");

  const detailNameElement: HTMLElement = document.createElement("strong");
  detailNameElement.innerText = country.name;
  detailNameElement.classList.add("detail-name");

  detailContainerElement.appendChild(flagImgElement);
  detailContentElement.appendChild(detailNameElement);

  const leftColumnElement: HTMLDivElement = document.createElement("div");

  leftColumnElement.appendChild(
    createInfoElement("Population: ", country.population)
  );
  leftColumnElement.appendChild(createInfoElement("Region: ", country.region));
  leftColumnElement.appendChild(
    createInfoElement("Sub region: ", country.subregion)
  );
  leftColumnElement.appendChild(
    createInfoElement("Capital: ", country.capital)
  );

  const rightColumnElement: HTMLDivElement = document.createElement("div");

  rightColumnElement.appendChild(
    createInfoElement("Top level domain: ", country.tld)
  );
  rightColumnElement.appendChild(
    createInfoElement("Currencies: ", country.currencies)
  );
  rightColumnElement.appendChild(
    createInfoElement("Languages: ", country.languages)
  );

  detailContainerElement.appendChild(detailContentElement);
  detailContentElement.appendChild(leftColumnElement);
  detailContentElement.appendChild(rightColumnElement);

  if (country.borders && country.borders.length > 0) {
    detailContentElement.appendChild(createBorderCountriesContainer(country));
  }

  return detailContainerElement;
};

const createDetailButton = (text: string, link: string) => {
  const anchorElement: HTMLAnchorElement = document.createElement("a");
  anchorElement.innerText = text;
  anchorElement.classList.add("detail-button");
  anchorElement.href = link;

  return anchorElement;
};

const createBorderCountriesContainer = (country: IndyvidualCountryDataType) => {
  const borderCountriesContainerElement: HTMLDivElement =
    document.createElement("div");
  borderCountriesContainerElement.classList.add("border-countries-container");

  const labelElement: HTMLElement = document.createElement("strong");
  labelElement.innerText = "Border Countries: ";

  borderCountriesContainerElement.appendChild(labelElement);

  country.borders.forEach((border: string) => {
    borderCountriesContainerElement.appendChild(
      createDetailButton(border, `/?country=${border}`)
    );
  });

  return borderCountriesContainerElement;
};

export const renderCountriesList = (countries: AllCountriesDataType[]) => {
  const rootElement: HTMLDivElement = document.querySelector("#root");
  rootElement.innerHTML = "";
  rootElement.appendChild(createListElement(countries));
};

export const renderCountryDetails = (country: IndyvidualCountryDataType) => {
  const rootElement: HTMLDivElement = document.querySelector("#root");
  rootElement.innerHTML = "";
  rootElement.appendChild(createDetailButton("Go back", "/"));
  rootElement.appendChild(createDetailElement(country));
};
