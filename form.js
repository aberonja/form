document.addEventListener("DOMContentLoaded", function () {
  console.log(document.getElementById('webformErrors'))
  console.log(document.forms[0].getElementsByClassName('webFormBodyContainer')[0])
  console.log('test')

  var errorHeght = document.getElementById('webformErrors').offsetHeight
  if(document.forms[0].getElementsByClassName('webFormBodyContainer')[0] != undefined){
    var formHeight = document.forms[0].getElementsByClassName('webFormBodyContainer')[0].offsetHeight
  }
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
});
