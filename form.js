console.log(document.forms[0].getElementsByName('table')[1].offsetHeight)

var height = document.forms[0].getElementsByName('table')[1].offsetHeight;

targetWindow.postMessage(height, Window.parent);