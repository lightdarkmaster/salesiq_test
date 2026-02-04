function addAriaSelected6715488000003325054() {
  var optionElem = event.target;
  var previousSelectedOption = optionElem.querySelector("[aria-selected=true]");
  if (previousSelectedOption) {
    previousSelectedOption.removeAttribute("aria-selected");
  }
  optionElem.querySelectorAll("option")[optionElem.selectedIndex].ariaSelected =
    "true";
}
function privacyAlert6715488000003325054() {
  var privacyTool = document.getElementById("privacyTool6715488000003325054");
  var privacyErr = document.getElementById("privacyErr6715488000003325054");
  if (privacyTool != undefined && !privacyTool.checked) {
    privacyErr.style.visibility = "visible";
    privacyTool.ariaInvalid = "true";
    privacyTool.focus();
    return false;
  }
  return true;
}
function disableErr6715488000003325054() {
  var privacyTool = document.getElementById("privacyTool6715488000003325054");
  var privacyErr = document.getElementById("privacyErr6715488000003325054");
  if (
    privacyTool != undefined &&
    privacyTool.checked &&
    privacyErr != undefined
  ) {
    privacyErr.style.visibility = "hidden";
    privacyTool.ariaInvalid = "false";
  }
}
function validateEmail6715488000003325054() {
  var form = document.forms["WebToLeads6715488000003325054"];
  var emailFld = form.querySelectorAll("[ftype=email]");
  var i;
  for (i = 0; i < emailFld.length; i++) {
    var emailVal = emailFld[i].value;
    if (emailVal.replace(/^\s+|\s+$/g, "").length != 0) {
      var atpos = emailVal.indexOf("@");
      var dotpos = emailVal.lastIndexOf(".");
      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
        alert("Please enter a valid email address. ");
        emailFld[i].focus();
        return false;
      }
    }
  }
  return true;
}
function checkMandatory6715488000003325054() {
  var mndFileds = new Array(
    "First Name",
    "Last Name",
    "Email",
    "Phone",
    "LEADCF6",
    "LEADCF9",
    "LEADCF24",
    "LEADCF25",
    "LEADCF26",
    "LEADCF27",
    "LEADCF28",
  );
  var fldLangVal = new Array(
    "First\x20Name",
    "Last\x20Name",
    "Email",
    "Phone",
    "Property\x20Inquired",
    "Inquiry\x20Type",
    "Preferred\x20contact\x20method\x3F",
    "Best\x20time\x20to\x20contact\x20you",
    "Town\x2FCity",
    "Nationality",
    "Tell\x20us\x20about\x20it",
  );
  for (i = 0; i < mndFileds.length; i++) {
    var fieldObj =
      document.forms["WebToLeads6715488000003325054"][mndFileds[i]];
    if (fieldObj) {
      if (fieldObj.value.replace(/^\s+|\s+$/g, "").length == 0) {
        if (fieldObj.type == "file") {
          alert("Please select a file to upload.");
          fieldObj.focus();
          return false;
        }
        alert(fldLangVal[i] + " cannot be empty.");
        fieldObj.focus();
        return false;
      } else if (fieldObj.nodeName == "SELECT") {
        if (fieldObj.options[fieldObj.selectedIndex].value == "-None-") {
          alert(fldLangVal[i] + " cannot be none.");
          fieldObj.focus();
          return false;
        }
      } else if (fieldObj.type == "checkbox") {
        if (fieldObj.checked == false) {
          alert("Please accept  " + fldLangVal[i]);
          fieldObj.focus();
          return false;
        }
      }
      try {
        if (fieldObj.name == "Last Name") {
          name = fieldObj.value;
        }
      } catch (e) {}
    }
  }
  if (!validateEmail6715488000003325054()) {
    return false;
  }
  if (!privacyAlert6715488000003325054()) {
    return false;
  }
  var urlparams = new URLSearchParams(window.location.search);
  if (urlparams.has("service") && urlparams.get("service") === "smarturl") {
    var webform = document.getElementById("webform6715488000003325054");
    var service = urlparams.get("service");
    var smarturlfield = document.createElement("input");
    smarturlfield.setAttribute("type", "hidden");
    smarturlfield.setAttribute("value", service);
    smarturlfield.setAttribute("name", "service");
    webform.appendChild(smarturlfield);
  }
  document
    .querySelector(".crmWebToEntityForm .formsubmit")
    .setAttribute("disabled", true);
}
function tooltipShow6715488000003325054(el) {
  var tooltip = el.nextElementSibling;
  var tooltipDisplay = tooltip.style.display;
  if (tooltipDisplay == "none") {
    var allTooltip = document.getElementsByClassName("zcwf_tooltip_over");
    for (i = 0; i < allTooltip.length; i++) {
      allTooltip[i].style.display = "none";
    }
    tooltip.style.display = "block";
  } else {
    tooltip.style.display = "none";
  }
}
