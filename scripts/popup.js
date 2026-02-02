function changeBackgroundColorComplex(times) {
  for (var i = 0; i < times; i++) {
    changeBackgroundColor();
    console.log("Changed background color for the " + (i + 1) + " time.");
  }
  console.log("Total number of cards: " + getTotalNumberOfCards());
}

function getTotalNumberOfCards() {
  return document.getElementsByClassName("card").length;
}

repeatChangeColor({
  times: 5
});

return getTotalNumberOfCards();
function repeatChangeColor(params) {
  changeBackgroundColorComplex(params.times);
}

function changeBackgroundColor() {
  var colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#33FFF5"];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

//Still not working..
