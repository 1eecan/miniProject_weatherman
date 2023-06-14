//localstorage 조회해보고 도시가 저장되어 있으면 바로 로딩
(function instant_loading() {
  if (window.localStorage.length !== 0) {
    let key = window.localStorage.key(0);
    let stored = window.localStorage.getItem(key);
    let city1 = key.split(",")[0];
    let city2 = key.split(",")[1];
    let row = stored.split(",")[0];
    let col = stored.split(",")[1];
    console.log(row, col);
    document.querySelector("#city1").innerHTML = `<option>${city1}</option>`;
    document.querySelector("#city2").innerHTML = `<option>${city2}</option>`;
    weather(row, col);
  }
})();
