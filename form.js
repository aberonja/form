document.addEventListener("DOMContentLoaded", function() {
    var errorHeght = document.getElementById('webformErrors').offsetHeight;
    var formHeight = document.forms[0].getElementsByClassName('webFormBodyContainer')[0].offsetHeight;
    var height = errorHeght + formHeight;
    window.parent.postMessage(height, '*');
    document.getElementsByTagName('body')[0].classList.add('overflow');
  });