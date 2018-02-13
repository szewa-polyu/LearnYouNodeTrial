let fs = require('fs');
let path = require('path');

module.exports = getFilesByExt;

function getFilesByExt(dir, extWithoutDot, callback) {
    let extWithDot = '.' + process.argv[3];
    fs.readdir(dir, function (err, files) {
        if (err) {
            return callback(err);
        } else {
            let filteredFiles = files.filter(file => path.extname(file) === extWithDot);
            callback(null, filteredFiles);            
        }
    });    
}