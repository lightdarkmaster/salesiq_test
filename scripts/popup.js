document.getElementById("button").addEventListener("click", function() {
  alert("Button clicked!");
  console.log("Button clicked!");
  changeBackgroundColor();
});

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

