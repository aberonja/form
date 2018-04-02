document.addEventListener("DOMContentLoaded", function () {
  var errorHeght = document.getElementById('webformErrors').offsetHeight
  var formHeight = document.forms[0].getElementsByClassName('webFormBodyContainer')[0].offsetHeight
  var height = errorHeght + formHeight
  document.getElementsByTagName('body')[0].classList.add('overflow')
  var test123 = {
    origin: window.location.href,
    message: {
      type: 'HEIGHT',
      data: height
    }
  }
  window.parent.postMessage(test123, '*')
  console.log(test123)
  // window.parent.postMessage(height, '*')
});