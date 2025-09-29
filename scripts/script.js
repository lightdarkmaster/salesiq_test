const addNumbers = (firstNumber, secondNumber) => {
  const sum = firstNumber + secondNumber;
  return sum;
}

const createElement = () => {
  const script = document.createElement("script");
  script.src =
    "https://salesiq.zohopublic.com/widget?wc=siq21e41ed3314d52339322acd54166cd348f3b37e5c78fc51975d58e98549c98e8";
  script.defer = true;
  document.getElementById("zsiqscript").parentNode.appendChild(script);
}

const save = () => {
  createElement();
}

save();

const recalculate = () => {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  getData(num1, num2);
}

console.clear();

console.log(reacalculate());

const recalibrate = () => {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  getData(num1, num2);
}

if (recalibrate) {
  recalibrate();
}

console.log(recalibrate());

const  calculate = () => {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  getData(num1, num2);
}

const getDataperCount =()=>{
  const age = document.getElementById("num1").value;
  const count = document.getElementById("num2").value;
  getData(age, count);
}

const generate = () => {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  getData(num1, num2);
}

const generateData = () => {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  getData(num1, num2);
}

const getData = () => {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  getData(num1, num2);
}

const get = () => {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  getData(num1, num2);
}

console.log(get());