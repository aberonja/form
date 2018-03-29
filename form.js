// console.log(document.forms[0].getElementsByName('table')[1].offsetHeight)

setTimeout(() => {
    var height = document.forms[0].getElementsByClassName('webFormBodyContainer')[0].offsetHeight;
    console.log(height)
}, 5000);

console.log('test')

// var wn = window.frames[0]
// wn.postMessage(height, 'http://localhost:8084/');

// wn.postMessage(height, 'http://localhost:8084/');