export default function ({ $target, initialState }) {
  const $temprature = document.createElement("div");

  $target.appendChild($temprature);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    console.log(this.state);
    if (this.state.weather.length === 0) return;
    const { weather } = this.state;
    const temprature = weather.filter((item) => item.category === "TMP");
    console.log(temprature);
    $temprature.innerHTML = `
            <div>${temprature
              .map(
                (item) =>
                  `<p>날짜 : ${item.fcstDate} ${item.fcstTime}시 : ${item.fcstValue}도</p>`
              )
              .join("")}</div>
        `;
  };

  this.render();
}
