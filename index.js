const express = require('express');
const http = require('http');
const path = require('path');

let app = express();
let server = http.createServer(app);

app.get('/post-checklist', function(req, res) {
    console.log('Checklist sent');
});

app.get('/checklist', function(req,res,html) {
    console.log('checklist');
    res.sendFile(path.join(__dirname, './checklist/checklist.html'));
});

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, './index.html'));
});

server.listen(3030, function() {
    console.log('Server listening to port 3030');
});