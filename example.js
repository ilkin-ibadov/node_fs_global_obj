const fs = require('fs');
const EventEmitter = require('events');
const emitter = new EventEmitter;


emitter.on('fileChecked', (filepath, stats) => {
    if (stats.size >= 100){
        emitter.emit('bigFile', filepath);
    } else {
        console.log('File size is less than 100 bytes.');
    }
});


emitter.on('bigFile', (filePath) => {
    fs.copyFile(filePath, 'bigFile.txt', (err) => {
        if (err) throw err;
        console.log('File copied');
        emitter.emit('fileCopied', filePath);
    });
});


emitter.on('fileCopied', (filePath) => {
    fs.unlink(filePath, (err) => {
        if (err) throw err;
        console.log('File deleted');
    });
});

fs.stat('start.txt', (err, stats) => {
    if (err) throw err;
    console.log('File infos: ', stats)
    emitter.emit('fileChecked', 'start.txt', stats);
});