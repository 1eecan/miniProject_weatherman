export default function LowestTemperature({ $target, initialState }) {
  const $lowestTemprature = document.createElement("div");

  $target.appendChild($lowestTemprature);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    console.log(this.state);
    if (this.state.weather.length === 0) return;
    const { weather } = this.state;
    const lowestTemprature = weather.filter(
      (item) => item.category === "TMN"
    )[0];

    $lowestTemprature.innerHTML = `
      <h2>${lowestTemprature.fcstTime}시에 ${lowestTemprature.fcstValue}도 까지 내려갑니다...!</h2>
    `;
  };

  this.render();
}
