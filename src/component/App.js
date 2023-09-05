import { request } from "../core/api.js";
import LocationSelect from "./LocationSelect.js";
import Header from "./Header.js";
import Caution from "./Caution.js";
import HighestTemperature from "./HighestTemprature.js";
import LowestTemperature from "./LowestTemprature.js";
import Temprature from "./Temprature.js";
import { locationInformation } from "../core/locationInformation.js";
import { getItem, setItem } from "../core/storage.js";
import Loading from "./Loading.js";

export default function App({ $target }) {
  const initialLocation = getItem("location", {
    city: "서울특별시",
    town: "종로구",
  });

  this.state = {
    location: initialLocation,
    weather: [],
    isLoading: false,
  };

  this.setState = (nextState) => {
    this.state = nextState;
    locationSelect.setState(this.state);
    highestTemperature.setState(this.state);
    lowestTemperature.setState(this.state);
    temprature.setState(this.state);
  };

  new Caution({ $target: $target });

  const loading = new Loading({ $target: $target, initialState: this.state });

  new Header({ $target: $target });

  const locationSelect = new LocationSelect({
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

  const highestTemperature = new HighestTemperature({
    $target: $target,
    initialState: this.state,
  });

  const lowestTemperature = new LowestTemperature({
    $target: $target,
    initialState: this.state,
  });

  const temprature = new Temprature({
    $target: $target,
    initialState: this.state,
  });

  this.fetchWeather = async (
    locationInformation = this.state.location,
    nx = 60,
    ny = 127
  ) => {
    loading.setState({ ...this.state, isLoading: true });
    const nextState = {
      location: locationInformation,
      weather: (await request(nx, ny)).response.body.items.item,
    };
    this.setState(nextState);
    loading.setState({ ...this.state, isLoading: false });
  };

  this.fetchWeather();
}
