let city1 = [];
cities.forEach(function (city) {
  if (!city1.includes(city[0])) {
    city1.push(city[0]);
  }
});

city1.forEach(function (city) {
  document
    .querySelector("#city1")
    .insertAdjacentHTML("beforeend", `<option>${city}</option>`);
});

document.querySelector("#city1").addEventListener("change", function (e) {
  document.querySelector("#city2").innerHTML =
    "<option>세부도시를 선택하세요!</option>";
  cities.forEach(function (city) {
    if (city[0] == e.target.value) {
      document
        .querySelector("#city2")
        .insertAdjacentHTML("beforeend", `<option>${city[1]}</option>`);
    }
  });
});

document.querySelector("#city2").addEventListener("change", function (e) {
  let selected_city1 = document.querySelector("#city1");
  for (let i = 0; i < cities.length; i++) {
    if (
      cities[i][0] ==
        selected_city1.options[selected_city1.selectedIndex].value &&
      cities[i][1] == e.target.value
    ) {
      console.log(cities[i][2], cities[i][3]);
      store_city_information(`${cities[i][2]},${cities[i][3]}`);
      weather(cities[i][2], cities[i][3]);
      break;
    }
  }
});
