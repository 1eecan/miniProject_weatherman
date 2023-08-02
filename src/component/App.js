import { request } from "../core/api.js";
import CitySelect from "./CitySelect.js";
import Header from "./Header.js";
import Temperature from "./Temprature.js";

export default function App({ $target }) {
  this.state = {
    city: { city: "서울특별시", town: "종로구" },
    weather: [],
  };

  this.setState = (nextState) => {
    this.state = nextState;
    citySelect.setState(this.state);
    temperature.setState(this.state);
  };

  new Header({ $target: $target });

  const citySelect = new CitySelect({
    $target: $target,
    initialState: this.state,
  });

  const temperature = new Temperature({
    $target: $target,
    initialState: this.state,
  });

  this.fetchWeather = async (nx = 60, ny = 127) => {
    const nextState = {
      ...this.state,
      weather: (await request(nx, ny)).response.body.items.item,
    };
    this.setState(nextState);
  };

  this.fetchWeather();
}
