const displayChat = () => {
  window.$zoho = window.$zoho || {};
  window.$zoho.salesiq = window.$zoho.salesiq || {
    ready: function (fn) {
      if (document.readyState !== "loading") {
        fn();
      } else {
        document.addEventListener("DOMContentLoaded", fn);
      }
    },
  };
  const script = document.createElement("script");
  script.src =
    "https://salesiq.zohopublic.com/widget?wc=siq21e41ed3314d52339322acd54166cd348f3b37e5c78fc51975d58e98549c98e8";
  script.defer = true;
  document.getElementById("zsiqscript").parentNode.appendChild(script);
};

const showChat = () => {
  window.$zoho = window.$zoho || {};
  window.$zoho.salesiq = window.$zoho.salesiq || {
    ready: function (fn) {
      if (document.readyState !== "loading") {
        fn();
      } else {
        document.addEventListener("DOMContentLoaded", fn);
      }
    },
  };
  const script = document.createElement("script");
  script.src =
    "https://salesiq.zohopublic.com/widget?wc=siq21e41ed3314d52339322acd54166cd348f3b37e5c78fc51975d58e98549c98e8";
  script.defer = true;
  document.getElementById("zsiqscript").parentNode.appendChild(script);
};
const getResponse = () => {
  window.$zoho = window.$zoho || {};
  window.$zoho.salesiq = window.$zoho.salesiq || {
    ready: function (fn) {
      if (document.readyState !== "loading") {
        fn();
      } else {
        document.addEventListener("DOMContentLoaded", fn);
      }
    },
  };
  const script = document.createElement("script");
  script.src =
    "https://salesiq.zohopublic.com/widget?wc=siq21e41ed3314d52339322acd54166cd348f3b37e5c78fc51975d58e98549c98e8";
  script.defer = true;
  document.getElementById("zsiqscript").parentNode.appendChild(script);
};

const test =()=>{
    const time = 19;
    const year = 2025;
    const result = year - time;
    console.log(result);    
}

console.log(test());

const test2 =()=>{
    const num1 = 5;
    const num2 = 10;

    num1 > num2? console.log("num1 is greater"): console.log("num2 is greater");
    //condition ? expression if true : expression if false


    const result = num1 > num2? "num1 is greater" : "num2 is greater";
    console.log(result);
    
}

console.log(test2());


const getData=(num1, num2)=>{
  const res = num1 + num2;
  console.log(res);
}
console.clear();
console.log(getData(5, 10));