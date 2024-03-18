const express = require('express');
const http = require('http');
const path = require('path');

const saveChecklist = require('./checklist/save_checklist');

let app = express();
let server = http.createServer(app);

server.listen(3030, function() {
    console.log('O servidor já pode ser acessado em http://localhost:3030');
});

//Bodyparser
    app.use(express.urlencoded({extended: false}))
    app.use(express.json());

//Bootstrap
    app.use('/css', express.static('./bootstrap/css'));
    app.use('/js', express.static('./bootstrap/js'));
    app.use('/icon-font', express.static('./node_modules/bootstrap-icons/font'));

//Express
    app.use(express.static(path.join(__dirname, './public')));

//Rotas
app.post('/save-checklist', function(req, res) {
    res.send(req.body.datadia);
    console.log(req);
});

app.get('/checklist', function(req,res,html) {
    console.log('checklist');
    res.sendFile(path.join(__dirname, './checklist/checklist.html'));
});

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, './index.html'));
});