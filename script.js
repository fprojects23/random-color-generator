document.addEventListener("DOMContentLoaded", function () {
  var generateColorBtn = document.getElementById("generateColorBtn");
  var colorDisplay = document.getElementById("colorDisplay");

  generateColorBtn.addEventListener("click", function () {
    var randomColor = getRandomColor();
    colorDisplay.textContent = randomColor;
    colorDisplay.style.backgroundColor = randomColor;
  });

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
