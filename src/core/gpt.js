import { OpenAI } from "openai";

export default function gpt(filteredWeatherInfo) {
  console.log(filteredWeatherInfo);
  console.log("gpt start");
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  async function main() {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `POP: chance of raining,
          PTY: raining type (none (0), rain (1), rain/snow (2), snow (3), shower (4),
          PCP:One hour raining, REH:humidity,
          SNO: 1 hour snowfall,
          SKY: Sky condition (clear (1), cloudy (3), cloudy (4),
          TMP: 1 hour temperature,
          TMN: Daily minimum temperature,
          TMX: Daily maximum temperature,
          UUU:wind speed (east-west component),
          VVV: (North and South components)
          VEC: Wind direction,
          WSD: Indicate the wind speed!
          The unit of temperature is Celsius!
          Now, based on weather information except for UUU, VVV, and VEC, we are recommending materials suitable for the day!
          For example, POP:0 PTY:0 PCP:0 TMX:30 recommends sun cream and ion drinks because it doesn't rain that day and it's hot,
          POP:70 PTY:1 PCP:6.2 recommends umbrellas, rain boots, etc. because it's raining!
          대답형식은 "오늘은 ... 을 추천해드립니다" 이고 ...에는 너가 적절하다고 생각되는 준비물을 넣어줘.
            JSON데이터는 다음과 같아 ${filteredWeatherInfo}`,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0].message.content);
  }

  main();
}
