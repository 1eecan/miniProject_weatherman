export default function Caution({ $target }) {
  const $caution = document.createElement("div");
  $target.appendChild($caution);

  this.render = () => {
    $caution.innerHTML = `
            <h2>주의사항</h2>
            <p>API 업데이트 시간은 05:00이므로</p>
            <p>00:00 부터 05:00에는 전날의 날씨가  표시가 됩니다. </p>

        `;
  };

  this.render();
}
