//https://www.data.go.kr/iim/api/selectAPIAcountView.do 여기서 데이터를 받아오자!

fetch(
  `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${config.apikey}&pageNo=1&numOfRows=229&dataType=JSON&base_date=20230604&base_time=0500&nx=62&ny=114`
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
