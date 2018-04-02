document.addEventListener("DOMContentLoaded", function () {
  var errorHeght = document.getElementById('webformErrors').offsetHeight
  var formHeight = document.forms[0].getElementsByClassName('webFormBodyContainer')[0].offsetHeight
  var height = errorHeght + formHeight
  document.getElementsByTagName('body')[0].classList.add('overflow')
  var iframeData = {
    origin: window.location.href,
    data: {
      type: 'HEIGHT',
      height: height
    }
  }
  window.parent.postMessage(iframeData, '*')
  console.log(iframeData)
});