import { request } from "../core/api.js";
import CitySelect from "./CitySelect.js";
import Header from "./Header.js";
import Temperature from "./Temprature.js";
import { locationInformation } from "../core/locationInformation.js";

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
    onSelect: async ({ city, town }) => {
      const selectedLocation = locationInformation.filter((info) => {
        return info[0] === city && info[1] === town;
      })[0];
      const selectedLocationName = {
        city: selectedLocation[0],
        town: selectedLocation[1],
      };
      const selectedLocationCoord = {
        nx: selectedLocation[2],
        ny: selectedLocation[3],
      };

      await this.fetchWeather(
        selectedLocationName,
        selectedLocationCoord.nx,
        selectedLocationCoord.ny
      );
    },
  });

  const temperature = new Temperature({
    $target: $target,
    initialState: this.state,
  });

  this.fetchWeather = async (
    locationInformation = this.state.city,
    nx = 60,
    ny = 127
  ) => {
    console.log(locationInformation);
    const nextState = {
      city: locationInformation,
      weather: (await request(nx, ny)).response.body.items.item,
    };
    this.setState(nextState);
  };

  this.fetchWeather();
}
