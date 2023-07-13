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
      let TMP = []; //기온(섭씨)
      let POP = []; //강수확률(%)
      let PTY = []; //강수형태 -> 없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4)
      let PCP = []; //1시간 강수량 -> 1mm 미만:1mm 미만, 1mm~30mm: 실수값, 30mm~50mm미만: 30, 50mm이상:50
      let REH = []; //습도(%)
      let SKY = []; //하늘상태 -> 맑음(1), 구름많음(3), 흐림(4)

      weather_infos.item.forEach(function (info) {
        if (info.category == "TMP") {
          TMP.push({
            fcstDate: info.fcstDate,
            fcstTime: info.fcstTime,
            TMP: info.fcstValue,
          });
        } else if (info.category == "POP") {
          POP.push({
            fcstDate: info.fcstDate,
            fcstTime: info.fcstTime,
            POP: info.fcstValue,
          });
        } else if (info.category == "PTY") {
          PTY.push({
            fcstDate: info.fcstDate,
            fcstTime: info.fcstTime,
            PTY: info.fcstValue,
          });
        } else if (info.category == "PCP") {
          PCP.push({
            fcstDate: info.fcstDate,
            fcstTime: info.fcstTime,
            PCP: info.fcstValue,
          });
        } else if (info.category == "REH") {
          REH.push({
            fcstDate: info.fcstDate,
            fcstTime: info.fcstTime,
            REH: info.fcstValue,
          });
        } else if (info.category == "SKY") {
          SKY.push({
            fcstDate: info.fcstDate,
            fcstTime: info.fcstTime,
            SKY: info.fcstValue,
          });
        }
      });
      return { tmp: TMP, pop: POP, pty: PTY, pcp: PCP, reh: REH, sky: SKY };
    })
    .catch(function (error) {
      console.log(error);
    });
}
