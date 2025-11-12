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
