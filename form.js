document.addEventListener("DOMContentLoaded", function () {
  var errorHeght = document.getElementById('webformErrors').offsetHeight
  var formHeight = document.forms[0].getElementsByClassName('webFormBodyContainer')[0].offsetHeight
  var height = errorHeght + formHeight
  document.getElementsByTagName('body')[0].classList.add('overflow')
  console.log(window.location.href)
  var test = {
    origin: window.location.href,
    message: {
      type: 'HEIGHT',
      data: height
    }
  }
  window.parent.postMessage(test, '*')
  console.log(test)
});