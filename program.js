/* Hello World */
// console.log("HELLO WORLD");


/* Baby steps */
// if (process.argv.length < 3) {
    // return -1;
// }

// let sum = 0;
// for (let i = 2; i < process.argv.length; i++) {
    // sum += Number(process.argv[i]);
// }
// console.log(sum);
// return sum;


/* My First I/O! */
// if (process.argv.length < 3) {
    // return -1;
// }

// let fs = require('fs');
// let fileBuf = fs.readFileSync(process.argv[2]);
// let numOfLines = fileBuf.toString().split('\n').length - 1;
// console.log(numOfLines);
// return numOfLines;


/* My First Async I/O! */
// if (process.argv.length < 3) {
    // return -1;
// }

// let fs = require('fs');
// let fileBuf = fs.readFile(process.argv[2], 'utf8', function (err, data) {
    // if (err) {
        // return console.log(err);
    // }    
    // let numOfLines = data.split('\n').length - 1;
    // console.log(numOfLines);
// });


/* Filtered LS */
// if (process.argv.length < 4) {
    // return -1;
// }

// let fs = require('fs');
// let path = require('path');

// let directory = process.argv[2];
// let extWithDot = '.' + process.argv[3];

// fs.readdir(directory, function (err, files) {
    // if (err) return console.error(err);
    // files.forEach(function (file){
        // if (path.extname(file) === extWithDot) {
            // console.log(file);
        // }
    // });
// });


/* Make It Modular */
// if (process.argv.length < 4) {
    // return -1;
// }

// let mymodule = require('./mymodule');

// let directory = process.argv[2];
// let extWithoutDot = process.argv[3];

// let dealWithFilteredFileListCallBack = function (err, files) {
    // if (err) return console.error(err);    
    // files.forEach(function (file){        
        // console.log(file);        
    // });
// }

// mymodule(directory, extWithoutDot, dealWithFilteredFileListCallBack);


/* HTTP Client */
// if (process.argv.length < 3) {
    // return -1;
// }

// let http = require('http');

// let urlToGo = process.argv[2];

// http.get(urlToGo, function (response) {
    // response.setEncoding('utf8');    
    // response.on('data', console.log);
    // response.on('error', console.error);
// }).on('error', console.error);


/* HTTP Collect, v1*/
// if (process.argv.length < 3) {
    // return -1;
// }

// let http = require('http');
// let bl = require('bl');

// let urlToGo = process.argv[2];

// http.get(urlToGo, function (response) {
    // response.pipe(bl(function (err, data) {
        // if (err) {
            // return console.error(err);
        // }
        // let dataStr = data.toString();
        // console.log(dataStr.length);
        // console.log(dataStr);
    // }));    
// }).on('error', console.error);


/* HTTP Collect, v2*/
// if (process.argv.length < 3) {
    // return -1;
// }

// let http = require('http');

// let urlToGo = process.argv[2];

// http.get(urlToGo, function (response) {
    // let strToReturn = '';
    // response.setEncoding('utf8');    
    // response.on('data', (data) => strToReturn += data);
    // response.on('error', console.error);
    // response.on('end', () => {
        // console.log(strToReturn.length);
        // console.log(strToReturn);
    // });
// }).on('error', console.error);


/* HTTP Collect, v3*/
// if (process.argv.length < 3) {
    // return -1;
// }

// let http = require('http');
// let concat = require('concat-stream');

// let urlToGo = process.argv[2];

// http.get(urlToGo, function (response) {
    // response.pipe(concat(function (data) {
        // let dataStr = data.toString();
        // console.log(dataStr.length);
        // console.log(dataStr);
    // }));    
// }).on('error', console.error);


/* Juggling Async */
// if (process.argv.length < 3) {
    // return -1;
// }

// let http = require('http');

// let urlsToGo = [];
// for (let i = 2; i < process.argv.length; i++) {
    // urlsToGo.push(process.argv[i]);
// }

// let isResponseEnd = true;
// while (urlsToGo.length > 0) {
    // if (isResponseEnd) {
        // isResponseEnd = false;        
        // let urlToGo = urlsToGo.shift();        
        // http.get(urlToGo, function (response) {
            // let strToReturn = '';
            // response.setEncoding('utf8');
            // response.on('data', (data) => {
                // strToReturn += data;
                // console.log(data);
            // });
            // response.on('error', (err) => {
                // console.error(err);
                // isResponseEnd = true;
            // });
            // response.on('end', () => {               
                // isResponseEnd = true;
            // });
        // }).on('error',(err) => {            
            // console.error(err);
            // isResponseEnd = true;
        // });
    // }    
// }


/* Time Server */
// if (process.argv.length < 3) {
    // return -1;
// }

// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// if (!String.prototype.padStart) {
    // String.prototype.padStart = function padStart(targetLength,padString) {
        // targetLength = targetLength>>0; //truncate if number or convert non-number to 0;
        // padString = String((typeof padString !== 'undefined' ? padString : ' '));
        // if (this.length > targetLength) {
            // return String(this);
        // }
        // else {
            // targetLength = targetLength-this.length;
            // if (targetLength > padString.length) {
                // padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            // }
            // return padString.slice(0,targetLength) + String(this);
        // }
    // };
// }

// let portToListen = Number(process.argv[2]);

// let net = require('net');
// let server = net.createServer(function (socket) {
    // let date = new Date();
    // let year = date.getFullYear();
    // let month = date.getMonth();     // starts at 0
    // let day = date.getDate();      // returns the day of month
    // let hour = date.getHours();
    // let minute = date.getMinutes();
    // let time = year + '-' + (month + 1).toString().padStart(2, '0') + '-' + day.toString().padStart(2, '0') + ' ' + hour.toString().padStart(2, '0') + ':' + minute.toString().padStart(2, '0') + '\n'; 
    // socket.end(time);
// });
// server.listen(portToListen);


/* HTTP File Server */
// if (process.argv.length < 4) {
    // return -1;
// }

// let portToListen = Number(process.argv[2]);
// let fileToRequest = process.argv[3];

// let http = require('http');
// let fs = require('fs');

// let server = http.createServer(function (req, res) {
    // res.writeHead(200, { 'content-type': 'text/plain' });
    // let srcStream = fs.createReadStream(fileToRequest);
    // srcStream.pipe(res);
// });
// server.listen(portToListen);


/* HTTP Uppercaserer */
// if (process.argv.length < 3) {
    // return -1;
// }

// let portToListen = Number(process.argv[2]);

// let http = require('http');
// let map = require('through2-map');

// let server = http.createServer(function (req, res) {
    // res.writeHead(200, { 'content-type': 'text/plain' });
    // if (req.method !== 'POST') {
        // return res.end('send me a POST\n');
    // }
    // req.pipe(map(function (chunk) {
        // return chunk.toString().toUpperCase();
    // })).pipe(res);    
// });
// server.listen(portToListen);


/* HTTP JSON API Server */
if (process.argv.length < 3) {
    return -1;
}

let portToListen = Number(process.argv[2]);

let http = require('http');
let url = require('url');

let server = http.createServer(function (req, res) {    
    if (req.method !== 'GET') {
        res.writeHead(200, { 'content-type': 'text/plain' });
        return res.end('send me a GET\n');
    }
    
    let q = url.parse(req.url, true);
    let isoTimeStr = q.query.iso;

    let date = new Date();
    date.setFullYear(Number(isoTimeStr.substr(0, 4)));
    date.setMonth(Number(isoTimeStr.substr(5, 2)) - 1);
    date.setDate(Number(isoTimeStr.substr(8, 2)));
    date.setHours(Number(isoTimeStr.substr(11, 2)) - date.getTimezoneOffset() / 60);
    date.setMinutes(Number(isoTimeStr.substr(14, 2)));
    date.setSeconds(Number(isoTimeStr.substr(17, 2)));
    date.setMilliseconds(Number(isoTimeStr.substr(20, 3)));
 
    if (q.pathname === '/api/unixtime') {
        res.writeHead(200, { 'content-type': 'application/json' });
        let objToReturn = {
            'unixtime': date.getTime()
        }
        res.end(JSON.stringify(objToReturn));
    } else if (q.pathname === '/api/parsetime') {
        res.writeHead(200, { 'content-type': 'application/json' });        
        let objToReturn = {
            'hour': date.getHours(),
            'minute': date.getMinutes(),
            'second': date.getSeconds()
        }
        res.end(JSON.stringify(objToReturn));
    } else {
        res.writeHead(404);
        res.end();
    }
});
server.listen(portToListen);