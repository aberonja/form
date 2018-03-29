// console.log(document.forms[0].getElementsByName('table')[1].offsetHeight)

var height = document.forms[0].getElementsByTagName('table')[1].offsetHeight;

var wn = window.frames[0]
wn.postMessage(height, 'http://localhost:8084/');

wn.postMessage(height, 'http://localhost:8084/');