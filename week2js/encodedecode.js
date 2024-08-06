const component="hello, world!";
const encoded=encodeURIComponent(component);
console.log(encoded)
const decoded=decodeURIComponent(encoded)
console.log(decoded)