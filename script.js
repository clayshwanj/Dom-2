document.addEventListener("DOMContentLoaded", () => {
  function getRandomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    return bgColor;
  }

  getRandomColor();

  let changeColorBtn = document.getElementById("change-color-btn");
  let colorBox = document.getElementById("color-box");

  changeColorBtn.addEventListener("click", () => {
    colorBox.style.backgroundColor = getRandomColor();
  });
});
