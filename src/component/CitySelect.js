import { locationInformation } from "../core/locationInformation.js";
import { cityInformation } from "../core/cityInformation.js";

export default function CitySelect({ $target, initialState, onSelect }) {
  const $citySelect = document.createElement("div");

  $target.appendChild($citySelect);

  console.log(initialState);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { city, town } = this.state.location;
    $citySelect.innerHTML = `
            <select class="selectCity">
            <option selected hidden>시/도</option>
            ${cityInformation.map((city, index) => `<option>${city}</option>`)}
            </select>
            
            <select class="selectTown">
            <option selected hidden>시/군/구</option>
            ${[
              locationInformation
                .filter((item) => item[0] === city)
                .map((town, index) => `<option>${town[1]}</option>`),
            ]}
            </select>
            <h2>${city} ${town}의 날씨는...</h2>
        `;
    const selectedCity = document.querySelector(".selectCity");
    const selectedTown = document.querySelector(".selectTown");
    selectedCity.addEventListener("change", () => {
      selectedTown.length = 0;
      selectedTown.innerHTML = `
      <option selected hidden>시/군/구</option>
      ${[
        locationInformation
          .filter(
            (item) =>
              item[0] === selectedCity.options[selectedCity.selectedIndex].text
          )
          .map((town, index) => {
            return `<option>${town[1]}</option>`;
          }),
      ]}
      `;
      // console.log(selectedCity.options[selectedCity.selectedIndex].text);
    });
    selectedTown.addEventListener("change", (e) => {
      onSelect({
        city: selectedCity.options[selectedCity.selectedIndex].text,
        town: e.target.value,
      });
    });
  };

  this.render();
}
