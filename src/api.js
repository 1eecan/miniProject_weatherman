import { apikey } from "./apikey.js";

const today = new Date();
const year = today.getFullYear();
const month = ("0" + (today.getMonth() + 1)).slice(-2);
const day = ("0" + today.getDate()).slice(-2);
const dateString = year + month + day;

const API_END_POINT = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${apikey}&pageNo=1&numOfRows=229&dataType=JSON&base_date=${dateString}&base_time=0500`;

export const request = async (nx, ny) => {
  try {
    const res = await fetch(`${API_END_POINT}&nx=${nx}&ny=${ny}`);

    if (!res.ok) {
      throw new Error("api 호출중 문제 발생!");
    }

    return res.json();
  } catch (e) {
    console.log(e.message);
  }
};
