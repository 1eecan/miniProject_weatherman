import { apikey } from "./apikey.js";

const today = new Date();
const year = today.getFullYear();
const month = ("0" + (today.getMonth() + 1)).slice(-2);
const day = ("0" + today.getDate()).slice(-2);

const yesterday = new Date(new Date().setDate(day - 1));
const yesterdayYear = yesterday.getFullYear();
const yesterdayMonth = ("0" + (yesterday.getMonth() + 1)).slice(-2);
const yesterdayDay = ("0" + yesterday.getDate()).slice(-2);

const dateIsUpdated =
  today.getHours() >= 0 && today.getHours() < 2 ? false : true;

const dateString = dateIsUpdated
  ? year + month + day
  : yesterdayYear + yesterdayMonth + yesterdayDay;

const API_END_POINT = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${apikey}&pageNo=1&numOfRows=290&dataType=JSON&base_date=${dateString}&base_time=0200`;

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
