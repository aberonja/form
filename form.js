document.addEventListener('DOMContentLoaded', function() {
  var formHeight = 0;
  var messageHeight = 0;
  var errorHeght = 0;
  if (document.getElementById('webformErrors') != undefined) {
    errorHeght = document.getElementById('webformErrors').offsetHeight;
  } else {
    messageHeight = document.getElementsByClassName('bodyContainer')[0]
      .offsetHeight;
  }
  if (document.getElementsByClassName('webFormBodyContainer').length != 0) {
    formHeight = document.forms[0].getElementsByClassName(
      'webFormBodyContainer'
    )[0].offsetHeight;
  }
  var height = errorHeght + formHeight + messageHeight;
  document.getElementsByTagName('body')[0].classList.add('overflow');
  var iframeData = {
    origin: window.location.href,
    data: {
      type: 'HEIGHT',
      height: height
    }
  };
  window.parent.postMessage(iframeData, '*');
});

var KEYCODE_ESC = 27;

document.getElementById("fname").addEventListener("keyup", myFunction);

function myFunction(e) {
 if (e.keyCode == KEYCODE_ESC) {
        console.log('------------------------------------');
        console.log('test');
        console.log('------------------------------------');
      }
    
}