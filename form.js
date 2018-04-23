document.addEventListener("DOMContentLoaded", function() {
  console.log("testici");
  var formHeight = 0;
  if (document.getElementById("webformErrors") != undefined) {
    var errorHeght = document.getElementById("webformErrors").offsetHeight;
  }
  if (document.getElementsByClassName("webFormBodyContainer").length != 0) {
    formHeight = document.forms[0].getElementsByClassName(
      "webFormBodyContainer"
    )[0].offsetHeight;
  }
  var height = errorHeght + formHeight;
  document.getElementsByTagName("body")[0].classList.add("overflow");
  var iframeData = {
    origin: window.location.href,
    data: {
      type: "HEIGHT",
      height: height
    }
  };
  window.parent.postMessage(iframeData, "*");
});
