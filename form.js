// console.log(document.forms[0].getElementsByName('table')[1].offsetHeight)

setTimeout(() => {
    var height = document.forms[0].getElementsByClassName('webFormBodyContainer')[0].offsetHeight;
}, 5000);

console.log('test')
console.log(height)

// var wn = window.frames[0]
// wn.postMessage(height, 'http://localhost:8084/');

// wn.postMessage(height, 'http://localhost:8084/');