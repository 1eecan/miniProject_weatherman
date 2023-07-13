import { request } from "./api.js";
import Header from "./Header.js";

export default function App({ $target }) {
  this.state = {
    city: ["서울특별시", "종로구"],
    weather: [],
  };

  this.setState = (nextState) => {
    this.state = nextState;
    console.log(this.state);
  };

  new Header({ $target });

  this.fetchWeather = async (nx = 60, ny = 127) => {
    const nextState = await request(nx, ny);
    this.setState(nextState);
  };

  this.fetchWeather();
}
