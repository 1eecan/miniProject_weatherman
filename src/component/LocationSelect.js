import { locationInformation } from "../core/locationInformation.js";
import { cityInformation } from "../core/cityInformation.js";

export default function LocationSelect({ $target, initialState, onSelect }) {
  const $locationSelect = document.createElement("div");
  const $selectCity = document.createElement("select");
  const $selectTown = document.createElement("select");

  $target.appendChild($locationSelect);
  $target.appendChild($selectCity);
  $target.appendChild($selectTown);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { city, town } = this.state.location;
    $selectCity.innerHTML = `
            ${cityInformation.map((item) => {
              return item !== city
                ? `<option>${item}</option>`
                : `<option selected>${item}</option>`;
            })}`;

    $selectTown.innerHTML = `
            ${[
              locationInformation
                .filter((item) => item[0] === city)
                .map((item) => {
                  return item[1] !== town
                    ? `<option>${item[1]}</option>`
                    : `<option selected>${item[1]}</option>`;
                }),
            ]}`;

    $locationSelect.innerHTML = `
            <h2>${city} ${town}의 날씨는...</h2>
        `;
  };

  $selectCity.addEventListener("change", () => {
    $selectTown.length = 0;
    $selectTown.innerHTML = `
  <option selected disabled>선택</option>
    ${[
      locationInformation
        .filter(
          (item) =>
            item[0] === $selectCity.options[$selectCity.selectedIndex].text
        )
        .map((town) => {
          return `<option>${town[1]}</option>`;
        }),
    ]}
    `;
  });
  $selectTown.addEventListener("change", (e) => {
    onSelect({
      city: $selectCity.options[$selectCity.selectedIndex].text,
      town: e.target.value,
    });
  });

  this.render();
}
