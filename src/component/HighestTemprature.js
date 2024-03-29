export default function HighestTemperature({ $target, initialState }) {
  const $highestTemprature = document.createElement("div");

  $target.appendChild($highestTemprature);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (this.state.weather.length === 0) return;
    const { weather } = this.state;
    const highestTemprature = weather.filter(
      (item) => item.category === "TMX"
    )[0];

    $highestTemprature.innerHTML = `
      <h2>${highestTemprature.fcstTime}시에 ${highestTemprature.fcstValue}도 까지 올라갑니다...!</h2>
    `;
  };

  this.render();
}
