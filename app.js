//https://www.data.go.kr/iim/api/selectAPIAcountView.do 여기서 데이터를 받아오자!
function weather(nx, ny) {
  let today = new Date();
  let year = today.getFullYear();
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);
  let dateString = year + month + day;

  fetch(
    `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${config.apikey}&pageNo=1&numOfRows=229&dataType=JSON&base_date=${dateString}&base_time=0500&nx=${nx}&ny=${ny}`
  )
    .then((res) => res.json())
    .then(function (data) {
      let weather_infos = data.response.body.items;
      let TMP = [];

      weather_infos.item.forEach(function (info) {
        if (info.category == "TMP") {
          TMP.push({
            fcstDate: info.fcstDate,
            fcstTime: info.fcstTime,
            TMP: info.fcstValue,
          });
        }
      });

      console.log(TMP);
    })
    .catch(function (error) {
      console.log(error);
    });
}
