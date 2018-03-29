document.addEventListener("DOMContentLoaded", function() {
    var height = document.forms[0].getElementsByClassName('webFormBodyContainer')[0].offsetHeight;
    window.parent.postMessage(height, '*');
  });