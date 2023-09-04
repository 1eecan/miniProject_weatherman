export default function Loading({ $target, initialState }) {
  const $loading = document.createElement("div");

  $target.appendChild($loading);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (this.state.isLoading) {
      $loading.innerHTML = `
        <div class="loading"></div>
        `;
    } else {
      $loading.innerHTML = ``;
    }
  };

  this.render();
}
