export default function CitySelect({ $target, initialState }) {
  const $citySelect = document.createElement("div");

  $target.appendChild($citySelect);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    console.log(this.state);
    const { city, town } = this.state.city;
    $citySelect.innerHTML = `
            <h2>${city} ${town}의 날씨는...</h2>
        `;
  };

  this.render();
}
