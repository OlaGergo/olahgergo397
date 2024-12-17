//wrapper function
//function(__dirname,__filename,module,require,exports){

console.log(__dirname)
console.log(__filename)
const add=require('./calculator.js');
console.log(add(2,3));

const http= require('http');

const server=http.createServer(function(req,res){
    res.writeHead(200);
    res.end('Hello World');
});
server.listen(8080);
//Ez a kód egy egyszerű HTTP szervert hoz létre Node.js-ben, amely a 8080-as porton válaszol a kérésekre és a "Hello World" szöveget küldi vissza.





//}








