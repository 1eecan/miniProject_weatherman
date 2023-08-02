export default function CitySelect({ $target, initialState }) {
  const $citySelect = document.createElement("div");

  $target.appendChild($citySelect);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { city, town } = this.state;
    $citySelect.innerHTML = `
            지금 <h2>${city} ${town}</h2>의 날씨는...
        `;
  };

  this.render();
}
