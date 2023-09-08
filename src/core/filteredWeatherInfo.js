export default function filteredWeatherInfo({ weather }) {
  console.log(weather);
  const filteredData = [];
  let tempTime = weather[0].fcstTime;
  let tempIndex = 0;
  weather.forEach((item, index) => {
    if (tempTime === item.fcstTime) {
      filteredData[tempIndex] = {
        ...filteredData[tempIndex],
        [item.category]: item.fcstValue,
      };
    } else {
      filteredData[tempIndex] = {
        ...filteredData[tempIndex],
        fcstTime: tempTime,
      };
      tempTime = item.fcstTime;
      tempIndex++;
    }
  });
  console.log(JSON.stringify(filteredData));
}
