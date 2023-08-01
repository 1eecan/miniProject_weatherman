export default function Temperature({ $target, initialState }) {
  const $temprature = document.createElement("div");

  $target.appendChild($temprature);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {};
}
