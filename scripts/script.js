const getData = (num1, num2) => {
  const age = num1;
  const count = num2;
  // do something with age and count
}

const generateData = () => {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  getData(num1, num2);
}

// Call generateData when needed
generateData();
