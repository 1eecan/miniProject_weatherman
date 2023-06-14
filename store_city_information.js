function store_city_information(row_col_storage) {
  let city1 =
    document.querySelector("#city1").options[
      document.querySelector("#city1").selectedIndex
    ].value;
  let city2 =
    document.querySelector("#city2").options[
      document.querySelector("#city2").selectedIndex
    ].value;
  let key = `${city1},${city2}`;
  let value = row_col_storage;
  if (window.localStorage.length !== 0) {
    window.localStorage.clear();
  }
  window.localStorage.setItem(key, value);
}
