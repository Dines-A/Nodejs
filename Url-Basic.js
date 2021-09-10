const url = require('url');
const link = 'http://localhost:8080/h2.html';
const obj = url.parse(link,true);

console.log(obj.hostname);
console.log(obj.href);
console.log(obj.url);
console.log(obj.path);
console.log(obj.protocol);