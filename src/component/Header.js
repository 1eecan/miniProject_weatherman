export default function Header({ $target }) {
  const $header = document.createElement("h1");

  $target.appendChild($header);

  this.render = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = today.getDay();
    const dayArray = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];
    $header.textContent = `${year}.${month}.${date} ${dayArray[day]}`;
  };

  this.render();
}
